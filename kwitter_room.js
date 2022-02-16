var firebaseConfig = {
    apiKey: "AIzaSyBcYGGzrh0lvLQwO1MR-u73E9H3hQg6eww",
    authDomain: "let-s-chat-web-app-73e89.firebaseapp.com",
    databaseURL: "https://let-s-chat-web-app-73e89-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-web-app-73e89",
    storageBucket: "let-s-chat-web-app-73e89.appspot.com",
    messagingSenderId: "774217086539",
    appId: "1:774217086539:web:d43fdb3bd2d66b6abcffce"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML= "Welcome " + user_name + "!";

  function addRoom() {
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
          purpose: "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room Name - " + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

