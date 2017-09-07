import Ember from 'ember';

export default Ember.Controller.extend({

  setupController: function(controller, model) {
    controller.set('somethingCool', model);
    console.log(somethingCool);
  }

});
