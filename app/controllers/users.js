import Ember from 'ember';

export default Ember.Controller.extend({
  users: null,
  order: Ember.A([]),

  isLvl1: Ember.computed('points', function (){
   return this.get('points') > 9;
  }), //conditional statement for achievements hbs

  isLvl2: Ember.computed('points', function (){
   return this.get('points') > 19;
  }), //conditional statement for achievements hbs

  isLvl3: Ember.computed('points', function (){
   return this.get('points') > 29;
  }), //conditional statement for achievements hbs

  store_details: Ember.A([
    {name: 'Bubble Tea', tagline: "bubbly"},
    {name: 'Cha Time', tagline: "this is Cha Time's Menu"},
    {name: 'Zeta', store_id: 1 },
  ]),

  storeData: {
    'Bubble Tea': { store_id: 1, name: 'Bubble Tea' },
    'Cha Time': { store_id: 2, name: 'Cha Time' },
    'Zeta': { store_id: 3, name: 'Zeta' }
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
          // unncessary sever should know
        }
      }, function (response) {
           console.log ( " submitCart was successful ")
           // trigger next step.
           // show order created
           // navigate to wherever you want to go. route. order confirmati0on route.
              // ^ another ajax request.
               // each time we look at order confirmation page we look at the id of the order.
               // display on page. 
      });
    }
  }
});
