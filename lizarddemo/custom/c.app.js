/**
 * Created by mumu on 2016/7/11.
 */
define(['Core'], function (Core) {
    return new Core.Class({
        __propertys__: function () {
            this.defaultView = '';
            this.viewRootPath = '';
            this.views = [];
        },
        initialize: function (options) {
            for(var k in options) {
                if(options.hasOwnProperty(k)) {
                    this[k] = options[k];
                }
            }
        },

        start: function () {
            this.createViewPort();
            this.listenerHash();
        },
        stop: function () {
            window.removeEventListener('hashchange');
        },

        listenerHash: function () {
            var _this = this;
            window.addEventListener('hashchange', function () {
                _this.onHashChange.apply(_this, arguments);
            });
        },
        onHashChange: function(e) {
            //解析URL
            console.log(e);
            if(e.newURL !== e.oldURL) {
                var hash = location.hash,
                    path = hash.slice(1);
                if(!path) {
                    path = this.defaultView;
                }
                this.switchView(this.viewRootPath + path);
            }
        },

        switchView:function(path) {
            //切换页面
            var id = path;
            if(!this.views[id]) {
                this.loadView(id, function(View){
                    var curView = new View();
                    curView.id = id;
                    this.views[id] = curView;
                });
            }else{

            }
        },
        loadView:function(id, fn) {
            var _this = this;
            require([id], function(view) {
                (typeof fn === 'function') && fn.apply(_this, arguments);
            }, function(err) {
                console.log('initialize views: ' + id + "failed! ", err);
            });
        },
        //创建dom结构
        createViewPort: function () {
            if (this.isCreate) return;
            var html = [
                '<div class="main-frame">',
                '<div class="main-viewport"></div>',
                '<div class="main-state"></div>',
                '</div>'
            ].join('');
            this.mainframe = $(html);
            this.viewport = this.mainframe.find('.main-viewport');
            this.statedom = this.mainframe.find('.main-state');
            var container = $('#main');
            container.empty();
            container.append(this.mainframe);
            this.isCreate = true;
        }

    });
});