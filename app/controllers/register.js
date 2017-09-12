import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {

    save(user) {

      Ember.$.ajax({
         url: "http://localhost:3000/users",
         type: "POST",
         data: {
          user: {
            "email": this.get('email'),
            "password": this.get('pwd'),
            "username": this.get('username'),
            "name": this.get('name'),

            }
        }
      })

     }
    }
})



