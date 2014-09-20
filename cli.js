var path = require('path');
var flatiron = require('flatiron');

var app = module.exports = flatiron.app;

app.use(flatiron.plugins.cli, {
	source: path.join(__dirname, 'commands'),
	argv: {
		version: {
			alias: 'v',
			description: 'print version of app',
			string: true
		},
	}
});

app.use(require('flatiron-cli-config'));