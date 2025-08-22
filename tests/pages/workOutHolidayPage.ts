import { Page } from 'playwright';
import {expect} from "@playwright/test";
import workOutHolidayPage_content from '../content/workOutHolidayPage_content';

class WorkOutHolidayPage {
    private readonly url: string;
    private readonly title: string;
    private readonly text: string;

    constructor() {
        this.url = 'https://www.gov.uk/calculate-your-holiday-entitlement/y/regular/days-worked-per-week';
        this.title = `.govuk-fieldset__heading`
        this.text = `.govuk-main-wrapper`
    }

    async checkPage(page: Page): Promise<void> {
        // Navigate to the landing page
        expect(page.url()).toBe(this.url);

        // Check elements of the page
        await Promise.all([
            expect(page.locator(this.text)).toContainText(workOutHolidayPage_content.caption),
            expect(page.locator(this.text)).toContainText(workOutHolidayPage_content.pageTitle),
            expect(page.locator(this.text)).toContainText(workOutHolidayPage_content.radioText1),
            expect(page.locator(this.text)).toContainText(workOutHolidayPage_content.radioText2),
            expect(page.locator(this.text)).toContainText(workOutHolidayPage_content.radioText3),
            expect(page.locator(this.text)).toContainText(workOutHolidayPage_content.radioText4)
        ]);
    }

    
async selectRadioOption(page: Page, label: string): Promise<void> {
        await page.getByLabel(label).click();
    }
    
async continueOn(page: Page): Promise<void> {
        // Click the continue button
        await page.getByRole("button", { name: "Continue" }).click();
    }
}

export default WorkOutHolidayPage;
