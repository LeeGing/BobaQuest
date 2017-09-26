import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
  userConfig: Ember.inject.service(),
  session: Ember.inject.service('session'),

  model: function(params) {
    console.log('model params:', params);

    return new Ember.RSVP.hash({
      users: Ember.$.ajax({
        type: 'GET',
        url: `${config.apiHost}/users/${params.id}`
      }),
      points: Ember.$.ajax({
        type: 'GET',
        url: `${config.apiHost}/users/${params.id}/points`
      }),
      store: params,
    })
  },

  setupController: function(controller, models) {
    controller.set('userHash', this.get('userConfig.userHash'));
    controller.set('user', models.users);
    controller.set('points', models.points);
    controller.set('store', models.store);
    if (!this.get('session.data.authenticated.username')) {
      controller.set('userHash', this.get('userConfig.userHash'));
      this.set('session.data.authenticated.username', this.get('userConfig.username'))
    } else {
      this.get('userConfig').setUserHash(this.get('session.data.authenticated.username')).then(result => {
        console.log('welcome', this.get('userConfig.userHash'));
        controller.set('userHash', this.get('userConfig.userHash'));
      });
    }

  }
});
