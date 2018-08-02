var config = {
    apiKey: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    authDomain: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    databaseURL: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    projectId: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    storageBucket: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    messagingSenderId: "XXXXXXXXXXXXXXXXXXXXXXXXXXXx"
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