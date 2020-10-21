# @a11ycore/jest

<!-- [![npm version](https://img.shields.io/npm/v/jest-axe.svg)](http://npm.im/jest-axe)
![node](https://img.shields.io/node/v/jest-axe)
[![Build Status](https://travis-ci.org/nickcolley/jest-axe.svg?branch=main)](https://travis-ci.org/nickcolley/jest-axe)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) -->

Custom [Jest][Jest] matcher for [aXe](https://github.com/dequelabs/axe-core) for testing accessibility

## ⚠️✋ This project does not guarantee what you build is accessible.
The GDS Accessibility team found that only [~30% of issues are found by automated testing](https://accessibility.blog.gov.uk/2017/02/24/what-we-found-when-we-tested-tools-on-the-worlds-least-accessible-webpage).

## Installation:
```bash
npm install --save-dev @a11ycore/jest
```

## Usage:

```javascript
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const { runA11yJest } = require("@a11ycore/jest");

describe("jest", () => {
  test("it should call the runA11yMethod", async () => {
    const element = React.createElement("img", { src: "#" });
    const html = ReactDOMServer.renderToString(element);
    const results = await runA11yJest(html)
    expect(results.violations.length).toBeGreaterThan(1);
  });
});

```

### Testing React with [Enzyme](https://enzymejs.github.io/enzyme/)

```javascript
const React = require('react')
const App = require('./app')

const { mount } = require('enzyme')
const { runA11yJest } = require('@a11ycore/jest')

it('should demonstrate this matcher`s usage with enzyme', async () => {
  const wrapper = mount(<App/>)
  const results = await runA11yJest(wrapper.getDOMNode())
  expect(results.violations.length).toBe(0);
})
```

### Testing React with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)

```javascript
const React = require('react')
const App = require('./app')

const { render } = require('@testing-library/react')
const { runA11yJest } = require('@a11ycore/jest')

it('should demonstrate this matcher`s usage with react testing library', async () => {
  const { container } = render(<App/>)
  const results = await runA11yJest(container)
  expect(results.violations.length).toBe(0);
})
```

> Note: If you're using `react testing library` <9.0.0 you should be using the
> [`cleanup`](https://testing-library.com/docs/react-testing-library/api#cleanup) method. This method removes the rendered application from the DOM and ensures a clean HTML Document for further testing.

### Testing Vue with [Vue Test Utils](https://vue-test-utils.vuejs.org/)

```javascript
const App = require('./App.vue')

const { mount } = require('@vue/test-utils')
const { runA11yJest } = require('@a11ycore/jest')

it('should demonstrate this matcher`s usage with vue test utils', async () => {
  const wrapper = mount(Image)
  const results = await runA11yJest(wrapper.element)
  expect(results.violations.length).toBe(0);
})
```

### Testing Vue with [Vue Testing Library](https://testing-library.com/docs/vue-testing-library/intro)

```javascript
const App = require('./app')

const { render } = require('@testing-library/vue')
const { runA11yJest } = require('@a11ycore/jest')

it('should demonstrate this matcher`s usage with react testing library', async () => {
  const { container } = render(<App/>)
  const results = await runA11yJest(container)
  
  expect(results.violations.length).toBe(0);
})
```
> Note: If you're using `vue testing library` <3.0.0 you should be using the
> [`cleanup`](https://testing-library.com/docs/vue-testing-library/api#cleanup) method. This method removes the rendered application from the DOM and ensures a clean HTML Document for further testing.

### configureA11yJest configuration

The `runA11yJest` function allows options to be set with the [same options as documented in axe-core](https://github.com/dequelabs/axe-core/blob/master/doc/API.md#options-parameter):

```javascript
const { runA11yJest } = require('@a11ycore/jest')

it('should demonstrate this matcher`s usage with a custom config', async () => {
  const render = () => `
    <div>
      <img src="#"/>
    </div>
  `

  // pass anything that outputs html to axe
  const html = render()

  const results = await runA11yJest(html, {
    rules: {
      // for demonstration only, don't disable rules that need fixing.
      'image-alt': { enabled: false }
    }
  })

  expect(results.violations.length).toBe(0);
})
```

## Setting global configuration

If you find yourself repeating the same options multiple times, you can export a version of the `runA11yJest` function with defaults set.

Note: You can still pass additional options to this new instance; they will be merged with the defaults.

This could be done in [Jest's setup step](https://jestjs.io/docs/en/setup-teardown)

```javascript
// Global helper file (axe-helper.js)
const { configureA11yJest } = require('@a11ycore/jest')

const runA11yJest = configureA11yJest({
  rules: {
    // for demonstration only, don't disable rules that need fixing.
    'image-alt': { enabled: false }
  }
})

module.exports = runA11yJest
```

### Setting custom rules and checks.

The configuration object passed to `configureA11yJest`, accepts a `globalOptions` property to configure the format of the data used by axe and to add custom checks and rules. The property value is the same as the parameter passed to [axe.configure](https://github.com/dequelabs/axe-core/blob/master/doc/API.md#parameters-1). 

```javascript
// Global helper file (axe-helper.js)
const { configureA11yJest } = require('@a11ycore/jest')

const runA11yCore = configureA11yJest({
  globalOptions: {
    checks: [/* custom checks definitions */]
  },
  // ...
})

module.exports = runA11yCore
```

Refer to [Developing Axe-core Rules](https://github.com/dequelabs/axe-core/blob/master/doc/rule-development.md) for instructions on how to develop custom rules and checks.

## Thanks
- [Jest][Jest] for the great test runner that allows extending matchers.
- [aXe](https://www.deque.com/axe/) for the wonderful axe-core that makes it so easy to do this.
- Government Digital Service for making coding in the open the default.
  - GOV.UK Publishing Frontend team who published the [basis of the aXe reporter](https://github.com/alphagov/govuk_publishing_components/blob/581c22c9d35d85d5d985571d007f6397a4399f4c/spec/javascripts/govuk_publishing_components/AccessibilityTestSpec.js)
- [jest-image-snapshot](https://github.com/americanexpress/jest-image-snapshot) for inspiration on README and repo setup

[Jest]: https://jestjs.io/