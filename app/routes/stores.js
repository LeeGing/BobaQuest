import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({

   model: function(params) {

    return new Ember.RSVP.hash({

      storesparam: Ember.$.ajax({
        type: 'GET',
        url: `${config.apiHost}/stores/${params.id}`
      }),
      transactionsparam: Ember.$.ajax({
        type: 'GET',
        url: `${config.apiHost}/transactions/${params.id}`
      })
    })
  },


  setupController: function(controller, models) {

    controller.set('storeparam', models.storesparam)
    controller.set('transactionparam', models.transactionsparam)
  }

});


