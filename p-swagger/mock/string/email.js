var Mock = require('mockjs');
var _ = require('lodash-compat');
var Unify = require('../unify');

var DEFAULT_DOMAIN = 'x-domain';
/**
 * 返回mockjs随机电子邮件地址
 * x-domain 指定域名
 */
exports.getMockValue = function (version, schema) {
    var value = Unify.getMockValue(version, schema);
    if (!_.isUndefined(value)) {
        return value;
    }
    var argArr = [];
    var domain = schema[DEFAULT_DOMAIN];
    if (!_.isUndefined(domain)) {
        argArr.push(domain);
    }
    return Mock.Random.email.apply(Mock.Random, argArr);
};