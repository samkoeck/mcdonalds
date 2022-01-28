let xpath = require('cypress-xpath');

class MobileApp {

    googlePlayStoreButton() {
        return cy.xpath('//*[@id="block-mcdo-theme-content"]/section/div/div[1]/p[2]/a[2]/img')
    }

    appleStoreButton() {
        return cy.xpath('//*[@id="block-mcdo-theme-content"]/section/div/div[1]/p[2]/a[1]/img')
    }

};
  export default MobileApp