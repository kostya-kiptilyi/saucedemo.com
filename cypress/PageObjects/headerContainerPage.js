class headercontainerPage {

    getShoppingCartBadge() {
        return cy.getDataTest("shopping-cart-badge");
    }

    getShoppingcartLinkBtn() {
        return cy.getDataTest("shopping-cart-link");
    } 

    getReactBurgerMenuBtn() {
        return cy.get('#react-burger-menu-btn');
    }

}

export default new headercontainerPage();