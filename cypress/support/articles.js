Cypress.Commands.add('createArticle', (title, description, body, tag) => {
    cy.get('[placeholder="Article Title"]').type(title)
    cy.get('[ng-reflect-name="description"]').type(description)
    cy.get('[placeholder="Write your article (in markdown)"]').type(body)
    cy.get('[placeholder="Enter tags"]').type(tag)
    cy.contains('Publish Article').click()
})