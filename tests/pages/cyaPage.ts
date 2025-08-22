import { Page } from 'playwright';
import {expect} from "@playwright/test";
import cyaPage_content from '../content/cyaPage_content';

class CyaPage {
    private readonly url: string;
    private readonly title: string;
    private readonly text: string;

    constructor() {
        this.url = 'https://www.gov.uk/calculate-your-holiday-entitlement/y/regular/days-worked-per-week/full-year/5.0';
        this.title = `.govuk-fieldset__heading`
        this.text = `.govuk-main-wrapper`
    }

    async checkPage(page: Page): Promise<void> {
        // Navigate to the landing page
        expect(page.url()).toBe(this.url);

        // Check elements of the page
        await Promise.all([
            expect(page.locator(this.text)).toContainText(cyaPage_content.caption),
            expect(page.locator(this.text)).toContainText(cyaPage_content.pageTitle),
            expect(page.locator(this.text)).toContainText(cyaPage_content.pText1),
            expect(page.locator(this.text)).toContainText(cyaPage_content.pText2),
            expect(page.locator(this.text)).toContainText(cyaPage_content.liText1),
            expect(page.locator(this.text)).toContainText(cyaPage_content.liText2)
        ]);
    }
}

export default CyaPage;
