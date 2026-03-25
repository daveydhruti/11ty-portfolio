module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images");
  // eleventyConfig.addPassthroughCopy("src/favicon.ico");
  
  return {
    pathPrefix: "/11ty-portfolio/",
    dir: {
      input: "src",
      output: "_site"
    }
  };
};  