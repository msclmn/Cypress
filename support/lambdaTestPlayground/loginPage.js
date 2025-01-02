class LoginPage {
    constructor() {
      this.locators = {
        textFieldEmailAddress: '//input[@id="input-email"]',
        textFieldPassword: '//input[@id="input-password"]',
        buttonLogin: '//input[contains(@type,"submit") and @value="Login"]',
      };
    }
  
    goTo() {
      cy.navigateTo('https://ecommerce-playground.lambdatest.io/index.php?route=account/login');
    }
  
    sendKeysToLogin(email, password) {
      cy.xpath(this.locators.textFieldEmailAddress).type(email);
      cy.xpath(this.locators.textFieldPassword).type(password);
    }

    sendKeysToEmail(email) {
        cy.xpath(this.locators.textFieldEmailAddress).type(email);;
    }

    sendKeysToPassword(password) {
        cy.xpath(this.locators.textFieldPassword).type(password);
      }
    
  
    clickLoginButton() {
      cy.xpath(this.locators.buttonLogin).click();
    }
  }
  
  module.exports = new LoginPage();
  