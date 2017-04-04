// 最基础版本Promise
function base() {
    var p = new Promise(function(resolved, rejected) {
        resolved();
    });
    p.then(function() {
        console.log('then excute！');
    }).catch(function() {
        console.log('catch excute！');
    });
}
base();

// 图片加载
function loadImageAsync(src) {
    return new Promise(function(resolve, reject) {
        let img = new Image();
        img.onload = function() {
            resolve(arguments);
        };
        img.onerror = function() {
            reject(arguments);
        }
        img.src = src;
    });
}

let p = loadImageAsync('//new.ttt.com/img');
p.then(x => {
    console.log('Image loaded！');
}).catch(err => {
    console.log('Image loaded Error！');
});


Promise.resolve(1).then(v=>console.log(`Promise.resolve Test: ${v}`));


// Promise All parallal 并行加载
// Promise.all   相当于all，并行执行，全部成功或有一个失败，改变状态
// Promise.race  相当于any，并行执行，任何一个执行完成即可！改变状态
let dStart = +new Date();
let p1 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let d = Math.ceil(Math.random() * 10);
        if (d % 2) {
        	resolve('p1 success!');
        }else{
        	reject('p1 failed!');
        }
    }, 2000)

});
let p2 = new Promise(function(resolve, reject) {
setTimeout(function() {
        let d = Math.ceil(Math.random() * 10);
        if (d % 2) {
        	resolve('p2 success!');
        }else{
        	reject('p2 failed!');
        }
    }, 5000)
});
Promise.all([p1, p2]).then(function(v1, v2) {
	let dEnd = +new Date();

	console.log('both success' +(dEnd - dStart)/1000, arguments);
}).catch(function(err1, err2) {
	let dEnd = +new Date();
	console.log('error!' +(dEnd - dStart)/1000, arguments);
});
