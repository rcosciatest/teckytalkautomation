import { test } from '@playwright/test';
import { PWTestPage } from '../common/pom/PWTestPage';
import { TestPage } from '../common/pom/TestPage';

test("Fill user form", async ({page})=>{
    const pwTestPage = new PWTestPage(page);
    const testPage = new TestPage(page);

    await test.step("Go to dashboard page and fill the form", async () => {
        await pwTestPage.gotoURL('/');
        await pwTestPage.gotoForm();
    });
    
    await test.step("Go to forms and fill the form", async () => {
        await pwTestPage.gotoForm();    
    });

    await test.step("Fill forms", async () => {
        await testPage.fillFormOne("Teckytalk Automation", "infoexample@gmail.com");
        await testPage.fillFormTwo("infoexample@gmail.com", "password123");
    });

    await test.step("Handle Date Pickers", async () => {  
        await testPage.clickToDatePickerMenu();
        await testPage.fillRangeDatePicker("Jun 15, 2025", "Jun 20, 2025");
        await pwTestPage.gotoForm();
        await testPage.enterDatePickerMenu();
        await testPage.fillDatePicker("15", "Jun 15, 2025");
    });
    
/*
    await test.step("Handle Tooltip", async () => {
        await testPage.gotToTooltipSection();
        await testPage.hoverToTooltip("This is a tooltip");
    });*/
});