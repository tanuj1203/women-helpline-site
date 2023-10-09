const firebaseConfig = {
    apiKey: "AIzaSyC3YeZwjPM15Ak4onlYjiSWSOiL7X2tAoQ",
    authDomain: "counsellor-b5a7d.firebaseapp.com",
    databaseURL: "https://counsellor-b5a7d-default-rtdb.firebaseio.com",
    projectId: "counsellor-b5a7d",
    storageBucket: "counsellor-b5a7d.appspot.com",
    messagingSenderId: "944062110162",
    appId: "1:944062110162:web:dd73b0d08adcb31e97900b",
    measurementId: "G-WS6HD6D8DF"
  };
  // initialize firebase
firebase.initializeApp(firebaseConfig);
// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var reg = getElementVal("reg");
  var emailid = getElementVal("emailid");
  var aadhar = getElementVal("aadhar");



  saveMessages(name, reg, emailid, aadhar);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, reg, emailid, aadhar) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    reg: reg,
    emailid: emailid,
    aadhar: aadhar,
  
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
