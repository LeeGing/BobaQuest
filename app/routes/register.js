import Ember from 'ember';


export default Ember.Route.extend({
  model() {
    return Ember.Object.create();
  }
});




// export default Ember.Route.extend({

//     model: function(params) {

//         return Ember.$.ajax({

//       url: 'http://localhost:3000/users/',
//        type: "POST",
//        data: JSON.stringify({
//         email:  ,
//         password:
//       })
//      })
//     }
// });
