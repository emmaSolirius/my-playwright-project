import { Page } from 'playwright';
import {expect} from "@playwright/test";
import cyaPage_content from '../content/cyaPage_content';
import axeTest from '../accessibilityTestHelper';

class CyaPage {
    private readonly title: string;
    private readonly text: string;

    constructor() {
        this.title = `.govuk-fieldset__heading`
        this.text = `.govuk-main-wrapper`
    }

    async checkPage(page: Page, expectedEntitlement: string): Promise<void> {
        await page.waitForSelector('h1');

        const pText1 = cyaPage_content.pText1.replace('<entitlement>', expectedEntitlement);
        await Promise.all([
            expect(page.locator(this.text)).toContainText(cyaPage_content.caption),
            expect(page.locator(this.text)).toContainText(cyaPage_content.pageTitle),
            expect(page.locator(this.text)).toContainText(pText1),
            expect(page.locator(this.text)).toContainText(cyaPage_content.pText2),
            expect(page.locator(this.text)).toContainText(cyaPage_content.liText1),
            expect(page.locator(this.text)).toContainText(cyaPage_content.liText2)
        ]);

        await axeTest(page);
    }
}

export default CyaPage;
