import Ember from 'ember';

export default Ember.Route.extend({
  model: function(param) {
    return Ember.$.ajax({
      type: 'GET',
      url: 'http://localhost:3000/transactions',
      data: {
        id: param.id
      },
      success: function(data){
        return data;
      }, error: function(e) {
        console.log('banana errors', e.status);
      }
    });
  },
});
