import { Page } from 'playwright';
import {expect} from "@playwright/test";
import axeTest from '../accessibilityTestHelper';
import howManyDaysInTheShiftPatternPage_content from '../content/howManyDaysInTheShiftPatternPage_content';

class HowManyDaysInTheShiftPatternPage {
    private readonly title: string;
    private readonly text: string;

    constructor() {
        this.title = `.govuk-fieldset__heading`
        this.text = `.govuk-main-wrapper`
    }

    async checkPage(page: Page): Promise<void> {
        await page.waitForSelector('h1');
        
        await Promise.all([
            expect(page.locator(this.text)).toContainText(howManyDaysInTheShiftPatternPage_content.caption),
            expect(page.locator(this.text)).toContainText(howManyDaysInTheShiftPatternPage_content.pageTitle),
            expect(page.locator(this.text)).toContainText(howManyDaysInTheShiftPatternPage_content.pText1),
        ]);

        await axeTest(page);
    }

    
async enterText(page: Page, text: string): Promise<void> {
    await page.getByRole('textbox').fill(text);
    }
    
async continueOn(page: Page): Promise<void> {
        // Click the continue button
        await page.getByRole("button", { name: "Continue" }).click();
    }
}

export default HowManyDaysInTheShiftPatternPage;
