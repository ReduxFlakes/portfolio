const markdownIt = require("markdown-it");
const markdownItAnc = require("markdown-it-anchor");
const rss = require("@11ty/eleventy-plugin-rss");
const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/static");
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  /* dev server config */
  eleventyConfig.setServerOptions({
    watch: ["src/css/", "src/*/*.md/"],
  });
  /* passtrough */
  eleventyConfig.addPassthroughCopy("src/static/");
  eleventyConfig.addPassthroughCopy("src/css/");
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  /* markdown config */
  const md = markdownIt({
    html: true,
  });
  md.use(markdownItAnc, {
    tabIndex: false,
  });
  /* shortcodes */
  eleventyConfig.addShortcode("figure", function (image, caption) {
    return `<figure><img src="${image}" alt="${caption}"><figcaption>${caption}</figcaption></figure>`;
  });
  /* collections */
  eleventyConfig.addCollection("posts", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/blog/posts/**/*.md");
  });
  /* time and date filters */
  eleventyConfig.addFilter("PostDate", function (date) {
    return DateTime.fromJSDate(date).toFormat("dd LLL yyyy");
  });
  eleventyConfig.addFilter("dateToISOString", function (date) {
    return new Date(date).toISOString();
  });
  /* plugins */
  eleventyConfig.setLibrary("md", md);
  eleventyConfig.addPlugin(rss);
  return {
    dir: {
      input: "src",
      output: "_dist",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data",
    },
    templateFormats: ["md", "njk", "js"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };
};
