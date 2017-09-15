import Ember from 'ember';

export default Ember.Component.extend({



  actions: {
    processLogin: function() {
      this.sendAction('authFB')
    },
    processLogout: function(response) {
      this.sendAction('invalidateSession')
    },
    leaveFacebook: function() {
      this.sendAction('exitFB')
    }
  }

});
