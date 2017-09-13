import Ember from 'ember';

export function achievements(params) {
	let points = params
	if (points > 25) {
		return "Unlocked"
	}
	else if (points > 10) {
		return "Locked"
	}
}

export default Ember.Helper.helper(achievements);
