(function () {
    var planePath = 'arrow';
    var selectRegion = '';
    var SITE = {
        'India': 1,
        'Ghana': 3,
        'Uganda': 4
    }
    var P_COUNTRY_STAT_KEY = 'P_COUNTRY_STAT';

    var host = 'http://bam.yiwill.cn/';
    var token = '4e94b997e1ccfbe3a9ddf8b289d890c2';
    // var host = 'http://10.250.160.74:88';
    // var token = '0f23cf8d65e4ca0cb6c1ebaea66c796f';
    var PERIOD = {
        day: 'day',
        week: 'week',
        month: 'month',
        year: 'year',
        range: 'range'
    }

    var geoCoordMap = {
        'India': [77.13, 28.37],
        'Ghana': [-0.06, 5.35],
        'Uganda': [32.30, 0.20],
        'ShenZhen': [114.045801, 22.543437],
        'Nigeria': [7.32, 9.05],
        'Tanzania': [35.45, -6.08],
        'Ethiopia': [38.42, 9.02],
        'Focus': [66.872961, 18.541838]
    };
    var data = [{
        name: 'India',
        value: 80,
        itemStyle: {
            normal: {
                color: '#ff3333',
                borderColor: '#ff3333'
            }
        }
    }, {
        name: 'Ghana',
        value: 80,
        itemStyle: {
            normal: {
                color: 'orange',
                borderColor: 'orange'
            }
        }
    }, {
        name: 'Uganda',
        value: 80,
        itemStyle: {
            normal: {
                color: 'yellow',
                borderColor: 'yellow'
            }
        }
    }, {
        name: 'Nigeria',
        value: 80,
        itemStyle: {
            normal: {
                color: 'aqua',
                borderColor: 'aqua'
            }
        }
    }, {
        name: 'Tanzania',
        value: 80,
        itemStyle: {
            normal: {
                color: '#dff31e',
                borderColor: '#dff31e'
            }
        }
    }, {
        name: 'Ethiopia',
        value: 80,
        itemStyle: {
            normal: {
                color: '#4DFFFF',
                borderColor: '#4DFFFF'
            }
        }
    }];
    var option = {
        backgroundColor: '#044061',
        tooltip: {
            show: true,
            enterable: true,
            trigger: 'item',
            position: ['50%', '60%'],
            triggerOn: 'click',
            hideDelay: 0,
            formatter: function (params) {
                var htmlArr = [
                    '<div style="padding:0.5rem;min-width: 80px;line-height: 2rem; min-height: 2rem;font-size: 1.5rem;">',
                    params.name + '<br/>'
                ];
                var allSiteTips = getLocalStorage(P_COUNTRY_STAT_KEY);
                if (allSiteTips) {
                    if(allSiteTips[params.name]) {
                        htmlArr.push('总销量Volumes (PCS): '+ allSiteTips[params.name].goods_sum + '<br/>');
                        htmlArr.push('总订单数Orders : '+ allSiteTips[params.name].order_sum + '<br/>');
                    }
                }
                htmlArr.push('</div>');
                return htmlArr.join(' ')
            }
        },
        geo: {
            name: 'Data screen',
            type: 'map',
            map: 'world',
            roam: true,
            zoom: 2,
            selectedMode: false,
            center: geoCoordMap.Focus,
            itemStyle: {
                normal: {
                    areaColor: '#004881',
                    borderColor: '#00baf9',
                    borderWidth: 1
                },
                emphasis: {
                    areaColor: '#006fc7'
                }
            },
            regions: [{
                name: 'India'
            }, {
                name: 'Uganda'
            }, {
                name: 'Ghana'
            }, {
                name: 'Nigeria'
            }, {
                name: 'Tanzania'
            }, {
                name: 'Ethiopia'
            }
            ],
            animationDurationUpdate: 1500,
            // animationEasingUpdate: 'cubicInOut'
            // animationEasingUpdate: 'circularInOut'
            // animationEasingUpdate: 'quinticInOut'
            // animationEasingUpdate: 'quadraticInOut'
            animationEasingUpdate: 'exponentialInOut'
        },
        series: [
            {
                type: 'lines',
                zlevel: 2,
                smooth: true,
                effect: {
                    show: true,
                    period: 5,
                    trailLength: 0.1,
                    shadowBlur: 10,
                    symbol: 'circle',
                    symbolSize: 5
                },
                lineStyle: {
                    normal: {
                        color: 'orange',
                        width: 0,
                        opacity: 0.2,
                        curveness: 0.1
                    }
                },
                data: formtGCData(geoCoordMap, data, 'ShenZhen', true)
            },
            {
                type: 'lines',
                zlevel: 2,
                smooth: true,
                effect: {
                    show: true,
                    trailLength: 0.1,
                    scaleSize: 1,
                    period: 10,
                    shadowBlur: 10,
                    color: '#9CE6FE',
                    symbol: planePath,
                    symbolSize: 5
                },
                lineStyle: {
                    normal: {
//                    color: '#65A2C2',
                        color: {
                            type: 'linear', x: 0, y: 0, x2: 1, y2: 1,
                            colorStops: [
                                {offset: 0, color: '#ff3333'},
                                {offset: 0.25, color: 'orange'},
                                {offset: 0.5, color: 'yellow'},
                                {offset: 0.75, color: 'lime'},
                                {offset: 1, color: 'aqua'}
                            ]
                        },
                        width: 1,
                        opacity: 0.4,
                        curveness: 0.1
                    }
                },
                data: formtGCData(geoCoordMap, data, 'ShenZhen', true)
            },
            {
                type: 'effectScatter',
                coordinateSystem: 'geo',
                zlevel: 2,
                rippleEffect: {
                    period: 4,
                    scale: 4,
                    brushType: 'stroke'
                },
                label: {
                    normal: {
                        show: true,
                        fontSize: 22,
                        position: 'right',
                        formatter: '{b}'
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#fff',
                        borderColor: 'gold'
                    }
                },
                data: formtVData(geoCoordMap, data, 'ShenZhen', false)
            }
        ]
    };
    var mainEle = document.getElementById('main');
    if (mainEle) {
        var myChart = echarts.init(mainEle);
        myChart.setOption(option);
        startAnimateTimer();
        bindEvent(myChart);
    }

    function bindEvent(myChart) {
        myChart.on('click', function (param) {
            if (geoCoordMap[param.name]) {
                timeManager.stop();
                myDialog.show({
                    site: SITE[param.name] || '',
                    countryName: param.name,
                    callbackFn: function () {
                        timeManager.start();
                    }
                });
            }
        });
    }

    function startAnimateTimer() {
        timeManager.push({delay: 0, fn: generateHideTipsFn()});
        //获取tooltips的常规数据
        timeManager.push({delay: 0, fn: getCountryStatData});
        timeManager.push({delay: 0, fn: generateSelectedFn('India')});
        batchPushColorEffect('India', 800, 3);
        timeManager.push({delay: 0, fn: generateSelectedFn('Ethiopia')});
        batchPushColorEffect('Ethiopia', 800, 3);
        timeManager.push({delay: 0, fn: generateSelectedFn('Uganda')});
        batchPushColorEffect('Uganda', 800, 3);
        timeManager.push({delay: 0, fn: generateSelectedFn('Tanzania')});
        batchPushColorEffect('Tanzania', 800, 3);
        timeManager.push({delay: 0, fn: generateSelectedFn('Nigeria')});
        batchPushColorEffect('Nigeria', 800, 3);
        timeManager.push({delay: 0, fn: generateSelectedFn('Ghana')});
        batchPushColorEffect('Ghana', 800, 3);

        timeManager.push({delay: 1500, fn: generateCenterRegionFn('India')});
        timeManager.push({delay: 1500, fn: generateScaleGeoRegionsFn(4)});
        timeManager.push({delay: 4000, fn: generateSingleLineSelectedFn('India')});

        timeManager.push({delay: 1500, fn: generateCenterRegionFn('Ethiopia')});
        timeManager.push({delay: 4000, fn: generateSingleLineSelectedFn('Ethiopia')});

        timeManager.push({delay: 1500, fn: generateCenterRegionFn('Uganda')});
        timeManager.push({delay: 4000, fn: generateSingleLineSelectedFn('Uganda')});

        timeManager.push({delay: 1500, fn: generateCenterRegionFn('Tanzania')});
        timeManager.push({delay: 4000, fn: generateSingleLineSelectedFn('Tanzania')});

        timeManager.push({delay: 1500, fn: generateCenterRegionFn('Nigeria')});
        timeManager.push({delay: 4000, fn: generateSingleLineSelectedFn('Nigeria')});

        timeManager.push({delay: 1500, fn: generateCenterRegionFn('Ghana')});
        timeManager.push({delay: 4000, fn: generateSingleLineSelectedFn('Ghana')});
        timeManager.push({delay: 1500, fn: generateCenterRegionFn('Focus')});
        timeManager.push({delay: 1500, fn: generateScaleGeoRegionsFn(2)});

        timeManager.start();
    };

    var myDialog = (function () {


        this.getBiggerIndex = function (start) {
            return function () {
                return ++start;
            }
        }(1000);

        this.show = function (options, fn) {
            var existsDialog = $('[data-dialog="' + this.dialogid + '"]');
            if (!(existsDialog && existsDialog.length)) {
                $.extend(this, options || {}, {size: SITE.Ghana});
                this.dialogid = 'dialog' + this.getBiggerIndex();
                var dialogEle = $($('#js_overview_tpl').html());
                dialogEle.filter('[data-dialog]').attr('data-dialog', this.dialogid);
                $(document.body).append(dialogEle);
                this.$el = $('[data-dialog="' + this.dialogid + '"]');
                this.$el.find('.tips').hide();
                $(document.body).css('overflow', 'hidden');
                this.initialize();
                this._bindEvent();
            } else {
                console.log('data-dialog:' + this.dialogid + '   is existed!');
            }
        };
        this._bindEvent = function () {
            var _this = this;
            this.$el.find('.ui-close').on('click', function () {
                _this.hide();
            })
        };
        this._destory = function () {
            var existsDialog = $('[data-dialog="' + this.dialogid + '"]');
            $(document.body).css('overflow', '');
            existsDialog.remove();
        }
        this.hide = function (fn) {
            fn = fn || this.callbackFn;
            this._destory();
            typeof fn === 'function' && fn.call(this);
        };
        this.initialize = function () {
            var _this = this;
            this.$el.find('.js_title').html(this.countryName);
            getVisitedOverTimeApi(this.site || SITE.Ghana, PERIOD.range, getLastestMonthDate()).success(function (data) {
                _this.$el.find('.tips').show();
                showLineChart_VisitTime(data);
                showLineChart_Visit1(data);
                showLineChart_Visit2(data);
                showLineChart_Visit3(data);
                showLineChart_Visit4(data);
                showLineChart_Visit5(data);
                showLineChart_Visit6(data);
                showLineChart_Visit7(data);
                showLineChart_Visit8(data);
                showLineChart_Visit9(data);
                showLineChart_Visit10(data);
                showLineChart_Visit11(data);
            })
                .fail(function (err) {
                    console.log(err);
                });

            getOverViewApi(this.site || SITE.Ghana, PERIOD.range, getLastestMonthDate()).success(function (data) {
                showLineChart_OverView(data);
                showLineChart_View1(data);
                showLineChart_View2(data);
                showLineChart_View3(data);
                showLineChart_View4(data);
                showLineChart_View5(data);
                showLineChart_View6(data);
                showLineChart_View7(data);
                showLineChart_View99(data);
            })
                .fail(function (err) {
                    console.log(err);
                });
        };

        function showLineChart_VisitTime(data) {
            var opt = {
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['Visits', 'Unique visitors']
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                },
                yAxis: {
                    type: 'value',
                    splitNumber: 2,
                    axisLabel: {
                        formatter: '{value}'
                    }
                },
                textStyle: {
                    fontSize: 16,
                    color: '#000'
                },
                series: [
                    {
                        name: 'Visits',
                        type: 'line'
                    },
                    {
                        name: 'Unique visitors',
                        type: 'line',
                        lineStyle: {
                            normal: {
                                color: '#3c8dbc'
                            }
                        }
                    }
                ]
            };
            opt.xAxis.data = data.map(function (item) {
                return item.date;
            })
            opt.series[0].data = data.map(function (item) {
                return item.nb_visits || 0;
            })
            opt.series[1].data = data.map(function (item) {
                return item.nb_uniq_visitors || 0;
            })
            var lineCharts = echarts.init(document.getElementById('main_visitstime'));
            lineCharts.setOption(opt);
        }

        function showLineChart_Visit1(data) {
            var opt = {
                xAxis: {
                    // type: 'category',
                    show: false,
                },
                yAxis: {
                    show: false,
                    type: 'value',
                },
                series: [{
                    type: 'line',
                    showSymbol: false,
                    lineStyle: {
                        normal: {
                            color: '#2196f3'
                        }
                    }
                }]
            };
            opt.xAxis.data = data.map(function (item) {
                return item.date;
            })
            opt.series[0].data = data.map(function (item) {
                return item.nb_visits || 0;
            })

            var totalv = opt.series[0].data.reduce(function (total, cur) {
                total += cur;
                return total;
            }, 0)
            $('.visit1_vt').html(totalv);

            var totaluv = data.reduce(function (total, cur) {
                total += cur.nb_uniq_visitors || 0;
                return total;
            }, 0)
            $('.visit1_uvt').html(totaluv);

            var lineCharts = echarts.init(document.getElementById('visit1'));
            lineCharts.setOption(opt);
        }

        function showLineChart_Visit2(data) {
            var opt = {
                xAxis: {
                    // type: 'category',
                    show: false,
                },
                yAxis: {
                    show: false,
                    type: 'value',
                },
                series: [{
                    type: 'line',
                    showSymbol: false,
                    lineStyle: {
                        normal: {
                            color: '#2196f3'
                        }
                    }
                }]
            };
            opt.xAxis.data = data.map(function (item) {
                return item.date;
            })
            opt.series[0].data = data.map(function (item) {
                return item.nb_users || 0;
            })
            var totalnbuser = opt.series[0].data.reduce(function (total, cur) {
                total += cur;
                return total;
            }, 0)
            $('.visit2_nbuser').html(totalnbuser);
            var lineCharts = echarts.init(document.getElementById('visit2'));
            lineCharts.setOption(opt);
        }

        function showLineChart_Visit3(data) {
            var opt = {
                xAxis: {
                    // type: 'category',
                    show: false,
                },
                yAxis: {
                    show: false,
                    type: 'value',
                },
                series: [{
                    type: 'line',
                    showSymbol: false,
                    lineStyle: {
                        normal: {
                            color: '#2196f3'
                        }
                    }
                }]
            };
            opt.xAxis.data = data.map(function (item) {
                return item.date;
            })
            opt.series[0].data = data.map(function (item) {
                return +item.nb_visits ? item.sum_visit_length / item.nb_visits : 0;
            })
            var total_len = data.reduce(function (total, cur) {
                total += cur.sum_visit_length;
                return total;
            }, 0);
            var total_v = data.reduce(function (total, cur) {
                total += cur.nb_visits || 0;
                return total;
            }, 0);
            $('.visit3_avg').html((total_len / (total_v || 1)).toFixed(2));

            var lineCharts = echarts.init(document.getElementById('visit3'));
            lineCharts.setOption(opt);
        }

        function showLineChart_Visit4(data) {
            var opt = {
                xAxis: {
                    // type: 'category',
                    show: false,
                },
                yAxis: {
                    show: false,
                    type: 'value',
                },
                series: [{
                    type: 'line',
                    showSymbol: false,
                    lineStyle: {
                        normal: {
                            color: '#2196f3'
                        }
                    }
                }]
            };
            opt.xAxis.data = data.map(function (item) {
                return item.date;
            })
            opt.series[0].data = data.map(function (item) {
                return Math.round((+item.nb_visits ? item.bounce_count / item.nb_visits : 0) * 100);
            })

            var total = data.reduce(function (t, item) {
                t += item.bounce_count;
                return t;
            }, 0);
            var visited = data.reduce(function (t, item) {
                t += item.nb_visits || 0;
                return t;
            }, 0);
            $('.visit4_vhb').html(((visited ? total / visited : 0) * 100).toFixed(0) + '%');
            var lineCharts = echarts.init(document.getElementById('visit4'));
            lineCharts.setOption(opt);
        }

        function showLineChart_Visit5(data) {
            var opt = {
                xAxis: {
                    // type: 'category',
                    show: false,
                },
                yAxis: {
                    show: false,
                    type: 'value',
                },
                series: [{
                    type: 'line',
                    showSymbol: false,
                    lineStyle: {
                        normal: {
                            color: '#2196f3'
                        }
                    }
                }]
            };
            opt.xAxis.data = data.map(function (item) {
                return item.date;
            })
            opt.series[0].data = data.map(function (item) {
                return (+item.nb_visits ? item.nb_actions / item.nb_visits : 0).toFixed(1);
            })
            var total_len = data.reduce(function (total, cur) {
                total += cur.nb_actions;
                return total;
            }, 0);
            var total_v = data.reduce(function (total, cur) {
                total += cur.nb_visits || 0;
                return total;
            }, 0);
            $('.visit5_ac').html((total_len / (total_v || 1)).toFixed(0));
            var lineCharts = echarts.init(document.getElementById('visit5'));
            lineCharts.setOption(opt);
        }

        function showLineChart_Visit6(data) {
            var opt = {
                xAxis: {
                    // type: 'category',
                    show: false,
                },
                yAxis: {
                    show: false,
                    type: 'value',
                },
                series: [{
                    type: 'line',
                    showSymbol: false,
                    lineStyle: {
                        normal: {
                            color: '#2196f3'
                        }
                    }
                }]
            };
            opt.xAxis.data = data.map(function (item) {
                return item.date;
            })
            opt.series[0].data = data.map(function (item) {
                return +item.Actions_nb_hits_with_time_generation ? item.Actions_sum_time_generation / item.Actions_nb_hits_with_time_generation : 0;
            })
            var total_len = data.reduce(function (total, cur) {
                total += cur.Actions_sum_time_generation;
                return total;
            }, 0);
            var total_v = data.reduce(function (total, cur) {
                total += cur.Actions_nb_hits_with_time_generation || 0;
                return total;
            }, 0);
            $('.visit6_agt').html((total_len / (total_v || 1)).toFixed(2));
            var lineCharts = echarts.init(document.getElementById('visit6'));
            lineCharts.setOption(opt);
        }

        function showLineChart_Visit7(data) {
            var opt = {
                xAxis: {
                    // type: 'category',
                    show: false,
                },
                yAxis: {
                    show: false,
                    type: 'value',
                },
                series: [{
                    type: 'line',
                    showSymbol: false,
                    lineStyle: {
                        normal: {
                            color: '#2196f3'
                        }
                    }
                }]
            };
            opt.xAxis.data = data.map(function (item) {
                return item.date;
            })
            opt.series[0].data = data.map(function (item) {
                return item.Actions_nb_pageviews || 0;
            })
            var total_p = opt.series[0].data.reduce(function (total, cur) {
                total += cur;
                return total;
            }, 0)
            $('.visit7_p').html(total_p);

            var total_up = data.reduce(function (total, cur) {
                total += cur.Actions_nb_uniq_pageviews;
                return total;
            }, 0)
            $('.visit7_up').html(total_up);
            var lineCharts = echarts.init(document.getElementById('visit7'));
            lineCharts.setOption(opt);
        }

        function showLineChart_Visit8(data) {
            var opt = {
                xAxis: {
                    // type: 'category',
                    show: false,
                },
                yAxis: {
                    show: false,
                    type: 'value',
                },
                series: [{
                    type: 'line',
                    showSymbol: false,
                    lineStyle: {
                        normal: {
                            color: '#2196f3'
                        }
                    }
                }]
            };
            opt.xAxis.data = data.map(function (item) {
                return item.date;
            })
            opt.series[0].data = data.map(function (item) {
                return item.Actions_nb_searches || 0;
            })
            var total_ts = opt.series[0].data.reduce(function (total, cur) {
                total += cur;
                return total;
            }, 0)
            $('.visit8_ts').html(total_ts);

            var total_uk = data.reduce(function (total, cur) {
                total += cur.Actions_nb_keywords;
                return total;
            }, 0)
            $('.visit8_uk').html(total_uk);
            var lineCharts = echarts.init(document.getElementById('visit8'));
            lineCharts.setOption(opt);
        }

        function showLineChart_Visit9(data) {
            var opt = {
                xAxis: {
                    // type: 'category',
                    show: false,
                },
                yAxis: {
                    show: false,
                    type: 'value',
                },
                series: [{
                    type: 'line',
                    showSymbol: false,
                    lineStyle: {
                        normal: {
                            color: '#2196f3'
                        }
                    }
                }]
            };
            opt.xAxis.data = data.map(function (item) {
                return item.date;
            })
            opt.series[0].data = data.map(function (item) {
                return item.Actions_nb_downloads || 0;
            })
            var total_dld = opt.series[0].data.reduce(function (total, cur) {
                total += cur;
                return total;
            }, 0)
            $('.visit9_dld').html(total_dld);

            var total_udld = data.reduce(function (total, cur) {
                total += cur.Actions_nb_uniq_downloads;
                return total;
            }, 0)
            $('.visit9_udld').html(total_udld);
            var lineCharts = echarts.init(document.getElementById('visit9'));
            lineCharts.setOption(opt);
        }

        function showLineChart_Visit10(data) {
            var opt = {
                xAxis: {
                    // type: 'category',
                    show: false,
                },
                yAxis: {
                    show: false,
                    type: 'value',
                },
                series: [{
                    type: 'line',
                    showSymbol: false,
                    lineStyle: {
                        normal: {
                            color: '#2196f3'
                        }
                    }
                }]
            };
            opt.xAxis.data = data.map(function (item) {
                return item.date;
            })
            opt.series[0].data = data.map(function (item) {
                return item.Actions_nb_outlinks || 0;
            })
            var total_ol = opt.series[0].data.reduce(function (total, cur) {
                total += cur;
                return total;
            }, 0)
            $('.visit10_ol').html(total_ol);
            var total_uol = data.reduce(function (total, cur) {
                total += cur.Actions_nb_uniq_outlinks;
                return total;
            }, 0)
            $('.visit10_uol').html(total_uol);

            var lineCharts = echarts.init(document.getElementById('visit10'));
            lineCharts.setOption(opt);
        }

        function showLineChart_Visit11(data) {
            var opt = {
                xAxis: {
                    // type: 'category',
                    show: false,
                },
                yAxis: {
                    show: false,
                    type: 'value',
                },
                series: [{
                    type: 'line',
                    showSymbol: false,
                    lineStyle: {
                        normal: {
                            color: '#2196f3'
                        }
                    }
                }]
            };
            opt.xAxis.data = data.map(function (item) {
                return item.date;
            })
            opt.series[0].data = data.map(function (item) {
                return item.max_actions || 0;
            })
            var total_ol = opt.series[0].data.reduce(function (total, cur) {
                total += cur;
                return total;
            }, 0);
            var total_visited = data.reduce(function (total, cur) {
                total += cur.nb_visits;
                return total;
            }, 0);

            $('.visit11_ma').html(parseInt(total_ol / total_visited));
            var lineCharts = echarts.init(document.getElementById('visit11'));
            lineCharts.setOption(opt);
        }

        function showLineChart_OverView(data) {
            var opt = {
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['Ecommerce Order']
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                },
                yAxis: {
                    type: 'value',
                    splitNumber: 2,
                    axisLabel: {
                        formatter: '{value}'
                    }
                },
                textStyle: {
                    fontSize: 16,
                    color: '#000'
                },
                series: [
                    {
                        name: 'Ecommerce Order',
                        type: 'line'
                    },
                ]
            };
            opt.xAxis.data = data.map(function (item) {
                return item.date;
            })
            opt.series[0].data = data.map(function (item) {
                return item.order_num || 0;
            })
            var lineCharts = echarts.init(document.getElementById('main_overview'));
            // var lineCharts = echarts.init(document.getElementById('main2'));
            lineCharts.setOption(opt);
        }

        function showLineChart_View1(data) {
            var opt = {
                xAxis: {
                    // type: 'category',
                    show: false,
                },
                yAxis: {
                    show: false,
                    type: 'value',
                },
                series: [{
                    type: 'line',
                    showSymbol: false,
                    lineStyle: {
                        normal: {
                            color: '#2196f3'
                        }
                    }
                }]
            };
            opt.xAxis.data = data.map(function (item) {
                return item.date;
            })
            opt.series[0].data = data.map(function (item) {
                return item.order_num || 0;
            });
            var total = opt.series[0].data.reduce(function (t, item) {
                t += item;
                return t;
            }, 0);
            var visited = data.reduce(function (t, item) {
                t += item.visits || 0;
                return t;
            }, 0);
            $('.overview1_total').html(total)
            $('.overview1_visit').html(visited)

            var lineCharts = echarts.init(document.getElementById('overview1'));
            lineCharts.setOption(opt);
        }

        function showLineChart_View2(data) {
            var opt = {
                xAxis: {
                    // type: 'category',
                    show: false,
                },
                yAxis: {
                    show: false,
                    type: 'value',
                },
                series: [{
                    type: 'line',
                    showSymbol: false,
                    lineStyle: {
                        normal: {
                            color: '#2196f3'
                        }
                    }
                }]
            };
            opt.xAxis.data = data.map(function (item) {
                return item.date;
            })
            opt.series[0].data = data.map(function (item) {
                return item.order_revenue || 0;
            })
            var total = opt.series[0].data.reduce(function (t, item) {
                t += item;
                return t;
            }, 0);
            $('.overview2_revenue').html(total);
            var lineCharts = echarts.init(document.getElementById('overview2'));
            lineCharts.setOption(opt);
        }

        function showLineChart_View3(data) {
            var opt = {
                xAxis: {
                    // type: 'category',
                    show: false,
                },
                yAxis: {
                    show: false,
                    type: 'value',
                },
                series: [{
                    type: 'line',
                    showSymbol: false,
                    lineStyle: {
                        normal: {
                            color: '#2196f3'
                        }
                    }
                }]
            };
            opt.xAxis.data = data.map(function (item) {
                return item.date;
            })
            opt.series[0].data = data.map(function (item) {
                return (+item.order_num) ? item.order_revenue / item.order_num : 0;
            })
            ;
            var revenuetotal = data.reduce(function (total, cur) {
                total += cur.order_revenue || 0;
                return total;
            }, 0);
            var numtotal = data.reduce(function (total, cur) {
                total += cur.order_num || 0;
                return total;
            }, 0);
            $('.overview3_avg').html((revenuetotal / (numtotal || 1)).toFixed(2));
            var lineCharts = echarts.init(document.getElementById('overview3'));
            lineCharts.setOption(opt);
        }

        function showLineChart_View4(data) {
            var opt = {
                xAxis: {
                    // type: 'category',
                    show: false,
                },
                yAxis: {
                    show: false,
                    type: 'value',
                },
                series: [{
                    type: 'line',
                    showSymbol: false,
                    lineStyle: {
                        normal: {
                            color: '#2196f3'
                        }
                    }
                }]
            };
            opt.xAxis.data = data.map(function (item) {
                return item.date;
            })
            opt.series[0].data = data.map(function (item) {
                return parseFloat(item.order_conversion_rate) || 0;
            })
            var revenuetotal = data.reduce(function (total, cur) {
                total += cur.visits || 0;
                return total;
            }, 0);
            var numtotal = data.reduce(function (total, cur) {
                total += cur.nb_visits || 0;
                return total;
            }, 0);
            $('.overview4_ocr').html((revenuetotal / (numtotal || 1) * 100).toFixed(1) + '%');
            var lineCharts = echarts.init(document.getElementById('overview4'));
            lineCharts.setOption(opt);
        }

        function showLineChart_View5(data) {
            var opt = {
                xAxis: {
                    // type: 'category',
                    show: false,
                },
                yAxis: {
                    show: false,
                    type: 'value',
                },
                series: [{
                    type: 'line',
                    showSymbol: false,
                    lineStyle: {
                        normal: {
                            color: '#2196f3'
                        }
                    }
                }]
            };
            opt.xAxis.data = data.map(function (item) {
                return item.date;
            })
            opt.series[0].data = data.map(function (item) {
                return item.give_up || 0;
            })
            var total = opt.series[0].data.reduce(function (total, cur) {
                total += cur;
                return total;
            }, 0)
            $('.overview5_gp').html(total);
            var lineCharts = echarts.init(document.getElementById('overview5'));
            lineCharts.setOption(opt);
        }

        function showLineChart_View6(data) {
            var opt = {
                xAxis: {
                    // type: 'category',
                    show: false,
                },
                yAxis: {
                    show: false,
                    type: 'value',
                },
                series: [{
                    type: 'line',
                    showSymbol: false,
                    lineStyle: {
                        normal: {
                            color: '#2196f3'
                        }
                    }
                }]
            };
            opt.xAxis.data = data.map(function (item) {
                return item.date;
            })
            opt.series[0].data = data.map(function (item) {
                return parseFloat(item.cart_revenue) || 0;
            })
            var total = opt.series[0].data.reduce(function (total, cur) {
                total += cur;
                return total;
            }, 0)
            $('.overview6_cr').html(total.toFixed(2));
            var lineCharts = echarts.init(document.getElementById('overview6'));
            lineCharts.setOption(opt);
        }

        function showLineChart_View7(data) {
            var opt = {
                xAxis: {
                    // type: 'category',
                    show: false,
                },
                yAxis: {
                    show: false,
                    type: 'value',
                },
                series: [{
                    type: 'line',
                    showSymbol: false,
                    lineStyle: {
                        normal: {
                            color: '#2196f3'
                        }
                    }
                }]
            };
            opt.xAxis.data = data.map(function (item) {
                return item.date;
            })
            opt.series[0].data = data.map(function (item) {
                return parseFloat(item.give_up_rate) || 0;
            })
            var revenuetotal = data.reduce(function (total, cur) {
                total += cur.give_up || 0;
                return total;
            }, 0);
            var numtotal = data.reduce(function (total, cur) {
                total += cur.nb_visits || 0;
                return total;
            }, 0);
            $('.overview7_vwac').html((revenuetotal / (numtotal || 1) * 100).toFixed(1) + '%');
            var lineCharts = echarts.init(document.getElementById('overview7'));
            lineCharts.setOption(opt);
        }

        function showLineChart_View99(data) {
            var opt = {
                xAxis: {
                    // type: 'category',
                    show: false,
                },
                yAxis: {
                    show: false,
                    type: 'value',
                },
                series: [{
                    type: 'line',
                    showSymbol: false,
                    lineStyle: {
                        normal: {
                            color: '#2196f3'
                        }
                    }
                }]
            };
            opt.xAxis.data = data.map(function (item) {
                return item.date;
            })
            opt.series[0].data = data.map(function (item) {
                return item.buy || 0;
            })
            var total = opt.series[0].data.reduce(function (total, cur) {
                total += cur;
                return total;
            }, 0)
            $('.overview99_buy').html(total);
            var lineCharts = echarts.init(document.getElementById('overview99'));
            lineCharts.setOption(opt);
        }


        function getOverViewApi(site, period, date) {
            var urlArr = [];
            urlArr.push(host + '/index.php?module=API&method=Goals.getOverView');
            urlArr.push('idSite=' + site);
            urlArr.push('period=' + period);
            urlArr.push('date=' + date);
            urlArr.push('token_auth=' + token);

            return $.ajax({
                type: 'get',
                url: urlArr.join('&'),
                processData: false,
                crossDomain: true,
                dataType: 'json'
                // success:fn
            });
        }

        function getVisitedOverTimeApi(site, period, date) {
            var urlArr = [];
            urlArr.push(host + '/index.php?module=API&method=VisitsSummary.getVisitsOverTime');
            urlArr.push('idSite=' + encodeURIComponent(site));
            urlArr.push('period=' + encodeURIComponent(period));
            urlArr.push('date=' + encodeURIComponent(date));
            urlArr.push('token_auth=' + token);

            return $.ajax({
                type: 'get',
                url: urlArr.join('&'),
                processData: false,
                crossDomain: true,
                dataType: 'json'
                // success:fn
            });
        }


        return this;
    }).call({});
    // myDialog.show({
    //     site:SITE.Uganda,
    //     callbackFn:function(){
    //     }
    // });

    function batchPushColorEffect(regionName, delay, times) {
        times = +times || 1;
        for (var i = 0; i < times; i++) {
            timeManager.push({delay: delay, fn: generateChangeColorFn(regionName)});
            timeManager.push({delay: delay, fn: generateResetColorFn(regionName)});
        }
    }

    function generateResetColorFn(regionName) {
        return function () {
            var curData = getRegionByName(regionName);
            curData.selected = true;
            curData.itemStyle = {};
            myChart.setOption(getEffectOptionsFn(true));
        }
    }

    function generateChangeColorFn(regionName) {
        return function () {
            var curData = getRegionByName(regionName);
            curData.selected = true;
            curData.itemStyle = {
                emphasis: {
                    areaColor: '#ff9800',
                    borderColor: '#FFC107',
                    borderWidth: 5,
                    borderType: 'solid'
                }
            };
            myChart.setOption(getEffectOptionsFn(true));
        }
    }

    function generateShowTipsFn(regionName) {
        return function () {
            myChart.dispatchAction({
                type: 'showTip',
                name: regionName,
                seriesIndex: 2
            });
        }
    }

    function generateHideTipsFn() {
        return function () {
            myChart.dispatchAction({
                type: 'hideTip',
                seriesIndex: 2
            });
        }
    }

    function getEffectOptionsFn(isEffect) {
        var newOptions = option;
        if (!isEffect) {
            var newOptions = $.extend(true, {}, option);
            newOptions.series[0].data = [];
            newOptions.series[1].data = [];
            newOptions.series[2].data = [];
        }
        return newOptions;
    }

    function getSingleLineEffectOptionsFn(regionName) {
        var newOptions = option;
        var currentData = getDataIndex(regionName);
        if (currentData) {
            var newOptions = $.extend(true, {}, option);
            delOthers(newOptions.series[0].data, data.length, currentData.index);
            delOthers(newOptions.series[1].data, data.length, currentData.index);
            delOthers(newOptions.series[2].data, data.length, currentData.index);
        }
        return newOptions;

        function delOthers(list, totalLen, idx) {
            for (var i = totalLen - 1; i >= 0; i--) {
                if (i !== idx) {
                    list.splice(i, 1);
                }
            }
        }
    }

    function generateScaleGeoRegionsFn(zoom) {
        return function () {
            option.geo.zoom = zoom < 2 ? 1 : zoom;
            myChart.setOption(getEffectOptionsFn(false));
        }
    }

    function generateCenterRegionFn(regionName) {
        return function () {
            generateSelectedFn(regionName)();
            option.geo.center = geoCoordMap[regionName];
            myChart.setOption(getEffectOptionsFn(false));
            generateHideTipsFn()();
        }
    }

    /**
     * 生成选中区域偏函数
     * @param regionName
     * @returns {Function}
     */
    function generateSingleLineSelectedFn(regionName) {
        return function () {
            //单选模式，取消上一个选择
            if (selectRegion) {
                var preData = getRegionByName(selectRegion);
                preData.selected = false;
            }
            var curData = getRegionByName(regionName);
            curData.selected = true;
            myChart.setOption(getSingleLineEffectOptionsFn(regionName));
            generateShowTipsFn(regionName)();

            //记录选择的Regions
            selectRegion = regionName;
        }
    }

    /**
     * 生成选中区域偏函数
     * @param regionName
     * @returns {Function}
     */
    function generateSelectedFn(regionName) {
        return function () {
            //单选模式，取消上一个选择
            if (selectRegion) {
                var preData = getRegionByName(selectRegion);
                preData.selected = false;
            }
            var curData = getRegionByName(regionName);
            if (curData) {
                curData.selected = true;
                myChart.setOption(getEffectOptionsFn(true));

                //记录选择的Regions
                selectRegion = regionName;
            }
        }
    }


    /**
     * 获取所有国家的Tips统计数据
     */
    function getCountryStatData() {
        var tips = getLocalStorage(P_COUNTRY_STAT_KEY, true);
        if (!tips) {
            getCountryStatApi().success(function (data) {
                    var sitedata = {};
                    var item, id, sitename;
                    for (id in data) {
                        item = data[id];
                        sitename = getSiteName(id);
                        if (sitename) {
                            sitedata[sitename] = item;
                        } else {
                            sitedata[id] = item;
                        }
                    }
                    saveLocalStorage(P_COUNTRY_STAT_KEY, sitedata, 60);
                })
              .fail(function (err) {
                    console.log('get All Tips Failed', err);
                });
        }

        function getSiteName(sid) {
            for (var key in SITE) {
                if (SITE[key] == sid) {
                    return key;
                }
            }
            return null;
        }
    }

    function getCountryStatApi() {
        var urlArr = [];
        urlArr.push(host + '/index.php?module=API&method=Goals.getOrderAmount');
        urlArr.push('token_auth=' + token);

        return $.ajax({
            type: 'get',
            url: urlArr.join('&'),
            processData: false,
            crossDomain: true,
            dataType: 'json'
        });
    }

    /**
     * 根据key和data将数据保存至localstorage中，并设置过期时间
     * @param key 键值
     * @param data 保存数据
     * @param expired 时间为分钟
     */
    function saveLocalStorage(key, data, expired) {
        var storage = window.localStorage;
        if (storage && key) {
            var expired = new Date().getTime() + expired * 60 * 1000;
            storage.setItem(key, JSON.stringify({expired: expired, data: data}));
        }
    }

    /**
     * 根据键值获取localstorage的内容
     * @param key 键值
     * @returns {null}
     */
    function getLocalStorage(key, isValidExpired) {
        var storage = window.localStorage;
        if (storage) {
            var obj = {};
            var value = storage.getItem(key);
            try {
                obj = JSON.parse(value);
                if (isValidExpired) {
                    if (obj.expired > +new Date) {
                        return obj.data;
                    }
                } else {
                    return obj.data;
                }
            } catch (e) {
            }
        }
        return null;
    }

    /**
     * 获取最近一个月的区间字符串
     * @returns {string}
     */
    function getLastestMonthDate() {
        var result = [];
        var now = new Date();
        result.push([now.getFullYear(), fillZero(now.getMonth() + 1), fillZero(now.getDate())].join('-'));

        now.setMonth(now.getMonth() - 1);
        result.push([now.getFullYear(), fillZero(now.getMonth() + 1), fillZero(now.getDate())].join('-'));
        return result.reverse().join(',')
    }

    function fillZero(str, digits) {
        str = str || '';
        digits = digits || 2;
        for (var i = 0; i < digits; i++) {
            str = '0' + str;
        }
        return str.substr(digits * -1);
    }

    function getDataIndex(regionName) {
        var len = data.length;
        for (var i = 0; i < len; i++) {
            if (data[i].name === regionName) {
                return {
                    index: i,
                    item: data[i]
                }
            }
        }
        return null;
    }

    function getRegionByName(name) {
        var geo = option.geo;
        var len = geo.regions.length;
        for (var i = 0; i < len; i++) {
            var r = geo.regions[i];
            if (r.name == name) {
                return r;
            }
        }
        return null;
    }

    function formtGCData(geoData, data, srcNam, dest) {
        var tGeoDt = [];
        if (dest) {
            for (var i = 0, len = data.length; i < len; i++) {
                if (srcNam != data[i].name) {
                    tGeoDt.push({
                        coords: [geoData[srcNam], geoData[data[i].name]]
                    });
                }
            }
        } else {
            for (var i = 0, len = data.length; i < len; i++) {
                if (srcNam != data[i].name) {
                    tGeoDt.push({
                        coords: [geoData[data[i].name], geoData[srcNam]]
                    });
                }
            }
        }
        return tGeoDt;
    }

    function formtVData(geoData, data, srcNam) {
        var tGeoDt = [];
        for (var i = 0, len = data.length; i < len; i++) {
            var tNam = data[i].name
            if (srcNam != tNam) {
                tGeoDt.push({
                    name: tNam,
                    value: geoData[tNam],
                    symbolSize: data[i].value / 5,
                    itemStyle: data[i].itemStyle
                });
            }
        }
        tGeoDt.push({
            name: srcNam,
            value: geoData[srcNam],
            symbolSize: 15,
            itemStyle: {
                normal: {
                    color: 'lime',
                    borderColor: 'lime'
                }
            }
        });
        return tGeoDt;
    }
}())