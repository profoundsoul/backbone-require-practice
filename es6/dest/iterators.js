"use strict";

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _defineProperty2 = require("babel-runtime/helpers/defineProperty");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _iterator2 = require("babel-runtime/core-js/symbol/iterator");

var _iterator3 = _interopRequireDefault(_iterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import 'babel-polyfill';

var fib = (0, _defineProperty3.default)({}, _iterator3.default, function () {
	var pre = 0,
	    cur = 1;
	return {
		next: function next() {
			var _ref = [cur, pre + cur];
			pre = _ref[0];
			cur = _ref[1];

			return { done: false, value: cur };
		}
	};
});

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
	for (var _iterator = (0, _getIterator3.default)(fib), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
		var n = _step.value;

		if (n > 1000) {
			break;
		}
		console.log(n);
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