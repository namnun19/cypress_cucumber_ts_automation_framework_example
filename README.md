# JS QA Challenge - Automation Framework - Juan Namnun

This is a demo project created intended for recruitment processes/skill assessments by Juan Miguel Namnún Ramos (Namnun).

## TypeScript / Cypress 

This automation framework was developed using [**TypeScript**](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html), version [5.2.2](https://github.com/microsoft/TypeScript/releases/tag/v5.1.3), and it uses [**Cypress**](https://docs.cypress.io/guides/overview/why-cypress) at its core, specifically with version [13.3.1](https://docs.cypress.io/guides/references/changelog#13-3-1), to support the automation scripts for both UI and API Testing.

## Cucumber-preprocessor

On top of **Cypress**, the dependency [**@badeball/cypress-cucumber-preprocessor**](https://github.com/badeball/cypress-cucumber-preprocessor), leveraging version [18.0.6](https://github.com/badeball/cypress-cucumber-preprocessor/releases/tag/v18.0.6), is also included in this project, which provides a [**"Cucumber**](https://cucumber.io/docs/guides/overview/) wrapper" for the definition and execution of corresponding test suites, considering the following components:

### Feature files

**Feature files** are included for each "test suite", which are written using the [**Gherkin**](https://cucumber.io/docs/gherkin/reference/) syntax, and they can be found in below directories within the project:

```bash
├───cypress
│   ├───e2e
│   │   └───ui
│   │       └───luma
```
### Step definitions

For each **feature file** one [**Step definition**](https://cucumber.io/docs/cucumber/step-definitions/?lang=javascript) file, using the [configuration required](https://github.com/badeball/cypress-cucumber-preprocessor/blob/master/docs/step-definitions.md) by the above-mentioned library, could be found in below directories:

```bash
├───cypress
│   │        
│   └───support
│       │           
│       └───step_definitions
│           └───ui
│               └───luma
```

- The **specific step definition** related to each **feature file** would be defined in a `.ts` file with the same name, for instance:

```bash
│
├───cypress
│   │   
│   │
│   ├───e2e
│   │   └───ui
│   │       └───luma
│   │               luma_web_app_test_suite_1.feature
│   │
│   └───support
│       │   
│       └───step_definitions
│           └───ui
│               └───luma
│                       general_step_definition.ts
│                       luma_web_app_test_suite_1.ts
│
└
```
-  However, as it can be seen from above representation, a "general" step definition file is also included in the folder, which contains methods and elements that could be shared among "feature files".


## Packages management and installation

### Node.js 

This framework was developed on top of [**Node.js**](https://nodejs.dev/en/learn/) version [18.18.2](https://nodejs.org/dist/latest-v18.x/docs/api/), which was being supported by the [npm](https://docs.npmjs.com/about-npm) version [9.2.0](https://www.npmjs.com/package/npm/v/9.2.0), for the managament of all the libraries required for the project.

### Project dependencies installation

Given that the corresponding [**package.json**](https://docs.npmjs.com/cli/v9/configuring-npm/package-json), and [**package-lock.json**](https://docs.npmjs.com/cli/v9/configuring-npm/package-lock-json), files are properly included, only the following command should be ran, from the **project's root directory**, in order to install all required dependencies:
```bash
npm ci
```

## Test Suites execution and considerations

----
#### Draft version; further information shall be added shortly.