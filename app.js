var express = require('express')
var bodyParser = require('body-parser')
const path = require('path')
const app = express()
var admin = require("firebase-admin");

var serviceAccount = require(__dirname+"/adminsdk.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
});


// var logger = function(req,res,next){
//     console.log('Logging with: ',req);
//     next();
// }
// app.use(logger)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use(express.static(path.join(__dirname,'public')))

app.get('/',function(req,res){
    res.send('Hello world...')
})

app.listen(3000,function(){
    console.log('Server started...')
})
var registrationToken = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';

// See the "Defining the message payload" section below for details
// Send a message to the device corresponding to the provided
// registration token.
const payload = {
    data:{
        title:'hello',
        status:'Available'
    }
}
admin.messaging().sendToDevice(registrationToken, payload)
  .then(function(response) {
    // See the MessagingDevicesResponse reference documentation for
    // the contents of response.
    console.log('Successfully sent message:', response);
  })
  .catch(function(error) {
    console.log('Error sending message:', error);
  });