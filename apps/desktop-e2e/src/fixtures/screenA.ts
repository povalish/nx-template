import { test as base, ElectronApplication, _electron as electron } from '@playwright/test';
import { findLatestBuild, parseElectronApp } from 'electron-playwright-helpers';
import DesktopPackageJSON from '../../../desktop/package.json';
import { ScreenA } from '../pages/ScreenA';

//
//

let electronApp: ElectronApplication | undefined;

base.beforeAll(async () => {
  const latestBuild = findLatestBuild(`apps/desktop/release/${DesktopPackageJSON.version}/`);
  const appInfo = parseElectronApp(latestBuild);

  electronApp = await electron.launch({
    args: [appInfo.main], // main file from package.json
    executablePath: appInfo.executable, // path to the Electron executable
  });
});

base.afterAll(async () => {
  await electronApp?.close();
});

//
//

type TimerFixtures = {
  screenA: ScreenA;
};

export const test = base.extend<TimerFixtures>({
  // eslint-disable-next-line no-empty-pattern
  screenA: async ({}, use) => {
    const window = await electronApp.firstWindow();

    // Set up the fixture.
    const screenA = new ScreenA(window);

    // Use the fixture value in the test.
    await use(screenA);
  },
});

//
//

export { expect } from '@playwright/test';
