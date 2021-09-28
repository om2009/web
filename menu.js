var firebaseConfig = {
    apiKey: "AIzaSyCMlobINT-E-0wkjTRVNrbykPKn_cZU4Yo",
    authDomain: "chat-e51d8.firebaseapp.com",
    databaseURL: "https://chat-e51d8-default-rtdb.firebaseio.com",
    projectId: "chat-e51d8",
    storageBucket: "chat-e51d8.appspot.com",
    messagingSenderId: "356932066739",
    appId: "1:356932066739:web:e7e27fe3a4670008af3fc6"
  };
  firebase.initializeApp(firebaseConfig);  

user_name = localStorage.getItem("user_name");
user_ad = localStorage.getItem("user_ad");

document.getElementById("user_name").innerHTML = "Welcome " + user_name;


function buy_peppy_paneer()
{
firebase.database().ref("/").child(user_name + user_ad).update({
    pizza : "Peppy Paneer",
    user_name : user_name,
    user_ad : user_ad
});
localStorage.setItem("pizza", "Peppy Paneer");
setTimeout(function()
    {
        window.location = "thanks.html";
    },2000);
}


function buy_cheese_n_corn()
{
    firebase.database().ref("/").child(user_name + user_ad).update({
        pizza : "CHEESE N CORN",
        user_name : user_name,
        user_ad : user_ad
    });
    localStorage.setItem("pizza", "CHEESE N CORN");
    setTimeout(function()
    {
        window.location = "thanks.html";
    },2000);
}

function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("user_ad");
    window.location = "index.html";
}
function orders()
{
    window.location = "orders.html";
}
