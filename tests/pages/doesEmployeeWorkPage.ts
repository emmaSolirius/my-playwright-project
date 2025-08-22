import { Page } from 'playwright';
import {expect} from "@playwright/test";
import doesEmployeeWorkPage_content from '../content/doesEmployeeWorkPage_content';
import axeTest from '../accessibilityTestHelper';

class DoesEmployeeWorkPage {
    private readonly title: string;
    private readonly text: string;

    constructor() {
        this.title = `.govuk-fieldset__heading`
        this.text = `.govuk-main-wrapper`
    }

    async checkPage(page: Page): Promise<void> {
        await page.waitForSelector('h1');
        
        await Promise.all([
            expect(page.locator(this.text)).toContainText(doesEmployeeWorkPage_content.caption),
            expect(page.locator(this.text)).toContainText(doesEmployeeWorkPage_content.pageTitle),
            expect(page.locator(this.text)).toContainText(doesEmployeeWorkPage_content.pText1),
            expect(page.locator(this.text)).toContainText(doesEmployeeWorkPage_content.radioText_yes),
            expect(page.locator(this.text)).toContainText(doesEmployeeWorkPage_content.radioText_yes)
        ]);

        await axeTest(page);
    }

    
    async selectRadioOption(page: Page, label: string): Promise<void> {
        await page.getByLabel(label).click();
    }
    
    async continueOn(page: Page): Promise<void> {
        await page.getByRole("button", { name: "Continue" }).click();
    }

    async checkValidationError(page: Page, expectedError:string): Promise<void> {
        await expect(page.locator('.govuk-error-summary')).toContainText(expectedError);
    }
}
    
export default DoesEmployeeWorkPage;
