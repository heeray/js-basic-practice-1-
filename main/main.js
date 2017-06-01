// Write your cade below:
function caclRemaindar(a,b) {
	var x;
	x=a%b;
	return x;
};

function caclSum(numArray) {
	let sum=0;
	numArray.forEach((item)=>{sum+=item});
	return sum;
};

function caclSumInConditon(numArray,a) {
	let sum=0;
	numArray.forEach((item)=>{
		if(item<a)
			sum+=item;
	});
	return sum;
};

module.exports = {
    caclRemaindar,
    caclSum,
    caclSumInConditon
}