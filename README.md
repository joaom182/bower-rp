#bower-rp - A [bower](https://github.com/bower/bower) plugin
CLI to reference bower packages main files to HTML

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

###Contributing
1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request.

###License
MIT © [João M.](https://twitter.com/joaom182)
