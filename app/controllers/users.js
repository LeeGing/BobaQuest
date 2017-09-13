import Ember from 'ember';

export default Ember.Controller.extend({
  users: null,
  actions: {
    signup: function() {
      console.log(this.get('userEmail'));
    }
  }
})
