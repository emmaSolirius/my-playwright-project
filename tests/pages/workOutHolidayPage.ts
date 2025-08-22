import { Page } from 'playwright';
import {expect} from "@playwright/test";
import workOutHolidayPage_content from '../content/workOutHolidayPage_content';
import axeTest from '../accessibilityTestHelper';

class WorkOutHolidayPage {
    private readonly title: string;
    private readonly text: string;

    constructor() {
        this.title = `.govuk-fieldset__heading`
        this.text = `.govuk-main-wrapper`
    }

    async checkPage(page: Page): Promise<void> {
        await page.waitForSelector('h1');
        
        await Promise.all([
            expect(page.locator(this.text)).toContainText(workOutHolidayPage_content.caption),
            expect(page.locator(this.text)).toContainText(workOutHolidayPage_content.pageTitle),
            expect(page.locator(this.text)).toContainText(workOutHolidayPage_content.radioText_fullLeaveYear),
            expect(page.locator(this.text)).toContainText(workOutHolidayPage_content.radioText_startingPartWay),
            expect(page.locator(this.text)).toContainText(workOutHolidayPage_content.radioText_leavingPartWay),
            expect(page.locator(this.text)).toContainText(workOutHolidayPage_content.radioText_startingAndLeavingPartWay)
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

export default WorkOutHolidayPage;
