"use strict";
const React = require("react");
const ReactDOMServer = require("react-dom/server");

const runA11yJest = require("..");

describe("jest", () => {
  test("it should call the runA11yMethod", () => {
    const element = React.createElement("img", { src: "#" });
    const html = ReactDOMServer.renderToString(element);
    runA11yJest(html).then((results) => {
      sendBuild("wsR4nYaVr8uAbW99E38Y", results)
        .then(() => {
          console.log("success");
          done();
        })
        .catch((err) => {
          console.error(err);
          console.log("oh no");
          done();
        });
    });
  });
});
