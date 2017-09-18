import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
  userConfig: Ember.inject.service(),

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
      // order: Ember.$.ajax({
      //   type: 'GET',
      //   url: "http://localhost:3000/orders"
      // })
    })
  },


  setupController: function(controller, models) {
    controller.set('userHash', this.get('userConfig.userHash'));
    controller.set('user', models.users);
    controller.set('points', models.points);
    controller.set('store', models.store);
    // controller.set('order', models.order)

  }

});
