import { Page } from 'playwright';
import {expect} from "@playwright/test";
import doesEmployeeWorkPage_content from '../content/doesEmployeeWorkPage_content';

class DoesEmployeeWorkPage {
    private readonly url: string;
    private readonly title: string;
    private readonly text: string;

    constructor() {
        this.url = 'https://www.gov.uk/calculate-your-holiday-entitlement/y';
        this.title = `.govuk-fieldset__heading`
        this.text = `.govuk-main-wrapper`
    }

    async checkPage(page: Page): Promise<void> {
        // Navigate to the landing page
        expect(page.url()).toBe(this.url);

        // Check elements of the page
        await Promise.all([
            expect(page.locator(this.text)).toContainText(doesEmployeeWorkPage_content.caption),
            expect(page.locator(this.text)).toContainText(doesEmployeeWorkPage_content.pageTitle),
            expect(page.locator(this.text)).toContainText(doesEmployeeWorkPage_content.pText1),
            expect(page.locator(this.text)).toContainText(doesEmployeeWorkPage_content.radioText1),
            expect(page.locator(this.text)).toContainText(doesEmployeeWorkPage_content.radioText1)
        ]);
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
