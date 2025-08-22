import { test } from '@playwright/test';
import LandingPage from './pages/landingPage';
import DoesEmployeeWorkPage from './pages/doesEmployeeWorkPage';
import doesEmployeeWorkPage_content from './content/doesEmployeeWorkPage_content';
import HolidayEntitlementPage from './pages/holidayEntitlementPage';
import holidayEntitlementPage_content from './content/holidayEntitlement';
import WorkOutHolidayPage from './pages/workOutHolidayPage';
import workOutHolidayPage_content from './content/workOutHolidayPage_content';
import WhenDoesTheLeaveYearStartPage from './pages/whenDoesTheLeaveYearStartPage';
import whenDoesTheLeaveYearStartPage_content from './content/whenDoesTheLeaveYearStartPage_content';
import DoYouWantToCalculateTheHolidayPage from './pages/doYouWantToCalculateTheHolidayPage';
import doYouWantToCalculateTheHolidayPage_content from './content/doYouWantToCalculateTheHolidayPage_content';
import WhatWasTheEmployeeStartDatePage from './pages/whatWasTheEmployeeStartDatePage';
import whatWasTheEmployeeStartDatePage_content from './content/whatWasTheEmployeeStartDatePage_content';
import WhatWasTheEmployeeEndDatePage from './pages/whatWasTheEmployeeEndDatePage';
import whatWasTheEmployeeEndDatePage_content from './content/whatWasTheEmployeeEndDatePage_content';
import HowManyHoursInEachShiftPage from './pages/howManyHoursInEachShiftPage';
import HowManyShiftsWillBeWorkedPerShiftPatternPage from './pages/howManyShiftsWillBeWorkedPerShiftPatternPage';
import HowManyDaysInTheShiftPatternPage from './pages/howManyDaysInTheShiftPatternPage';
import CyaShiftsPage from './pages/cyaShiftsPage';
import CyaPage from './pages/cyaPage';

test(`Assessment 1: Calculate Holiday Entitlement for a full leave year with annualised hours and other options`, async ({ page }): Promise<void> => {
    const landingPage: LandingPage = new LandingPage();
    await landingPage.checkPageLoads(page);
    await landingPage.continueOn(page);

    const doesEmployeeWorkPage: DoesEmployeeWorkPage = new DoesEmployeeWorkPage();
    await doesEmployeeWorkPage.checkPage(page);
    await doesEmployeeWorkPage.selectRadioOption(page, doesEmployeeWorkPage_content.radioText_yes);
    await doesEmployeeWorkPage.continueOn(page);

    const whenDoesTheLeaveYearStartPage: WhenDoesTheLeaveYearStartPage = new WhenDoesTheLeaveYearStartPage();
    await whenDoesTheLeaveYearStartPage.checkPage(page);
    await whenDoesTheLeaveYearStartPage.continueOn(page);
    await whenDoesTheLeaveYearStartPage.checkValidationError(page, whenDoesTheLeaveYearStartPage_content.validationError_notEntered);
    await whenDoesTheLeaveYearStartPage.enterDate(page, '1', '10', '2022');
    await whenDoesTheLeaveYearStartPage.continueOn(page);

    const holidayEntitlementPage: HolidayEntitlementPage = new HolidayEntitlementPage();
    await holidayEntitlementPage.checkPage(page);
    await holidayEntitlementPage.selectRadioOption(page, holidayEntitlementPage_content.radioText_annualisedHours);
    await holidayEntitlementPage.continueOn(page);

    const workOutHolidayPage: WorkOutHolidayPage = new WorkOutHolidayPage();
    await workOutHolidayPage.checkPage(page);
    await workOutHolidayPage.selectRadioOption(page, workOutHolidayPage_content.radioText_fullLeaveYear);
    await workOutHolidayPage.continueOn(page);

    const cyaPage: CyaPage = new CyaPage();
    await cyaPage.checkPage(page, '5.6 weeks');
});

test(`Assessment 2: Calculate Holiday Entitlement for a full leave year with annualised hours and other options`, async ({ page }): Promise<void> => {
    const landingPage: LandingPage = new LandingPage();
    await landingPage.checkPageLoads(page);
    await landingPage.continueOn(page);

    const doesEmployeeWorkPage: DoesEmployeeWorkPage = new DoesEmployeeWorkPage();
    await doesEmployeeWorkPage.checkPage(page);
    await doesEmployeeWorkPage.selectRadioOption(page, doesEmployeeWorkPage_content.radioText_yes);
    await doesEmployeeWorkPage.continueOn(page);

    const whenDoesTheLeaveYearStartPage: WhenDoesTheLeaveYearStartPage = new WhenDoesTheLeaveYearStartPage();
    await whenDoesTheLeaveYearStartPage.checkPage(page);
    await whenDoesTheLeaveYearStartPage.continueOn(page);
    await whenDoesTheLeaveYearStartPage.checkValidationError(page, whenDoesTheLeaveYearStartPage_content.validationError_notEntered);
    await whenDoesTheLeaveYearStartPage.enterDate(page, '1', '10', '2022');
    await whenDoesTheLeaveYearStartPage.continueOn(page);

    const holidayEntitlementPage: HolidayEntitlementPage = new HolidayEntitlementPage();
    await holidayEntitlementPage.checkPage(page);
    await holidayEntitlementPage.selectRadioOption(page, holidayEntitlementPage_content.radioText_shifts);
    await holidayEntitlementPage.continueOn(page);

    const doYouWantToCalculateTheHolidayPage: DoYouWantToCalculateTheHolidayPage = new DoYouWantToCalculateTheHolidayPage();
    await doYouWantToCalculateTheHolidayPage.checkPage(page);
    await doYouWantToCalculateTheHolidayPage.selectRadioOption(page, doYouWantToCalculateTheHolidayPage_content.radioText_startingAndLeavingPartWay);
    await doYouWantToCalculateTheHolidayPage.continueOn(page);

    const whatWasTheEmployeeStartDatePage: WhatWasTheEmployeeStartDatePage = new WhatWasTheEmployeeStartDatePage();
    await whatWasTheEmployeeStartDatePage.checkPage(page);
    await whatWasTheEmployeeStartDatePage.continueOn(page);
    await whatWasTheEmployeeStartDatePage.checkValidationError(page, whatWasTheEmployeeStartDatePage_content.validationError_notEntered);
    await whatWasTheEmployeeStartDatePage.enterDate(page, '5', '12', '2022');
    await whatWasTheEmployeeStartDatePage.continueOn(page);

    const whatWasTheEmployeeEndDatePage: WhatWasTheEmployeeEndDatePage = new WhatWasTheEmployeeEndDatePage();
    await whatWasTheEmployeeEndDatePage.checkPage(page);
    await whatWasTheEmployeeEndDatePage.continueOn(page);
    await whatWasTheEmployeeEndDatePage.checkValidationError(page, whatWasTheEmployeeEndDatePage_content.validationError_notEntered);
    await whatWasTheEmployeeStartDatePage.enterDate(page, '5', '12', '2022');
    await whatWasTheEmployeeEndDatePage.continueOn(page);
    await whatWasTheEmployeeEndDatePage.checkValidationError(page, whatWasTheEmployeeEndDatePage_content.validationError_sameAsStartDate);
    await whatWasTheEmployeeEndDatePage.enterDate(page, '7', '2', '2023');
    await whatWasTheEmployeeEndDatePage.continueOn(page);

    const shiftLength = 8;
    const howManyHoursInEachShiftPage: HowManyHoursInEachShiftPage = new HowManyHoursInEachShiftPage();
    await howManyHoursInEachShiftPage.checkPage(page);
    await howManyHoursInEachShiftPage.enterText(page, shiftLength.toString());
    await howManyHoursInEachShiftPage.continueOn(page);

    const howManyShiftsWillBeWorkedPerShiftPatternPage: HowManyShiftsWillBeWorkedPerShiftPatternPage = new HowManyShiftsWillBeWorkedPerShiftPatternPage();
    await howManyShiftsWillBeWorkedPerShiftPatternPage.checkPage(page);
    await howManyShiftsWillBeWorkedPerShiftPatternPage.enterText(page, '5');
    await howManyShiftsWillBeWorkedPerShiftPatternPage.continueOn(page);

    const howManyDaysInTheShiftPatternPage: HowManyDaysInTheShiftPatternPage = new HowManyDaysInTheShiftPatternPage();
    await howManyDaysInTheShiftPatternPage.checkPage(page);
    await howManyDaysInTheShiftPatternPage.enterText(page, '9');
    await howManyDaysInTheShiftPatternPage.continueOn(page);

    const cyaShiftsPage: CyaShiftsPage = new CyaShiftsPage();
    await cyaShiftsPage.checkPage(page, '3.88', shiftLength.toFixed(1));
});