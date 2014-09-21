#bower-rp - Referrer Bower Packages

##CLI to reference bower packages on HTML

###Installing
```
npm install bower-rp -g
```

###Usage
Open your root project directory that contains bower_components folder and type:
```
bower-rp ref <package_name> <your_file.html>
```

###Example
```
bower-rp ref bootstrap index.html
```

###Features
The Referrer Bower Packages solves the package dependencies, for example, the `bootstrap.js` package has dependency on `jquery.js`, then bower-ref will include automatically the `jquery.js` before `bootstrap.js` and `bootstrap.css` in your HTML file.
