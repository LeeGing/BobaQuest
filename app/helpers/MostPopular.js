import Ember from 'ember';

export function Popular([a,b]) {
   if ( a > b){
    return "Your most popular drink is Taro."

    }
   else {
    return "Your most popular drink is Lyche."
   }

}


export default Ember.Helper.helper(Popular);
