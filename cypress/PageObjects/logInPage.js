export const typeUserName = (userName) => cy.get('[data-test="username"]').type(userName);
export const typePassword = (password) => cy.get('[data-test="password"]').type(password);
export const clickOnLogInBtn = () => cy.get('[data-test="login-button"]').click();
