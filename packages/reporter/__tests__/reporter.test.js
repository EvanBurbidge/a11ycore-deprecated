'use strict';

const { reporter } = require('..');
const { runA11yJest } = require('@a11ycore/jest');
const React = require("react");
const ReactDOMServer = require("react-dom/server");

describe("jest", () => {
  test("it should call the runA11yMethod", async () => {
    const element = React.createElement("img", { src: "#" });
    const html = ReactDOMServer.renderToString(element);
    const results = await runA11yJest(html)
    expect(results.violations.length).toBeGreaterThan(1);
    reporter('','',results);
  });
});



describe('reporter', () => {
    it('needs tests');
});
