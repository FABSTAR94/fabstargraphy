describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.fabstargraphy.com/');
    cy.get("a[href='#Gallery']").click();
    cy.contains('Landscape').click();
    cy.get('#element3').click();
    cy.get('[alt="bridal falls"]').should('be.visible');
    cy.get('button[class*="SRLCloseButton css-1f0197t"]').click();
    cy.get('button[class*="back-btn"]').click();
  })
})
/*wrote an e2e automated test that clicks on gallery from menu then 
clicks on a Card, clicks on an image to open react lighbox then closes 
it to return to gallery*/