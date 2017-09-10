import DS from 'ember-data';

export default DS.Model.extend({
  tot: DS.attr('string'),
  points: DS.attr('number'),
  users: DS.belongsTo('user'),
  stores: DS.belongsTo('store'),
  drinks: DS.belongsTo('drink')

});


