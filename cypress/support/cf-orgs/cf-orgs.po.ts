export const navigateToCfOrgs = () => cy.visit('/orgs');

export const cfOrgsList = () => cy.get('mat-list');

export const cfOrgsListItems = () => cfOrgsList().find('mat-list-item');

export const cfOrgsListLength = () => cfOrgsList().find('mat-list-item').its('length');
