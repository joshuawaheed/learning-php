/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
wp.blocks.registerBlockType("ourplugin/are-you-paying-attention", {
  attributes: {
    skyColour: {
      type: "string"
    },
    grassColour: {
      type: "string"
    }
  },
  category: "common",
  icon: "smiley",
  title: "Are You Paying Attention?",
  edit: function (props) {
    function updateGrassColour(event) {
      props.setAttributes({
        grassColour: event.target.value
      });
    }
    function updateSkyColour(event) {
      props.setAttributes({
        skyColour: event.target.value
      });
    }
    return wp.element.createElement("div", null, [wp.element.createElement("input", {
      type: "text",
      placeholder: "sky colour",
      value: props.attributes.skyColour,
      onChange: updateSkyColour
    }, null), wp.element.createElement("input", {
      type: "text",
      placeholder: "grass colour",
      value: props.attributes.grassColour,
      onChange: updateGrassColour
    }, null)]);
  },
  save: function (props) {
    return null;
  }
});
/******/ })()
;
//# sourceMappingURL=index.js.map