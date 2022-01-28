let xpath = require('cypress-xpath');

class OurMenu {

    // title 

    title() {
        return cy.xpath('//*[@id="block-mcdo-theme-content"]/section/div/h1')
    }

    // left menu
    ourMenuButtonLeftMenu() {
        return cy.xpath('//*[@id="block-mcdo-theme-content"]/section/nav/ul[1]/li/a/span')
    }

    mcMenuButtonLeftMenu() {
        return cy.xpath('//*[@id="block-mcdo-theme-content"]/section/nav/ul[2]/li[1]/a/span')
    }

    burgersButtonLeftMenu() {
        return cy.xpath('//*[@id="block-mcdo-theme-content"]/section/nav/ul[2]/li[2]/a/span')
    }

    momentsButtonLeftMenu() {
        return cy.xpath('//*[@id="block-mcdo-theme-content"]/section/nav/ul[2]/li[3]/a/span')
    }

    happyMealButtonLeftMenu() {
        return cy.xpath('//*[@id="block-mcdo-theme-content"]/section/nav/ul[2]/li[4]/a/span')
    }

    fingerFoodAndSnacksButtonLeftMenu() {
        return cy.xpath('//*[@id="block-mcdo-theme-content"]/section/nav/ul[2]/li[5]/a/span')
    }

    veggieButtonLeftMenu() {
        return cy.xpath('//*[@id="block-mcdo-theme-content"]/section/nav/ul[2]/li[6]/a/span')
    }

    friesSaucesDressingButtonLeftMenu() {
        return cy.xpath('//*[@id="block-mcdo-theme-content"]/section/nav/ul[2]/li[7]/a/span')
    }

    saladsButtonLeftMenu() {
        return cy.xpath('//*[@id="block-mcdo-theme-content"]/section/nav/ul[2]/li[8]/a/span')
    }

    dessertButtonLeftMenu() {
        return cy.xpath('//*[@id="block-mcdo-theme-content"]/section/nav/ul[2]/li[9]/a/span')
    }

    coldDrinksButtonLeftMenu() {
        return cy.xpath('//*[@id="block-mcdo-theme-content"]/section/nav/ul[2]/li[10]/a/span')
    }

    hotDrinksButtonLeftMenu() {
        return cy.xpath('//*[@id="block-mcdo-theme-content"]/section/nav/ul[2]/li[11]/a/span')
    }

    breakfastButtonLeftMenu() {
        return cy.xpath('//*[@id="block-mcdo-theme-content"]/section/nav/ul[2]/li[12]/a/span')
    }



    // right menu
    mcMenuButtonRightMenu() {
        return cy.xpath('//*[@id="block-mcdo-theme-content"]/section/div/ul/li[1]/a/img')
    }

    burgersButtonRightMenu() {
        return cy.xpath('//*[@id="block-mcdo-theme-content"]/section/div/ul/li[2]/a/img')
    }

    momentsButtonRightMenu() {
        return cy.xpath('//*[@id="block-mcdo-theme-content"]/section/div/ul/li[3]/a/img')
    }

    happyMealButtonRightMenu() {
        return cy.xpath('//*[@id="block-mcdo-theme-content"]/section/div/ul/li[4]/a/img')
    }

    fingerFoodAndSnacksButtonRightMenu() {
        return cy.xpath('//*[@id="block-mcdo-theme-content"]/section/div/ul/li[5]/a/img')
    }

    veggieButtonRightMenu() {
        return cy.xpath('//*[@id="block-mcdo-theme-content"]/section/div/ul/li[6]/a/img')
    }

    friesSaucesDressingButtonRightMenu() {
        return cy.xpath('//*[@id="block-mcdo-theme-content"]/section/div/ul/li[7]/a/img')
    }

    saladsButtonRightMenu() {
        return cy.xpath('//*[@id="block-mcdo-theme-content"]/section/div/ul/li[8]/a/img')
    }

    dessertButtonRightMenu() {
        return cy.xpath('//*[@id="block-mcdo-theme-content"]/section/div/ul/li[9]/a/img')
    }

    coldDrinksButtonRightMenu() {
        return cy.xpath('//*[@id="block-mcdo-theme-content"]/section/div/ul/li[10]/a/img')
    }

    hotDrinksButtonRightMenu() {
        return cy.xpath('//*[@id="block-mcdo-theme-content"]/section/div/ul/li[11]/a/img')
    }

    breakfastButtonRightMenu() {
        return cy.xpath('//*[@id="block-mcdo-theme-content"]/section/div/ul/li[12]/a/img')
    }

    // app store buttons
    googlePlayStoreButton() {
        return cy.xpath('/html/body/div[1]/div/main/div/div/section/div/div[2]/a[2]/img')
    }

    appleStoreButton() {
        return cy.xpath('/html/body/div[1]/div/main/div/div/section/div/div[2]/a[1]/img')
    }

};
  export default OurMenu