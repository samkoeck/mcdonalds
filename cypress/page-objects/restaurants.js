let xpath = require('cypress-xpath');

class Restaurants {

    citySearchBox() {
        return cy.xpath('//*[@id="searchbox"]')
    }

};
  export default Restaurants