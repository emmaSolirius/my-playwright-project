import { Page } from 'playwright';
import {expect} from "@playwright/test";
import axeTest from '../accessibilityTestHelper';
import cyaShiftsPage_content from '../content/cyaShiftsPage_content';

class CyaShiftsPage {
    private readonly title: string;
    private readonly text: string;

    constructor() {
        this.title = `.govuk-fieldset__heading`
        this.text = `.govuk-main-wrapper`
    }

    async checkPage(page: Page, expectedEntitlement: string, shiftLength: string): Promise<void> {
        await page.waitForSelector('h1');

        const pText1 = cyaShiftsPage_content.pText1
        .replace('<entitlement>', expectedEntitlement)
        .replace('<shiftLength>', shiftLength);
        await Promise.all([
            expect(page.locator(this.text)).toContainText(cyaShiftsPage_content.caption),
            expect(page.locator(this.text)).toContainText(cyaShiftsPage_content.pageTitle),
            expect(page.locator(this.text)).toContainText(pText1),
            expect(page.locator(this.text)).toContainText(cyaShiftsPage_content.pText2),
            expect(page.locator(this.text)).toContainText(cyaShiftsPage_content.pText3),
            expect(page.locator(this.text)).toContainText(cyaShiftsPage_content.liText1),
            expect(page.locator(this.text)).toContainText(cyaShiftsPage_content.liText2)
        ]);

        await axeTest(page);
    }
}

export default CyaShiftsPage;
