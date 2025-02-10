import { faker } from '@faker-js/faker';

const randomFirstName = faker.person.firstName(); 
const randomLastName = faker.person.lastName();
const randomZipCode = faker.address.zipCode();

const userName = 'standard_user';
const password = 'secret_sauce';

Cypress.Commands.add('logIn', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.checkURL('https://www.saucedemo.com/');
    cy.get('[data-test="username"]').type(userName);
    cy.get('[data-test="password"]').type(password);
    cy.get('[data-test="login-button"]').click();
});

Cypress.Commands.add('inventoryPageIsOpened', () => {
    cy.checkURL('https://www.saucedemo.com/inventory.html');
    cy.get('[data-test="inventory-container"]').should('be.visible');
});

Cypress.Commands.add('checkURL', (URL) =>{
    cy.url().should('eq', URL);
});

Cypress.Commands.add('addItemToCart', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
});

Cypress.Commands.add('checkCartCounter', (value) => {
    cy.get('[data-test="shopping-cart-badge"]').should('have.html', value);
});

Cypress.Commands.add('removeAddedItemFromInventoryList', () => {
    cy.get('[data-test="remove-sauce-labs-backpack"]').click();
});

Cypress.Commands.add('cartCountreNotExist', () =>{
    cy.get('[data-test="shopping-cart-badge"]').should('not.exist');
});

Cypress.Commands.add('opeShoppingCart', () => {
    cy.get('[data-test="shopping-cart-link"]').click();
    cy.checkURL('https://www.saucedemo.com/cart.html');
});

Cypress.Commands.add('backToInventoryListFromCart', () =>{
    cy.get('[data-test="continue-shopping"]').click();
    cy.checkURL('https://www.saucedemo.com/inventory.html');
});

Cypress.Commands.add('clickOnCheckoutBtn', () => {
    cy.get('[data-test="checkout"]').click();
    cy.checkURL('https://www.saucedemo.com/checkout-step-one.html');
});

Cypress.Commands.add('passCheckoutStepOne', () =>{
    cy.get('[data-test="checkout-info-container"]').should('be.visible');
    cy.get('[data-test="firstName"]').type(randomFirstName);
    cy.get('[data-test="lastName"]').type(randomLastName);
    cy.get('[data-test="postalCode"]').type(randomZipCode);
    cy.get('[data-test="continue"]').click();
    cy.checkURL('https://www.saucedemo.com/checkout-step-two.html');
});

Cypress.Commands.add('passCheckoutStepSecond', () => {
    cy.get('[data-test="checkout-summary-container"]').should('be.visible');
    cy.get('[data-test="finish"]').click();
    cy.checkURL('https://www.saucedemo.com/checkout-complete.html');
});


Cypress.Commands.add('verifyDisplayOfSuccessMessage', () => {
    cy.get('[data-test="checkout-complete-container"]').should('be.visible');
    cy.get('[data-test="complete-header"]').contains('Thank you for your order!').should('be.visible');
});

Cypress.Commands.add('backToInventoryListAfterOrdering', () => {
    cy.get('[data-test="back-to-products"]').click();
    cy.checkURL('https://www.saucedemo.com/inventory.html');
});

Cypress.Commands.add('clickOnMenuBtn', ()=> {
    cy.get('#react-burger-menu-btn').click({force: true});
});

Cypress.Commands.add('logOut', () =>{
    cy.get('[data-test="logout-sidebar-link"]').click({force: true});
    cy.checkURL('https://www.saucedemo.com/');
});