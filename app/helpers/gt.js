import Ember from 'ember';

export default Ember.Handlebars.registerHelper('gt', function(points){
  if (points > 25) {
    return "award"
  }

  else {
      return " no award"
  }

});
