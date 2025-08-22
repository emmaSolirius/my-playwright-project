import { Page } from 'playwright';
import {expect} from "@playwright/test";
import numberOfDaysPage_content from '../content/numberOfDaysPage_content';

class NumberOfDaysPage {
    private readonly url: string;
    private readonly title: string;
    private readonly text: string;

    constructor() {
        this.url = 'https://www.gov.uk/calculate-your-holiday-entitlement/y/regular/days-worked-per-week/full-year';
        this.title = `.govuk-fieldset__heading`
        this.text = `.govuk-main-wrapper`
    }

    async checkPage(page: Page): Promise<void> {
        // Navigate to the landing page
        expect(page.url()).toBe(this.url);

        // Check elements of the page
        await Promise.all([
            expect(page.locator(this.text)).toContainText(numberOfDaysPage_content.caption),
            expect(page.locator(this.text)).toContainText(numberOfDaysPage_content.pageTitle),
            expect(page.locator(this.text)).toContainText(numberOfDaysPage_content.pText1),
        ]);
    }

    
async enterText(page: Page, text: string): Promise<void> {
    await page.getByRole('textbox').fill(text);
    }
    
async continueOn(page: Page): Promise<void> {
        // Click the continue button
        await page.getByRole("button", { name: "Continue" }).click();
    }
}

export default NumberOfDaysPage;
