'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
  });
 app.import('bower_components/slick-carousel/slick/slick.js');
  return app.toTree();
};
