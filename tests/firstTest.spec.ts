import { expect, test } from '@playwright/test';
import { chromium, Browser, Page } from 'playwright';

test('Check start now button works', async ({ page }) => {
    // const browser: Browser = await chromium.launch();
    // const context = await browser.newContext();
    // const page: Page = await context.newPage();

    await page.goto('https://www.gov.uk/calculate-your-holiday-entitlement');
    const titleLocator = page.locator('.govuk-heading-xl');
    await expect(titleLocator).toHaveText('Calculate holiday entitlement');

    const buttonLocator = page.getByRole('button', { name: 'Start now' });
    await buttonLocator.click();

    await expect(page.locator('h1')).toHaveText('Does the employee work irregular hours or for part of the year?');
});
