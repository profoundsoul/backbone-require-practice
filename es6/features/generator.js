function* getStatus(){
	yield 'notstart';
	yield 'start';
	yield 'pending';
	yield 'resolved';
	yield 'rejected';
	return 'ok';
}

var q = getStatus();
console.log(q.next(false));
console.log(q.next());
console.log(q.next());
console.log(q.next());

console.log(q.next());
console.log(q.next());
console.log(q.next());
console.log(q.next());


//var t = getStatus();
console.log('------------------------------------');
for (var o of q){
	console.log(`of--${o}`);
}