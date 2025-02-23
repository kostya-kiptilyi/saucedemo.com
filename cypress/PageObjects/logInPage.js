class logInPage {

    setUserName(userName) {
        return cy.getDataTest("username").type(userName);
    }

    setPassword(password) {
        return cy.getDataTest("password").type(password);
    }

    clickOnLogInBtn() {
        return cy.getDataTest("login-button").click();
    }

}

export default new logInPage();