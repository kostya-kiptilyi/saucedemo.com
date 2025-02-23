import { faker } from '@faker-js/faker';

import logInPage from '../PageObjects/logInPage';
import inventoryPage from '../PageObjects/inventoryPage';
import cartPage from '../PageObjects/cartPage';
import menuPage from '../PageObjects/menuPage';
import checkoutPage from '../PageObjects/checkoutPage';
import headerContainerPage from '../PageObjects/headerContainerPage';

const randomFirstName = faker.person.firstName(); 
const randomLastName = faker.person.lastName();
const randomZipCode = faker.address.zipCode();

describe('saucedemo.com', () => {

  before(() => {
    cy.clearAllLocalStorage();
  })
    
  it('Log in', () => {
    cy.visit('/');
    cy.checkURLInclude('/')
    logInPage.setUserName('standard_user');  
    logInPage.setPassword('secret_sauce');
    logInPage.clickOnLogInBtn();
  });
   
  it('Check that inventory page is opened', () =>{
    cy.checkURLInclude('/inventory.html');
    inventoryPage.getInventoryContainer().should('be.visible');
  });

  it('Add item to cart', () => {
   cy.addItemToCart();
  });

  it('Check that the cart counter is set to 1', () => {
    cy.checkCartCounter('1');
  });

  it( 'Remove added item from the inventory list', () =>{
    inventoryPage.getRemoveSauceLabsBackpackBtn().click();
  });

  it('Check that the cart counter not exist', () => {
    headerContainerPage.getShoppingCartBadge().should('not.exist');
  });

  it('Add item to cart', () => {
    cy.addItemToCart();
  });

  it('Check that the cart counter is set to 1', () => {
    cy.checkCartCounter('1');
  });

  it('Open shopping cart', () => {
    cy.opeShoppingCart();
  });

  it('Back to inventory list from cart', () =>{
    cartPage.getContinueShoppingBtn().click();
    cy.checkURLInclude('/inventory.html');  });

  it('Open shopping cart', () => {
    cy.opeShoppingCart();
  });

  it('Click on the checkout btn', () =>{
      cartPage.getCheckooutBtn().click();
      cy.checkURLInclude('/checkout-step-one.html');
  });

  it('Pass checkout first step', () =>{
    checkoutPage.getCheckoutInfoContainer().should('be.visible');
    checkoutPage.getFirstNameField().type(randomFirstName);
    checkoutPage.getLastNameField().type(randomLastName);
    checkoutPage.getPostalCodeField().type(randomZipCode);
    checkoutPage.getContinueBtn().click();
    cy.checkURLInclude('/checkout-step-two.html');
  });

  it('Pass checkout second step', () => {
    checkoutPage.getCheckoutSummaryContainer().should('be.visible');
    checkoutPage.getFinishBtn().click();
    cy.checkURLInclude('/checkout-complete.html');
  });

  it('Verify the display of the success message', () => {
    checkoutPage.getCheckoutCompleteContainerBtn().should('be.visible');
    checkoutPage.getSuccessMessage().should('be.visible');
  })

  it('Back to inventory list after ordering', () => {
    checkoutPage.getBackToProductsBtn().click();
    cy.checkURLInclude('/inventory.html');
  });

  it('Open the menu', () => {
   headerContainerPage.getReactBurgerMenuBtn().click({force: true});
  });

  it('Log out', () => {
    menuPage.getLogoutSidebarLinkBtn().click({force: true});
    cy.checkURLInclude('/');
  });

});