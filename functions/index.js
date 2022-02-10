const functions = require("firebase-functions");

exports.sayHello = functions.https.onCall((data, context)=>{
  return "Hi";
});
