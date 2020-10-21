'use strict';

const utils = require('..');

describe('utils', () => {
    it('tests the mount function', () => {
        const html = `<p> hi there </p>`;
        const result = utils.mount(html);
        console.log(result);
    });
});
