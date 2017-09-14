import Ember from 'ember';

export default Ember.Component.extend({



  actions: {
    processLogin: function() {
      this.sendAction('authFB')
    },
    processLogout: function(response) {
  // user is now logged out
    }
  }

});
