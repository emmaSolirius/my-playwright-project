import { expect, Page, test } from '@playwright/test';

test('Calculate Holiday Entitlement for Full Year test', async ({ page }) => {
    await page.goto('https://www.gov.uk/calculate-your-holiday-entitlement');

    await isHeaderDisplayed(page, 'Calculate holiday entitlement');
    await clickButton(page, 'Start now');

    await isHeaderDisplayed(page, 'Does the employee work irregular hours or for part of the year?');
    await clickRadio(page, 'No');
    await clickButton(page, 'Continue');

    await isHeaderDisplayed(page, 'Is the holiday entitlement based on:');
    await clickRadio(page, 'days worked per week');
    await clickButton(page, 'Continue');

    await isHeaderDisplayed(page, 'Do you want to work out holiday:');
    await clickRadio(page, 'for a full leave year');
    await clickButton(page, 'Continue');

    await isHeaderDisplayed(page, 'Number of days worked per week?');
    await enterText(page, '5');
    await clickButton(page, 'Continue');

    await isHeaderDisplayed(page, 'Calculate holiday entitlement: Information based on your answers');
    await expect(page.locator('.summary')).toContainText('28');
});

async function isHeaderDisplayed(page: Page, header: string) {
    const headerLocator = page.locator('h1');
    await expect(headerLocator).toHaveText(header);
}

async function clickButton(page: Page, buttonName: string) {
    await page.getByRole('button', { name: buttonName }).click();
}

async function clickRadio(page: Page, radioLabel: string){
    await page.getByLabel(radioLabel).click();
}

async function enterText(page: Page, text: string){
    await page.getByRole('textbox').fill(text);
}
