Cypress.Commands.add('navigateTo', (url) => {
    try {
      cy.visit(url);
    } catch (error) {
      console.error(`Navigation to ${url} failed:`, error);
    }
  });
  
  Cypress.Commands.add('getTitle', () => {
    try {
      return cy.title();
    } catch (error) {
      console.error('Failed to get title:', error);
      return false;
    }
  });
  
  Cypress.Commands.add('clickElement', (selector) => {
    try {
      cy.xpath(selector).click();
    } catch (error) {
      console.error(`Failed to click on selector ${selector}:`, error);
    }
  });
  
  Cypress.Commands.add('sendKeys', (selector, text) => {
    try {
      cy.get(selector).type(text);
    } catch (error) {
      console.error(`Failed to send keys to ${selector}:`, error);
    }
  });
  
  Cypress.Commands.add('selectOption', (selector, value) => {
    try {
      cy.get(selector).select(value);
      return true;
    } catch (error) {
      console.error(`Failed to select option ${value} in ${selector}:`, error);
      return false;
    }
  });
  
  Cypress.Commands.add('checkElement', (selector) => {
    try {
      cy.get(selector).check();
      return true;
    } catch (error) {
      console.error(`Failed to check ${selector}:`, error);
      return false;
    }
  });
  
  Cypress.Commands.add('uncheckElement', (selector) => {
    try {
      cy.get(selector).uncheck();
      return true;
    } catch (error) {
      console.error(`Failed to uncheck ${selector}:`, error);
      return false;
    }
  });
  
  Cypress.Commands.add('waitForSelector', (selector, waitTime = 30000) => {
    try {
      cy.get(selector, { timeout: waitTime });
      return true;
    } catch (error) {
      console.error(`Failed to wait for selector ${selector}:`, error);
      return false;
    }
  });
  
  Cypress.Commands.add('getText', (selector) => {
    try {
      return cy.get(selector).invoke('text');
    } catch (error) {
      console.error(`Failed to get text of ${selector}:`, error);
      return false;
    }
  });
  
  Cypress.Commands.add('getValue', (selector) => {
    try {
      return cy.get(selector).invoke('val');
    } catch (error) {
      console.error(`Failed to get value of ${selector}:`, error);
      return false;
    }
  });
  
  Cypress.Commands.add('getAttribute', (selector, attribute) => {
    try {
      return cy.get(selector).invoke('attr', attribute);
    } catch (error) {
      console.error(`Failed to get attribute ${attribute} of ${selector}:`, error);
      return false;
    }
  });
  
  Cypress.Commands.add('isVisible', (selector) => {
    try {
      return cy.xpath(selector).should('be.visible');
    } catch (error) {
      console.error(`Failed to check visibility of ${selector}:`, error);
      return false;
    }
  });
  
  Cypress.Commands.add('isNotVisible', (selector, timeout = 30000) => {
    try {
      return cy.get(selector, { timeout }).should('not.be.visible');
    } catch (error) {
      console.error(`Failed to confirm ${selector} is not visible:`, error);
      return false;
    }
  });
  
  Cypress.Commands.add('isEnabled', (selector) => {
    try {
      return cy.get(selector).should('not.be.disabled');
    } catch (error) {
      console.error(`Failed to check enabled state of ${selector}:`, error);
      return false;
    }
  });
  
  Cypress.Commands.add('takeScreenshot', (path) => {
    try {
      cy.screenshot(path);
    } catch (error) {
      console.error(`Failed to take screenshot:`, error);
      return false;
    }
  });
  
  Cypress.Commands.add('dragAndDrop', (sourceSelector, targetSelector) => {
    try {
      cy.get(sourceSelector).drag(targetSelector);
    } catch (error) {
      console.error(`Failed to drag and drop from ${sourceSelector} to ${targetSelector}:`, error);
      return false;
    }
  });
  
  Cypress.Commands.add('hover', (selector) => {
    try {
      cy.xpath(selector).trigger('mouseover');
    } catch (error) {
      console.error(`Failed to hover over ${selector}:`, error);
    }
  });
  
  Cypress.Commands.add('waitForTimeout', (waitTime) => {
    try {
      cy.wait(waitTime);
    } catch (error) {
      console.error(`Failed to wait for timeout of ${waitTime}ms:`, error);
      return false;
    }
  });
  
  Cypress.Commands.add('pressKey', (selector, key) => {
    try {
      cy.get(selector).type(`{${key}}`);
    } catch (error) {
      console.error(`Failed to press key ${key} on ${selector}:`, error);
      return false;
    }
  });
  
  Cypress.Commands.add('reloadPage', () => {
    try {
      cy.reload();
    } catch (error) {
      console.error(`Failed to reload page:`, error);
      return false;
    }
  });
  
  Cypress.Commands.add('goBack', () => {
    try {
      cy.go('back');
    } catch (error) {
      console.error(`Failed to go back:`, error);
      return false;
    }
  });
  
  Cypress.Commands.add('goForward', () => {
    try {
      cy.go('forward');
    } catch (error) {
      console.error(`Failed to go forward:`, error);
      return false;
    }
  });
  
  Cypress.Commands.add('setViewportSize', (width, height) => {
    try {
      cy.viewport(width, height);
    } catch (error) {
      console.error(`Failed to set viewport size:`, error);
      return false;
    }
  });
  
  Cypress.Commands.add('executeScript', (script) => {
    try {
      cy.window().then((win) => {
        return win.eval(script);
      });
    } catch (error) {
      console.error(`Failed to execute script:`, error);
      return false;
    }
  });
  
