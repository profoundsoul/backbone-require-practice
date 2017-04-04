'use strict';

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = require('babel-runtime/helpers/get');

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Book = function () {
	function Book(isbn) {
		(0, _classCallCheck3.default)(this, Book);
	}

	(0, _createClass3.default)(Book, [{
		key: 'getBookISBN',
		value: function getBookISBN() {
			return 'UC023023252';
		}
	}, {
		key: 'getBookName',
		value: function getBookName() {
			return 'bookName';
		}
	}, {
		key: 'getProductDate',
		value: function getProductDate() {
			return new Date();
		}
	}, {
		key: 'getPrice',
		value: function getPrice() {}
	}]);
	return Book;
}();

var SocialBook = function (_Book) {
	(0, _inherits3.default)(SocialBook, _Book);

	function SocialBook(ibsn, who) {
		(0, _classCallCheck3.default)(this, SocialBook);
		return (0, _possibleConstructorReturn3.default)(this, (SocialBook.__proto__ || (0, _getPrototypeOf2.default)(SocialBook)).call(this, ibsn));
	}

	(0, _createClass3.default)(SocialBook, [{
		key: 'getPrice',
		value: function getPrice() {
			(0, _get3.default)(SocialBook.prototype.__proto__ || (0, _getPrototypeOf2.default)(SocialBook.prototype), 'getPrice', this).call(this);
		}
	}]);
	return SocialBook;
}(Book);