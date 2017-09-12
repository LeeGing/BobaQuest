import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({

  model: function(params) {

    return new Ember.RSVP.hash({
      users: Ember.$.ajax({
        type: 'GET',
        url: `${config.apiHost}/users/${params.id}`
      }),
      // stores: Ember.$.ajax({
      //   type: 'GET',
      //   url: 'http://localhost:3000/stores/' + params.id
      // })
    })
  },


  setupController: function(controller, models) {

    controller.set('user', models.users)
    controller.set('store', models.stores)

  }

});
