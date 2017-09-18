import Ember from 'ember';

export default Ember.Service.extend({
  userHash: null,

  email: Ember.computed.alias('userHash.email'),
  userId: Ember.computed.alias('userHash.id'),
  username: Ember.computed.alias('userHash.username'),

  setUserHash: function(username) {
    return Ember.$.getJSON(`http://localhost:3000/users/find/${username}`)
      .catch(error => {
        console.log(error);
      })
      .then(response => {
        console.log('response', response.get('firstObject'));
        this.set('userHash', response.get('firstObject'));
        console.log('set hash', this.get('userHash'))
      });
  }
});
