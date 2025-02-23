class inventoryPage {

    getInventoryContainer() {
        return cy.getDataTest("inventory-container");
    }

    getAddToCartSauceLabsBackpackBtn() {
        return cy.getDataTest("add-to-cart-sauce-labs-backpack");
    }

    getRemoveSauceLabsBackpackBtn() {
      return cy.getDataTest("remove-sauce-labs-backpack");  
    }

}

export default new inventoryPage();