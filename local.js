//require('dotenv').config();

//YOUR DATA TO BE PASSED TO LAMBDA FUNCTION.
var event = require('./event.json');  
console.log('event =', event);

//BUILD STAB OF context OBJECT.
var context = {
    invokeid: 'invokeid',
    memoryLimitInMB : '1234',
    getRemainingTimeInMillis: function() {
	return "5678";
    },
    done: function(err, message){
	return;
    }
};


//RUN YOUR HANDLER
var lambda = require("./HelloLambda.js");
lambda.handler(event, context);
