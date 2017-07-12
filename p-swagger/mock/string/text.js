var Mock = require('mockjs');
var _ = require('lodash-compat');
var Unify = require('../unify');

/**
 * 返回mockjs随机paragraph段落字符串 
 * schema.minLength 表示最小段落数
 * schema.maxLength 表示最大的段落数
 */
exports.getMockValue = function (version, schema) {
    var value = Unify.getMockValue(version, schema);
    if (!_.isUndefined(value)) {
        return value;
    }
    var argsArr = [];
    if (!_.isUndefined(schema.minLength) && +schema.minLength) {
        argsArr.push(+schema.minLength);
    }
    if (!_.isUndefined(schema.maxLength) && +schema.maxLength) {
        argsArr.push(+schema.maxLength);
    }
    return Mock.Random.paragraph.apply(Mock.Random, argsArr);
};