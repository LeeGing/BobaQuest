import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({

   model: function(params) {

    return new Ember.RSVP.hash({

      allstores: Ember.$.ajax({
        type: 'GET',
        url: `${config.apiHost}/allstores`
      })
    })
  },


  setupController: function(controller, models) {

    controller.set('allstore', models.allstores)
  }

});


