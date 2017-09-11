import Ember from 'ember';


// export default Ember.Route.extend({
//   model() {
//     return this.store.createRecord('user')
//   }
// });




export default Ember.Route.extend({

	model: function(params) {

		return Ember.$.ajax({

  	url: 'http://localhost:3000/users/',
 	  type: "POST",
 	  data: JSON.stringify({

    	email: "ab@ab.com" ,
    	password: "1111"

  	})

 	})
	}
});