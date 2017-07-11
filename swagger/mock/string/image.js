var Mock = require('mockjs');
var _ = require('lodash-compat');
var Unify = require('../unify');

var DEFAULT_STYLE = 'x-style';
var COMMON_SPLIT_CHAR = ',';
/**
 * 返回mockjs随机图片
 * x-style的值有如下规则，多个属性值采用逗号分隔：
 *       size
 *       size, background
 *       size, background, text
 *       size, background, foreground, text
 *       size, background, foreground, format, text
 */
exports.getMockValue = function (version, schema) {
    var value = Unify.getMockValue(version, schema);
    if (!_.isUndefined(value)) {
        return value;
    }
    var argArr = [];
    var style = schema[DEFAULT_STYLE];
    if(!_.isUndefined(style)){
        //识别style是否为多个属性值
        argArr=(style+'').split(COMMON_SPLIT_CHAR).map(x=>x.trim())
    }
    return Mock.Random.image.apply(Mock.Random, argArr);
};