'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {

    // Add options here
    'ember-cli-foundation-6-sass' :{
      'foundationJs': 'all'
    },

    'ember-bootstrap': {
      bootstrapVersion: 3,
      importBootstrapFont: true,
      importBootstrapCSS: false
    }
  });
 app.import('bower_components/slick-carousel/slick/slick.js');
  return app.toTree();
};
