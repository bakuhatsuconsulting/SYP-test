'use-strict';

/***********************************************************************************************************************************************
 * LOGIN SPEC
 ***********************************************************************************************************************************************
 * @description
 */
describe('Login', function() {
  context('Portal', function() {
    it('Should be able to log into the portal application', function() {
      cy.login('portal')
        .wait(1000)
        .verify('portal');
      });
  });
});


// describe('test', function() {
//   context('Office', function() {
//     it('Should be able to log into the office application', function() {
//       cy.login('office', 'support@office.syp.com', '1234')
//         .wait(1000)
//         .verify('office');
//     });
//   });
// })