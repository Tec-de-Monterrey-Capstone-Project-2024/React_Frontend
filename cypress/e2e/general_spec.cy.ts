describe('General Navigation and Page Verification', () => {
    beforeEach(() => {
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
      { id: 'account-link', path: '/account' },
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
        case '/account':
            cy.get('.account').should('be.visible');
            break;
          default:
            break;
        }
      });
    });

    it(`should navigate to agents dashboard page and verify it opens correctly`, () => {
        cy.get(`#agents-link`).click();
        cy.url().should('include', "/agents");
        cy.get('.agents').should('be.visible');
        cy.get(`#40d74e54-2e2d-42f2-87f9-96d6d6abd97d`).click();
        cy.url().should('include', "/dashboard/agent/40d74e54-2e2d-42f2-87f9-96d6d6abd97d");
        cy.get('.agent-dashboard').should('be.visible');
    });

    it(`should navigate to add alert page and verify it opens correctly`, () => {
        cy.get(`#alerts-link`).click();
        cy.url().should('include', "/alerts");
        cy.get('.alerts-page').should('be.visible');
        cy.get(`.add-alert-btn`).click()
        cy.url().should('include', "/AddAlert");
    });

    // it(`should navigate to an insight view more page and verify it opens correctly`, () => {
    //     cy.get(`#insights-link`).click();
    //     cy.url().should('include', "/insights");
    //     cy.get('.insights-page').should('be.visible');
    //     cy.get(`.insight-view-more-btn`).click()
    //     cy.url().should('include', "/insights/");
    // });

  });
  