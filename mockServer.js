const ngApimock= require('ng-apimock')();
const express = require('express');
const app = express();

ngApimock.run({
    src: './mocks/requests',
    outputDir: './tmp/ngApiMock',
    done: function () {
    }
});

app.set('port', parseInt(process.env.PORT) || 4000);

app.use(require('ng-apimock/lib/utils').ngApimockRequest);
app.use('/mocking', express.static('./tmp/ngApimock'));

app.listen(app.get('port'), function () {
    console.log('app running on port', app.get('port'));
});
