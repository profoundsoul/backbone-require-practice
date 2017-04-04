'use strict';

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = [getStatus].map(_regenerator2.default.mark);

function getStatus() {
	return _regenerator2.default.wrap(function getStatus$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					_context.next = 2;
					return 'notstart';

				case 2:
					_context.next = 4;
					return 'start';

				case 4:
					_context.next = 6;
					return 'pending';

				case 6:
					_context.next = 8;
					return 'resolved';

				case 8:
					_context.next = 10;
					return 'rejected';

				case 10:
					return _context.abrupt('return', 'ok');

				case 11:
				case 'end':
					return _context.stop();
			}
		}
	}, _marked[0], this);
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
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
	for (var _iterator = (0, _getIterator3.default)(q), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
		var o = _step.value;

		console.log('of--' + o);
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