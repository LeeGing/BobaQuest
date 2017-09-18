import Ember from 'ember';

export default Ember.Route.extend({
  userConfig: Ember.inject.service(),

  model: function(params) {
    console.log('model params:', params);

    return new Ember.RSVP.hash({

    })
  },

  setupController: function(controller) {
    controller.set('markers', function() {
     return [
       { name: 'Bubble world downtown', lat: 49.28737839999999, long: -123.1288151 },
       { name: 'Bubble world Kingsway', lat: 49.2329488, long: -123.0331494 },
       { name: 'Bubble world Coquitlam', lat: 49.2513789, long: -122.8925542 },
       { name: 'Bubble world Coquitlam', lat: 49.2790757, long: -122.7943202 },
       { name: 'Chatime downtown', lat: 49.2866489, long: -123.1282783 },
       { name: 'Chatime Boardway', lat: 49.2638165, long: -123.1401978 },
       { name: 'Chatime Burnaby', lat: 49.2246487, long: -122.9883343 },
       { name: 'Chatime Surrey', lat: 49.18917709999999, long: -122.8464159 },
       { name: 'Chatime Richmond', lat: 49.154033, long: -123.123627 },
       { name: 'Bubble world Richmond', lat: 49.1872561, long: -123.1301656 },
       { name: 'Soulcup', lat: 49.2498455, long: -122.862484 }
     ];
    }),

    controller.set('userHash', this.get('userConfig.userHash'))
  }

});
