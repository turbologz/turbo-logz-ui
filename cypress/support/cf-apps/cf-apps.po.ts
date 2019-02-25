export const navigateToCfApps = () => cy.visit('/orgs/org1/space1');

export const cfAppsList = () => cy.get('mat-list');

export const cfAppsListItems = () => cfAppsList().find('mat-list-item');

export const cfAppsListLength = () => cfAppsList().find('mat-list-item').its('length');
