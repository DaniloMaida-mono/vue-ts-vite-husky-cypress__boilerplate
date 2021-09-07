describe('Main', () => {
    it('should display hello world', () => {
      cy.visit('/')

      cy.contains('#app')
    })
  })