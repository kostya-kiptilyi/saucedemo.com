import { faker } from '@faker-js/faker';

import { typePassword, typeUserName, clickOnLogInBtn } from "../PageObjects/logInPage";
import {getInventoryContainer, getRemoveSauceLabsBackpackBtn} from "../PageObjects/inventoryPage";
import {getReactBurgerMenuBtn, getShoppingCartBadge} from "../PageObjects/headerContainerPage";
import {getCheckooutBtn, getContinueShoppingBtn} from "../PageObjects/cartPage";
import{getBackToProductsBtn, getCheckoutCompleteContainerBtn, getCheckoutInfoContainer, getCheckoutSummaryContainer, getContinueBtn, getFinishBtn, getFirstNameField, getLastNameField, getPostalCodeField, getSuccessMessage,  } from "../PageObjects/checkoutPage";
import {getLogoutSidebarLinkBtn} from "../PageObjects/menuPage";

const randomFirstName = faker.person.firstName(); 
const randomLastName = faker.person.lastName();
const randomZipCode = faker.address.zipCode();

describe('saucedemo.com', () => {

  before(() => {
    cy.clearAllLocalStorage();
  })
    
  it('Log in', () => {
    // cy.logIn();
    cy.visit('https://www.saucedemo.com/');
    cy.checkURL('https://www.saucedemo.com/');
    typeUserName('standard_user');
    typePassword('secret_sauce');
    clickOnLogInBtn();
  });
   
  it('Check that inventory page is opened', () =>{
    cy.checkURL('https://www.saucedemo.com/inventory.html');
    getInventoryContainer().should('be.visible');
  });

  it('Add item to cart', () => {
   cy.addItemToCart();
  });

  it('Check that the cart counter is set to 1', () => {
    cy.checkCartCounter('1');
  });

  it( 'Remove added item from the inventory list', () =>{
    getRemoveSauceLabsBackpackBtn().click();
  });

  it('Check that the cart counter not exist', () => {
    getShoppingCartBadge().should('not.exist');
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
    getContinueShoppingBtn().click();
    cy.checkURL('https://www.saucedemo.com/inventory.html');  });

  it('Open shopping cart', () => {
    cy.opeShoppingCart();
  });

  it('Click on the checkout btn', () =>{
        getCheckooutBtn().click();
        cy.checkURL('https://www.saucedemo.com/checkout-step-one.html');
  });

  it('Pass checkout first step', () =>{
    getCheckoutInfoContainer().should('be.visible');
    getFirstNameField().type(randomFirstName);
    getLastNameField().type(randomLastName);
    getPostalCodeField().type(randomZipCode);
    getContinueBtn().click();
    cy.checkURL('https://www.saucedemo.com/checkout-step-two.html');
  });

  it('Pass checkout second step', () => {
    getCheckoutSummaryContainer().should('be.visible');
    getFinishBtn().click();
    cy.checkURL('https://www.saucedemo.com/checkout-complete.html');
  });

  it('Verify the display of the success message', () => {
    getCheckoutCompleteContainerBtn().should('be.visible');
    getSuccessMessage().should('be.visible');
  })

  it('Back to inventory list after ordering', () => {
    getBackToProductsBtn().click();
    cy.checkURL('https://www.saucedemo.com/inventory.html');
  });

  it('Open the menu', () => {
    getReactBurgerMenuBtn().click({force: true});
  });

  it('Log out', () =>{
    getLogoutSidebarLinkBtn().click({force: true});
    cy.checkURL('https://www.saucedemo.com/');
  });

});