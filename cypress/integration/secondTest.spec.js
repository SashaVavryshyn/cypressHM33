
describe('', () => {
 let user;

 before (() => {
   cy.task('newUser').then((newUser) => {
     user = newUser;
   })
  });
  it('', () => {
    cy.visit('https://react-redux.realworld.io/#/register?_k=');
    cy.get(':nth-child(1) > .form-control')
    .type(user.username);
    cy.get(':nth-child(2) > .form-control').type(user.email);
    cy.get(':nth-child(3) > .form-control').type(user.password);
    
    cy.get('.btn').click();

    cy.get(':nth-child(4) > .nav-link').should('contain', user.username);
  })
});