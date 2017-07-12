export let get = x=>x+1;
 
let arr = [1,3,4].map((x, i)=>x*i);
export {arr};
console.log(arr);


// Lexical this
var bobs={
	name:'linq',
	friends:['wans', 'test'],
	printFriends(){
		this.friends.forEach(f=>{
			console.log(`${this.name}- friend is ${f}`);
		});
	}
}
bobs.printFriends();

//Lexical arguments
function createFacory(){
	let number = ()=>{
		let result = [];
		for(let arg of arguments){
			result.push(arg * arg);
		}	
		return result;
	}
	return number();
}

console.log(createFacory(1,3,6,4,7,22.2,43,34,54));