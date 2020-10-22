# @a11ycore/cypress

This package provides three simple [Cypress](https://cypress.io) commands to help test your applications for accessibility issues using [axe-core](https://github.com/dequelabs/axe-core).

## Install and configure

### Add as a dev dependency:

```sh
npm i -D @a11ycore/cypress
```

### Install peer dependencies:

```sh
npm i -D cypress axe-core
```

### Include the commands

Update `Cypress/support/index.js` file to include the @a11ycore/cypress commands by adding:

```js
import '@a11ycore/cypress'
```

### Add a task to log the messages to the terminal when the cypress executes the spec files
[Example - configuring log task](https://docs.cypress.io/api/commands/task.html#Usage)

## Commands

### cy.injectA11yCypress

This will inject the `axe-core` runtime into the page under test. You must run this **after** a call to `cy.visit()` and before you run the `runA11ycypress` command.

You run this command with `cy.injectA11yCypress()` either in your test, or in a `beforeEach`, as long as the `visit` comes first.

```js
beforeEach(() => {
  cy.visit('http://localhost:9000')
  cy.injectA11yCypress()
})
```

### cy.configureA11yCypress

#### Purpose

To configure the format of the data used by aXe. This can be used to add new rules, which must be registered with the library to execute.

#### Description

User specifies the format of the JSON structure passed to the callback of axe.run

[Link - aXe Docs: axe.configure](https://www.deque.com/axe/documentation/api-documentation/#api-name-axeconfigure)

```js
it('Has no detectable a11y violations on load (custom configuration)', () => {
  // Configure aXe and test the page at initial load
  cy.configureA11yCypress({
    branding: {
      brand: String,
      application: String
    },
    reporter: 'option',
    checks: [Object],
    rules: [Object],
    locale: Object
  })
  const results = await cy.runA11yCyprss()
})
```

### cy.runA11yCypress

This will run axe against the document at the point in which it is called. This means you can call this after interacting with your page and uncover accessibility issues introduced as a result of rendering in response to user actions. It returns a promise which contains the results array of your a11y check

#### Parameters on cy.runA11yCypress (axe.run)

##### context (optional)

Defines the scope of the analysis - the part of the DOM that you would like to analyze. This will typically be the document or a specific selector such as class name, ID, selector, etc.

##### options (optional)

Set of options passed into rules or checks, temporarily modifying them. This contrasts with axe.configure, which is more permanent.

The keys consist of [those accepted by `axe.run`'s options argument](https://www.deque.com/axe/documentation/api-documentation/#parameters-axerun)

##### callback (optional)

Allows you to define a callback that receives the violations for custom side-effects, such as adding custom output to the terminal.

### Examples

#### Basic usage

```js
// Basic usage
it('Has no detectable a11y violations on load', async () => {
  // Test the page at initial load
  const results = await cy.runA11yCypress();
})

// Applying a context and run parameters
it('Has no detectable a11y violations on load (with custom parameters)', async () => {
  // Test the page at initial load (with context and options)
  await cy.runA11yCypress('.example-class', {
    runOnly: {
      type: 'tag',
      values: ['wcag2a']
    }
  })
})

it('Has no detectable a11y violations on load (filtering to only include critical impact violations)', () => {
  // Test on initial load, only report and assert for critical impact items
  cy.runA11yCypress(null, {
    includedImpacts: ['critical']
  })
})

// Basic usage after interacting with the page
it('Has no a11y violations after button click', () => {
  // Interact with the page, then check for a11y issues
  cy.get('button').click()
  cy.runA11yCypress()
})
```

##### In Cypress plugins file

This registers a `log` task as seen in the [Cypress docs for cy.task](https://docs.cypress.io/api/commands/task.html#Usage) as well as a `table` task for sending tabular data to the terminal.

```js
module.exports = (on, config) => {
  on('task', {
    log(message) {
      console.log(message)

      return null
    },
    table(message) {
      console.table(message)

      return null
    }
  })
}
```

#### In your spec file

Then we create a function that uses our tasks and pass it as the `validationCallback` argument to `cy.checkA11y`

```js
// Define at the top of the spec file or just import it
function terminalLog(violations) {
  cy.task(
    'log',
    `${violations.length} accessibility violation${
      violations.length === 1 ? '' : 's'
    } ${violations.length === 1 ? 'was' : 'were'} detected`
  )
  // pluck specific keys to keep the table readable
  const violationData = violations.map(
    ({ id, impact, description, nodes }) => ({
      id,
      impact,
      description,
      nodes: nodes.length
    })
  )

  cy.task('table', violationData)
}

// Then in your test...
it('Logs violations to the terminal', () => {
  cy.runA11yCypress(null, null, terminalLog)
})
```

## A11Y Core

If you've not signed up already [A11Y core](https://a11ycore.com) allows for custom reporting and overviews of all accessibility issues. To report to it
you can import our reporting tool from `@a11ycore/reporting`.