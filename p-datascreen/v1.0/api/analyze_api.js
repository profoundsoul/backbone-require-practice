define(['ApiBase'], function(ApiBase){
    var hgy_dev_domain = '//10.250.160.91:82/';
    var xgj_dev_domain = '//10.250.160.104/';
    return {
        getCategorySalesByYear: ApiBase.createAjaxApiFn({
            domain:hgy_dev_domain,
            url: 'api/datascreen/category/sales/year',
            type: 'get',
            dataType: 'json',
            key: 'P_CATEGORY_SALE_YEAR',
            lifeTime: '1H'
        }),
        getCategorySalesByMonth: ApiBase.createAjaxApiFn({
            domain:hgy_dev_domain,
            url: 'api/datascreen/category/sales/month',
            type: 'get',
            dataType: 'json',
            key: 'P_CATEGORY_SALE_MONTH',
            lifeTime: '1H'
        }),
        getCountrySalesByYear: ApiBase.createAjaxApiFn({
            domain:hgy_dev_domain,
            url: 'api/datascreen/country/sales/year',
            type: 'get',
            dataType: 'json',
            key: 'P_COUNTRY_SALE_YEAR',
            lifeTime: '1H'
        }),
        getCountrySalesByMonth: ApiBase.createAjaxApiFn({
            domain:hgy_dev_domain,
            url: 'api/datascreen/country/sales/month',
            type: 'get',
            dataType: 'json',
            key: 'P_COUNTRY_SALE_MONTH',
            lifeTime: '1H'
        }),
        getSourceSalesByYear: ApiBase.createAjaxApiFn({
            domain:hgy_dev_domain,
            url: 'api/datascreen/source/sales/year',
            type: 'get',
            dataType: 'json',
            key: 'P_SOURCE_SALE_YEAR',
            lifeTime: '1H'
        }),
        getSourceSalesByMonth: ApiBase.createAjaxApiFn({
            domain:hgy_dev_domain,
            url: 'api/datascreen/source/sales/month',
            key: 'P_SOURCE_SALE_MONTH',
            lifeTime: '1H'
        }),
        getTotalSales: ApiBase.createAjaxApiFn({
            domain:xgj_dev_domain,
            url: 'api/datascreen/totalSales',
            key: 'P_SOURCE_SALE_MONTH',
            lifeTime: '1H'
        }),
    }
})