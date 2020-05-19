define(['underscore'], function(_){
    function getHotSale(type){
        var defer = $.Deferred();
        var url = baseUrl+ '/api/datascreen/hotSale?type='+type;
        var cacheData = window.cacheData;
        if(cacheData['tab1'] && type === 0){
            defer.resolve(cacheData['tab1']);
        }else if(cacheData['tab1'] && type === 1){
            defer.resolve(cacheData['tab2']);
        }else{
            $.ajax({
                url: url,
                type: "GET",
                dataType: 'json',
                success:function(result){
                    if(+result.code == 800 && result.datas){
                        defer.resolve(result.datas);
                    }else{
                        defer.resolve(result);
                    }
                },
                error: function(result){
                    defer.reject(result);
                }

            });
        }

        return defer;
    }
    return {
        getHotSale : getHotSale
    }
})