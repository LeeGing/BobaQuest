'use strict';

module.exports = function(environment) {
  let ENV = {
    apiHost: 'localhost:3000',
    modulePrefix: 'bbt',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
      },
      EXTEND_PROTOTYPES: {
        Date: false
      }
    },

    APP: {
    }
  };

  ENV['FB'] = {
    appId: '140804706527772',
    version: 'v2.7',
    xfbml: true
  }

  ENV['g-map'] = {
    libraries: ['places', 'geometry'],
    key: 'AIzaSyDPAhtVsZuWPruwWetDGeOhPXRNyK2zRiQ',
  }

  if (environment === 'development') {
    ENV.apiHost = 'http://localhost:3000'
  }

  if (environment === 'test') {
    ENV.locationType = 'none';
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;
    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.apiHost = '';
  }

  return ENV;
};
