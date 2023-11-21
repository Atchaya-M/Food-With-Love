const firebaseConfig = {
    //   copy your firebase config informations
    apiKey: "AIzaSyDE9z868rmyfQUY1DBs5psW_77bj6nqrok",
    authDomain: "food-with-love-de5c4.firebaseapp.com",
    databaseURL: "https://food-with-love-de5c4-default-rtdb.firebaseio.com",
    projectId: "food-with-love-de5c4",
    storageBucket: "food-with-love-de5c4.appspot.com",
    messagingSenderId: "307689000060",
    appId: "1:307689000060:web:0b7e36a11a808030120df9"  
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var reviewFormDB = firebase.database().ref("reviewForm");
  
  document.getElementById("reviewForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var rating = getElementVal("rating");
    var comment = getElementVal("comment");
  
    saveMessages(rating, comment);
  
    alert('Rating sent!');
  
    //   remove the alert
    //   reset the form
    document.getElementById("reviewForm").reset();
  }
  
  const saveMessages = (rating, comment) => {
    var newreviewForm = reviewFormDB.push();
  
    newreviewForm.set({
      rating: rating,
      comment: comment,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };