define(['echarts', 'TimelineMax', 'TweenLite', 'TweenCreator', 'Acounting', 'api/analyze_api', 'text!mapTpl', 'world'],
  function (echarts, TimelineMax, TweenLite, TweenCreator, Acounting, AnalyzeApi, mapTpl) {
      var planePath = 'arrow'
      var ATTR_TOTAL = 'data-total'
      var myChart = null
      var geoCoordMap = {
          'India': [77.13, 28.37],
          'Ghana': [-0.06, 5.35],
          'Uganda': [32.30, 0.20],
          'ShenZhen': [114.045801, 22.543437],
          'Nigeria': [7.32, 9.05],
          'Tanzania': [35.45, -6.08],
          'Ethiopia': [38.42, 9.02],
          'Focus': [66.872961, 18.541838]
      }
      var data = [{
          name: 'India',
          value: 80,
          itemStyle: {
              normal: {
                  color: '#ff3333',
                  borderColor: '#ff3333'
              }
          }
      }, {
          name: 'Ghana',
          value: 80,
          itemStyle: {
              normal: {
                  color: 'orange',
                  borderColor: 'orange'
              }
          }
      }, {
          name: 'Uganda',
          value: 80,
          itemStyle: {
              normal: {
                  color: 'yellow',
                  borderColor: 'yellow'
              }
          }
      }, {
          name: 'Nigeria',
          value: 80,
          itemStyle: {
              normal: {
                  color: 'aqua',
                  borderColor: 'aqua'
              }
          }
      }, {
          name: 'Tanzania',
          value: 80,
          itemStyle: {
              normal: {
                  color: '#dff31e',
                  borderColor: '#dff31e'
              }
          }
      }, {
          name: 'Ethiopia',
          value: 80,
          itemStyle: {
              normal: {
                  color: '#4DFFFF',
                  borderColor: '#4DFFFF'
              }
          }
      }]
      var options = {
          backgroundColor: '#033559',
          tooltip: {
              show: true,
              enterable: true,
              trigger: 'none',
              position: ['50%', '60%'],
              triggerOn: 'click',
              hideDelay: 0,
              formatter: function () {
                  return ''
              }
          },
          geo: {
              name: 'Data screen',
              type: 'map',
              map: 'world',
              roam: false,
              zoom: 3,
              silent: true,
              selectedMode: false,
              center: geoCoordMap.Focus,
              itemStyle: {
                  normal: {
                      areaColor: '#003e81',
                      borderColor: '#0073bb',
                      // borderColor: '#00baf9',
                      borderWidth: 1
                  },
                  emphasis: {
                      areaColor: '#006fc7'
                  }
              },
              regions: [{
                  name: 'India'
              }, {
                  name: 'Uganda'
              }, {
                  name: 'Ghana'
              }, {
                  name: 'Nigeria'
              }, {
                  name: 'Tanzania'
              }, {
                  name: 'Ethiopia'
              }
              ],
              animationDurationUpdate: 1500,
              // animationEasingUpdate: 'cubicInOut'
              // animationEasingUpdate: 'circularInOut'
              // animationEasingUpdate: 'quinticInOut'
              // animationEasingUpdate: 'quadraticInOut'
              animationEasingUpdate: 'exponentialInOut'
          },
          series: [
              {
                  type: 'lines',
                  zlevel: 2,
                  smooth: true,
                  roam: false,
                  effect: {
                      show: true,
                      period: 5,
                      trailLength: 0.1,
                      shadowBlur: 10,
                      symbol: 'circle',
                      symbolSize: 5
                  },
                  lineStyle: {
                      normal: {
                          color: 'orange',
                          width: 0,
                          opacity: 0.2,
                          curveness: 0.1
                      }
                  },
                  data: formtGCData(geoCoordMap, data, 'ShenZhen', true)
              },
              {
                  type: 'lines',
                  zlevel: 2,
                  smooth: true,
                  roam: false,
                  effect: {
                      show: true,
                      trailLength: 0.1,
                      scaleSize: 1,
                      period: 10,
                      shadowBlur: 10,
                      color: '#9CE6FE',
                      symbol: planePath,
                      symbolSize: 5
                  },
                  lineStyle: {
                      normal: {
//                    color: '#65A2C2',
                          color: {
                              type: 'linear', x: 0, y: 0, x2: 1, y2: 1,
                              colorStops: [
                                  {offset: 0, color: '#ff3333'},
                                  {offset: 0.25, color: 'orange'},
                                  {offset: 0.5, color: 'yellow'},
                                  {offset: 0.75, color: 'lime'},
                                  {offset: 1, color: 'aqua'}
                              ]
                          },
                          width: 1,
                          opacity: 0.4,
                          curveness: 0.1
                      }
                  },
                  data: formtGCData(geoCoordMap, data, 'ShenZhen', true)
              },
              {
                  type: 'effectScatter',
                  coordinateSystem: 'geo',
                  zlevel: 2,
                  roam: false,
                  rippleEffect: {
                      period: 4,
                      scale: 4,
                      brushType: 'stroke'
                  },
                  label: {
                      normal: {
                          show: true,
                          fontSize: 22,
                          position: 'right',
                          formatter: '{b}'
                      }
                  },
                  itemStyle: {
                      normal: {
                          color: '#fff',
                          borderColor: 'gold'
                      }
                  },
                  data: formtVData(geoCoordMap, data, 'ShenZhen', false)
              }
          ]
      }

      // console.log(Acounting.formatNumber(1232423.32752, {thousand: ',', precision: 2}))



      function initialize () {
          createMap()

          // setInterval(createSalesVolumeTween, 3000)
          // setInterval(createOrderCountTween, 3000)
          // setInterval(createSalesAmountTween, 3000)

          getTotalSalesData();
      }

      function getTotalSalesData() {
          AnalyzeApi.getTotalSales().then(function (res) {
              console.log(res);

              createSalesAmountTween(+res.datas.total_dollar);
              createSalesVolumeTween(+res.datas.total_qty);
              createOrderCountTween(+res.datas.total_orders);
          })
      }

      function getSalesAmountTpl () {
          return $(mapTpl).filter('#js_totalamount').html()
      }

      function createSalesAmountTween (endValue) {
          var saleAmountTpl = getSalesAmountTpl()
          var salesAmount = $('.js_salesamount')
          var oldValue = Number(salesAmount.attr(ATTR_TOTAL))
          endValue = endValue || (oldValue + 1300)
          TweenCreator.createTweenAnimateFn({
              startValue: {number: oldValue},
              endValue: {number: endValue},
              duration: 2000,
              updateFn: function (item) {
                  salesAmount.attr(ATTR_TOTAL, Acounting.toFixed(item.number, 2))
                  var thousandAmount = Acounting.formatNumber(item.number, {thousand: ',', precision: 2})
                  var mapTplFn = _.template(saleAmountTpl)
                  salesAmount.html(mapTplFn({
                      data: thousandAmount.split('')
                  }))
              }
          }, true, 50).start()
      }

      function createOrderCountTween (endValue) {
          var orderCount = $('.js_ordercount')
          var oldValue = Number(orderCount.attr(ATTR_TOTAL))
          endValue = endValue || (oldValue + 1300)
          TweenCreator.createTweenAnimateFn({
              startValue: {number: oldValue},
              endValue: {number: endValue},
              duration: 2000,
              updateFn: function (item) {
                  orderCount.attr(ATTR_TOTAL, Acounting.toFixed(item.number, 2))
                  orderCount.html(Acounting.formatNumber(item.number, {thousand: ',', precision: 2}))
              }
          }, true, 100).start()
      }

      function createSalesVolumeTween (endValue) {
          var salesVolume = $('.js_salesvolume')
          var oldValue = Number(salesVolume.attr(ATTR_TOTAL))
          endValue = endValue || (oldValue + 1300)
          TweenCreator.createTweenAnimateFn({
              startValue: {number: oldValue},
              endValue: {number: endValue},
              duration: 2000,
              updateFn: function (item) {
                  salesVolume.attr(ATTR_TOTAL, Acounting.toFixed(item.number, 2))
                  salesVolume.html(Acounting.formatNumber(item.number, {thousand: ',', precision: 2}))
              }
          }, true, 50).start()
      }

      function createMap () {
          var mainEle = $('.js_map').get(0)
          if (mainEle) {
              myChart = echarts.init(mainEle)

              resetMapChart(options)
              setSelectAnimate()
          }
      }

      function setSelectAnimate () {
          //设置无限选中动画
          var timeline = new TimelineMax({repeat: Infinity, repeatDelay: 60})
          data.forEach(function (curRegion, index) {
              timeline.add(function () {
                  options.geo.regions.filter(function (r) {
                      return r.name == curRegion.name || r.selected === true
                  }).forEach(function (s) {
                      if (s.selected) {
                          s.selected = false
                      } else {
                          s.selected = true
                      }
                  })
                  resetMapChart({
                      geo: {
                          regions: options.geo.regions
                      }
                  })
              }, index ? '+=60' : 0)
          })
      }

      function resetMapChart (options) {
          if (myChart) {
              myChart.setOption(options, false, true)
          }
      }

      function formtGCData (geoData, data, srcNam, dest) {
          var tGeoDt = []
          if (dest) {
              for (var i = 0, len = data.length; i < len; i++) {
                  if (srcNam != data[i].name) {
                      tGeoDt.push({
                          coords: [geoData[srcNam], geoData[data[i].name]]
                      })
                  }
              }
          } else {
              for (var i = 0, len = data.length; i < len; i++) {
                  if (srcNam != data[i].name) {
                      tGeoDt.push({
                          coords: [geoData[data[i].name], geoData[srcNam]]
                      })
                  }
              }
          }
          return tGeoDt
      }

      function formtVData (geoData, data, srcNam) {
          var tGeoDt = []
          for (var i = 0, len = data.length; i < len; i++) {
              var tNam = data[i].name
              if (srcNam != tNam) {
                  tGeoDt.push({
                      name: tNam,
                      value: geoData[tNam],
                      symbolSize: data[i].value / 5,
                      itemStyle: data[i].itemStyle
                  })
              }
          }
          tGeoDt.push({
              name: srcNam,
              value: geoData[srcNam],
              symbolSize: 15,
              itemStyle: {
                  normal: {
                      color: 'lime',
                      borderColor: 'lime'
                  }
              }
          })
          return tGeoDt
      }

      return {
          initialize: initialize
      }
  })