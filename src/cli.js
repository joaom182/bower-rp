var path = require('path');
var flatiron = require('flatiron');
var colors = require('colors');

var app = module.exports = flatiron.app;

app.use(flatiron.plugins.cli, {
	version: true,
	usage: require('./common/usage.js'),
	source: path.join(__dirname, 'commands'),
	argv: {
		version: {
			alias: 'v',
			description: 'print version of app',
			string: true
		}
	}
});

app.use(require('flatiron-cli-config'));

app.start = function (callback) {
	app.argv.colors || (colors.mode = 'none');

	app.init(function (err) {
		if (err) {
			return callback(err);
		}

		app.router.dispatch('on', app.argv._.join(' '), app.log, function (err) {
			callback(err);
		});
	});
};