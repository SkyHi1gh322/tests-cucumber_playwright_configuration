export class LoginPage {
  constructor(page) {
    this.page = page;
  }

  async navigateToLogin() {
    await this.page.goto('http://localhost:3000/login');
  }

  async login(login, password) {
    await this.page.fill('#login', login);
    await this.page.fill('#password', password);
    await this.page.click('#loginButton');
  }

  async isProtectedPageVisible() {
    return this.page.isVisible('#protected');
  }
}
