Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

Cypress.Commands.add('acceptCookies', () => {
    cy.get('button[id="acceptCookie"]').click()
})
