
  import firebase from 'firebase';

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBYw8GZAzHgvgj5nY32cNqIzKTLoeh3fiQ",
    authDomain: "social-network-booking.firebaseapp.com",
    databaseURL: "https://social-network-booking.firebaseio.com",
    projectId: "social-network-booking",
    storageBucket: "social-network-booking.appspot.com",
    messagingSenderId: "840667424961",
    appId: "1:840667424961:web:1d2b9a386a327087c7cc40"
  };

  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;
  