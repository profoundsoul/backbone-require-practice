define(['api/globalerr_api', 'jquery'], function (ErrApi, $) {
    var baseUrl = '//10.250.160.91:82/'

    /**
     *
     * @param staticOptions{ url, type, dataType, key, lifeTime, isReportError}
     * @returns {Function}
     */
    function createAjaxApiFn (staticOptions) {
        if (!(staticOptions && staticOptions.url)) {
            throw new Error('Invalid interface parameter!!')
            return function () {}
        }
        staticOptions.url = (staticOptions.domain || baseUrl) + staticOptions.url
        staticOptions.type = staticOptions.type || 'get'
        staticOptions.dataType = staticOptions.dataType || 'json'
        return function (options) {
            options = $.extend(true, {}, options || {}, staticOptions)
            return $.ajax(options).then(function(res){
                if(res.code !==800 || !res.datas ) {
                    return $.Deferred().reject(res)
                }
                return res;
            }).fail(function(err) {
                ErrApi.sendAPIErr({
                    code: err.datas ? err.code : err.status,
                    url: options.url
                });
                return $.Deferred().reject(err)
            })
        }
    }

    return {
        createAjaxApiFn: createAjaxApiFn
    }

})