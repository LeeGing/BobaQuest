import DS from 'ember-data';

export default DS.Model.extend({

  name: DS.attr('string'),
  address: DS.attr('string'),
  location: DS.attr('string'),
  phone: DS.attr('string'),
  drinks: DS.hasMany('drink'),
  transactions: DS.hasMany('transaction'),
  quests: DS.hasMany('quest')

});

