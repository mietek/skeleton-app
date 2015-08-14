"use strict";

var r = require("react-wrapper");

module.exports = {
  render: function () {
    return (
      r.h1({},
        "Hello, world!"));
  }
};

r.makeComponent("App", module);
