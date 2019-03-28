/// <reference path='../../steps.d.ts' />
import {HomePage} from '../pages/home.po';
import {ContactsPage} from '../pages/contacts.po';

Feature('Home');

let homePage;
let contactsPage;

Before(I => {
  homePage = new HomePage(I);
  contactsPage = new ContactsPage(I);
  I.amOnPage('/');
});

Scenario('view contacts list', I => {
  I.selectScenario('contacts', 'success');
  I.see('Simple Example App');
  I.click('View Contacts');
  contactsPage.checkContactsTable();
});

Scenario('view contacts list when empty', I => {
    I.selectScenario('contacts', 'empty');
    I.see('Simple Example App');
    I.click('View Contacts');
    I.dontSeeElement(contactsPage.elements.contactsTable);
});

