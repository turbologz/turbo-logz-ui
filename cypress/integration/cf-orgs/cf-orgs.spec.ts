import { cfOrgsListItems, cfOrgsListLength, navigateToCfOrgs } from '../../support/cf-orgs/cf-orgs.po';

describe('CfOrgs', () => {

  beforeEach(() => {
    cy.fixture('fetch-cf-orgs').as('cfOrgsQuery');

    cy.server();

    localStorage.setItem('user', JSON.stringify({isLoggingIn: false, isLoggedIn: true}));

    cy.route('POST', 'graphql', '@cfOrgsQuery');

    navigateToCfOrgs();
  });

  it('should display a list of organizations', () => {
    cfOrgsListLength().should('eq', 3);
  });

  it('should be able to click an organization', () => {
    cfOrgsListItems().eq(1).click();

    cy.url().should('contain', '/orgs/id2');
  });

});
