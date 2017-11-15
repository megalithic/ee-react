describe('Primary Sidebar Interactions', function() {
  let sidebar;
  let btn;

  beforeEach(() => {
    cy.visit('http://localhost:8000');
    sidebar = cy.get('[data-test-id="primary-sidebar"]').first();
    btn = sidebar.get('.btn#select').first();
  });

  it('should display a tooltip upon sidebar button hovering', () => {
    btn.trigger('mouseover');
    btn
      .get('label')
      .first()
      .should('be.visible');
  });
});
