import { Page } from 'playwright';
import {expect} from "@playwright/test";
import axeTest from '../accessibilityTestHelper';
import whatWasTheEmployeeEndDatePage_content from '../content/whatWasTheEmployeeEndDatePage_content';

class WhatWasTheEmployeeEndDatePage {
    private readonly title: string;
    private readonly text: string;

    constructor() {
        this.title = `.govuk-fieldset__heading`
        this.text = `.govuk-main-wrapper`
    }

    async checkPage(page: Page): Promise<void> {
        await page.waitForSelector('h1');
        
        await Promise.all([
            expect(page.locator(this.text)).toContainText(whatWasTheEmployeeEndDatePage_content.caption),
            expect(page.locator(this.text)).toContainText(whatWasTheEmployeeEndDatePage_content.pageTitle),
        ]);

        await axeTest(page);
    }

    
    async enterDate(page: Page, day: string, month: string, year: string): Promise<void> {
        await page.getByLabel(whatWasTheEmployeeEndDatePage_content.dayLabel).fill(day);
        await page.getByLabel(whatWasTheEmployeeEndDatePage_content.monthLabel).fill(month);
        await page.getByLabel(whatWasTheEmployeeEndDatePage_content.yearLabel).fill(year);
    }
    
    async continueOn(page: Page): Promise<void> {
        // Click the continue button
        await page.getByRole("button", { name: "Continue" }).click();
    }    

    async checkValidationError(page: Page, expectedError:string): Promise<void> {
        await expect(page.locator('.govuk-error-summary')).toContainText(expectedError);
    }
}

export default WhatWasTheEmployeeEndDatePage;
