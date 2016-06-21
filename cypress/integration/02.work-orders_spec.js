/***********************************************************************************************************************************************
 * 
 ***********************************************************************************************************************************************
 * @description
 */
describe('Work Orders', function() {
  it('Should create a new Work order', function() {
    cy.login('portal')
      .get('#side-nav a').contains('Create a Work Order')
      .click();

    cy.wait(5000)
  });

  it('Should be able to proceed to step 2 of the work order', function() {
    cy.get('span').contains('2')
      .click();
  });
});