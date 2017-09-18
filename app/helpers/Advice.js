import Ember from 'ember';

export function Advice([a,b,c,d,e,f]) {

var totalShare = a/b
var taroShare = c/e
var lycheShare = d/f

  if ( totalShare > 0.5 ){
    return "Your business is doing well. You own at least 50% of marketshare."
  }
  else {
      if ( taroShare < 0.2 || lycheShare > 0.2 ){
        return "Your taro sale is low. Increase taro sale."
    }
      else if ( taroShare > 0.2 || lycheShare < 0.2){
        return " Your lyche share is low. Increase lyche sale"
    }
       else {
        return " Your overall production share is low. Need to increase overall sales"
    }
  }
}

export default Ember.Helper.helper(Advice);
