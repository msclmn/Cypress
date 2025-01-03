# Cypress Framework Project

## Overview
This repository features an automation portfolio that highlights UI and API tests for a web application, all implemented using Cypress. 

Comprehensive Tests are triggered automatically in GitHub Actions CI/CD whenever a PUSH to main occurs.

There are currently 3 pipelines/workflows: 
1) Comprehensive Tests (Automatically triggered)
2) UI Tests (Manually triggered)
3) API Tests (Manually triggered)

## Testing Resources(URLs) Used
- UI Tests: Lambdatest Playground: https://ecommerce-playground.lambdatest.io/
- API Tests: FakeRestAPI: https://fakerestapi.azurewebsites.net/api/v1

## Prerequisites
- [Node.js](https://nodejs.org/) (version 12 or above)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Installation
To get started with the project, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/msclmn/Cypress.git
    ```
2. **Navigate to the project directory**:
    ```bash
    cd your-repository
    ```
3. **Install the dependencies**:
    ```bash
    npm install
    ```
    or
    ```bash
    yarn install
    ```

## To run tests in Headless Mode
```
npx cypress run
```

## To run tests in Cypress GUI
```
npx cypress open
```

### CI/CD Pipeline Execution through GitHub Actions:
- API and UI tests are triggered automatically in GitHub Actions CI/CD whenever a PUSH to main occurs.

To trigger a manual pipeline run:
```
- Click Actions tab from the project
- Select Worflow
- Click Run workflow
- Select Branch to run in
- Select Run workflow
```
