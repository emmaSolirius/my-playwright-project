import { Page } from 'playwright';
import {expect} from "@playwright/test";
import axeTest from '../accessibilityTestHelper';
import whenDoesTheLeaveYearStartPage_content from '../content/whenDoesTheLeaveYearStartPage_content';

class WhenDoesTheLeaveYearStartPage {
    private readonly title: string;
    private readonly text: string;

    constructor() {
        this.title = `.govuk-fieldset__heading`
        this.text = `.govuk-main-wrapper`
    }

    async checkPage(page: Page): Promise<void> {
        await page.waitForSelector('h1');
        
        await Promise.all([
            expect(page.locator(this.text)).toContainText(whenDoesTheLeaveYearStartPage_content.caption),
            expect(page.locator(this.text)).toContainText(whenDoesTheLeaveYearStartPage_content.pageTitle),
            expect(page.locator(this.text)).toContainText(whenDoesTheLeaveYearStartPage_content.pText1),
        ]);

        await axeTest(page);
    }

    
    async enterDate(page: Page, day: string, month: string, year: string): Promise<void> {
        await page.getByLabel(whenDoesTheLeaveYearStartPage_content.dayLabel).fill(day);
        await page.getByLabel(whenDoesTheLeaveYearStartPage_content.monthLabel).fill(month);
        await page.getByLabel(whenDoesTheLeaveYearStartPage_content.yearLabel).fill(year);
    }
    
    async continueOn(page: Page): Promise<void> {
        // Click the continue button
        await page.getByRole("button", { name: "Continue" }).click();
    }    

    async checkValidationError(page: Page, expectedError:string): Promise<void> {
        await expect(page.locator('.govuk-error-summary')).toContainText(expectedError);
    }
}

export default WhenDoesTheLeaveYearStartPage;
