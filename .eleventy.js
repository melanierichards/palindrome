// require('dotenv').config(); // Reference env vars
const eleventyNavigationPlugin = require('@11ty/eleventy-navigation'); // Navigation
const pluginRss = require('@11ty/eleventy-plugin-rss'); // RSS
const { DateTime } = require('luxon'); // Date formatting

module.exports = function (eleventyConfig) {

  // UNIVERSAL

    // Don't try to build pages from these files
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("README.md");
    eleventyConfig.addPassthroughCopy("robots.txt");
    eleventyConfig.addPassthroughCopy('manifest.webmanifest');

    // Prettify slug names
    /*
    eleventyConfig.addFilter('prettySlugName', function(value) {
      let slugString = value.replace('-', ' ').split(' ');
      let prettyString = [];
      for (let word of slugString) {
        prettyString.push(word.charAt(0).toUpperCase()+ word.slice(1));
      }
      return prettyString.join(' ');
    });
    */

    // UTILITIES

      // LIMIT ARRAY
      /*
      eleventyConfig.addFilter('limit', function (arr, limit) {
        return arr.slice(0, limit);
      });
      */

      // OFFSET ARRAY
      /*
      eleventyConfig.addFilter('offset', function (arr, limit) {
        return arr.slice(limit + 1);
      });
      */
    
    // NAVIGATION
    eleventyConfig.addPlugin(eleventyNavigationPlugin);

  // BLOG

    // RSS FEED
    eleventyConfig.addPlugin(pluginRss);

    // DATE FILTERS

      // Machine-readable dates
      eleventyConfig.addFilter("machineDate", function(value) {
        return DateTime.fromJSDate(value, {zone: 'utc'}).toISO();
      });

      // Prettify dates
      eleventyConfig.addFilter("prettyDate", function(value) {
        return DateTime.fromJSDate(value, {zone: 'utc'}).toFormat('MMM dd, yyyy');
      });

      // Prettify ISO dates
      eleventyConfig.addFilter("prettyISODate", function(value) {
        return DateTime.fromISO(value, {zone: 'utc'}).toFormat('MMM dd, yyyy');
      });

      // Reduce date to year
      eleventyConfig.addFilter("yearOnlyDate", function(value) {
        return DateTime.fromJSDate(value, {zone: 'utc'}).toFormat('yyyy');
      });

    /* EXTRA MD OPTIONS
     * Classes etc: https://www.npmjs.com/package/markdown-it-attrs
     * Header anchors: https://www.npmjs.com/package/markdown-it-anchor
     */

    /*
    const markdownIt = require('markdown-it');
    const markdownItAnchor = require('markdown-it-anchor');
    const markdownItAttrs = require("markdown-it-attrs");
    let markdownLibrary = markdownIt({
      html: true,
      breaks: true,
      linkify: true
    }).use(markdownItAttrs).use(markdownItAnchor, {permalink: false});

    eleventyConfig.setLibrary('md', markdownLibrary);
    */

    // SHORTCODE - RESPONSIVE IMAGES
    /*
    eleventyConfig.addShortcode("responsiveImage", function(baseSrc, ext, max, alt, classes, link) {
      let fullBaseSrc = '/assets/images/content/' + baseSrc;
      var sources = '<source media="(min-width: 501px)" srcset="' + fullBaseSrc + '-m.' + ext + '">';
      if (max !== 'm') {
        sources = '<source media="(min-width: 801px)" srcset="' + fullBaseSrc + '-l.' + ext + '">' + sources;
      }
      if (max === 'xl') {
        sources = '<source media="(min-width: 1201px)" srcset="' + fullBaseSrc + '-xl.' + ext + '">' + sources;
      }
      if (link) {
        return `<div class="c-media ${classes}"><a href="${link}"><picture>${sources}<img src="${fullBaseSrc}-s.${ext}" alt="${alt}"></picture></a></div>`;
      } else {
        return `<div class="c-media ${classes}"><picture>${sources}<img src="${fullBaseSrc}-s.${ext}" alt="${alt}"></picture></div>`;
      }
    });
    */
  
  // CUSTOMIZE INPUT DIRECTORY
  return {
    dir: {
      input: 'src'
    }
  }
  
};
