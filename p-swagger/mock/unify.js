var Mock = require('mockjs');
var _ = require('lodash-compat');
exports.getMockValue = function(version, schema) {
    if (version === '1.2' && !_.isUndefined(schema.defaultValue)) {
        return schema.defaultValue;
    } else if (version === '2.0' && !_.isUndefined(schema.default)) {
        return schema.default;
    } else if (_.isArray(schema.enum)) {
        var len = schema.enum.length;
        return schema.enum[Mock.Random.integer(0, len - 1)];
    }
}