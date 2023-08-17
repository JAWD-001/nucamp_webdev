//big o is space-time complexity, essentially the amount of time and memory used for algorithms
//linear time = O(n) means that the number of operations increases by numer of n
let chars = ['nemo', 'dory']

let chars2 = ['simba', 'nala', 'scar', 'mufaasa']

function loopChars(chars){
	for (i = 0; i < chars.lenght; i++) {
		if (chars[i].startsWith('s') === 'simnba') {
			console.log('found s!');
		}
	}
}
//function is linear because it loops through every index of an array once to check for condition
//regardless of the amount, the work stays the same and will increase at a linear rate