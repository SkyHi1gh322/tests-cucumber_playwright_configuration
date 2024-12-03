import {Page} from "@playwright/test";

export class LoginPage {
  constructor(private page: Page) {
    this.page = page;
  }

  async navigateToLogin() {
    await this.page.goto('http://localhost:3000/login');
  }

  async login(login: string, password: string) {
    await this.page.fill('#login', login);
    await this.page.fill('#password', password);
    await this.page.click('#loginButton');
  }

  async isProtectedPageVisible() {
    return this.page.isVisible('#protected');
  }
}
