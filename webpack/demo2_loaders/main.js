/**
 * Created by mumu on 2017/4/5.
 */
import constant from './constant.js';

var common = require('./common.js');

let add = (x, y)=>{
    console.log(common.getJSON());
    console.log('111111');
    return x+y;
};

console.log(add(1,3));

export {add}