define(['echarts', 'api/analyze_api', 'jquery', 'underscore'], function (echarts, AnalyzeApi, $, _) {
    // 今日昨日销售对比 折线图
    var saleLine = null
    // 用户设备 饼状图
    var userDevicePie = null
    // 新老会员 饼状图
    var memberPie = null
    // 各渠道销售情况 饼图
    var channalSalePie = null
    // 月累零售趋势 折线图
    var retailLine = null
    // 商品品类分析 饼图
    var goodsPie = null
    // 各国销售情况 饼图
    var countryPie = null

    var symbolSize = 15

    function initialize () {
        console.log('this is chart analyze modules')
        createSaleLine()
        createDealUserPie()

        createRetailLine()

        // createChannalSalePie()
        getChannalSalesPieData();

        // createCountryPie()
        getCountryPieData()

        // createGoodsPie()
        getCategoryPieData()
    }

    // AnalyzeApi.getCategorySalesByMonth().then(function (res) {console.log(res.datas)})
    //   .fail(function (err) {console.log(err)})
    //
    // AnalyzeApi.getCountrySalesByMonth().then(function (res) {console.log(res.datas)})
    //   .fail(function (err) {console.log(err)})
    //
    // AnalyzeApi.getSourceSalesByMonth().then(function (res) {console.log(res.datas)})
    //   .fail(function (err) {console.log(err)})

    function createSaleLine () {
        var options = {
            textStyle: {
                fontSize: 18,
                color: '#fff'
            },
            legend: {
                data: [{
                    name: '昨日',
                    textStyle: {
                        color: '#eff481'
                    },
                    backgroundColor: '#eff481'
                }, {
                    name: '今日',
                    textStyle: {
                        color: '#42f8ff'
                    },
                    backgroundColor: '#42f8ff'
                }],
                left: '5%',
                top: 'bottom',
                bottom: '5%',
                z: 2,
            },
            xAxis: [{
                name: '时间',
                type: 'category',
                axisLine: {
                    lineStyle: {
                        color: '#2a73a2',
                        width: 1,
                    }
                },
                data: ['00', '03', '06', '09', '12', '15', '18', '21', '24']
            }],
            yAxis: [{
                name: '金额',
                type: 'value',
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: ['#134566'],
                        type: 'dashed'
                    }
                },
                axisLine: {
                    show: false
                }
            }],
            series: [{
                name: '昨日',
                type: 'line',
                label: {
                    normal: {
                        color: 'transparent'
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#eff481',
                        borderColor: '#eff481',
                    }
                },
                symbol: 'circle',
                symbolSize: symbolSize,
                data: [1270, 6382, 2091, 1034, 1270, 6382, 2091, 1034, 2000]
            }, {
                name: '今日',
                itemStyle: {
                    normal: {
                        color: '#42f8ff'
                    }
                },
                type: 'line',
                symbol: 'circle',
                symbolSize: symbolSize,
                data: [2270, 3456, 5432, 3423, 2270, 3456, 5432, 3423, 3100]
            }]
        }
        saleLine = saleLine || echarts.init($('.js_saleline').get(0))
        saleLine.setOption(options)
    }

    function createDealUserPie () {
        createDevicePie()
        createMemberPie()
    }

    function createMemberPie () {
        var echartData = [{
            value: 5731, name: '新会员', itemStyle: {
                normal: {
                    color: '#46d6e9'
                }
            }
        }, {
            value: 4269, name: '老会员', itemStyle: {
                normal: {
                    color: '#fcfcfd'
                }
            }
        }]
        var memberOptions = {
            textStyle: {
                color: '#fff',
                fontSize: 18
            },
            series: [{
                type: 'pie',
                minAngle: 18,
                hoverAnimation: false,
                radius: ['35%', '55%'],
                center: ['50%', '50%'],
                roseType: 'radius',
                label: {
                    normal: {
                        formatter: '{d}% \n {b}'
                    },
                },
                data: echartData,
                itemStyle: {
                    normal: {
                        shadowBlur: 30,
                        shadowColor: 'rgba(0, 0, 0, 0.4)'
                    }
                }
            }]
        }
        memberPie = memberPie || echarts.init($('.js_member').get(0))
        memberPie.setOption(memberOptions)

        $('.chart_profile').show()
    }

    function createDevicePie () {
        var data = [{
            value: 40,
            name: 'Desktop',
        }, {
            value: 30,
            name: 'Others',
        }, {
            value: 30,
            name: 'Smartphone',

        }]
        var data2 = data.map(function (item) {
            return $.extend(true, {}, item, {
                itemStyle: {
                    normal: {
                        color: '#fff',
                    }
                }
            })
        })
        var deviceOptions = {
            textStyle: {
                color: '#fff',
                fontSize: 18
            },
            series: [
                {
                    hoverAnimation: false,
                    z: 1,
                    type: 'pie',
                    radius: '50%',
                    label: {
                        normal: {
                            formatter: '{c}\n{b}',
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: data2
                },
                {
                    hoverAnimation: false,
                    z: 2,
                    type: 'pie',
                    radius: ['5%', '48%'],
                    color: ['#46d6e9', '#01021b', '#61a0a8'],
                    label: {
                        normal: {
                            position: 'inner',
                            formatter: '{d}%',
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    itemStyle: {
                        normal: {
                            borderColor: '#fff',
                            borderWidth: 0
                        }
                    },
                    data: data
                }
            ]
        }
        userDevicePie = userDevicePie || echarts.init($('.js_userdevice').get(0))
        userDevicePie.setOption(deviceOptions)
    }

    function getChannalSalesPieData () {
        AnalyzeApi.getSourceSalesByYear().then(function (res) {
            createChannalSalePie(res.datas)
        })
    }

    function createChannalSalePie (data) {
        var defaultData = [
            {value: 10, name: '线上（B2R）'},
            {value: 15, name: '零售(BIM)'},
            {value: 15, name: '批发（BIM）'},
        ]

        var echartData = !data ? defaultData : data.map(function (item) {
            item.name = item.source
            item.value = +item.sales_money || 0
            return item
        })

        var options = {
            textStyle: {
                color: '#fff',
                fontSize: 18
            },
            series: [
                {
                    type: 'pie',
                    minAngle: 18,
                    radius: ['30%', '55%'],
                    center: ['50%', '62%'],
                    label: {
                        normal: {
                            formatter: '{b} {d}%',
                            // formatter: function (params, ticket, callback) {
                            //     var total = 0 //考生总数量
                            //     var percent = 0 //考生占比
                            //     echartData.forEach(function (value) {
                            //         total += value.value
                            //     })
                            //     percent = ((params.value / total) * 100).toFixed(1)
                            //     return params.name + '  ' + percent + '%'
                            // }
                        },
                    },
                    data: echartData,
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        }


        channalSalePie = channalSalePie || echarts.init($('.js_channalsalepie').get(0))
        channalSalePie.setOption(options)
    }

    function createRetailLine () {
        var options = {
            textStyle: {
                fontSize: 18,
                color: '#fff'
            },
            legend: {
                data: [{
                    name: '今年',
                    textStyle: {
                        color: '#42f8ff'
                    },
                    backgroundColor: '#42f8ff'
                }, {
                    name: '去年',
                    textStyle: {
                        color: '#eff481'
                    },
                    backgroundColor: '#eff481'
                }],
                left: 'right',
                top: 'top',
                orient: 'horizontal',
                z: 2,
            },
            xAxis: [{
                type: 'category',
                axisLine: {
                    lineStyle: {
                        color: '#2a73a2',
                        width: 1,
                    }
                },
                data: ['09月', '10月', '11月', '12月', '01月', '02月']
            }],
            yAxis: [{
                name: '月零售量（台）',
                type: 'value',
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: ['#134566'],
                        type: 'dashed'
                    }
                },
                axisLine: {
                    show: false
                }
            }],
            series: [{
                name: '去年',
                type: 'line',
                label: {
                    normal: {
                        color: 'transparent'
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#eff481',
                        borderColor: '#eff481',
                    }
                },
                areaStyle: {
                    normal: {
                        color: '#483925'
                    }
                },
                symbol: 'circle',
                symbolSize: symbolSize,
                data: [20000, 20000, 20000, 20000, 20000, 67000]
            }, {
                name: '今年',
                itemStyle: {
                    normal: {
                        color: '#42f8ff'
                    }
                },
                areaStyle: {
                    normal: {
                        color: '#014c73',
                        opacity: 0.5
                    }
                },
                type: 'line',
                symbol: 'circle',
                symbolSize: symbolSize,
                data: [40000, 62000, 62000, 50000, 60000, 40000]
            }]
        }
        retailLine = retailLine || echarts.init($('.js_retailline').get(0))
        retailLine.setOption(options)
    }

    function getCategoryPieData () {
        AnalyzeApi.getCategorySalesByYear().then(function (res) {
            createGoodsPie(res.datas)
        })
    }

    function createGoodsPie (data) {
        var defaultData = [
            {value: 10, name: '智能机'},
            {value: 25, name: '功能机'},
            {value: 15, name: '手机配件'},
            {value: 35, name: '平板'},
            {value: 15, name: '其他'},
        ]

        var echartData = !data ? defaultData : data.map(function (item) {
            item.name = item.class
            item.value = +item.sales_money || 0
            return item
        })
        var options = {
            textStyle: {
                color: '#fff',
                fontSize: 18
            },
            series: [
                {
                    type: 'pie',
                    minAngle: 24,
                    radius: ['30%', '55%'],
                    center: ['50%', '62%'],
                    label: {
                        normal: {
                            formatter: '{b} {d}%',
                            // formatter: function (params, ticket, callback) {
                            //     var total = 0 //考生总数量
                            //     var percent = 0 //考生占比
                            //     echartData.forEach(function (value) {
                            //         total += value.value
                            //     })
                            //     percent = ((params.value / total) * 100).toFixed(1)
                            //     return params.name + '  ' + percent + '%'
                            // }
                        },
                    },
                    data: echartData,
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        }
        goodsPie = goodsPie || echarts.init($('.js_goodspie').get(0))
        goodsPie.setOption(options)
    }

    function getCountryPieData () {
        AnalyzeApi.getCountrySalesByYear().then(function (res) {
            createCountryPie(res.datas)
        })
    }

    function createCountryPie (data) {
        var defaultData = [
            {value: 20, name: '乌干达'},
            {value: 25, name: '加纳'},
            {value: 15, name: '乌干达'},
            {value: 35, name: '埃塞'},
        ]

        var echartData = !data ? defaultData : data.map(function (item) {
            item.name = item.country
            item.value = +item.sales_money || 0
            return item
        })

        var options = {
            textStyle: {
                color: '#fff',
                fontSize: 18
            },
            series: [
                {
                    type: 'pie',
                    minAngle: 18,
                    radius: ['30%', '55%'],
                    center: ['50%', '62%'],
                    label: {
                        normal: {
                            formatter: '{b} {d}%',
                            // formatter: function (params, ticket, callback) {
                            //     var total = 0 //考生总数量
                            //     var percent = 0 //考生占比
                            //     echartData.forEach(function (value) {
                            //         total += value.value
                            //     })
                            //     percent = ((params.value / total) * 100).toFixed(1)
                            //     return params.name + '  ' + percent + '%'
                            // }
                        },
                    },
                    data: echartData,
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        }
        countryPie = countryPie || echarts.init($('.js_countrypie').get(0))
        countryPie.setOption(options)
    }

    return {
        initialize: initialize
    }
})