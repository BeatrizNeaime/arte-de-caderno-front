describe('Login page tests', () => {
    it('should change input value', () => {
        cy.visit('/login')

        /* username */
        cy.get('#username').type('00000000000')
        cy.get('#username').should('have.value', '000.000.000-00')

    })
});
