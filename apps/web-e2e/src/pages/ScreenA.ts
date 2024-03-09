import { Page } from '@playwright/test';

export class ScreenA {
  constructor(public readonly page: Page) {}

  public async goto() {
    await this.page.goto('/');
  }
}
