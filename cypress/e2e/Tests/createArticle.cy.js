///<reference types="cypress"/>

describe('Create Article', () => {

    it('First Article', () => {
        cy.logIn('test@test.rs', '123456')
        cy.get('[class="ion-compose"]').click()
        // cy.get('.nav-link').contains('New Article').click()
        cy.url().should('eq', 'http://localhost:4200/editor')
        cy.createArticle('Jelena', 'Jankovic', 'Prvi Artikal', 'Art')
        cy.wait(5000)
        cy.url().should('include', 'article')
        cy.wait(5000)
    })
})