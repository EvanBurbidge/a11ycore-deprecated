'use strict';
const axios = require('axios');

module.exports = {
    reporter
};

function reporter(projectId, apiKey, results) {
    if (!projectId) {
        throw Error('you must supply a project id');
    }
    if (!apiKey) {
        throw Error('you must supply an api key');
    }
    return new Promise((resolve, reject) => {
        const url = 'https://europe-west1-a11ycore.cloudfunctions.net/writeToProject';
        axios(
            {
                url,
                method: 'POST',
                data: {
                    apiKey,
                    results,
                    projectId,
                },
            },
        ).then((response) => {
            if (response.status === 200) {
                resolve(response.data);
            }
        })
        .catch(() => reject());
    });
}
