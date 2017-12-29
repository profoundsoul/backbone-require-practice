define(['underscore','text!template/salerank.html','text!template/productrank.html','api/salerank_api','api/globalerr_api'], function(_,saleRank,productRank,salerankAPI,errAPI){
    var cacheData = {
        tab1: null,
        tab2: null
    };
    window.cacheData = cacheData;
    function initialize(){
        salerankAPI.getHotSale(0)
            .done(function(data){
                var saleRankTpl = _.template(saleRank);
                var productRankTpl = _.template(productRank);
                $('.rank_type2 .rank_box').html(productRankTpl(data));
                $('.rank_type2 .country_rank').find('ul').remove();
                $('.rank_type2 .country_rank').append(saleRankTpl({top3:data.countrySaleTop3}));
               /* Swipe($('.rank_slider')[0], {
                    startSlide: 0,
                    speed: 1000,
                    auto: 3000,
                    continuous: true,
                    disableScroll: false,
                    stopPropagation: false,
                    callback: function(index, elem) {},
                    transitionEnd: function(index, elem) {}
                });*/
           // });

            })
            .fail(function(data){

            })
            .then(function(tab1Data){
                salerankAPI.getHotSale(1)
                    .done(function(tab2Data){

                        cacheData['tab1'] = tab1Data;
                        cacheData['tab2'] = tab2Data;
                        var saleRankTpl = _.template(saleRank);
                        var productRankTpl = _.template(productRank);
                        $('.rank_type1 .rank_box').html(productRankTpl(tab2Data));
                        $('.rank_type1 .country_rank').find('ul').remove();
                        $('.rank_type1 .country_rank').append(saleRankTpl({top3:tab2Data.countrySaleTop3}));
                    })
                    .fail(function(tab2Data){

                    })
                    .then(function(){
                        console.log('the last then');
                        //TODO animation restart
                    });
            })

    }


    return {
        initialize:initialize
    }
})