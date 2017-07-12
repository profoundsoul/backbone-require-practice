
var _ = require('lodash-compat');
var fs = require('fs');
var path = require('path');
var Mock = require('mockjs');

var DEFAULT_ARRAY_MIN = 0;
var DEFAULT_ARRAY_MAX = 10;
var X_FORMAT = "x-format";

function getMockValue (version, schema) {
    var type = _.isPlainObject(schema) ? schema.type : schema;
    var Random = Mock.Random;
    var value;
    if (!type) {
        type = 'object';
    }
    switch (type) {
        case 'array':
            value = [];
            var minimum = schema.minimum || DEFAULT_ARRAY_MIN;
            var maximum = schema.maximum || DEFAULT_ARRAY_MAX;
            var count = Random.integer(minimum, maximum);
            for (var i = 0; i < count; i++) {
                value.push(getMockValue(version, _.isArray(schema.items) ? schema.items[0] : schema.items));
            }
            break;
        case 'object':
            value = {};
            _.each(schema.allOf, function (parentSchema) {
                _.each(parentSchema.properties, function (property, propName) {
                    value[propName] = getMockValue(version, property);
                });
            });
            _.each(schema.properties, function (property, propName) {
                value[propName] = getMockValue(version, property);
            });
            break;
        default:
            var xformat = schema[X_FORMAT];
            var filepath = '';
            var argArr = [__dirname, type];
            if (xformat) {
                //尝试一次是否存在指定类型的特殊x-format类型数据
                argArr.push(xformat);
                filepath = path.join.apply(path, argArr);
                if (!fs.existsSync(filepath.trim() + '.js')) {
                    argArr.pop();
                }
            }
            filepath = path.join.apply(path, argArr);
            try {
                var PrimitiveParseModule = require(filepath);
                value = PrimitiveParseModule.getMockValue(version, schema);
                break;
            } catch (err) {
                throw err;
            }
    }
    return value;
};

exports.getMockValue = getMockValue;