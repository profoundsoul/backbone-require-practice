var Mock = require('mockjs');
var _ = require('lodash-compat');
var Unify = require('../unify');

var DEFAULT_PROTOCOL = 'x-protocol';
var DEFAULT_HOST = 'x-host';
/**
 * 返回mockjs随机时间
 * x-protocol 指定协议名称
 * x-host 指定主机名称
 */
exports.getMockValue = function (version, schema) {
    var value = Unify.getMockValue(version, schema);
    if (!_.isUndefined(value)) {
        return value;
    }
    var argArr = [];
    var protocol = schema[DEFAULT_PROTOCOL];
    if(!_.isUndefined(protocol)){
        argArr.push(protocol);
        var host = schema[DEFAULT_HOST];
        if(!_.isUndefined(host)){
            argArr.push(host);
        }
    }
    return Mock.Random.url.apply(Mock.Random, argArr);
};