import DS from 'ember-data';

export default DS.Model.extend({

  name: DS.attr('string'),
  age: DS.attr('number'),
  password: DS.attr('string'),
  email: DS.attr('string'),
  username: DS.attr('string'),
  transactions: DS.hasMany('transaction')
});


