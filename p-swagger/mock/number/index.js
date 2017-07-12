var Mock = require('mockjs');
var _ = require('lodash-compat');
var Unify = require('../unify');

var EXTENSION_PROP_NAME = 'x-digit';
var DEFAULT_MIN = -1000;
var DEFAULT_MAX = 1000;
var DEFAULT_DIGIT = 2;
/**
 * schema.minimum
 * schema.maximum
 * schema.x-digit 定义小数点位数,逗号分隔表示范围
 */
exports.getMockValue = function (version, schema) {
    var value = Unify.getMockValue(version, schema);
    if (!_.isUndefined(value)) {
        return value;
    }
    var argsArr = [];
    if (!_.isUndefined(schema.minimum) && !isNaN(+schema.minimum)) {
        argsArr.push(+schema.minimum);
    }else{
        argsArr.push(DEFAULT_MIN);
    }
    if (!_.isUndefined(schema.maximum) && !isNaN(+schema.maximum)) {
        argsArr.push(+schema.maximum);
    }else{
        argsArr.push(DEFAULT_MAX);
    }
    if(argsArr.length ==2){
        let xdigit = schema[EXTENSION_PROP_NAME]
        if(!_.isUndefined(xdigit)){
            let digitArr = (xdigit+'').split(',');
            if(digitArr.length<2){
                digitArr.push(digitArr[0]);
            }
            argsArr = argsArr.concat(digitArr.map(x=>+x || DEFAULT_DIGIT));
        }
    }
    return Mock.Random.float.apply(Mock.Random, argsArr);
};