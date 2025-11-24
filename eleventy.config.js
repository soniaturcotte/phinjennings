module.exports = function (eleventyConfig) {
  
    // Output directory: _site
  eleventyConfig.addPassthroughCopy('styles.css');
  eleventyConfig.addPassthroughCopy('favicon.ico');
}