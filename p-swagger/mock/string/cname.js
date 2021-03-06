var Mock = require('mockjs');
var _ = require('lodash-compat');
var Unify = require('../unify');

/**
 * 返回mockjs随机中文名称
 */
exports.getMockValue = function (version, schema) {
    var value = Unify.getMockValue(version, schema);
    if (!_.isUndefined(value)) {
        return value;
    }
    return Mock.Random.cname();
};