var Mock = require('mockjs');
var _ = require('lodash-compat');
var Unify = require('../unify');

/**
 * 返回mockjs随机英文名称
 */
exports.getMockValue = function (version, schema) {
    var value = Unify.getMockValue(version, schema);
    if (!_.isUndefined(value)) {
        return value;
    }
    var middle = Mock.Random.pick([true, false]);
    return Mock.Random.name(middle);
};