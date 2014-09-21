(function(){

	var cli = require('../cli');
	var fs = require('fs');
	require("linqjs");

	function _getFilesByType(filePathList, type){
		return filePathList.where(function(f){
			return f.indexOf(type) > -1;
		});
	}

	function _getFilesToImport(packageName, mainFiles, cssFilesToImport, jsFilesToImport){
		mainFiles = typeof(mainFiles) == "object" ? mainFiles : [mainFiles];

		_getFilesByType(mainFiles, ".css").forEach(function(f){
			cssFilesToImport.unshift(packageName + '/' + f);
		});
		_getFilesByType(mainFiles, ".js").forEach(function(f){
			jsFilesToImport.unshift(packageName + '/' + f);
		});
	}

	function _getBowerFileByPackageName(packageName){
		return JSON.parse(fs.readFileSync('./bower_components/' + packageName + '/bower.json').toString());
	}

	function _getFilesDependenciesToImport(bowerfile, cssFilesToImport, jsFilesToImport){
		var dependencies = bowerfile.dependencies;
		if(!dependencies)
			return;

		for(packageName in dependencies){
			_getFilesToImportByPackageName(packageName, cssFilesToImport, jsFilesToImport);
		}
	}

	function _getFilesToImportByPackageName(packageName, cssFilesToImport, jsFilesToImport){
		var bowerfile = _getBowerFileByPackageName(packageName);
		var mainFiles = bowerfile.main;

		_getFilesToImport(packageName, mainFiles, cssFilesToImport, jsFilesToImport);
		_getFilesDependenciesToImport(bowerfile, cssFilesToImport, jsFilesToImport);
	}

	function _getJsScriptTemplate(pos, file, insertTab){
		var _template = '<script type="text/javascript" src="bower_components/' + file + '"></script>';

		return "	" + _template;
	}

	function _importJsToHtml(html, jsFiles, insertTab){
		if(!html)
			return;

		var _html = html;

		for(pos in jsFiles){
			if(!jsFiles.hasOwnProperty(pos))
				continue;

			var file = jsFiles[pos];
			_html = _html.replace('</body>', _getJsScriptTemplate(pos, file, insertTab) + '\n</body>');
		}

		return _html;
	}

	function _getCssScriptTemplate(pos, file){
		var _template = '<link rel="stylesheet" type="text/css" href="bower_components/' + file + '" />';

		return "	" + _template;
	}

	function _importCssToHtml(html, cssFiles){
		if(!html)
			return;

		var _html = html;

		for(pos in cssFiles){
			if(!cssFiles.hasOwnProperty(pos))
				continue;

			var file = cssFiles[pos];
			_html = _html.replace('</head>', _getCssScriptTemplate(pos, file) + '\n</head>');
		}

		return _html;
	}

	function _writeHtmlFile(html, path){
		try{
			fs.writeFileSync(path, html, 'utf8');
		}catch(err){
			throw err;
		}
	}

	var refer = function () {
		var packageName = cli.argv._[1];
		var viewPath = cli.argv._[2];
		var html = fs.readFileSync(viewPath).toString();
		var cssFilesToImport = [];
		var jsFilesToImport = [];

		_getFilesToImportByPackageName(packageName, cssFilesToImport, jsFilesToImport);
		html = _importCssToHtml(html, cssFilesToImport);
		html = _importJsToHtml(html, jsFilesToImport);

		_writeHtmlFile(html, viewPath);
	};

	refer.usage = [
	'The ' + '`brp refer`'.magenta + ' command refer the main files of bower package, into your html file.',
	'',
	'Usage:'.magenta.bold.underline,
	'',
	'brp refer bootstrap index.html'
	];

	module.exports = refer;

})();

