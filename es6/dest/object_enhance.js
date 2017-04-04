'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.obj = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pObj = {
	getName: function getName() {},
	getVersion: function getVersion() {}
};
var checked = true;

var obj = (0, _defineProperty3.default)({
	__proto__: pObj,
	checked: checked,
	getFeatures: function getFeatures() {
		return 'xxxxx';
	}
}, 'prop_' + function () {
	return 45;
}(), 'true');

console.log(obj);

exports.obj = obj;