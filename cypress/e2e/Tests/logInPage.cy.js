///<reference types="cypress"/>

describe('test', () => {

    beforeEach('Log', () => {
        cy.visit('http://localhost:4200/login')
    })
    it('Login Page Layout', () => {
        cy.contains('h1', 'Sign in')
        cy.contains('Need an account?').should('have.attr', 'href', '/register')
        cy.get('[placeholder="Email"]').should('be.empty')
        cy.get('[placeholder="Password"]').should('be.empty')
        cy.get('[class="btn btn-lg btn-primary pull-xs-right"]').should('be.disabled')
    })
    it('Wrong Credentials', () => {
        cy.get('[placeholder="Email"]').type('test@test.com')
        cy.get('[placeholder="Password"]').type('43563')
        cy.get('[class="btn btn-lg btn-primary pull-xs-right"]').click()
        cy.get('.error-messages').should('contain', 'email or password is invalid')
    })

    it('LogIn Succes', () => {
        cy.get('[placeholder="Email"]').type('test@test.rs')
        cy.get('[placeholder="Password"]').type('123456')
        cy.get('[class="btn btn-lg btn-primary pull-xs-right"]').click()
        cy.url().should('eq', 'http://localhost:4200/')
        cy.contains('Popular Tags')
    })
})