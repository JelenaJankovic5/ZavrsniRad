///<reference types="cypress"/>

describe('Edit Delete Article', () => {

    beforeEach('LogIn Appi', () => {
        cy.apiLogIn('http://localhost:4200/article/Jelena-2194')
    })
    it.only('Edit', () => {
        // cy.apiLogIn('http://localhost:4200/article/Jelena-2194')
        cy.wait(5000)
        cy.contains('h1', 'Jelena')
        cy.get('.btn')
            .eq([0])
            .should('contain', 'Edit Article')
            .click()
        cy.url().should('eq', 'http://localhost:4200/editor/Jelena-2194')

        cy.wait(5000)



        const editBody = {
            "article": {
                "description": "",
                "title": "Jankovic123",
                "body": "",
                "tagList": [

                ]
            }
        }
        console.log(editBody)

        cy.request({
            method: 'POST',
            url: 'https://api.realworld.io/api/articles/',
            body: editBody,
            failOnStatusCode: false
        })
        .its('status')
        .should('eq', 401)

    })
    it('Delete', () => {
        cy.get('.btn')
            .eq([1])
            .should('contain', 'Delete Article')
            .click()
         cy.url().should('eq', 'http://localhost:4200')

    })
})
