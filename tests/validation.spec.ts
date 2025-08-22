import { expect, Page, test } from '@playwright/test';
import LandingPage from './pages/landingPage';
import DoesEmployeeWorkPage from './pages/doesEmployeeWorkPage';
import doesEmployeeWorkPage_content from './content/doesEmployeeWorkPage_content';

test(`Validate hours tests`, async ({ page }): Promise<void> => {
    const landingPage: LandingPage = new LandingPage();
    await landingPage.checkPageLoads(page);
    await landingPage.continueOn(page);

    const doesEmployeeWorkPage: DoesEmployeeWorkPage = new DoesEmployeeWorkPage();
    await doesEmployeeWorkPage.checkPage(page);
    await doesEmployeeWorkPage.continueOn(page);
    await doesEmployeeWorkPage.checkValidationError(page, doesEmployeeWorkPage_content.validationError_notSelected);
});
