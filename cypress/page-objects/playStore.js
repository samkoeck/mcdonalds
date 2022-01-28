let xpath = require('cypress-xpath');

class PlayStore {

    googlePlayStoreButton() {
        return cy.xpath('/html/body/div[1]/div/main/div/div/section/div/div[2]/a[2]/img')
    }

    appleStoreButton() {
        return cy.xpath('/html/body/div[1]/div/main/div/div/section/div/div[2]/a[1]/img')
    }

};
  export default PlayStore