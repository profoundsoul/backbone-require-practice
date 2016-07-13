/**
 * Created by mumu on 2016/7/13.
 */
define(['cBase'], function (cBase) {
    var IListRefresh = new cBase.Class({
        __propertys__: function () {
            //mousestart相对于Page的位置
            this.startY = 0 ;
            //容器定位初始Y坐标值
            this.originY = -70;

            //mousemove相对于Page的位置
            this.pointY = 0;
            //容器定位Y坐标值
            this.y = -70;

            //刷新时相对Y坐标
            this.refreshY = 20;

            //最大的Y值
            this.maxRange = 180;

            //移动灵敏度控制,最小值为5
            this.moveSensibility = 5;
            //刷新灵敏度控制，最小值为30
            this.refreshSensibility = 20;

            //动画事件
            this.transitionDuration = 300;

            this.box = $('body');
            this.template = '<div class="list_fresh_box">' +
                                '<div class="fresh_box">' +
                                    '<div class="fresh_icon addspin"></div>' +
                                '</div>' +
                            '</div>';
            this.tplBoxClsName = '.list_fresh_box';
        },
        initialize: function (options) {
            $.extend(this, options);
            this.createRoot();
        },
        createRoot: function () {
            this.box.append(this.template);
            //获取最新的fleshBox
            this.freshBox = this.box.find(this.tplBoxClsName);
        },
        initPoint: function () {

        },
        bindEvent: function () {
            var _this = this,
                bind = (function (fn) {
                    return function () {
                        fn.apply(_this, arguments)
                    };
                });
            this.box.on('touchstart', bind(this._start));
            this.box.on('touchmove', bind(this._move));
            this.box.on('touchend', bind(this._end));
        },

        listener: function (fn) {
            this.initPoint();
            this.bindEvent();
            this.refreshFn = fn || function(){};
        },
        destory: function () {
            this.box.off('touchstart');
            this.box.off('touchmove');
            this.box.off('touchend');
            this.box.find(this.tplBoxClsName).remove();
        },
        hide: function(){
            this._translate(this.originY);
        },

        _start: function (e) {
            e =  e.touches ? e : e.originalEvent;
            var point = e.touches ? e.touches[0] : e;

            this._translateTime();
            this.pointY = point.pageY;
            this.startY = point.pageY;

            console.log('重新开始！');

            this._translate(this.y = this.originY);
        },
        _move: function (e) {
            e =  e.touches ? e : e.originalEvent;
            var point = e.touches ? e.touches[0] : e;
            var deltaY = point.pageY - this.pointY,
                newY = Math.round(deltaY + this.y),
                distanceY = Math.round(point.pageY-this.startY);
            this.pointY = point.pageY;
            if(Math.abs(deltaY) <this.moveSensibility || deltaY < 0) {
                //此处必须返回True，如果是false可能会禁用掉当前的触摸事件
                return true;
            }
            newY = newY > this.maxRange ? this.maxRange : newY;
            console.log(deltaY, newY, this.pointY);
            this._translate(newY);
        },
        _end: function (e) {
            var deltaY = Math.round(this.pointY - this.startY);
            console.log('前'+deltaY);
            if(Math.abs(deltaY) >this.refreshSensibility) {
                console.log('后'+deltaY);
                this._translateTime(this.transitionDuration);
                this._translateTimeFunction();
                this._translate(this.refreshY);
                this._exec();
            }
        },
        _exec : function(){
            var _this = this;
            setTimeout(function(){
                (typeof _this.refreshFn === 'function') && _this.refreshFn.call(_this);
            }, 100);
        },
        _translateTimeFunction: function () {
            this.freshBox.get(0).style["transition-timing-function"] = "cubic-bezier(0.1, 0.57, 0.1, 1)";
        },
        _translateTime: function (time) {
            time = time || 0;
            this.freshBox.get(0).style["transition-duration"] = time + "ms";
        },
        _translate: function (newY) {
            this.freshBox.get(0).style["transform"] = "translateY(" + newY + "px) translateZ(0px)";
            this.y = newY;
        }
    });

    return IListRefresh;
});