Cypress.Commands.add('logIn', (username,password) => {
    cy.visit('http://localhost:4200/login')
    cy.get('[placeholder="Email"]').type(username)
    cy.get('[placeholder="Password"]').type(password)
    cy.get('[class="btn btn-lg btn-primary pull-xs-right"]').click()
})