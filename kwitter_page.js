var firebaseConfig = {
    apiKey: "AIzaSyAWGq2rtRqKcTqf1MYUSXtSt9rGPcLMgvk",
    authDomain: "classactivity-e2b3a.firebaseapp.com",
    databaseURL: "https://classactivity-e2b3a-default-rtdb.firebaseio.com",
    projectId: "classactivity-e2b3a",
    storageBucket: "classactivity-e2b3a.appspot.com",
    messagingSenderId: "445487422879",
    appId: "1:445487422879:web:e5b97d89c6e9044dd4b1aa"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name : user_name,
          message : msg,
          like: 0
    });
    document.getElementById("msg").value = "";

}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
//End code
} });  }); }
getData();