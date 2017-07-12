var Mock = require('mockjs');
var _ = require('lodash-compat');
var Unify = require('../unify');

var X_RANGE_NAME = 'x-range';
var DEFAULT_REG = /[\s\S]*/;
/**
 * 返回mockjs随机生成字符串 
 * schema.x-range  表示生成字符串的正则表达式
 */
exports.getMockValue = function (version, schema) {
    var value = Unify.getMockValue(version, schema);
    if (!_.isUndefined(value)) {
        return value;
    }
    var argsArr = [];
    var regexp = schema[X_RANGE_NAME];
    if(!_.isUndefined(regexp) && regexp && regexp.trim()){
        regexp = regexp.trim();
        if(/^\//.test(regexp)){
            //需要移除正则表达式特殊符号
            regexp = regexp.substr(1);
            var lastIdx = regexp.lastIndexOf('/');
            if(lastIdx>-1){
                regexp = regexp.substr(0, lastIdx);
            }
        }
        argsArr.push(new RegExp(regexp));
    }else{
        argsArr.push(DEFAULT_REG);
    }
    return Mock.mock.apply(Mock, argsArr);
};