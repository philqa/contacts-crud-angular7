'use strict';
let Helper = codecept_helper;
const axios = require('axios');
const output = require('codeceptjs').output;
const ngapimockid = require('uuid').v4();


class MockHelper extends Helper {

    setMockCookie() {
        this.helpers['Protractor'].browser.manage().addCookie({name: 'ngapimockid', value: ngapimockid}).then(d => {
            this.helpers['Protractor'].browser.manage().getCookies().then(c => {
                // get values
                output.print(c);
                let cookies = c.value;
                for (let k in cookies) {
                    output.print(cookies[k].name);
                }
                return true;
            });
        });

    }

    selectScenario(identifier, scenario) {
        output.print('Selecting mock scenario, id: ' + identifier + ', scenario: ' + scenario + ', ngapimockid: ' + ngapimockid);
        return axios.put('http://localhost:4000/ngapimock/mocks', JSON.stringify({
            identifier: identifier,
            scenario: scenario
        }, {
            headers: {
                'Content-Type': 'application/json',
                'ngapimockid': ngapimockid
            }
        })).then(function (response) {
        }).catch(function (error) {
            output.print('Failed to select scenario: ' + error);
        });
    }

}

module.exports = MockHelper;
