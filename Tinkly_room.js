// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyATZe_1O79bSK_q5XU-Oi36sL02Tz0rhA4",
    authDomain: "tinkl-46eaa.firebaseapp.com",
    databaseURL: "https://tinkl-46eaa-default-rtdb.firebaseio.com",
    projectId: "tinkl-46eaa",
    storageBucket: "tinkl-46eaa.appspot.com",
    messagingSenderId: "453035429416",
    appId: "1:453035429416:web:e30c171de2a4cc23acef1d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //FIREBASE LINKS on top
  
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function addRoom(){
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({purpose : "adding room name"});

    localStorage.setItem("room_name", room_name);

    window.location = "Tinkly_page.html";
}    

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    console.log("Room Name - "+Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"
    document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();

function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location = "Tinkly_page.html";
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html"
}
