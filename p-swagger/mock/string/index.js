var Mock = require('mockjs');
var _ = require('lodash-compat');
var Unify = require('../unify');

var X_RANGE_NAME = 'x-range';
/**
 * 返回mockjs随机生成字符串 
 * schema.minLength
 * schema.maxLength
 * schema.x-range  表示字符集范围或常规字符集合
 *         lower
 *         upper
 *         number
 *         symbol
 *         除了上面4中类型以外为自定义字符串组合
 */
exports.getMockValue = function (version, schema) {
    var value = Unify.getMockValue(version, schema);
    if (!_.isUndefined(value)) {
        return value;
    }
    var argsArr = [];
    if(!_.isUndefined(schema[X_RANGE_NAME])){
        argsArr.push(schema[X_RANGE_NAME]);
    }
    if (!_.isUndefined(schema.minLength) && !isNaN(+schema.minLength)) {
        argsArr.push(+schema.minLength);
    }
    if (!_.isUndefined(schema.maxLength) && !isNaN(+schema.maxLength)) {
        argsArr.push(+schema.maxLength);
    }
    return Mock.Random.string.apply(Mock.Random, argsArr);
};