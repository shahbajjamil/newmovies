// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB1p5HoA3AqnCwK_5B_kA8eDudHj7pyEno",
  authDomain: "selfiegram-c95b7.firebaseapp.com",
  databaseURL: "https://selfiegram-c95b7.firebaseio.com",
  projectId: "selfiegram-c95b7",
  storageBucket: "selfiegram-c95b7.appspot.com",
  messagingSenderId: "887830839079",
  appId: "1:887830839079:web:29d285d386699ba8d43302",
  measurementId: "G-W9CYQ0RY1K",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const request = document.getElementById("reqMovie");

const button = document.getElementById("contactForm");

button.addEventListener("submit", (e) => {
  e.preventDefault();
  firebase.database().ref("MovieDemanded").push().set({
    movieName: request.value,
  });
  request.value ="";
});
