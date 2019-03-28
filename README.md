# Example Angular7 CRUD application with CodeceptJS Mock Tests

Basic Angular7 CRUD application with an ExpressJS back end API using MongoDB created to demonstrate using mocks (via ng-apimock) for CodeceptJS UI testing.

Supporting article: https://phil.qa/article/codeceptjs-mocks

## Prerequisites ##

- Node 8.9+
- npm 5.6.0+
- MongoDB (if you intend to run the back end API)

## Getting Started

```
npm i
npm build
npm start
node mockServer.js or node api/server.js
npm run codecept
```
