define(['underscore'], function(_){
    function getRealTimeOrder(id){
        var defer = $.Deferred();
        var url = baseUrl+ '/api/datascreen/realTimeOrders?id='+id;
        $.ajax({
            url: url,
            type: "GET",
            dataType: 'json',
            success:function(result){
                if(+result.code == 800 && result.datas){
                    var transcData = null,newestId = '';
                    transcData = _.map(result.datas,function(item,index){
                        if(index === 0) newestId = item.id;
                        return {
                            id: item.id,
                            country: item.country,
                            transc_area: item.country + ' '+item.city,
                            transc_time: item.order_time,
                            transc_amount: item.sales_money_dollar
                        }
                    });
                    defer.resolve({orders: transcData,id:newestId});
                }else{
                    defer.reject(result);
                }
            },
            error: function(result){
                defer.reject(result);
            }

        });
        return defer;
    }
    function getActivitedUsers(){
        var defer = $.Deferred();
        var url = baseUrl+ '/api/datascreen/activitedUsers';
        $.ajax({
            url: url,
            type: "GET",
            dataType: 'json',
            success:function(result){
                if(+result.code == 800 && result.datas){
                    var count = 0,activeUser = [],allChildren = [];
                    _.each(result.datas,function(item,index){
                        if(count <3 && item.spent_time !== 0){
                            count++;
                            activeUser.push(item);
                            allChildren.push(item.children.length);
                        }
                    });
                    defer.resolve({activeUser: activeUser,cldLen: allChildren});
                }else{
                    defer.reject(result);
                }
            },
            error: function(result){
                defer.reject(result);
            }

        });
        return defer;
    }

    return {
        getRealTimeOrder : getRealTimeOrder,
        getActivitedUsers: getActivitedUsers
    }
})