var Mock = require('mockjs');
var _ = require('lodash-compat');

var DEFAULT_STEP = 'x-step'
/**
 * 返回mockjs随机生成increment自增长标识
 * x-step 标识增量
 */
exports.getMockValue = function (version, schema) {
    var step = schema[DEFAULT_STEP];
    var argArr = [];
    if(!_.isUndefined(step) && !isNaN(+step)){
        argArr.push(+step);
    }
    return Mock.Random.increment.apply(Mock.Random, argArr);
}