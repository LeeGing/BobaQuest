import Ember from 'ember';

export default Ember.Route.extend({

  model: function(params) {
    console.log('model params:', params);

    return new Ember.RSVP.hash({

    })
  }
});
