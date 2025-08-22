import { Page } from 'playwright';
import {expect} from "@playwright/test";
import holidayEntitlementPage_content from '../content/holidayEntitlement';
import axeTest from '../accessibilityTestHelper';

class HolidayEntitlementPage {
    private readonly title: string;
    private readonly text: string;

    constructor() {
        this.title = `.govuk-fieldset__heading`
        this.text = `.govuk-main-wrapper`
    }

    async checkPage(page: Page): Promise<void> {
        await page.waitForSelector('h1');
        
        await Promise.all([
            expect(page.locator(this.text)).toContainText(holidayEntitlementPage_content.caption),
            expect(page.locator(this.text)).toContainText(holidayEntitlementPage_content.pageTitle),
            expect(page.locator(this.text)).toContainText(holidayEntitlementPage_content.pText1),
            expect(page.locator(this.text)).toContainText(holidayEntitlementPage_content.radioText_daysPerWeek),
            expect(page.locator(this.text)).toContainText(holidayEntitlementPage_content.radioText_hoursPerWeek),
            expect(page.locator(this.text)).toContainText(holidayEntitlementPage_content.radioText_annualisedHours),
            expect(page.locator(this.text)).toContainText(holidayEntitlementPage_content.radioText_compressedHours),
            expect(page.locator(this.text)).toContainText(holidayEntitlementPage_content.radioText_shifts)
        ]);

        await axeTest(page);
    }

    
async selectRadioOption(page: Page, label: string): Promise<void> {
        await page.getByLabel(label).click();
    }
    
async continueOn(page: Page): Promise<void> {
        // Click the continue button
        await page.getByRole("button", { name: "Continue" }).click();
    }
}

export default HolidayEntitlementPage;
