import Ember from 'ember';

export default Ember.Controller.extend({
  users: null,
  order: Ember.A([]),

  isLvl1: Ember.computed('points', function (){
   return this.get('points') > 9;
  }),

  isLvl2: Ember.computed('points', function (){
   return this.get('points') > 19;
  }),

  isLvl3: Ember.computed('points', function (){
   return this.get('points') > 29;
  }),

  isLvl4: Ember.computed('points', function (){
    return this.get('points') >29;
  }),

  store_details: Ember.A([
    {name: 'CoCo - Pender', store_id: 1 },
    {name: 'Cha Time - Robson', store_id: 2 },
    {name: 'Bubble World - Robson', store_id: 3 },
  ]),

  storeData: {
    'CoCo - Pender': { store_id: 1, name: 'CoCo - Pender' },
    'Cha Time - Robson': { store_id: 2, name: 'Cha Time - Robson' },
    'Bubble World - Robson': { store_id: 3, name: 'Bubble World - Robson' }
  },

  currentStore: null,

  actions: {

    signup: function() {
      console.log(this.get('userEmail'));
    },

    setCurrentStore: function(store){
      this.set('currentStore', this.get('storeData')[store]);
      console.log(this.get('currentStore'));
    },

    addToCart: function(drinks) {
      this.get('order').pushObject(drinks);
    },

    rmFromCart: function() {
      this.set("order", Ember.A([]));
      console.log (this.get('order'))
    },

    submitCart: function() {
    this.get('order').stringify;
    console.log(this.get('store.id'));
    Ember.$.ajax({
        url: "http://localhost:3000/orders",
        type: "POST",
        data: {
          order: this.get('order'),
          user: this.get('user.id'),
          store: this.get('currentStore.store_id')
        }
      },  function (response) {
            console.log ( " submitCart was successful ")
          });
    }
  }
});
