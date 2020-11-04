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
        axios.defaults.adapter = require('axios/lib/adapters/http');
        axios(
            {
                url,
                method: 'POST',
                data: {
                    apiKey,
                    results,
                    projectId,
                },
                headers: {
                    'Access-Control-Allow-Origin': '*'
                },
            },
        ).then((response) => {
            if (response.status === 200) {
                resolve(response.data);
            }
        })
        .catch(error => reject(error));
    });
}
