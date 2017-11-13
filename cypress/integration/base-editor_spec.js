describe('Base editor loading', function() {
  it('should ensure the editor loads', () => {
    // https://on.cypress.io/visit
    cy.visit('http://localhost:3000');

    // Here we've made our first assertion using a '.should()' command.
    // An assertion is comprised of a chainer, subject, and optional value.

    // https://on.cypress.io/should
    // https://on.cypress.io/and

    // https://on.cypress.io/title
    cy.title().should('include', 'Eezy Editor');
    //   ↲               ↲            ↲
    // subject        chainer      value
  });
});
