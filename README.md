# vue-cucumber-playwright-example

Template which allows u to integrate tests in your application


## Configuration:

To work with Cucumber and Typescript both we need to have at least 18.19.0 version of NodeJS
i recommend you to use NVM  to manage it.

### Packages
**cucumber-html-reporter** - for creation of HTML reports

**playwright** - to work with playwright

**@cucumber/cucumber**

**@playwright/test**

**ts-node** - this package is required if u want to write your tests in Typescript.

### Configuration files
**playwright.config.ts** (root directory) - the main goal of this file is to define configuration of your tests,

like a output directory, input directory, stack trace, creation of video and screenshots

**cucumber.json** (root directory) - file for configuration of cucumber.js, there you can place additional loaders (for Typescript for example) and define output directory


### Input
 In case with **cucumber** you need place your tests (.spec files) in directory `/tests/cucumber/features/step_definitions` and  place your **Gherkin** templates in `/tests/cucumber/features`

In case with **playwright** if you have **mock pages** place them in `tests/playwright/pages` directory, for simple tests you should use `tests/playwright/tests`

### Output
 For output we have **test-result** directory in the root, and this directory also includes directories for every type of test (cucumber and playwright)
