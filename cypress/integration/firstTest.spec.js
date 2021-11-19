describe('', () => {
  it('', () => {
    cy.visit('https://react-redux.realworld.io/#/login?_k');
    cy.get(':nth-child(1) > .form-control')
    .type('sasha@gmail.com');
    cy.get(':nth-child(2) > .form-control')
    .type('Sasha1!');
    cy.get('.btn')
    .click();

    cy.get(':nth-child(4) > .nav-link')
    .should('contain', 'sasha');
  })
});