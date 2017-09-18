import Ember from 'ember';

export function LeastPopular([a,b]) {
  if ( a > b){
    return "Your least popular drink is Lyche."
    }
  else {
    return "Your least popular drink is Taro."
  }
}

export default Ember.Helper.helper(LeastPopular);
