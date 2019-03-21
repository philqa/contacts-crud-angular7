'use strict';
let Helper = codecept_helper;
const axios = require('axios');
const output = require('codeceptjs').output;

class MockHelper extends Helper {

  selectScenario(identifier, scenario) {
    output.print('Selecting mock scenario, id: ' + identifier + ', scenario: ' + scenario);
    return axios.put('http://localhost:4000/ngapimock/mocks', JSON.stringify({
      identifier: identifier,
      scenario: scenario
    })).then(function (response) {
    }).catch(function(error) {
      output.print('Failed to select scenario: ' + error);
    });
  }

}

module.exports = MockHelper;
