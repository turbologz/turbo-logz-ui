export const navigateToEditor = () => cy.visit('/projects/bla/sessions/test');

export const editor = () => cy.get('.monaco-editor');

export const editorTextAreaValue = () => cy.get('.editor-container textarea');
