var Mock = require('mockjs');
/**
 * 返回mockjs随机生成id标识
 */
exports.getMockValue = function (version, schema) {
    return Mock.Random.id();
}