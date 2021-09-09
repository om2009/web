user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name;

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

  function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

  function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
row = "<div class = 'room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      localStorage.setItem("room_name", Room_names);
//End code
});});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html")
}