import { test } from '../fixtures/screenA';

//
//

test('main workflow', async ({ screenA }) => {
  await screenA.goto();
});
