///<reference types="cypress"/>

describe('Settings Page', () => {
    it('Loginapi', () => {
        // cy.intercept('GET', 'https://api.realworld.io/api/user').as('logged')
        cy.apiLogIn('http://localhost:4200/settings')
        cy.contains('h1', 'Your Settings')
        // cy.get('.col-md-6').within(() => {
        //     cy.get('input:first').should('have.attr', 'placeholder', 'URL of profile picture')
        //     cy.get('input:last').should('have.attr', 'placeholder', 'New Password')

        // })
        const placeholders = ['URL of profile picture', 'Username', 'Email', 'New Password']
        cy.get('input').each((input, index) => {
            cy.wrap(input).should('have.attr', 'placeholder', placeholders[index])
          })
        cy.get(':nth-child(3) > .form-control').should('have.attr', 'placeholder', 'Short bio about you')
        cy.get('.btn')
           .eq([0])
           .should('contain', ' Update Settings ')
        cy.get('.btn')
          .eq([1])
          .should('contain', ' Or click here to logout. ').click()
        cy.url().should('eq', 'http://localhost:4200/')
    })
})