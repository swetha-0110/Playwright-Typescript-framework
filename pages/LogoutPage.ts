import{Page} from '@playwright/test';

export class LogoutPage{
    menuBtn;
    logoutBtn;

  constructor(private page: Page)
  {
   this.menuBtn=page.locator('#react-burger-menu-btn');
   this.logoutBtn=page.locator('[data-test="logout-sidebar-link"]');
  }  

  async Burgermenu()
  {
    await this.menuBtn.click();

  }
  async Logout()
  {
    await this.logoutBtn.click();
  }
}