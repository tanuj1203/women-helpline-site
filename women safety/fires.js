const firebaseConfig = {
    apiKey: "AIzaSyAzUegwxt3ibmTPzQL2QijgHZMgPylhAOQ",
    authDomain: "lawyer-2cf34.firebaseapp.com",
    databaseURL: "https://lawyer-2cf34-default-rtdb.firebaseio.com",
    projectId: "lawyer-2cf34",
    storageBucket: "lawyer-2cf34.appspot.com",
    messagingSenderId: "95235959411",
    appId: "1:95235959411:web:614d539a5a9541708e9806",
    measurementId: "G-HXRCK7YFJM"
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