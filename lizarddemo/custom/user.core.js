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
        var propertys = arguments.slice();
        if(!propertys.length || propertys.length >2) {
            return;
        }
        if(typeof propertys[0] === 'function') {
            parent = propertys.shift();
        }
        propertys = propertys[0];

        function Atom(){
            this.__propertys.apply(this, arguments);
            this.initialize.apply(this, arguments);
        }

        Atom.supclass = null;
        Atom.subclasses = [];

        for(var k in propertys) {
            if(k && k !== '__propertys_' && k !== 'initialize')
            Atom.property[k] = propertys[k];
        }

        Atom.property.constructor = Atom;
        return Atom;
    };

    return Core;
});
