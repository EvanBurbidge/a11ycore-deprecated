const admin = require('firebase-admin');
const { normaliseBuild } = require('./utils/');
const serviceKey = require('./serviceAccount.json');

function sendBuild(projectId, results) {
  const defaultApp = admin.initializeApp({
    credential: admin.credential.cert(serviceKey),
    databaseURL: "https://a11ycore.firebaseio.com",
  });
  const db = defaultApp.firestore();
  // creating a starting path in our database
  const builds = db.collection('builds');
  const projects = db.collection('projects');
  return new Promise((resolve, reject) => {
    if (!projectId) {
      throw Error('you must supply a project id');
    }
    const normalizedResults = normaliseBuild(projectId, results, admin);
    projects.doc(projectId).get()
      .then((document) => {
        if (!document.empty) {
          builds.add(normalizedResults)
            .then(resolve)
            .catch(reject);
        } else {
          reject();
          throw Error('that project does not exist');
        }
      })
      .catch((error) => {
        reject();
        console.error(error);
        throw Error('that project does not exist');
      });
  })
}

module.exports = {
  sendBuild,
}

