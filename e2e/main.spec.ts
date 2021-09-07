describe('Test', () => {
    it('should find app', () => {
      cy.visit('/')
      cy.get('#app')
    })
  })