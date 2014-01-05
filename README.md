# gulp-prune-html [![NPM version][npm-image]][npm-url] [![Build status][travis-image]][travis-url]
> Prune your HTML using [https://github.com/thlorenz/prune-html](prune-html)

## Usage

First, install `gulp-prune-html` as a development dependency:

```shell
npm install --save-dev gulp-prune-html
```

Then, add it to your `gulpfile.js`:

```javascript
var prune-html = require('gulp-prune-html');

gulp.task('default', function(){
  gulp.src('index.html')
    .pipe(prune-html(['h1', '.details', 'h3'])
    .pipe(gulp.dest('build'));
});
```
Prune HTML file based on the css selectors.

[travis-url]: http://travis-ci.org/hemanth/gulp-prune-html
[travis-image]: https://secure.travis-ci.org/lazd/gulp-prune-html.png?branch=master
[npm-url]: https://npmjs.org/package/gulp-prune-html
[npm-image]: https://badge.fury.io/js/gulp-repl.png

