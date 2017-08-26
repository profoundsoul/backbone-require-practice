(function () {
    var planePath = 'arrow';
    var selectRegion = '';
    var geoCoordMap = {
        'India': [78.474914, 20.336701],
        'Ghana': [-1.612877, 6.665886],
        'Uganda': [32.596928, 1.323173],
        'ShenZhen': [114.5435, 22.5439],
        'Nigeria': [7.520490, 9.197806],
        'Tanzania': [34.650861, -5.941140],
        'Ethiopia': [40.003153, 9.251650],
        'Focus': [66.872961, 18.541838],
        '中国': [111.2002, 33.949888]
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
            // position: 'bottom',
            position: ['50%', '60%'],
            triggerOn: 'click',
            hideDelay: 0,
            // alwaysShowContent:true,
            formatter: function (params) {
                var value = (params.value + '').split('.');
                value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,')
                    + '.' + value[1];
                return [
                    '<div style="padding:0.5rem;min-width: 80px;line-height: 2rem; min-height: 100px;font-size: 1.5rem;">',
                    // '<div style="margin:-5px;background: white;min-width: 80px;min-height: 100px;color:#333;">',
                    params.name + '<br/>',
                    '总销量Volumes (PCS): 34567' + '<br/>',
                    '总订单数Orders : 123' + '<br/>',
                    '</div>'].join(' ')
            }
        },
        geo: {
            name: 'Enroll distribution',
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
            animationEasingUpdate: 'cubicInOut'
        },
        series: [
            {
                type: 'lines',
                zlevel: 2,
                smooth: true,
                effect: {
                    show: true,
                    period: 6,
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
                    period: 20,
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
    console.log(option);
    var myChart = echarts.init(document.getElementById('main'));
    myChart.setOption(option);

    timeManager.push({delay: 0, fn: generateHideTipsFn()});
    timeManager.push({delay: 0, fn: generateSelectedFn('India')});
    batchPushColorEffect('India', 800, 5);
    timeManager.push({delay: 0, fn: generateSelectedFn('Ethiopia')});
    batchPushColorEffect('Ethiopia', 800, 5);
    timeManager.push({delay: 0, fn: generateSelectedFn('Uganda')});
    batchPushColorEffect('Uganda', 800, 5);
    timeManager.push({delay: 0, fn: generateSelectedFn('Tanzania')});
    batchPushColorEffect('Tanzania', 800, 5);
    timeManager.push({delay: 0, fn: generateSelectedFn('Nigeria')});
    batchPushColorEffect('Nigeria', 800, 5);
    timeManager.push({delay: 0, fn: generateSelectedFn('Ghana')});
    batchPushColorEffect('Ghana', 800, 5);

    timeManager.push({delay: 1500, fn: generateCenterRegionFn('India')});
    timeManager.push({delay: 1500, fn: generateScaleGeoRegionsFn(4)});
    timeManager.push({delay: 3000, fn: generateSingleLineSelectedFn('India')});

    timeManager.push({delay: 1500, fn: generateCenterRegionFn('Ethiopia')});
    timeManager.push({delay: 3000, fn: generateSingleLineSelectedFn('Ethiopia')});

    timeManager.push({delay: 1500, fn: generateCenterRegionFn('Uganda')});
    timeManager.push({delay: 3000, fn: generateSingleLineSelectedFn('Uganda')});

    timeManager.push({delay: 1500, fn: generateCenterRegionFn('Tanzania')});
    timeManager.push({delay: 3000, fn: generateSingleLineSelectedFn('Tanzania')});

    timeManager.push({delay: 1500, fn: generateCenterRegionFn('Nigeria')});
    timeManager.push({delay: 3000, fn: generateSingleLineSelectedFn('Nigeria')});

    timeManager.push({delay: 1500, fn: generateCenterRegionFn('Ghana')});
    timeManager.push({delay: 3000, fn: generateSingleLineSelectedFn('Ghana')});
    // timeManager.push({delay: 1000, fn: generateCenterRegionFn('Focus')});
    timeManager.push({delay: 1500, fn: generateScaleGeoRegionsFn(2)});

    timeManager.start();

    function batchPushColorEffect(regionName, delay, times){
        times = +times || 1;
        for (var i = 0; i < times; i++) {
            timeManager.push({delay:delay, fn:generateChangeColorFn(regionName)});
            timeManager.push({delay:delay, fn:generateResetColorFn(regionName)});
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
            curData.selected = true;
            myChart.setOption(getEffectOptionsFn(true));

            //记录选择的Regions
            selectRegion = regionName;
        }
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