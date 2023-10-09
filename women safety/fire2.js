const firebaseConfig = {
    apiKey: "AIzaSyCPOigZFjqUoUAEGgiXTFlFW_L9Z4mhxH4",
    authDomain: "doctor-44dfe.firebaseapp.com",
    databaseURL: "https://doctor-44dfe-default-rtdb.firebaseio.com",
    projectId: "doctor-44dfe",
    storageBucket: "doctor-44dfe.appspot.com",
    messagingSenderId: "630989055593",
    appId: "1:630989055593:web:437995325f4b5401e624f8",
    measurementId: "G-F71RMTSF6M"
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