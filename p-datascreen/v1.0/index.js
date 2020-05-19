require.config({
    baseUrl: './',
    paths: {
        'text': 'libs/require.text.min',
        'echarts': 'libs/echarts.min',
        'world': 'libs/world.min',
        'TimelineLite': 'libs/TimelineLite.min',
        'TimelineMax': 'libs/TimelineMax.min',
        'TweenLite': 'libs/TweenLite.min',
        'Tween': 'libs/Tween',
        'Acounting': 'libs/accounting.min',
        'TweenCreator': 'common/tweencreator',
        'ApiBase': 'api/apibase',
        // 'ErrApi': 'api/globalerr_api',
        'worldmap': 'scripts/worldmap',
        'salesrank': 'scripts/salesrank',
        'realtime': 'scripts/realtime',
        'chartanalyze': 'scripts/chartanalyze',
        'realtimetransaction': 'template/realtimetransaction.html',
        'activeuser': 'template/activeuser.html',
        'mapTpl': 'template/map_tpl.html',
        'myAA': 'aaa.html'
    },
    shim: {
        jQuery: {
            exports: 'jquery'
        },
        $: {
            exports: 'jquery'
        },
        underscore: {
            exports: '_'
        },
        echarts: {
            deps: ['jquery'],
            exports: 'echarts'
        },
        world: {
            deps: ['echarts', 'jquery'],
            exports: 'world'
        }
    },
    waitSeconds: 0
})

//入口函数
// require(['salesrank', 'realtime', 'chartanalyze'], function (salesRank, realTime, chartAnalyze) {
// require(['salesrank', 'realtime'], function (salesRank, realTime) {
// require(['worldmap', 'salesrank', 'realtime'], function (worldMap, salesRank, realTime) {
require(['worldmap', 'salesrank', 'realtime', 'chartanalyze'], function (worldMap, salesRank, realTime, chartAnalyze) {
    onloadPolyfill(function () {
        $(window, document).resize()
        $('#screen_loading').fadeOut(function () {
            $(this).empty()
            $('#screen').css('visibility', 'visible').show(function () {
                worldMap.initialize()
                salesRank.initialize()
                realTime.initialize()
                chartAnalyze.initialize()
            })
        })
    })

    function onloadPolyfill (callback) {
        if ('complete' == document.readyState) {
            console.log('document onload over and immediate execute!!');
            callback()
        } else {
            $(window, document).on('load', callback)
        }
    }
})
