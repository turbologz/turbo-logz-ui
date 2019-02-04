export const navigateTo = () => cy.visit('/projects');

export const createProjectButton = () => cy.get('button#create-project');

export const projectsList = () => cy.get('mat-list');

export const projectsListItems = () => projectsList().find('h4');

export const projectsListLength = () => projectsList().find('h4').its('length');

export const clickProject = (index: number) => projectsListItems().eq(index).click();

