define(['underscore'], function(_){
    function sendAPIErr(params){
        var defer = $.Deferred();
        var url = baseUrl+ '/api/datascreen/exceptionResponse';
        $.ajax({
            url: url,
            type: "POST",
            data: params,
            dataType: 'json',
            success:function(result){
                defer.resolve(null);
            },
            error: function(result){
                defer.reject(null);
            }
        });

        return defer;
    }
    return {
        sendAPIErr : sendAPIErr
    }
})