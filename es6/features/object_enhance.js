
let pObj = {
	getName(){},
	getVersion(){

	}
}
let checked = true;

let obj={
	__proto__:pObj,
	checked,
	getFeatures(){
		return 'xxxxx';
	},
	['prop_'+(()=>45)()]:'true'
}

console.log(obj);

export {obj}