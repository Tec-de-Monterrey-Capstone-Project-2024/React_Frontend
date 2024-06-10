describe('General Navigation and Page Verification', () => {
    before(() => {
      indexedDB.deleteDatabase('firebaseLocalStorageDb');
      cy.clearCookies();
      cy.clearLocalStorage();
      cy.viewport('macbook-16');
      cy.visit('/auth/login');
  
      cy.get('#email').type('a01657142@tec.mx');
      cy.get('#password').type('password');
      cy.get('button[aria-label="login-button"]').click();
      cy.url().should('include', '/dashboard');
    });
  
    const routes = [
      { id: 'agents-link', path: '/agents' },
      { id: 'alerts-link', path: '/alerts' },
      { id: 'inisghts-link', path: '/insights' },
    ];
  
    routes.forEach(route => {
      it(`should navigate to ${route.path} page and verify it opens correctly`, () => {
        cy.get(`#${route.id}`).click();
        cy.url().should('include', route.path);
        
        switch (route.path) {
          case '/agents':
            cy.get('.agents').should('be.visible');
            break;
          case '/alerts':
            cy.get('.alerts-page').should('be.visible');
            break;
          case '/insights':
            cy.get('.insights-page').should('be.visible');
            break;
          default:
            break;
        }
      });
    });
  });
  