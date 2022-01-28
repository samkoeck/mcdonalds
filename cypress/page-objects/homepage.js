let xpath = require('cypress-xpath');

class Homepage {

    visitHomePage() {
      cy.visit('https://mcdonalds.be/');
    }

  getAgreeAllCookiesButton() {
    return cy.xpath('//*[@id="onetrust-accept-btn-handler"]')
  }
};
  export default Homepage