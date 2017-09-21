import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
<<<<<<< HEAD
=======
  userConfig: Ember.inject.service(),

>>>>>>> sept20/test
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
<<<<<<< HEAD
=======
    controller.set('userHash', this.get('userConfig.userHash'));
>>>>>>> sept20/test
    controller.set('user', models.users);
    controller.set('points', models.points);
    controller.set('store', models.store);
  }
});
