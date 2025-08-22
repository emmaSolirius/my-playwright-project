import { expect, Page, test } from '@playwright/test';
import LandingPage from './pages/landingPage';
import DoesEmployeeWorkPage from './pages/doesEmployeeWorkPage';
import doesEmployeeWorkPage_content from './content/doesEmployeeWorkPage_content';
import HolidayEntitlementPage from './pages/holidayEntitlementPage';
import holidayEntitlementPage_content from './content/holidayEntitlement';
import NumberOfDaysPage from './pages/numberOfDaysPage';
import WorkOutHolidayPage from './pages/workOutHolidayPage';
import workOutHolidayPage_content from './content/workOutHolidayPage_content';
import CyaPage from './pages/cyaPage';

test(`Page object model happy path for second test`, async ({ page }): Promise<void> => {
    const landingPage: LandingPage = new LandingPage();
    await landingPage.checkPageLoads(page);
    await landingPage.continueOn(page);

    const doesEmployeeWorkPage: DoesEmployeeWorkPage = new DoesEmployeeWorkPage();
    await doesEmployeeWorkPage.checkPage(page);
    await doesEmployeeWorkPage.continueOn(page);
    await doesEmployeeWorkPage.selectRadioOption(page, doesEmployeeWorkPage_content.radioText2);

    const holidayEntitlementPage: HolidayEntitlementPage = new HolidayEntitlementPage();
    await holidayEntitlementPage.checkPage(page);
    await holidayEntitlementPage.selectRadioOption(page, holidayEntitlementPage_content.radioText1);
    await holidayEntitlementPage.continueOn(page);

    const workOutHolidayPage: WorkOutHolidayPage = new WorkOutHolidayPage();
    await workOutHolidayPage.checkPage(page);
    await workOutHolidayPage.selectRadioOption(page, workOutHolidayPage_content.radioText1);
    await workOutHolidayPage.continueOn(page);

    const numberOfDaysPage: NumberOfDaysPage = new NumberOfDaysPage();
    await numberOfDaysPage.checkPage(page);
    await numberOfDaysPage.enterText(page, '5');
    await numberOfDaysPage.continueOn(page);

    const cyaPage: CyaPage = new CyaPage();
    await cyaPage.checkPage(page);
});
