let xpath = require('cypress-xpath');

class Navbar {

    workAtMcButton() {
        return cy.xpath('/html/body/div[1]/div/header/nav/div[2]/div[2]/div/div[2]/a[1]')
    }

    aboutUsButton() {
        return cy.xpath('/html/body/div[1]/div/header/nav/div[2]/div[2]/div/div[2]/a[2]')
    }

    contactButton() {
        return cy.xpath('/html/body/div[1]/div/header/nav/div[2]/div[2]/div/div[2]/a[3]')
    }

    ourMenuButton() {
        return cy.xpath('/html/body/div[1]/div/header/nav/div[2]/div[2]/ul/li[1]/a')
    }

    experienceButton() {
        return cy.xpath('/html/body/div[1]/div/header/nav/div[2]/div[2]/ul/li[2]/a')
    }

    mobileAppButton() {
        return cy.xpath('/html/body/div[1]/div/header/nav/div[2]/div[2]/ul/li[3]/a')
    }

    qualityButton() {
        return cy.xpath('/html/body/div[1]/div/header/nav/div[2]/div[2]/ul/li[4]/a')
    }

    engagementButton() {
        return cy.xpath('/html/body/div[1]/div/header/nav/div[2]/div[2]/ul/li[5]/a')
    }

    restaurantsButton() {
        return cy.xpath('/html/body/div[1]/div/header/nav/div[2]/div[2]/ul/li[6]/a')
    }

    pageTitle() {
        return cy.get('#block-mcdo-theme-content > section > h1')
    }

};
  export default Navbar