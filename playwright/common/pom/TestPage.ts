// homePage.ts
import { Page, expect, Locator } from '@playwright/test';

export class TestPage {
  readonly page: Page;
  readonly themeDropdownButton: Locator;
  readonly formsLink: Locator;
  readonly layoutLink: Locator;
  readonly email:Locator;
  readonly password:Locator;
  readonly radioButton:Locator;
  readonly rangePicker:Locator;
  readonly datePickerMenu:Locator;
  

  constructor(page: Page) {
    this.page = page;
    this.themeDropdownButton = page.locator('.select-button').first();
    this.formsLink = page.getByText('Forms');
    this.layoutLink = page.getByText('Layout');
    this.email= page.getByPlaceholder("Email");
    this.password= page.getByPlaceholder("Password");
    this.radioButton= page.locator(".inner-circle")
    this.rangePicker= page.getByPlaceholder("Range Picker");
    this.datePickerMenu= page.getByRole('link', { name: 'Datepicker' });
  }

  async goto() {
    // Navigate to your application
    await this.page.goto('http://localhost:4200/pages/iot-dashboard');
  }

  async selectTheme(themeName: string) {
    await this.themeDropdownButton.click();
    await this.page.getByText(themeName).click();
    
  }

  async navigateToFormsLayout() {
    await this.formsLink.click();
    await this.layoutLink.click();
  }

  async fillFormOne(name:string,email:string ){
    const nameInput=  this.page.getByPlaceholder("Jane Doe");
    await nameInput.fill(name);
    await expect(nameInput).toHaveValue(name)
    await this.page.getByPlaceholder("Email").first().fill(email);
    const checkbox= this.page.locator('.custom-checkbox').first();
    await checkbox.click();
    await this.page.locator('form').filter({ hasText: 'Remember meSubmit' }).getByRole('button').click();
  }

  async fillFormTwo(email:string, password:string){
    await this.email.nth(1).fill(email);
    await this.password.first().fill(password);
    await this.radioButton.first().click()
  }

  async clickToDatePickerMenu(){
    
    await this.datePickerMenu.click();
  }

  async enterDatePickerMenu(){
    await this.page.getByText("Datepicker").click()
    await this.page.getByPlaceholder("Form Picker").click();
  }

  async fillDatePicker(day:string, date:string){
    await this.page.getByText(day, {exact: true}).click();
    await expect(this.page.getByPlaceholder("Form Picker").first()).toHaveValue(date);
  }

  async fillRangeDatePicker(rangeOne:string, rangeTwo:string){
    await this.rangePicker.click();
    await this.page.getByRole('textbox', { name: 'Range Picker' }).click({force:true});
    
    

    
    await this.page.getByRole('textbox', { name: 'Range Picker' }).fill(rangeOne);
    await this.page.getByRole('textbox', { name: 'Range Picker' }).fill(rangeTwo);
  }

  async gotoForm(){
    await expect(this.page.getByText("Forms")).toBeVisible();
    await this.page.getByRole('link', { name: 'Forms' }).click();
    await expect(this.page.getByRole('link', { name: 'Form Layouts' })).toContainText("Form Layouts");
    await this.page.waitForTimeout(3000);
    await this.page.getByText('Form Layouts').click({force:true});
  }

  async gotToTooltipSection() {
    
    await this.page.getByText("Modal & Overlays").click();
    await this.page.getByText("Tooltip").click();
  }

  async hoverToTooltip(textTooltip: string) {
    // Hover over the element that triggers the tooltip
    await this.page.getByText("Top").hover();
    await expect(this.page.getByText(textTooltip)).toBeVisible();
  }
}
