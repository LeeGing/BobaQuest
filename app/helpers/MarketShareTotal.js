import Ember from 'ember';

export function MksTotal([a,b]) {
   return ((a/b) *100).toFixed(2) + "%"

}


export default Ember.Helper.helper(MksTotal);
