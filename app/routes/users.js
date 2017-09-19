import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
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
    controller.set('user', models.users);
    controller.set('points', models.points);
    controller.set('store', models.store);
  }
});
