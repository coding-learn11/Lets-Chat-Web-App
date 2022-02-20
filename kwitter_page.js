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

  function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name")

function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        like: 0
    });

    document.getElementById("msg").value = "";

}

