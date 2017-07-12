var Mock = require('mockjs');
var _ = require('lodash-compat');
var Unify = require('../unify');

/**
 * 返回mockjs随机title字符串 
 * schema.minLength
 * schema.maxLength
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
    return Mock.Random.title.apply(Mock.Random, argsArr);
};