import { cfAppsListLength, navigateToCfApps } from '../../support/cf-apps/cf-apps.po';

describe('CfApps', () => {

  beforeEach(() => {
    cy.fixture('fetch-cf-apps').as('cfAppsQuery');

    cy.server();

    localStorage.setItem('user', JSON.stringify({isLoggingIn: false, isLoggedIn: true}));

    cy.route('POST', 'graphql', '@cfAppsQuery');

    navigateToCfApps();
  });

  it('should display a list of apps', () => {
    cfAppsListLength().should('eq', 3);
  });

});
