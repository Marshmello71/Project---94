function addUser()
{
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name",user_name);
    window.location = "kwitter_room.html"
}

var firebaseConfig = {
    apiKey: "AIzaSyCzJeqE8ywm07rCf-1X6AS_yRgxA4sMqwI",
    authDomain: "kwitter-project-8c499.firebaseapp.com",
    projectId: "kwitter-project-8c499",
    storageBucket: "kwitter-project-8c499.appspot.com",
    messagingSenderId: "683087706820",
    appId: "1:683087706820:web:2da276e77c953d76d06791",
    measurementId: "G-KL42VF25DE"
  };
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();