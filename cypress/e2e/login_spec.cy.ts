describe('Login Page', () => {
    beforeEach(() => {
        indexedDB.deleteDatabase('firebaseLocalStorageDb');
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.viewport('macbook-16');
        cy.visit('/');
    });
  
    it('should display the login form', () => {
      cy.get('form').should('be.visible');
    });
  
    it('should login successfully with valid credentials', () => {
      cy.get('#email').type('a01657142@tec.mx');
      cy.get('#password').type('password');
      cy.get('button[aria-label="login-button"]').click();
  
      cy.url().should('include', '/dashboard');
    });
  
    it('should show error message with invalid credentials', () => {
      cy.get('#email').type('invalid_email@domain.com');
      cy.get('#password').type('invalid_password');
      cy.get('button[aria-label="login-button"]').click();
  
      cy.get('.text-red-500').should('be.visible')
        .and('contain', 'Invalid Credentials, try again.');
    });
  });
  