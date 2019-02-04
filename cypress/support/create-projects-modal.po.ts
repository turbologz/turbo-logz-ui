export const modal = () => cy.get('mat-dialog-content');

export const nameInput = () => cy.get('input#name');

export const gitUrlInput = () => cy.get('input#git-url');

export const cancelButton = () => cy.get('button#cancel');

export const createButton = () => cy.get('button#create');
