
  var firebaseConfig = {
      apiKey: "AIzaSyCzJeqE8ywm07rCf-1X6AS_yRgxA4sMqwI",
      authDomain: "kwitter-project-8c499.firebaseapp.com",
      databaseURL: "https://kwitter-project-8c499-default-rtdb.firebaseio.com",
      projectId: "kwitter-project-8c499",
      storageBucket: "kwitter-project-8c499.appspot.com",
      messagingSenderId: "683087706820",
      appId: "1:683087706820:web:2da276e77c953d76d06791",
      measurementId: "G-KL42VF25DE"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
