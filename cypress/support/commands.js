// ***********************************************
// This example commands.js shows you how to
// create the custom command: 'login'.
//
// The commands.js file is a great place to
// modify existing commands and create custom
// commands for use throughout your tests.
//
// You can read more about custom commands here:
// https://on.cypress.io/api/commands
// ***********************************************
//
// Cypress.addParentCommand("login", function(email, password){
//   var email    = email || "joe@example.com"
//   var password = password || "foobar"
//
//   var log = Cypress.Log.command({
//     name: "login",
//     message: [email, password],
//     onConsole: function(){
//       return {
//         email: email,
//         password: password
//       }
//     }
//   })
//
//   cy
//     .visit("/login", {log: false})
//     .contains("Log In", {log: false})
//     .get("#email", {log: false}).type(email, {log: false})
//     .get("#password", {log: false}).type(password, {log: false})
//     .get("button", {log: false}).click({log: false}) //this should submit the form
//     .get("h1", {log: false}).contains("Dashboard", {log: false}) //we should be on the dashboard now
//     .url({log: false}).should("match", /dashboard/, {log: false})
//     .then(function(){
//       log.snapshot().end()
//     })
// })
//
// var env = require('../../config.js');

/**
 * [description]
 * @param  {[type]} app       [description]
 * @param  {[type]} email     [description]
 * @param  {[type]} password) {}          [description]
 * @return {[type]}           [description]
 */
Cypress.addParentCommand("login", function(app, email, password) {
  var env = 'local';

  email = email || 'ken@bakuhatsu.codes';
  password = password || '1234';
  Cypress.config('baseUrl', Cypress.env(env)[app]);
  console.log(Cypress.config('baseUrl'));
  cy.wait(1000)
    .visit(Cypress.env(env)[app]+'/#/login')
    .get('input[name="email"]').type(email)
    .get('input[name="password"]').type(password);

  Cypress.config('baseUrl', null);

  cy.get('button.btn-primary').click();
});


Cypress.addParentCommand('verify', function(app) {
  Cypress.config('baseUrl', Cypress.env('local').platform);

  console.log(Cypress.config());

  cy.window()
      .then(function(win) {
        cy
          .request({method: "GET", url: 'http://api.dev.syp.bakuhatsu.codes/sessions', headers: {'Authorization': 'Bearer '+ win.localStorage.getItem('syp.'+app+'.token')}})
          .then(function(data) {
            expect(data.status).to.equal(200);
          });
      });
})


