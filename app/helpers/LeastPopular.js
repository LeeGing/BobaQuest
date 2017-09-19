import Ember from 'ember';

export function LeastPopular([a,b]) {
  if ( a > b){
    return "Lyche drink"
    }
  else {
    return "Taro drink"
  }
}

export default Ember.Helper.helper(LeastPopular);
