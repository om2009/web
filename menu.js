var firebaseConfig = {
    apiKey: "AIzaSyDn8jRO-XinofBYChF8YYUtyWfylBUehas",
    authDomain: "project-eb44e.firebaseapp.com",
    databaseURL: "https://project-eb44e-default-rtdb.firebaseio.com",
    projectId: "project-eb44e",
    storageBucket: "project-eb44e.appspot.com",
    messagingSenderId: "274272917166",
    appId: "1:274272917166:web:261a00fd28680a0156bf3f"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
user_ad = localStorage.getItem("user_ad");

document.getElementById("user_name").innerHTML = "Welcome " + user_name;


function buy_peppy_paneer()
{
firebase.database().ref("/").child("order").update({
    pizza : "Peppy Paneer",
    user_name : user_name,
    user_ad : user_ad
});
localStorage.setItem("pizza", "Peppy Paneer");
window.location = "thanks.html";
}


function buy_cheese_n_corn()
{
    firebase.database().ref("/").child("order").update({
        pizza : "CHEESE N CORN",
        user_name : user_name,
        user_ad : user_ad
    });
    localStorage.setItem("pizza", "CHEESE N CORN");
    window.location = "thanks.html";
}
