// import 'babel-polyfill';

var fib={
	[Symbol.iterator](){
		let pre=0, cur=1;
		return {
			next(){
				[pre, cur]=[cur, pre+cur];
				return {done:false, value:cur}
			}
		}
	}
}

for(var n of fib){
	if(n>1000){
		break;
	}
	console.log(n);
}

