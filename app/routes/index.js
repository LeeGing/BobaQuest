import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service('session'),

  afterModel() {
    // console.log(this.get('session.data.authenticated.uid'));
    this.transitionTo('welcome');

  }

});
