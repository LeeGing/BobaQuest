import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({

   model: function(params) {

    return new Ember.RSVP.hash({

      stores: Ember.$.ajax({
        type: 'GET',
        url: `${config.apiHost}/stores/${params.id}`
      })
    })
  },


  setupController: function(controller, models) {

    controller.set('store', models.stores)
  }

});


