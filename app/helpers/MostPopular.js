import Ember from 'ember';

export function Popular([a,b]) {
   if ( a > b){
    return "Taro drink"
    }
   else {
    return "Lyche drink"
   }
}

export default Ember.Helper.helper(Popular);
