var cli = require('../cli');

var refer = function () {
	cli.log.info('Package name - ' + cli.argv._[1]);
	cli.log.info('File name - ' + cli.argv._[2]);
};

refer.usage = [
'The ' + '`brp refer`'.magenta + ' command refer the main files of bower package,',
'into your html file',
'',
'Usage:'.magenta.bold.underline,
'',
'brp refer bootstrap index.html'
];

module.exports = refer;