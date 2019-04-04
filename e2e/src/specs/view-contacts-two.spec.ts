/// <reference path='../../steps.d.ts' />
import {HomePage} from '../pages/home.po';
import {ContactsPage} from '../pages/contacts.po';

const ngapimockid = require('uuid').v4();

Feature('Home');

let homePage;
let contactsPage;

Before(I => {
    homePage = new HomePage(I);
    contactsPage = new ContactsPage(I);
    I.amOnPage('/');
    I.setMockCookie();
});

Scenario('view contacts list with contacts', I => {
    I.selectScenario('contacts', 'success');
    I.see('Simple Example App');
    I.click('View Contacts');
    contactsPage.checkContactsTable();
    I.see(contactsPage.elements.contactsTable);
});
