# DWP KATA

Express server to solve DWP Kata all end points and instructions are available on /api.

## Given Instructions

“Build an API which calls this API, and returns people who are listed as either living in London, or whose current coordinates are within 50 miles of London. Push the answer to Github, and send us a link.”

## User Stories

**Specified by the kata**

- [x] As a user I should be able to make an api call to fetch all of the users **listed as living in London**.

- [x] As a user I should be able to make an api call to fetch all of the users **whose current coordinates are within 50 miles of London**.

**additional functionality**

- [x] As a user I should be able to make an api call to fetch all of the users whose current coordinates are within a set number of miles from London.

- [x] As a user I should be able to make an api call to /api to receive a list of instructions for the server.

## Dependancies

- [NODE](https://nodejs.org/en/) - JavaScript runtime built on [Chrome’s V8 JavaScript engine](https://v8.dev/)

- [EXPRESS](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for node.js

- [AXIOS](https://github.com/axios/axios/blob/master/README.md) - Promise based HTTP client for the browser and node.js.

- [JEST](https://jestjs.io/en/) -Jest is a delightful JavaScript Testing Framework with a focus on simplicity.

- [SUPERTEST](https://www.npmjs.com/package/supertest) - HTTP assertions made easy via superset .

- [geo-distance-helper](https://www.npmjs.com/package/geo-distance-helper) - Get distance between two points in kilometers, nautical miles, (This package isn’t supported by a suite of tests, please see `geoDistance.test.js` for supporting unit tests).
