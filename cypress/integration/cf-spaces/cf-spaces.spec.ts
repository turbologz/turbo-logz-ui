import {cfSpacesListLength, navigateToCfSpaces} from "../../support/cf-spaces/cf-spaces.po";

describe('CfSpaces', () => {

  beforeEach(() => {
    cy.fixture('fetch-cf-spaces').as('cfSpacesQuery');

    cy.server();

    localStorage.setItem('user', JSON.stringify({isLoggingIn: false, isLoggedIn: true}));

    cy.route('POST', 'graphql', '@cfSpacesQuery');

    navigateToCfSpaces();
  });

  it('should display a list of spaces', () => {
    cfSpacesListLength().should('eq', 3);
  });

});
