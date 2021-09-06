describe('Main', () => {
    it('should display hello world', () => {
      cy.visit('/')

      cy.contains('div h1', 'hello world')
    })
  })