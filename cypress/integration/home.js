import Homepage from '../page-objects/homepage.js';
import Navbar from '../page-objects/navbar.js';
import Restaurants from '../page-objects/restaurants.js';
import OurMenu from '../page-objects/ourMenu.js';

const homePage = new Homepage()
const navBar = new Navbar();
const restaurants = new Restaurants();
const ourMenu = new OurMenu();

beforeEach(() => {
  homePage.visitHomePage();
  homePage.getAgreeAllCookiesButton().click()
})

describe('check navbar links', () => {
    it('visit mcdo website check werken bij link', () => {
      navBar.workAtMcButton().click()
      navBar.pageTitle().contains("Werken bij McDonald’s");
    })

    it('visit mcdo website check over ons link', () => {
      navBar.aboutUsButton().click();
      navBar.pageTitle().contains("Wie zijn wij?");
    })

    it('visit mcdo website check contact link', () => {
      navBar.contactButton().click();
      navBar.pageTitle().contains("Contact");
    })

    it('visit mcdo website check our menu link', () => {
      navBar.ourMenuButton().click();
      ourMenu.title().contains("Ons menu");
    })

    it('visit mcdo website check experience link', () => {
      navBar.experienceButton().click();
      navBar.pageTitle().contains("McDo Ervaring");
    })

    it('visit mcdo website check mobile app link', () => {
      navBar.mobileAppButton().click();
      navBar.pageTitle().contains("MyMcDonald’s® Je liefde voor McDo brengt meer op!");
    })

    it('visit mcdo website check engagement link', () => {
      navBar.qualityButton().click();
      navBar.pageTitle().contains("Onze ingrediënten hebben geen geheimen!");
    })

    it('visit mcdo website check restaurants link', () => {
      navBar.restaurantsButton().click();
      restaurants.citySearchBox().should('be.visible')
    })

  })