const admin = require("firebase-admin");
require('dotenv').config();
const raw = process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON.replace(/\\n/g, '\n');
const serviceAccount = JSON.parse(raw);
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();
module.exports=db
