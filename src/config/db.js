const admin = require("firebase-admin");
require('dotenv').config();

const raw = process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON;

// Safety check in case the env var is missing
if (!raw) {
  throw new Error("Missing GOOGLE_APPLICATION_CREDENTIALS_JSON env variable");
}

const serviceAccount = JSON.parse(raw.replace(/\\n/g, '\n'));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();
module.exports = db;
