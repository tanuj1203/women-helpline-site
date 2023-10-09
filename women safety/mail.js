const firebaseConfig = {
    apiKey: "AIzaSyAkIYyhJhYBBdgvqMmGWiG6HpnAB0S0MhY",
    authDomain: "femcare-9bcea.firebaseapp.com",
    databaseURL: "https://femcare-9bcea-default-rtdb.firebaseio.com",
    projectId: "femcare-9bcea",
    storageBucket: "femcare-9bcea.appspot.com",
    messagingSenderId: "811862857910",
    appId: "1:811862857910:web:f14ec48cdabb495b30ae17",
    measurementId: "G-RHBNX2HEBP"
  };
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var username = getElementVal("username");
    var password = getElementVal("password");
    var emailid = getElementVal("emailid");
    var aadhar = getElementVal("aadhar");
  
  
  
    saveMessages(username, password, emailid, aadhar);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (username, password, emailid, aadhar) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      username: username,
      password: password,
      emailid: emailid,
      aadhar: aadhar,
    
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };