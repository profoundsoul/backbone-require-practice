'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.arr = exports.get = undefined;

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var get = exports.get = function get(x) {
	return x + 1;
};

var arr = [1, 3, 4].map(function (x, i) {
	return x * i;
});
exports.arr = arr;

console.log(arr);

// Lexical this
var bobs = {
	name: 'linq',
	friends: ['wans', 'test'],
	printFriends: function printFriends() {
		var _this = this;

		this.friends.forEach(function (f) {
			console.log(_this.name + '- friend is ' + f);
		});
	}
};
bobs.printFriends();

//Lexical arguments
function createFacory() {
	var _arguments = arguments;

	var number = function number() {
		var result = [];
		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = (0, _getIterator3.default)(_arguments), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var arg = _step.value;

				result.push(arg * arg);
			}
		} catch (err) {
			_didIteratorError = true;
			_iteratorError = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion && _iterator.return) {
					_iterator.return();
				}
			} finally {
				if (_didIteratorError) {
					throw _iteratorError;
				}
			}
		}

		return result;
	};
	return number();
}

console.log(createFacory(1, 3, 6, 4, 7, 22.2, 43, 34, 54));