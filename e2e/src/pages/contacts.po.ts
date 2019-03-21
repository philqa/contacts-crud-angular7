export class ContactsPage {
  elements = {
    title: '#title',
    contactsTable: '#contacts-table'
  };

  constructor(private I: CodeceptJS.I) {}

  checkContactsTable() {
    this.I.waitForElement(this.elements.contactsTable, 60);
  }

}
