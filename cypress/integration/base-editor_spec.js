describe('Base editor loading', function() {
  it('should ensure the editor loads', () => {
    cy.visit('http://localhost:3000');
    cy.title().should('include', 'Eezy Editor');
  });
});
