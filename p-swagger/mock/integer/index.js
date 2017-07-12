var Mock = require('mockjs');
var _ = require('lodash-compat');
var Unify = require('../unify');

var DEFAULT_MIN = -1000;
var DEFAULT_MAX = 1000;

/**
 * 返回mockjs随机生成整数
 * schema.minimum
 * schema.maximum
 */
exports.getMockValue = function (version, schema) {
    var value = Unify.getMockValue(version, schema);
    if (!_.isUndefined(value)) {
        return value;
    }
    
    var argsArr = [];
    if (!_.isUndefined(schema.minimum) && !isNaN(+schema.minimum)) {
        argsArr.push(+schema.minimum);
    }else{
        argsArr.push(DEFAULT_MIN);
    }
    if (!_.isUndefined(schema.maximum) && !isNaN(+schema.maximum)) {
        argsArr.push(+schema.maximum);
    }else{
        argsArr.push(DEFAULT_MAX);
    }
    return Mock.Random.integer.apply(Mock.Random, argsArr);
};