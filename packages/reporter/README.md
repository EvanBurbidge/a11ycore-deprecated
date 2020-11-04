# @a11ycore/reporter

## Description

The reporter is a tool to allow you to sync a11y results with the A11ycore reporting platform. 
If you have not signed up for an account you will not be able to use this package. You can sign up [here](https://a11ycore.com/#/login);

## Usage

```javascript
const { runA11yJest } = require('@a11ycore/jest');
const { reporter }  = require('@a11ycore/reporter');
const { normaliseBuild } = require('@a11ycore/utils');

// can be found in the details page of your a11ycore project
const apiKey = process.env.A11Y_API_KEY;
const projectId = process.env.PROJECT_ID

describe("jest", () => {
  test("it should call the runA11yMethod", async () => {
    const element = React.createElement("img", { src: "#" });
    const html = ReactDOMServer.renderToString(element);
    const results = await runA11yJest(html)
    expect(results.violations.length).toBeGreaterThan(1);
    const normalisedResults = normaliseBuild(projectId, results); // if not done your results will not process and may be rejected
    await reporter(projectId, apiKey, normaliseBuild(projectId, results)); // you can then login to your a11ycore dashbaord to see results
  });
});
```
