import Ember from 'ember';

export default Ember.Controller.extend({
  users: null,

  isLvl1: Ember.computed('points', function (){
   return this.get('points') > 9;
	}), //conditional statement for achievements hbs

	isLvl2: Ember.computed('points', function (){
   return this.get('points') > 19;
	}), //conditional statement for achievements hbs

	isLvl3: Ember.computed('points', function (){
   return this.get('points') > 29;
	}), //conditional statement for achievements hbs

  actions: {
    signup: function() {
      console.log(this.get('userEmail'));
    }
  }

});
