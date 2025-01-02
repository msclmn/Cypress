const NavigationMenu = require('../../../support/lambdaTestPlayground/navigationMenu');
const LoginPage = require('../../../support/lambdaTestPlayground/loginPage');
const MyAccountPage = require('../../../support/lambdaTestPlayground/myAccountPage');

describe('Navigate through the site using the top navigation bar', () => {
  beforeEach(() => {
    NavigationMenu.navigateTo('https://ecommerce-playground.lambdatest.io/');
  });

  it('should navigate to Special page', () => {
    NavigationMenu.clickSpecial();
    cy.url().should('include', '/index.php?route=product/special');
  });

  it('should navigate to Blog page', () => {
    NavigationMenu.clickBlog();
    cy.url().should('include', '/index.php?route=extension/maza/blog/home');
  });

  it('should navigate to Compare page', () => {
    NavigationMenu.clickCompareLink();
    cy.url().should('include', '/index.php?route=product/compare');
  });

  it('should verify logged out user scenario', () => {
    NavigationMenu.hoverMyAccountNav();

    NavigationMenu.isLoginDisplayed().then(loginOption => {
      NavigationMenu.isRegisterDisplayed().then(registerOption => {
        if (loginOption && registerOption) {
          NavigationMenu.clickLoginOptionInMyAccount();
          cy.url().should('include', '/index.php?route=account/login');

          NavigationMenu.hoverMyAccountNav();
          NavigationMenu.clickRegisterOptionInMyAccount();
          cy.url().should('include', '/index.php?route=account/register');
        } else {
          NavigationMenu.hoverMyAccountNav();
          NavigationMenu.clickLogoutOptionInMyAccount();
          NavigationMenu.isLoginDisplayed().should('be.true');
        }
      });
    });
  });

  it('should log in and log out user', () => {
    cy.fixture('lambdatest').then((dataSet) => {
      NavigationMenu.hoverMyAccountNav();
      NavigationMenu.clickLoginOptionInMyAccount();
      LoginPage.sendKeysToLogin(dataSet.textFieldEmailAddress, dataSet.textFieldPassword);
      LoginPage.clickLoginButton();

      MyAccountPage.isMyAccountHeaderDisplayed().should('exist');

      NavigationMenu.hoverMyAccountNav();
      NavigationMenu.clickLogoutOptionInMyAccount();
      MyAccountPage.isAccountLoggedOutTextDisplayed().should('exist');
    });
  });
});
