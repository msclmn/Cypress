class NavigationMenu {
  constructor() {
    this.locators = {
      navHome: '//span[contains(text(),"Home")]',
      navSpecial: '(//*[contains(@class, "title") and normalize-space(text())="Special"])[2]',
      navBlog: '(//*[contains(@class, "title") and normalize-space(text())="Blog"])[2]',
      navMegaMenu: '//span[contains(text(),"Mega Menu")]',
      navAddOns: '//span[contains(text(),"AddOns")]',
      navMyAccount: '(//span[contains(text(),"My account")])[2]',
      navShopByCategory: '//*[@aria-label="Shop by Category"]',
      buttonAllCategories: '(//button[@class="btn dropdown-toggle" and text()="All Categories"])[1]', 
      buttonSearch: '//button[contains(text(),"Search")]',
      textFieldSearchForProducts: '(//input[@aria-label="Search For Products"])[1]',
      linkCompare: '//a[@aria-label="Compare"]',
      linkWishList: '//a[@aria-label="Wishlist"]',
      linkShoppingCart: '(//a[@href="#cart-total-drawer" and contains(@class, "cart")])[1]',
      optionLoginInMyAccount: '//span[contains(text(),"Login")]',
      optionRegisterInMyAccount: '//span[contains(text(),"Register")]',
      optionDashboardInMyAccount: '//*[contains(@class, "title") and normalize-space(text())="Dashboard"]',
      optionMyOrderInMyAccount: '//*[contains(@class, "title") and normalize-space(text())="My order"]',
      optionReturnInMyAccount: '//*[contains(@class, "title") and normalize-space(text())="Return"]',
      optionMyVoucherInMyAccount: '//*[contains(@class, "title") and normalize-space(text())="My voucher"]',
      optionLogoutInMyAccount: '//*[contains(@class, "title") and normalize-space(text())="Logout"]',
    };
  }

  navigateTo(url) {
    cy.navigateTo(url);
  }

  clickSpecial() {
    cy.clickElement(this.locators.navSpecial);
  }

  clickBlog() {
    cy.xpath(this.locators.navBlog).click();
  }

  clickCompareLink() {
    cy.xpath(this.locators.linkCompare).click();
  }

  hoverMyAccountNav() {
    cy.hover(this.locators.navMyAccount);
  }

  clickLoginOptionInMyAccount() {
    cy.xpath(this.locators.optionLoginInMyAccount).click();
  }

  clickRegisterOptionInMyAccount() {
    cy.xpath(this.locators.optionRegisterInMyAccount).click();
  }

  clickLogoutOptionInMyAccount() {
    cy.clickElement(this.locators.optionLogoutInMyAccount);
  }

  isLoginDisplayed() {
    const isDisplayed = cy.isVisible(this.locators.optionLoginInMyAccount);
    return isDisplayed
  }

  isRegisterDisplayed() {
    const isDisplayed = cy.isVisible(this.locators.optionRegisterInMyAccount);
    return isDisplayed;
  }

  isDashboardDisplayed() {
    return cy.xpath(this.locators.optionDashboardInMyAccount).should('be.visible');
  }

  isLogoutNotDisplayed() {
    return cy.xpath(this.locators.optionLogoutInMyAccount).should('not.be.visible');
  }
}

module.exports = new NavigationMenu();