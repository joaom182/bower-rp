#!/usr/bin/env node

var brp = require('../src/cli.js');

brp.start(function (err) {
	process.exit(err ? 1 : 0);
});