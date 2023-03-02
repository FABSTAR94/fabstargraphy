describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.fabstargraphy.com/');
    cy.get("a[href='#About']").click();
    cy.scrollTo(0, 1300);
  })
})