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
      })
    })
  },


  setupController: function(controller, models) {

    controller.set('store', models.storesparam)
    controller.set('graphdata', models.graphdata)
  }

});


