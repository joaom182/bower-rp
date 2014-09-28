#bower-rp - A [bower](https://github.com/bower/bower) plugin

##CLI to reference bower packages main files to HTML

###Installing
```
npm install bower-rp -g
```

###Usage
Open your root project directory that contains bower_components folder and type:
```
bower-rp reference <package_name> <your_file.html>
```

###Example
```
bower-rp reference bootstrap index.html
```

###Features
bower-rp solves the package dependencies, for example, the `bootstrap.js` package has dependency on `jquery.js`, then bower-ref will include automatically the `jquery.js` before `bootstrap.js` and `bootstrap.css` in your HTML file.

###License
MIT © [João M.](https://twitter.com/joaom182)
