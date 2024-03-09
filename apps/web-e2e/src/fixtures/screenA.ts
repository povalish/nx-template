import { test as base } from '@playwright/test';
import { ScreenA } from '../pages/ScreenA';

//
//

type TimerFixtures = {
  screenA: ScreenA;
};

export const test = base.extend<TimerFixtures>({
  // eslint-disable-next-line no-empty-pattern
  screenA: async ({ page }, use) => {
    // Set up the fixture.
    const screenA = new ScreenA(page);

    // Use the fixture value in the test.
    await use(screenA);
  },
});

//
//

export { expect } from '@playwright/test';
