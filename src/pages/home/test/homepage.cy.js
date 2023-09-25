describe('Home page tests', () => {

    it('should visit home page and render text', () => {
        cy.visit('/');
        cy.contains("Participe!")
    })

    it('should visit login page when clicked', () => {
        cy.visit('/')
        cy.contains("Participe!").click()
        cy.url().should('include', "/login")
    })

});
