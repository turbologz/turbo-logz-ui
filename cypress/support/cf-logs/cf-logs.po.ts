export const navigateToCfLogViewer = () => cy.visit('/orgs/org1/space1/app1');

export const getLogText = () => cy.get('.xterm-helper-textarea');
