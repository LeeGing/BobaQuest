import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

  name: 'fb',
  initialize,

  fb: Ember.inject.service(),

  actions: {
    invalidateSession() {
      this.get('session').invalidate();
    },
    authFB: function() {
      this.get('fb').login('email public_profile').then(function() {
      });
    },
    exitFB: function() {
      this.get('fb').logout(function(response) {
      window.location.reload();
    });
    }
  }
});

export function initialize(application) {
  application.inject('controller', 'fb', 'service:fb');
}

