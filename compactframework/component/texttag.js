/**
 * Created by mumu on 2017/2/5.
 */
(function ($) {
    var BaseView = $.custom.Component({
        events:{
            'click': 'focusRoot'
        },
        __propertys__: function () {
            this.textDom;
            this.boxDom;

            //动态事件绑定
            var _events = this.events;
            _events['click .' + this.delClass] = 'delTag';
            _events['keydown .' + this.textClass] = 'keyText';
            _events['focus .' + this.textClass] = 'focusText';
            _events['blur .' + this.textClass] = 'blurText';


            //tag模板函数
            this.tagTplFn = _.template([
                '<div class="tag" data-item="<<=data.text>>">',
                '   <span class="cnt">',
                '       <i><<=data.text>></i>',
                '       <a href="javascript:void(0);" class="' + this.delClass + '"></a>',
                '   </span>',
                '</div>'
            ].join(' '));
        },
        initialize: function () {
            var _el = this.$el;
            _el.html(this._createHtml());
            this.textDom = _el.find('.' + this.textClass);
            this.boxDom = _el.find('.' + this.boxClass);

            this._initTextTags();
        },

        delTag: function (e) {
            e.preventDefault();
            var target = $(e.currentTarget),
                tagItem = target.parents('[data-item]');
            tagItem.remove();
            this._callChangedEvent();
        },
        focusRoot: function (e) {
            this.textDom.focus();
            return false;
        },
        focusText: function (e) {
            var target = $(e.currentTarget);
            target.prop('placeholder', '');
        },
        blurText: function (e) {
            var target = $(e.currentTarget);
            if (!$.trim(this.getText())) {
                target.prop('placeholder', this.placeholder);
            }
        },
        keyText: function (e) {
            if (e.keyCode === 32 || e.which === 32) {
                //监听空格键
                var target = $(e.currentTarget),
                    text = target.val();
                return !this.addTag(text);
            } else if (e.keyCode === 8 || e.which === 8) {
                //删除键
                var text = this.textDom.val() || '';
                // 如果为空值，空格键删除单项内容
                if (text == '' || this.getCursortPosition(this.textDom.get(0)) == 0) {
                    var input = this.textDom.parents('[data-btn="input"]');
                    var prev = input.prev();
                    if (prev != input) {
                        prev.remove();
                        this._callChangedEvent();
                        return false;
                    }
                }
            }
        },

        getText: function () {
            var textArr = [];
            var items = this.boxDom.find('[data-item]');
            if (items && items.length) {
                for (var i = 0, len = items.length; i < len; i++) {
                    textArr.push($(items[i]).attr('data-item'));
                }
            }
            return textArr.join(this.splitChar);
        },
        getCursortPosition: function (inputEle) {
            var CaretPos = -1;
            if (document.selection) {// IE Support
                inputEle.focus();
                var Sel = document.selection.createRange();
                Sel.moveStart('character', -inputEle.value.length);
                CaretPos = Sel.text.length;
            } else if (inputEle.selectionStart || inputEle.selectionStart == '0') {// Firefox support
                var minPos = Math.min(inputEle.selectionEnd, inputEle.selectionStart);
                CaretPos = Math.abs(inputEle.selectionEnd - inputEle.selectionStart);
                CaretPos = (minPos > 0) ? minPos : CaretPos;
            }
            return (CaretPos);
        },
        resetTag: function () {
            //设置高度
            var inputEle = this.textDom.parents('[data-btn="input"]');
            inputEle.siblings().remove();

            this._callChangedEvent();
        },
        addTag: function (text, noTrigger) {
            text = $.trim(text || '');
            if (text) {
                this.textDom.parents('[data-btn="input"]').before(this.tagTplFn({
                    data: {
                        text: text
                    }
                }));
                this.textDom.val('');
                if (!noTrigger) {
                    this._callChangedEvent();
                }
                return true;
            }
            return false;
        },
        destory: function () {
            this.$el.remove();
        },
        _initTextTags: function () {
            var inputEle = this.textDom.parents('[data-btn="input"]');
            inputEle.siblings().remove();

            //设置提示语
            this.textDom.prop('placeholder', this.placeholder);
            this.boxDom.prop('title', this.placeholder);
            this.height && this.height > 0 && this.boxDom.height(this.height);
            this.width && this.boxDom.width(this.width);

            //重新设置标签
            var tags = this.content.split(this.splitChar);
            if (tags && tags.length) {
                var texttag;
                for (var i = 0, len = tags.length; i < len; i++) {
                    texttag = $.trim(tags[i]);
                    if (texttag) {
                        this.addTag(texttag, true);
                    }
                }
                this._callChangedEvent();
            }
            this.textDom.focus();
            this.textDom.blur();
        },
        _callChangedEvent: function () {
            this.content = this.getText();
            if (typeof this.changed == 'function') {
                this.changed.call(this.context || this, this.content);
            }
        },
        _createHtml: function () {
            return [
                '<div class="' + this.boxClass + '">',
                '   <span data-btn="input">',
                '       <input type="text" class="' + this.textClass + '"/>',
                '   </span>',
                '</div>'
            ].join(' ');
        }
    });

    var defaults = {
        content: '',                //标签内容
        splitChar: ',',             //多标签分隔字符
        placeholder: '标签',        //占位符提示
        height:80,                  //组件高度
        //css clsname
        boxClass: 'btn_arrow_tag',  //组件clsname
        textClass: 'js_tagtext',    //组件输入框clsname
        delClass: 'icon_close',     //tag关闭样式
        //tag标签发生变化后：del/add
        changed: function () {},    //标签变化后事件
        context:null                //上下文对象
    };

    $.fn.TextTag = function (attrs) {
        var instance = new BaseView(this, $.extend({}, defaults, attrs));
        return instance;
    };
})
(jQuery);