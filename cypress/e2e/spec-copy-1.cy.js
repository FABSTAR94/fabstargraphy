describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.fabstargraphy.com/');
    cy.get("a[href='#Contact']").click();
    cy.get('#inputName').type('Sample')
    cy.get('#inputEmail').type('Sample123@gmail.com')
    cy.get('#inputMessage').type('Hello, I am interested in working with you')
    cy.contains('Send').click()

  })
})