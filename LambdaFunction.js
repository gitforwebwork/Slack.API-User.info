    
var rp = require('request-promise-native');

var options = {
        uri: '',
        headers: {
         'Cache-Control': 'no-cache',
         'User-Agent': 'Request-Promise',
        json: true
    };
    
var username; // Create a variable to hold name.

// Get user id from dialogflow.
let userID = event.originalDetectIntentRequest.payload.data.event.user;

// Pass user id to get the user's name.
getUsername(userID).then((output) => { username = output.user.name });
 
function getUsername(userid){
    return new Promise((resolve, reject) => {
    //get token from https://api.slack.com/methods/users.info
        options.uri = "https://slack.com/api/users.info?token= ______ =" +userid+ "&pretty=";
         rp(options).then(function (body) {
            resolve(body);
            console.log('Retrieved Info slack --- ' + JSON.stringify(body));
       })
       .catch(function (err) {
             resolve(err);
             console.log('aborted - slack ' + JSON.stringify(err));
       });
   });
}
