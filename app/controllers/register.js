import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    createUser: function() {
      var email = this.get('userEmail');
      var password = this.get('userPassword');
       
      var user = this.store.createRecord('user', {
        email: email,
        password: password
      });

      user.save();
     }
   }
});
  // actions: {
  //   save(user) {
  //     let newUser = user;
  //     newUser.save().catch((error) => {
  //         this.set('errorMessage', error)
  //       })
  //       .then(() => {
  //         this.get('session')
  //           .authenticate('authenticator:jwt',
  //             newUser.get('email'), newUser.get('password'))
  //           .catch((reason) => {
  //             this.set('errorMessage', reason.error || reason);
  //           });
  //           this.transitionToRoute("index")
  //       })
  //   }
  // }});
// 

