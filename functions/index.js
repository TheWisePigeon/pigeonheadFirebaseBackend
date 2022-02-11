/* eslint-disable object-curly-spacing */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const keys = require("./keys");
const serviceAccount = require("./admin.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();
exports.sayHello = functions.https.onCall((data, context)=>{
  return "Hi";
});

exports.test = functions.https.onCall((data, context)=>{
  let success = Boolean;
  const docRef = db.collection("USers").doc("brr").set({
    hash: data.hash,
  }).then(()=>{
    success = true;
  }).catch((error)=>{
    success = false;
  });
  let message;
  return ( message = success? "User created" : "There was an error");
});
