gulp       = require 'gulp'
sass       = require 'gulp-sass'
minifyCss  = require 'gulp-minify-css'
concat     = require 'gulp-concat'
browserify = require 'browserify'
source     = require 'vinyl-source-stream'

rimraf = require 'rimraf'
mkdirp = require 'mkdirp'

dist = {
  root: './dist',
  js:   './dist/js',
  css:  './dist/css',
}

p = require __dirname + '/package.json'


### tasks ###

gulp.task 'default', [ 'clean', 'browserify', 'sass' ]

gulp.task 'watch', ->
  gulp.watch [ './src/**/*', './sass/' ], [ 'default' ]

gulp.task 'clean', () ->
  rimraf.sync dist.root
  mkdirp.sync dist.js
  mkdirp.sync dist.css

gulp.task 'sass', ->
  gulp.src [ './sass/main.sass' ]
  .pipe sass()
  .pipe minifyCss()
  .pipe concat 'main.css'
  .pipe gulp.dest dist.css

gulp.task 'browserify', ->
  browserify
    entries: [ './src/main.js' ]
    transform: [ 'reactify', 'debowerify' ]
  .bundle()
  .pipe source "main.js"
  .pipe gulp.dest dist.js
