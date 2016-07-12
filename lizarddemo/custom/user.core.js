/**
 * Created by mumu on 2016/7/12.
 */
define([], function(){
    var Core = {};

    //1、需要构建类的属性和方法对象
    //
    //2、建立通用构造函数（__propertys__、initialize 两个通用方法）
    //
    //3、构造函数静态属性（supClass-Object、subClasses-Array）
    //
    //4、拷贝入参（属性和方法）到原型中-----如果有__propertys__、重写该函数
    //
    //5、重设原型链构造函数
    //
    //6、返回构造函数
    Core.Class = function(){
        var parent = null;
        var propertys = [].slice.call(arguments);
        if(!propertys.length || propertys.length >2) {
            return;
        }
        if(typeof propertys[0] === 'function') {
            parent = propertys.shift();
        }
        propertys = propertys[0];

        function Atom(){
            __propertys.apply(this, arguments);
            this.initialize.apply(this, arguments);
        }

        Atom.supclass = parent;
        Atom.subclasses = [];

        var subpropertys = propertys.__propertys__ || function(){};
        var suppropertys = parent ? parent.prototype.__propertys__ : function(){};

        if(parent) {
            var F = function(){};
            F.prototype = parent.prototype;
            F.prototype.constructor = F;
            Atom.propertype = new F();
            parent.subclasses.push(Atom);
        }

        for(var k in propertys) {
            if(k){
               if(k === 'initialize') {
                   //initialize是否存在第一个参数为$super,如果存在就重写initialize方法
                   if(propertys[k].toString() === '$super') {
                       var value = propertys[k];
                       propertys[k] = (function(){
                           var args = [parent.prototype.initialize];
                           value.apply(this, args.concat(arguments));
                       });
                   }
               }
                Atom.prototype[k] = propertys[k];
            }
        }

        var __propertys = function(){
            suppropertys.apply(this, arguments);
            subpropertys.apply(this, arguments);
        };

        Atom.prototype.constructor = Atom;
        return Atom;
    };

    return Core;
});
