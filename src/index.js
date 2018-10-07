module.exports = function longestConsecutiveLength(array) {

	let counter=1, maxSequence=0;
	if (array.length<2){
		return array.length;
	}
	if(array.length<10){
		array.sort((a,b)=>a-b);
	}
	for (let i=0; i<array.length; i++){
		if(array[i]+1==array[i+1]){
			counter++;
		}
		if(array[i]==array[i+1]){
			continue;
		}
		if(counter>maxSequence){
			maxSequence=counter;
		}
		if(array[i]+1!=array[i+1]){
			counter=1;
		}
	}
	return maxSequence;
}