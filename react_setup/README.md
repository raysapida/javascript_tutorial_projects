# [Hello World example for React](https://medium.com/javascript-scene/baby-s-first-reaction-2103348eccdd)
## [Setting up Babel for Isomorphic JS app](https://medium.com/javascript-scene/how-to-use-es6-for-isomorphic-javascript-apps-2a9c3abe5ea2)
* `npm install -g babel`
* `npm install --save-dev babel`
* `npm install --save-dev babelify browserify`
* `npm install --save core-js` --- > `require('core-js');`
* `npm install --save-dev eslint`

### Compiling
* `babel script.js --out-file script-compiled.js`
* `babel -d build-dir source-dir`
* `browserify script.js -t babelify --outfile bundle.js`
