'use strict';

const { reporter } = require('..');
const { runA11yJest } = require('@a11ycore/jest');
const { normaliseBuild } = require('@a11ycore/utils');
const React = require("react");
const ReactDOMServer = require("react-dom/server");

describe("jest", () => {
  test("it should call the runA11yMethod", async () => {
    const element = React.createElement("img", { src: "#" });
    const html = ReactDOMServer.renderToString(element);
    const results = await runA11yJest(html)
    expect(results.violations.length).toBeGreaterThan(1);
    const formattedResults = normaliseBuild(results);
    console.log(formattedResults)
    await reporter('wsR4nYaVr8uAbW99E38Y', '82ba3e42-747b-463f-b21e-b55d21e44ebd', formattedResults);
  });
});
