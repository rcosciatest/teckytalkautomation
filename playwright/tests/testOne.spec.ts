import {test,expect} from '@playwright/test'
import {TestPage} from "../common/pom/TestPage"

test('Testing project', async ({page})=>{
    const testPage = new TestPage(page);
    await testPage.goto();
    
    await testPage.selectTheme("Dark");

    await testPage.navigateToFormsLayout();

    await testPage.fillFormOne("Roberto", "roberto@gmail.com")

    await testPage.fillFormTwo("roberto@gmail.com", "psw")

    await testPage.clickToDatePickerMenu();
    await testPage.fillRangeDatePicker("5", "15")
})
