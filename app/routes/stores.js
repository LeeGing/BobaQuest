import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
   model: function(params) {
    return new Ember.RSVP.hash({

      storesparam: Ember.$.ajax({
        type: 'GET',
        url: `${config.apiHost}/stores/${params.id}`
      }),

      graphdata: Ember.$.ajax({
        type: 'GET',
        url: `${config.apiHost}/stores/${params.id}/graph`
      }),

      order: Ember.$.ajax({
        type: 'GET',
        url: `http://localhost:3000/orders/${params.id}`
      })
    })
  },

  setupController: function(controller, models) {
    controller.set('order', models.order)
    controller.set('store', models.storesparam)
    controller.set('graphdata', models.graphdata)
  }
});
