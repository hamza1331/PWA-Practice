importScripts('https://www.gstatic.com/firebasejs/5.3.0/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/5.3.0/firebase-messaging.js')

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
  messaging.setBackgroundMessageHandler(function(payload){
      const title = payload.data.title
      const options = {
          body:payload.data.status
      }
      return self.registration.showNotification(title,options)
  })