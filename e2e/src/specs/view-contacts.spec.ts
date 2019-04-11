/// <reference path='../../steps.d.ts' />
import {HomePage} from '../pages/home.po';
import {ContactsPage} from '../pages/contacts.po';

const ngapimockid = require('uuid').v4();

Feature('Home');

let homePage;
let contactsPage;

Before(async I => {
    homePage = new HomePage(I);
    contactsPage = new ContactsPage(I);
    I.amOnPage('/');
    await I.setMockCookie();
});

Scenario('view contacts list when empty', async I => {
    I.selectScenario('contacts', 'empty');
    I.see('Simple Example App');
    await I.takeScreenshot('home');
    I.click('View Contacts');
    I.dontSeeElement(contactsPage.elements.contactsTable);
});

Scenario('compare home screen', async I => {
   await I.compareImage('home');
});
