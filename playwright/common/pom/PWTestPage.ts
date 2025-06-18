import { expect, type Locator, type Page } from '@playwright/test';

export class PWTestPage {
  readonly page: Page;
  readonly formMenu: Locator;
  readonly formDropdownMenu: Locator;
  readonly formLayout: Locator;
  

  constructor(page: Page) {
    this.page = page;
    this.formMenu= page.getByText("Forms");
    this.formDropdownMenu = page.getByRole('link', { name: 'Forms' });
    this.formLayout= page.getByRole('link', { name: 'Form Layouts' });

    
  }

  async gotoURL(url: string) {
    try {
      await this.page.goto(url, { 
        waitUntil: 'domcontentloaded', // Less strict than networkidle
        timeout: 30000 // Add explicit timeout
      });
    } catch (error) {
      console.error(`Navigation failed for ${url}:`, error);
      throw error;
    }
  }

  async gotoForm(){
    await this.formMenu.click();
    await this.formDropdownMenu.click();
    await expect(this.formLayout).toContainText("Form Layouts");
    await this.page.getByText('Form Layouts').click( {force:true})
  }

  
}