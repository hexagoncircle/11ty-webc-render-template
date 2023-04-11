const pluginWebc = require("@11ty/eleventy-plugin-webc");
const { EleventyRenderPlugin } = require("@11ty/eleventy");

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(pluginWebc, {
    components: "src/_includes/**/*.webc",
  });
  eleventyConfig.addPlugin(EleventyRenderPlugin);

  eleventyConfig.addPairedNunjucksAsyncShortcode(
    "renderWebC",
    async function (content) {
      return eleventyConfig.javascriptFunctions.renderTemplate.call(
        this,
        content,
        "webc",
        this.ctx
      );
    }
  );

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data",
    },
  };
};
