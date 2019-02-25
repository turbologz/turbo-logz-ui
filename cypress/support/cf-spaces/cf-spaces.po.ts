export const navigateToCfSpaces = () => cy.visit('/orgs/org1');

export const cfSpacesList = () => cy.get('mat-list');

export const cfSpacesListItems = () => cfSpacesList().find('mat-list-item');

export const cfSpacesListLength = () => cfSpacesList().find('mat-list-item').its('length');
