class cartPage {

    getContinueShoppingBtn() {
        return cy.getDataTest("continue-shopping");
    }
    
    getCheckooutBtn() {
        return cy.getDataTest("checkout");
    }

}
export default new cartPage()