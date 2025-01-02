class MyAccountPage {
    constructor() {
      this.locators = {
        headerMyAccount: '//h2[text()="My Account"]',
        textAccountLoggedout: '//p[text()="You have been logged off your account. It is now safe to leave the computer."]'
      };
    }
  
    isMyAccountHeaderDisplayed() {
      const isDisplayed = cy.isVisible(this.locators.headerMyAccount);
      return isDisplayed
    }

    isAccountLoggedOutTextDisplayed() {
      const isDisplayed = cy.isVisible(this.locators.textAccountLoggedout);
      return isDisplayed;
    }
  }
  
  module.exports = new MyAccountPage();
  