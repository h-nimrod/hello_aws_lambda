/**
 * event.json = {
 *   key: cmd,
 *   keys: [ cmd0, cmd1, .. ]
 * }
 */

var util = require('util');

function cmdAsync(cmd) {
    return new Promise((resolve, reject) => {
	const exec = require('child_process').exec;
	exec(cmd, (err, stdout, stderr) => {
	    if (err) {
		console.log(err);
		reject(err);
		return;
	    }
	    console.log('----------------------------------------');
	    console.log(cmd);
	    console.log('----------------------------------------');
	    console.log("\n" + stdout);
	    resolve(stdout);
	});
    });
}

exports.handler = function(event, context) {
    console.log('RemainingTimeInMillis:\n' + context.getRemainingTimeInMillis());
    console.log('memoryLimitInMB:\n' + context.memoryLimitInMB);
    console.log("Reading options from event:\n", util.inspect(event, {depth: 5}));
    console.log("Dumping context:\n", util.inspect(context, {depth: 5}));
    
    var cmds = [];
    if (event.key) {
	cmds.push(cmdAsync(event.key));
    }
    if (event.keys) {
	cmds = cmds.concat(event.keys.map(cmdAsync));
    }

    if (cmds.length <= 0) {
	console.log("no arguments, exit now");
	context.done();
    } else {
	Promise.all(cmds)
	    .then(() => new Promise((resolve) => {
		setTimeout(() => {
		    console.log("timeout finised");
		    resolve();
		}, 1000);
	    }))
	    .then(() => {
		console.log('RemainingTimeInMillis:\n' + context.getRemainingTimeInMillis());
		context.done();
	    })
	    .catch(() => context.done());
    }
};
