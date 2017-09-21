'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
<<<<<<< HEAD
=======
    // Add options here
    'ember-cli-foundation-6-sass' :{
      'foundationJs': 'all'
    },

    'ember-bootstrap': {
      bootstrapVersion: 3,
      importBootstrapFont: true,
      importBootstrapCSS: false
    }
>>>>>>> sept20/test
  });
 app.import('bower_components/slick-carousel/slick/slick.js');
  return app.toTree();
};
