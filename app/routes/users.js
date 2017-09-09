import Ember from 'ember';

export default Ember.Route.extend({

  model: function(params) {

    return new Ember.RSVP.hash({
      users: Ember.$.ajax({
      type: 'GET',
      url: 'http://localhost:3000/users/' + params.id
      }),

      stores: Ember.$.ajax({
        type: 'GET',
        url: 'http://localhost:3000/stores/' + params.id
      })
    })
  },


  setupController: function(controller, models) {


    controller.set('user', models.users)
    controller.set('stores', models.stores)

  }

});



  // model: function(params) {
  // return new Ember.RSVP.hash({
  //           news: Ember.$.ajax({
  //             url: wpUrl + 'news',
  //             dataType: "jsonp",
  //             type: 'GET' }),
  //           events: Ember.$.ajax({ url: wpUrl + 'events', dataType: "jsonp", type: 'GET' })
