import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  userConfig: Ember.inject.service(),

  actions: {
    authenticate() {
      let {identification, password} = this.getProperties('identification', 'password');

      this.get('userConfig').setUserHash(identification).then(() => {
        console.log('login userhash', this.get('userConfig.userHash'));
      });

      this.get('session').authenticate('authenticator:oauth2', identification, password).catch((reason) => {
        this.set('errorMessage', reason.error || reason);
      });
    }
  }
});
