class checkoutPage {

    getCheckoutInfoContainer() {
        return cy.getDataTest("checkout-info-container");
    }

    getFirstNameField() {
        return cy.getDataTest("firstName");
    }

    getLastNameField() {
        return cy.getDataTest("lastName");
    }

    getPostalCodeField() {
        return  cy.getDataTest("postalCode");
    }

    getContinueBtn() {
        return  cy.getDataTest("continue");
    }

    getCheckoutSummaryContainer() {
        return cy.getDataTest("checkout-summary-container");
    }

    getFinishBtn() {
        return cy.getDataTest("finish");
    }

    getCheckoutCompleteContainerBtn() {
        return cy.getDataTest("checkout-complete-container");
    }

    getSuccessMessage() {
        return cy.getDataTest("complete-header").contains('Thank you for your order!');
    }

    getBackToProductsBtn() {
        return cy.getDataTest("back-to-products");
    }

}
export default new checkoutPage();