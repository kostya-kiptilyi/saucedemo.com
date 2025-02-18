import {getShoppingCartBadge, getShoppingcartLinkBtn} from "../PageObjects/headerContainerPage";
import{getAddToCartSauceLabsBackpackBtn} from "..//PageObjects/inventoryPage"

Cypress.Commands.add('checkURL', (URL) =>{
    cy.url().should('eq', URL);
});

Cypress.Commands.add('addItemToCart', () => {
    getAddToCartSauceLabsBackpackBtn().click();
});

Cypress.Commands.add('checkCartCounter', (value) => {
    getShoppingCartBadge().should('have.html', value);
});

Cypress.Commands.add('opeShoppingCart', () => {
    getShoppingcartLinkBtn().click();
    cy.checkURL('https://www.saucedemo.com/cart.html');
});