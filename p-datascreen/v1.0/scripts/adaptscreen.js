(function ($) {
    //TODO: 模拟屏幕大小为3600/2025   进行数据大屏开发
    var SCREEN_WIDTH = 3600;
    initScreen()
    function initScreen () {
        window.screen.width && $('body').css('width', 3600 || SCREEN_WIDTH)
        window.screen.height && $('body').css('height', 2025 || SCREEN_WIDTH)
        $('head').append('<meta name="viewport" content="width=' + SCREEN_WIDTH + '"/>')

        resizeWidth();
        $(window, document).resize(function () {
            resize()
        })
    }

    $(document).ready(function(){
        //简化全屏
        $('.title_box').on('click', function(){
            // $('resize').resize();
            // requestFullScreen(document.body);
        })
    })

    function resize () {
        if (window.screen.display == 2) {
            resizeCenter()
        } else if (window.screen.display == 3) {
            resizeFull()
        } else {
            resizeWidth()
        }
    }

    function resizeWidth () {
        var ratio = $(window).width() / (SCREEN_WIDTH || $('body').width())
        console.log(ratio, $(window).width(),SCREEN_WIDTH,  $('body').width())
        $(document.body).css({
            transform: 'scale(' + ratio + ')',
            transformOrigin: 'left top',
            backgroundSize: '100%'
        })
    }

    function resizeCenter () {
        if (!window.screen.height || !window.screen.width) return resizeCenterBak()
        var ratio = $(window).height() / window.screen.height
        $('body').css({
            transform: 'scale(' + ratio + ')',
            transformOrigin: 'left top',
            backgroundSize: 100 * (window.screen.width / $(window).width() * ratio) + '%' + ' 100%',
            backgroundPosition: ($(window).width() - $('body').width() * ratio) / 2 + 'px top',
            marginLeft: ($(window).width() - $('body').width() * ratio) / 2
        })
    }

    function resizeFull () {
        if (!window.screen.height || !window.screen.width) {
            return resizeFullBak()
        }
        var ratioX = $(window).width() / window.screen.width
        var ratioY = $(window).height() / window.screen.height
        $('body').css({
            transform: 'scale(' + ratioX + ', ' + ratioY + ')',
            transformOrigin: 'left top',
            backgroundSize: '100% 100%',
        })
    }

    function requestFullScreen (element) {
        var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen
        console.log(requestMethod)
        if (requestMethod) {
            requestMethod.call(element)
        } else if (typeof window.ActiveXObject !== 'undefined') {
            var wscript = new ActiveXObject('WScript.Shell')
            if (wscript !== null) {
                wscript.SendKeys('{F11}')
            }
        }
    }
}(jQuery))