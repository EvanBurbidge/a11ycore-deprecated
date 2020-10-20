"use strict";
const React = require("react");
const ReactDOMServer = require("react-dom/server");

const runA11yJest = require("../lib/jest");

describe("jest", () => {
  test("it should call the runA11yMethod", async () => {
    const element = React.createElement("img", { src: "#" });
    const html = ReactDOMServer.renderToString(element);
    const results = await runA11yJest(html)
    expect(results.violations.length).toBeGreaterThan(1);
  });
});
