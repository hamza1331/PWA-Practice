var config = {
    apiKey: "AIzaSyDevJziMzAlMpErfarI9Q1DcBGU6JF-EF8",
    authDomain: "explorefirebase-80b58.firebaseapp.com",
    databaseURL: "https://explorefirebase-80b58.firebaseio.com",
    projectId: "explorefirebase-80b58",
    storageBucket: "explorefirebase-80b58.appspot.com",
    messagingSenderId: "994024778201"
  };
  firebase.initializeApp(config);
  
const messaging = firebase.messaging()
messaging.requestPermission().then(function(){
    console.log('permission granted...')
    return messaging.getToken()
})
.then(function(token){
    console.log(token)
})
.catch(function(err){
    console.log(err)
})

messaging.onMessage(function(payload){
    console.log(payload)
})