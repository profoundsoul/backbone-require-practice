var [a,,c]=[1,3,5];

console.log(a,c);
var {str, age}={
	str:'test',
	age:18,
	getname(){
		return '11111';
	}
}
console.log(str, age);


var [single, ...arr]=[1,3,43,6,3,,4,5454];
console.log(single, arr);