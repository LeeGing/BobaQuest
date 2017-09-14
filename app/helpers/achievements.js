import Ember from 'ember';

export function achievements(params) {
	let points = params
	if (points >49) {
		return "50+ Points!"
	}
	else if (points > 39) {
		return 'L1'

	}
	else if (points > 29) {
		return "Level 3 (30Points)!"
	}
	else if (points > 19) {
		return "Level 2 (20Points)!"
	}
	else if (points > 9) {
		return "Level 1 (10Points)"
	}
	else {
		return "Locked"
	}
}

export default Ember.Helper.helper(achievements);
