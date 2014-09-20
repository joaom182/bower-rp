var cli = require('../cli');
var fs = require('fs');

var refer = function () {
	var packageName = cli.argv._[1];
	var filePath = cli.argv._[2];
	
	var file = fs.readFileSync(filePath).toString();
};

refer.usage = [
'The ' + '`brp refer`'.magenta + ' command refer the main files of bower package, into your html file.',
'',
'Usage:'.magenta.bold.underline,
'',
'brp refer bootstrap index.html'
];

module.exports = refer;