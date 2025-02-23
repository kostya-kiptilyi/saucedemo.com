class menuPage {

    getLogoutSidebarLinkBtn() {
       return cy.getDataTest("logout-sidebar-link");
    }

}

export default new menuPage();