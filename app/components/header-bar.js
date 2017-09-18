import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service('session'),

  actions: {
    processLogin: function() {
      this.sendAction('authFB')
    },
    processLogout: function(response) {
      this.sendAction('invalidateSession')
    },
    leaveFacebook: function() {
      this.sendAction('exitFB')
    },
    authenticate() {
      let {identification, password} = this.getProperties('identification', 'password');
      this.get('session').authenticate('authenticator:oauth2', identification, password).catch((reason) => {
        this.set('errorMessage', reason.error || reason);
      });
    }
  }

});
