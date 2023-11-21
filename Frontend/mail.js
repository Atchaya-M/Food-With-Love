const firebaseConfig = {
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
  var RatingDB = firebase.database().ref("Rating");
  
  document.getElementById("Rating").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var Rating = getElementVal("Rating");
    var comment = getElementVal("comment");
  
    saveMessages(Rating, comment);
  
    alert('Review Sent!')
  
    //   reset the form
    document.getElementById("Rating").reset();
  }
  
  const saveMessages = (Rating, comment) => {
    var newRating = RatingDB.push();
  
    newRating.set({
        Rating: Rating,
        comment: comment
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };