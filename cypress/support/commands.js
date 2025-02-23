import headerContainerPage from "../PageObjects/headerContainerPage";
import inventoryPage from '../PageObjects/inventoryPage';

Cypress.Commands.add('checkURLInclude', (path) => {
    cy.url().should('include', path)
  })

Cypress.Commands.add('addItemToCart', () => {
    inventoryPage.getAddToCartSauceLabsBackpackBtn().click();
});

Cypress.Commands.add('checkCartCounter', (value) => {
    headerContainerPage.getShoppingCartBadge().should('have.html', value);
});

Cypress.Commands.add('opeShoppingCart', () => {
   headerContainerPage.getShoppingcartLinkBtn().click();
   cy.checkURLInclude('/cart.html');
});

Cypress.Commands.add('getDataTest', (dataTestSelector) => {
    cy.get(`[data-test="${dataTestSelector}"]`)
});