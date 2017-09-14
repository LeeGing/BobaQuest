import Ember from 'ember';

export default Ember.Component.extend({



  actions: {
    processLogin: function() {
      this.sendAction('authFB')
    }
  }
});
