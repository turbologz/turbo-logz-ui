export const editor = () => cy.get('.editor-container');

export const directories = () => cy.get('ul.node-directory');

export const files = () => cy.get('li div.node-file');

export const rightClickFile = (item: string) => files().contains(item).trigger('contextmenu');

export const rightClickDirectory = (item: string) => directories().contains(item).trigger('contextmenu');

export const clickDirectory = (item: string) => directories().contains(item).click();

export const totalDirectories = () => directories().its('length');

export const totalFiles = () => files().its('length');

export const getFileContextMenuOptions = () => cy.get('ul li a');

export const openCreateFileModal = () => cy.get('ul li a').contains('Create File').click();
