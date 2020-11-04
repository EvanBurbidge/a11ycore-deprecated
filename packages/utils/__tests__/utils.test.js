"use strict";

const utils = require("..");

describe("utils", () => {
  it("tests the mount function", () => {
    const html = `<p> hi there </p>`;
    const result = utils.mount(html);
    expect(typeof result[0]).toBe('object');
    expect(typeof result[1]).toBe('function');
  });
  it('should normalize the build', () => {
      const normal = utils.normaliseBuild('1234', fixture);
      expect(normal.projectId).toBe('1234');
      expect(normal.issues.length).toBe(2);
      expect(normal.status).toBe('MODERATE');
  })
});
