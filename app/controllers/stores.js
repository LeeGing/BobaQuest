import Ember from 'ember';

export default Ember.Controller.extend({
  stores: null,

  sortedOrders: Ember.computed('order', function (){
  	return this.get('order').reverse();
  })
});
