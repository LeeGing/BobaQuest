import Ember from 'ember';

export default Ember.Service.extend({
  email: Ember.computed.alias('userHash.email'),
  userId: Ember.computed.alias('userHash.id'),
  username: Ember.computed.alias('userHash.username'),

  userHash: null,

  setUserHash: function(username) {
    return Ember.$.getJSON(`http://localhost:3000/users/find/${username}`)
      .catch(error => {
        console.log(error);
      })
      .then(response => {
        this.set('userHash', response.get('firstObject'));
      });
  }
});
