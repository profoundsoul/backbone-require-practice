var Mock = require('mockjs');
/**
 * 返回mockjs随机生成guid标识
 */
exports.getMockValue = function (version, schema) {
    return Mock.Random.guid();
}