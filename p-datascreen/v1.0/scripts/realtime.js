define(['underscore','text!realtimetransaction','text!activeuser','api/realtime_api','api/globalerr_api'], function(_,rtr,activeuser,realtimeAPI,errAPI){
    var timerId = 0,id= '';
    function getClock(){
        var currentTime = new Date();
        var year,month,day,hour,minute,second;
        year = currentTime.getFullYear();
        month = currentTime.getMonth() +1;
        month = month < 10 ? '0'+month: month;
        day = currentTime.getDate();
        day = day <10 ? '0'+day : day;
        hour = currentTime.getHours();
        hour = hour <10 ? '0'+hour : hour;
        minute = currentTime.getMinutes();
        minute = minute <10 ? '0'+minute : minute;
        second = currentTime.getSeconds();
        second = second <10 ? '0'+second : second;
        return year+'-'+month+'-'+day+' '+hour+':'+minute +':'+second;
    }
    setInterval(function(){
        $('.time_box').html(getClock());
    },1000);
    function activeUserDomAnimation($dealList,allChildren){
        var stepY0 = 0, stepY1 = 0,stepY2 = 0;
        var $dealList0 = $($dealList[0]),$dealList1 = $($dealList[1]),$dealList2 = $($dealList[2]);
        timerId = setInterval(function(){
            stepY0 = stepY0 -8 ;
            stepY0 = stepY0 % (allChildren[0] *32) ;
            stepY1 = stepY1 -8 ;
            stepY1 = stepY1 % (allChildren[1] *32) ;
            stepY2 = stepY2 -8 ;
            stepY2 = stepY2 % (allChildren[2] *32) ;
            if(allChildren[0]>4 ){
                $dealList0.css('transform','translateY('+stepY0+'px)');
            }
            if(allChildren[1]>4){
                $dealList1.css('transform','translateY('+stepY1+'px)');
            }
            if(allChildren[2]>4){
                $dealList2.css('transform','translateY('+stepY2+'px)');
            }
        },300)

    }
    function getRealTimeData(){
        realtimeAPI.getRealTimeOrder(id)
            .done(function(data){
                id = data.id;
                var realTimeTranscTpl = _.template(rtr);
                $('.deal_list').html(realTimeTranscTpl({orders: data.orders}));
            })
            .fail(function(data){
                var params = {
                    code: data.datas ? data.code : data.status,
                    url:'/api/datascreen/realTimeOrders?id='+id
                };
                errAPI.sendAPIErr(params);
            });
        realtimeAPI.getActivitedUsers()
            .done(function(data){
                var activeUserData = _.template(activeuser);
                $('.active_list').html(activeUserData({active_user: data.activeUser}));
                activeUserDomAnimation($('.detail_list'),data.cldLen);
            })
            .fail(function(data){
                var params = {
                    code: data.datas ? data.code : data.status,
                    url:'/api/datascreen/activitedUsers'
                };
                errAPI.sendAPIErr(params);
            });
    }
    function initialize(){
        getRealTimeData();
        setInterval(function(){
            clearInterval(timerId);
            getRealTimeData()
        },60*1000);
    }
    return {
        initialize:initialize
    }
})