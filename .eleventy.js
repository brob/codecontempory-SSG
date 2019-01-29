module.exports = function(config) {

  // Add a date formatter filter to Nunjucks
  config.addFilter("dateDisplay", require("./filters/dates.js") );
  config.addFilter("timestamp", require("./filters/timestamp.js") );
  config.addFilter("squash", require("./filters/squash.js") );
  config.addFilter("slice", require("./filters/slice.js") );
  config.addPassthroughCopy("src/images");

  config.addCollection('courses', collection => {
    return collection.getFilteredByGlob('src/site/courses/*.md');
  });

  return {
    dir: {
      input: "src/site",
      output: "dist",
      includes: "_includes"
    },
    templateFormats : ["html", "md"],
    htmlTemplateEngine : "liquid",
    markdownTemplateEngine : "liquid"
  };

};
