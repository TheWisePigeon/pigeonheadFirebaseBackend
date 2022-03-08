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

// test function

exports.sayHello = functions.https.onCall((data, context)=>{
  return "Hi";
});


// function to create user based on ipfs hash
exports.createUser = functions.https.onCall((data, context)=>{
  const hash = data.hash;
  const docRef = db.collection("Users").doc(hash).set({
    balance: 2000000,
    refCode: data.refCode,
  }).then(() => {
    console.log("User created successfully");
  }).catch(() => {
    console.log("Something went wrong");
  });
});
