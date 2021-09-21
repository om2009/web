var firebaseConfig = {
    apiKey: "AIzaSyCys5K_BxIn0Mhk6yKH7rGrDPrwI6OVizw",
    authDomain: "project-4447c.firebaseapp.com",
    databaseURL: "https://project-4447c-default-rtdb.firebaseio.com",
    projectId: "project-4447c",
    storageBucket: "project-4447c.appspot.com",
    messagingSenderId: "188654649048",
    appId: "1:188654649048:web:79c0a726044093393aa1ad"
  }
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
