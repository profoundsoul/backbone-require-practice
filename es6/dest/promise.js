'use strict';

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 最基础版本Promise
function base() {
    var p = new _promise2.default(function (resolved, rejected) {
        resolved();
    });
    p.then(function () {
        console.log('then excute！');
    }).catch(function () {
        console.log('catch excute！');
    });
}
base();

// 图片加载
function loadImageAsync(src) {
    return new _promise2.default(function (resolve, reject) {
        var img = new Image();
        img.onload = function () {
            resolve(arguments);
        };
        img.onerror = function () {
            reject(arguments);
        };
        img.src = src;
    });
}

var p = loadImageAsync('//new.ttt.com/img');
p.then(function (x) {
    console.log('Image loaded！');
}).catch(function (err) {
    console.log('Image loaded Error！');
});

var dStart = +new Date();
var p1 = new _promise2.default(function (resolve, reject) {
    setTimeout(function () {
        var d = Math.ceil(Math.random() * 10);
        if (d % 2) {
            resolve('p1 success!');
        } else {
            reject('p1 failed!');
        }
    }, 2000);
});
var p2 = new _promise2.default(function (resolve, reject) {
    setTimeout(function () {
        var d = Math.ceil(Math.random() * 10);
        if (d % 2) {
            resolve('p2 success!');
        } else {
            reject('p2 failed!');
        }
    }, 5000);
});
_promise2.default.all([p1, p2]).then(function (v1, v2) {
    var dEnd = +new Date();

    console.log('both success' + (dEnd - dStart) / 1000, arguments);
}).catch(function (err1, err2) {
    var dEnd = +new Date();
    console.log('error!' + (dEnd - dStart) / 1000, arguments);
});