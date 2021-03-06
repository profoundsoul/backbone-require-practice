var Mock = require('mockjs');
var _ = require('lodash-compat');
var Unify = require('../unify');

var DEFAULT_STYLE = 'x-style';
/**
 * 返回mockjs随机日期
 * x-style 指定日期格式
 */
exports.getMockValue = function (version, schema) {
    var value = Unify.getMockValue(version, schema);
    if (!_.isUndefined(value)) {
        return value;
    }
    var argArr = [];
    var style = schema[DEFAULT_STYLE];
    if(!_.isUndefined(style)){
        argArr.push(style);
    }
    return Mock.Random.date.apply(Mock.Random, argArr);
};