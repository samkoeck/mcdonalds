let xpath = require('cypress-xpath');

class Quality {

    meatKnowMoreButton() {
        return cy.xpath('//*[@id="block-mcdo-theme-content"]/section/div[2]/article[1]/a')
    }

    pottatoKnowMoreButton() {
        return cy.xpath('//*[@id="block-mcdo-theme-content"]/section/div[2]/article[2]/a')
    }

    ingredientsKnowMoreButton() {
        return cy.xpath('//*[@id="block-mcdo-theme-content"]/section/div[2]/article[3]/a')
    }

    behindSceneKnowMoreButton() {
        return cy.xpath('//*[@id="block-mcdo-theme-content"]/section/div[2]/article[4]/a')
    }

};
  export default Quality