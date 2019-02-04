export const navigateToSessions = () => cy.visit('/projects/bla');

export const sessionsList = () => cy.get('mat-list');

export const sessionListItems = () => sessionsList().find('h4');

export const sessionsListLength = () => sessionsList().find('h4').its('length');

export const clickSession = (index: number) => sessionListItems().eq(index).click();

export const clickOptions = (index: number) => cy.get('mat-list-item').eq(index).find('button').click();

export const clickDeleteSession = (index: number) => clickOptions(index).get('.mat-menu-item').eq(0).click();
