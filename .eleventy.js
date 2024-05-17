const markdownIt = require("markdown-it");
const markdownItAttrs = require("markdown-it-attrs");
const markdownItAnc = require("markdown-it-anchor");
const rss = require("@11ty/eleventy-plugin-rss");
const { DateTime } = require("luxon");
const { EleventyRenderPlugin } = require("@11ty/eleventy");

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
  md.use(markdownItAttrs);
  md.use(markdownItAnc, {
    tabIndex: false,
  });
  eleventyConfig.addPlugin(EleventyRenderPlugin);
  /* a way to make slots work inside content pages: https://danburzo.ro/eleventy-slotted-content/*/
  const slots = {};
  eleventyConfig.addGlobalData("eleventyComputed.slots", function () {
    return (data) => {
      const key = data.page.inputPath;
      slots[key] = slots[key] || {};
      return slots[key];
    };
  });
  eleventyConfig.addPairedShortcode("slot", function (content, name) {
    if (!name) throw new Error("Missing name for {% slot %} block!");
    slots[this.page.inputPath][name] = content;
    return "";
  });
  /* time and date filters */
  eleventyConfig.addFilter("postDate", function (date) {
    return DateTime.fromJSDate(date).toFormat("dd LLL yyyy");
  });
  eleventyConfig.addFilter("dateToISOString", function (date) {
    return new Date(date).toISOString();
  });
  /* collections */
  eleventyConfig.addCollection("blog", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/blog/posts/**/*.md");
  });
  eleventyConfig.addCollection("opinions", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/opinions/posts/**/*.md");
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
