///<reference types="cypress"/>

describe('Favorite Article', () =>  {
   it('Heart', () => {
    cy.logIn('test@test.rs', '123456')
    cy.get(':nth-child(4) > .nav-link').click()
        cy.contains('My Posts').should('be.visible')
        cy.wait(5000)
      //   cy.get('.btn').children([0]).click()
        cy.get('.pull-xs-right > .btn').children([0]).click()
        cy.wait(5000)
        cy.contains('Favorited Posts').click()
        cy.url().should('include', 'favorites')
        cy.get('.pull-xs-right > .btn').children([0]).click()
        cy.wait(5000)
        cy.reload()
        cy.wait(5000)
        cy.contains('No articles are here... yet.').should('be.visible')
        

   }) 




})