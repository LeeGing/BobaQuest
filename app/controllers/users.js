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

  store_details: [
    {name: 'Bubble Tea', tagline: "bubbly"},
    {name: 'Cha Time', tagline: "this is Cha Time's Menu"},
    {name: 'Zeta', tagline: "all Zeta, all day"},
  ],

  order: [],

  actions: {

    signup: function() {  
      console.log(this.get('userEmail'));
    },

    addToCart: function(drinks) {
      console.log(this.get('order'));
      console.log(JSON.stringify(this.get('order')));
      if (this.get('order') === null){
        this.set("order", []) && this.get("order").push(drinks)
        console.log (this.get('order'))
      } else {
        this.get("order").push(drinks);
        console.log(this.get('order'));
      }
    },

    rmFromCart: function() {
      this.set("order", []);
      console.log (this.get('order'))
    },

    submitCart: function() {
    this.get('order').stringify;
    console.log(this.get('order'));
    Ember.$.ajax({
        url: "http://localhost:3000/orders",
        type: "POST",
        data: {
          order: this.get('order'),
          user: this.get('user.id') 
          // unncessary sever should know
        }
      }, function success(response) {
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
