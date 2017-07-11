var Mock = require('mockjs');
var _ = require('lodash-compat');
var Unify = require('../unify');

/**
 * 返回mockjs随机生成布尔值
 * schema.minimum 表示true的概率
 * schema.maximum 表示false的概率
 */
exports.getMockValue = function (version, schema) {
    var value = Unify.getMockValue(version, schema);
    if (!_.isUndefined(value)) {
        return value;
    }
    var argsArr = [];
    if (!_.isUndefined(schema.minimum) && !isNaN(+schema.minimum)) {
        argsArr.push(+schema.minimum);
    }
    if (!_.isUndefined(schema.maximum) && !isNaN(+schema.maximum)) {
        argsArr.push(+schema.maximum);
    }
    if(argsArr.length){
        argsArr.push(true);
    }
    return Mock.Random.boolean.apply(Mock.Random, argsArr);
};