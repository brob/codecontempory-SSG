var project = require('../_project.js');
var gulp    = require('gulp');
const axios = require('axios');
const rss2json = require('rss-to-json');


/*
  Get presentation details from Notist
*/
gulp.task('get:posts', async function () {
  rss2json.load('https://bryanlrobinson.com/feed.xml', function(err, rss){
    // console.log(rss);
    project.storeData(project.buildSrc + "/site/_data/posts.json", JSON.stringify(rss));
  });
});
