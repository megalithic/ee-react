describe('Base editor loading', function() {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should ensure the editor loads', () => {
    cy.title().should('include', 'Eezy Editor');
  });
});
