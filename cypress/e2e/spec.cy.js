describe('saucedemo.com', () => {

  before(() => {
    cy.clearAllLocalStorage();
  })
    
  it('Log in', () => {
    cy.logIn();
  });
   
  it('Check that inventory page is opened', () =>{
    cy.inventoryPageIsOpened();
  });

  it('Add item to cart', () => {
    cy.addItemToCart();
  });

  it('Check that the cart counter is set to 1', () => {
    cy.checkCartCounter('1');
  });

  it( 'Remove added item from the inventory list', () =>{
    cy.removeAddedItemFromInventoryList();
  });

  it('Check that the cart counter not exist', () => {
    cy.cartCountreNotExist();
  });

  it('Add item to cart', () => {
    cy.addItemToCart();
  });

  it('Check that the cart counter is set to 1', () => {
    cy.checkCartCounter('1');
  });

  it('Open shopping cart', () => {
    cy.opeShoppingCart();
  });

  it('Back to inventory list from cart', () =>{
    cy.backToInventoryListFromCart();
  });

  it('Open shopping cart', () => {
    cy.opeShoppingCart();
  });

  it('Click on the checkout btn', () =>{
    cy.clickOnCheckoutBtn();
  });

  it('Pass checkout first step', () =>{
    cy.passCheckoutStepOne();
  });

  it('Pass checkout second step', () => {
    cy.passCheckoutStepSecond();
  });

  it('Verify the display of the success message', () => {
    cy.verifyDisplayOfSuccessMessage();
  })

  it('Back to inventory list after ordering', () => {
    cy.backToInventoryListAfterOrdering()
  });

  it('Open the menu', () => {
    cy.clickOnMenuBtn();
  })

  it('Log out', () =>{
    cy.logOut();
  });

});