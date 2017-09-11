import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  drinks_points: DS.attr('number'),
  store: DS.belongsTo('store'),
  transactions: DS.hasMany('transaction')

});
