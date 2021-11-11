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

function addUser() {
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "Tinkly_room.html";
}