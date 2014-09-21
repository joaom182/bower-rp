##CLI to reference bower packages on HTML
==============

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
bower-rp bootstrap index.html
```

###Features
The Referrer Bower Packages solves the package dependencies, for example, the Bootstrap package has dependency on jQuery, then bower-ref will include the jQuery library before Bootstrap in your file.
