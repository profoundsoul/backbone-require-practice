/**
 * Created by mumu on 2017/1/20.
 */
(function ($) {
    var BaseView = $.custom.Dialog({
        templatePath: 'orderexport.html',
        events: {
            'click .icon-close': 'destory',
            'click .export': 'exportOrder',
            'click div[data-m]': 'customExport',
            'click input[data-date]': 'showCalendar'
        },
        __propertys__: function () {
            this.tplFn = _.template(this.$el.find('#js_popwin_tpl').html());
        },
        initialize: function () {
            this.render();
        },
        render: function () {
            var html = this.tplFn({data: this.getExportDate()});
            this.$el.html(html);
        },
        exportOrder: function (e) {
            var root = this.$el;
            var beginDate = root.find('input[data-date="begin"]').val(),
                endDate = root.find('input[data-date="end"]').val();

            if (!beginDate || !endDate) {
                $.custom.Dialog.Toast('自定义时间不能为空！');
                return false;
            }
            //结束日期最大不能超过当天
            var now = $.custom.dateFormat(new Date(), 'yyyy-MM-dd');
            if (endDate > now) {
                $.custom.Dialog.Toast('自定义的日期不能超过当天!');
                return false;
            }
            //获取订单时间范围不能超过2天
            var tmp = endDate;
            var endd = $.custom.dateParse(tmp);

            endd.setMonth(-3);
            var begind = $.custom.dateFormat(endd, 'yyyy-MM-dd');
            if (begind > beginDate) {
                $.custom.Dialog.Toast("自定义的日期范围最大只能为三个月！");
                return false;
            }

            var param = {};
            param.iscustom = 1;
            param.dfrom = beginDate;
            param.dto = endDate;
            param.status = this.status;
            this._callExportOrderApi(param);
        },
        customExport: function (e) {
            var target = $(e.currentTarget),
                m = target.attr('data-m'),
                y = target.attr('data-y');
            var param = {};
            param.iscustom = 0;
            param.m = m;
            param.y = y;
            param.status = this.status;
            this._callExportOrderApi(param);
        },
        showCalendar: function (e) {
            var target = e.currentTarget,
                root = this.$el;
            var _type = $(target).attr('data-date');
            var options = {
                curdate: root.find('input[data-date="' + _type + '"]').val(),
                seldate: root.find('input[data-date="' + _type + '"]').val(),
                datetype: _type
            };
            options.curTarget = target;
            if (_type === 'begin') {
                options.enddate = root.find('input[data-date="end"]').val();
            }
            if (_type === 'end') {
                options.begindate = root.find('input[data-date="begin"]').val();
                var nowdate = new Date();
                var nowstr = $.custom.dateFormat(nowdate, 'yyyy-MM-dd');
                options.enddate = nowstr;
            }
            //dateView.show(options, function (dateObj) {
            //    setDateObjFunc(dateObj, _type);
            //});
            ////回调函数
            //function setDateObjFunc(dateObj, type) {
            //    root.find('input[data-date="' + _type + '"]').val(dateObj.value);
            //}
        },

        getExportDate: function () {
            var curD = new Date();//开始时间;
            var curDText = $.custom.dateFormat(curD, 'yyyy-MM-dd'),
                startD = curD.setDate(1),
                startM = curD.getMonth() + 1,
                startY = curD.getFullYear(),
                lastY = startY - 1,
                startDText = $.custom.dateFormat(new Date(startD), 'yyyy-MM-dd');
            var d = {
                startD: startDText,
                endD: curDText,
                startM: startM,
                startY: startY,
                m: []
            };
            if (startM > 5) {
                for (var i = startM - 1; i > startM - 6; i--) {
                    var p = {
                        m: i,
                        y: startY
                    };
                    d.m.push(p);
                }
            } else {
                if (startM === 5) {
                    for (var mm = 4; mm > 0; mm--) {
                        d.m.push({
                            m: mm,
                            y: startY
                        });
                    }

                    d.m.push({
                        m: 12,
                        y: lastY
                    });
                }
                else if (startM === 4) {
                    for (var mm = 3; mm > 0; mm--) {
                        d.m.push({
                            m: mm,
                            y: startY
                        });
                    }
                    d.m.push({
                        m: 12,
                        y: lastY
                    });
                    d.m.push({
                        m: 11,
                        y: lastY
                    });
                }
                else if (startM === 3) {
                    d.m.push({
                        m: 2,
                        y: startY
                    });
                    d.m.push({
                        m: 1,
                        y: startY
                    });
                    for (var mm = 12; mm > 9; mm--) {
                        d.m.push({
                            m: mm,
                            y: lastY
                        });
                    }
                }
                else if (startM === 2) {
                    d.m.push({
                        m: 1,
                        y: startY
                    });
                    for (var mm = 12; mm > 8; mm--) {
                        d.m.push({
                            m: mm,
                            y: lastY
                        });
                    }

                }
                else {
                    for (var mm = 12; mm > 7; mm--) {
                        d.m.push({
                            m: mm,
                            y: lastY
                        });
                    }
                }
            }
            return d;
        },
        _callExportOrderApi: function (param, fn) {
            console.log(param);
            //orderExportModel.excute(function (data) {
            //    if (data.flag) {
            //        location.href = data.exurl;
            //    }else {
            //        $.custom.Dialog.Toast(data.msg);
            //    }
            //}, function (err) {
            //    $.custom.Dialog.Toast('抱歉，服务未响应，请稍后重试');
            //}, true, this);
        },
        _callUpdateFn: function () {
            (typeof this.updateFn === 'function') && this.updateFn.apply(this.context, arguments);
        }
    });

    var defaults = {
        status: 0,                  //订单类型状态
        updateFn: function () {
        },
        context: null
    };

    $.custom.Dialog.register('OrderExport', function (status, updateFn, context) {
        var settings = {};
        settings.status = status || defaults.status;
        settings.updateFn = updateFn || defaults.updateFn;
        settings.context = context || defaults.context;

        return new BaseView(settings);
    });
})(jQuery);
