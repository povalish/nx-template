import { device } from 'detox';

//
//

describe('Timer Screen', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('main flow', async () => {
    // see detox docs
  });
});
