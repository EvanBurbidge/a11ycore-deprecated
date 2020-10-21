"use strict";
const admin = require("firebase-admin");
const { normaliseBuild } = require("@a11ycore/utils");

module.exports = {
  configureFirebase,
};

function configureFirebase(serviceKey, databaseUrl, firebaseConfig = {}) {
  const defaultApp = admin.initializeApp({
    databaseURL: databaseUrl,
    credential: admin.credential.cert(serviceKey),
  });
  const db = defaultApp.firestore();
  // creating a starting path in our database
  const builds = db.collection(firebaseConfig.buildsDb);
  const projects = db.collection(firebaseConfig.projectsDb);
  return (projectId, results) => {
    return new Promise((resolve, reject) => {
      if (!projectId) {
        throw Error("you must supply a project id");
      }
      const normalizedResults = normaliseBuild(projectId, results, admin);
      projects
        .doc(projectId)
        .get()
        .then((document) => {
          if (!document.empty) {
            builds.add(normalizedResults).then(resolve).catch(reject);
          } else {
            reject();
            throw Error("that project does not exist");
          }
        })
        .catch((error) => {
          reject();
          console.error(error);
          throw Error("that project does not exist");
        });
    });
  };
}
