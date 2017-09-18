/**
 * Created by lin.qiu on 2017/5/22.
 */
require.config({
	// shim:{
	//     select:{
	//         exports:'$.fn.mySelect'
	//         // init:function(){
	//         //     return $.fn.mySelect;
	//         // }
	//     }
	// },
	paths:{
		select:"jquery.search",
		list:"mylist",
		myDialog:"dialog/mydialog",
		myDialogHtml:"dialog/mydialog.html",
		TestDialog:"dialog/testdialog",
		TestDialogHtml:"dialog/testdialog.html",
		LayDate:"../dist/plugins/laydate/laydate",
		myTestCss: "css/base"
	}
})
require(["css!myTestCss"], function(){
	console.log("excute! css")
})
require(["Inherit", "AbstractView", "template", "text!addlist.html", "list", "select"], function (Inherit, AbstractView, template, html, list, se) {
	var View = Inherit.Class(AbstractView, {
		el: "body",
		events: {
			"click .js_list_box": "showDetail",
			"click .js_list_box .js_del": "delRow",
			"click .js_list_box .js_add": "addItem",
			"click .js_dialog":"showDialog",
			"click .js_dialog_modal":"showModal",
			"click .js_dialog_bubble":"showBubble",
			"click .js_dialog_confirm":"showConfirm2",
			"click .js_dialog_control":"showControl",
			"click .js_dialog_define":"showDefine",
			"click .js_dialog_noclose":"showNoClose",
			"click .js_dialog_nobtn":"showNoBtn",
			"click .js_dialog_iframe":"showIframe",
			"click .js_dialog_ab": "showTest",
			"click .js_confirm": "confirm",
			"click .js_confirm_nobtn": "confirm_nobtn",
			"click .js_toast":"toast",
			"click .js_showloading": "sloading",
			"click .js_hideloading": "hloading",
			"click .js_date3":"showDate",
			"click .js_date4":"showDate4"
		},
		__propertys__: function () {
			this.test = 1111
			this.addEvent()

		},
		initialize: function ($super) {
			$super()
			setTimeout(this.bindFn(this.addList), 2000)
			setTimeout(this.bindFn(this.renderListTpl), 2000)
			console.log(this.test)
			console.log(this.$el)

			//加载日期
			// js_date
			this.initDate()
		},
		/**
         * 统一约定，使用underscore的template模板，尽量杜绝字符串拼接
         * template末班尽量使用script标签，type='text/template'存放html
         */
		renderListTpl: function () {
			var box = $(".js_list_box")
			var testData = {
				data: ["linq", "profound", "soul", "junk", "lugd"]
			}
			// var html = template('js_list_tpl', testData);
			var html = template.render($("#js_list_tpl").html(), testData)
			box.html(html)
		},
		addList: function () {
			var result = template.render(html, {})
			console.log(result)
			document.body.appendChild($(result)[0])
		},
		initDate:function() {},

		showDetail: function (e) {
			var target = $(e.currentTarget)
			alert("click!!!" + target.html())
		},
		delRow: function (e) {
			e.stopPropagation()
			e.preventDefault()
			var target = $(e.currentTarget)
			this.delUserNameApi("linq", function (data) {
				target.parents("li").remove()
				alert("del success!!")
			})

		},
		addItem: function (e) {
			e.preventDefault()
			e.stopPropagation()
			e.stopImmediatePropagation()
			alert("addd")
		},
		showDialog:function(e) {
			require(["myDialog"], function(myDialog){
				var dialogView = new myDialog()
			})
		},
		showModal:function(e){
			require(["DialogPlus"], function(Dialog){
				var d = Dialog({
					title: "message",
					content: "<input autofocus />"
				})
				d.showModal()
			})
		},
		showBubble:function(e){
			require(["DialogPlus"], function(Dialog){
				var d = Dialog({
					content: "Hello World!",
					quickClose: true// 点击空白处快速关闭
				})
				d.showModal(e.currentTarget)
			})
		},
		showConfirm2:function(e){
			require(["DialogPlus"], function(Dialog){
				var d = Dialog({
					title: "提示",
					content: "按钮回调函数返回 false 则不许关闭",
					okValue: "确定",
					ok: function () {
						this.title("提交中…")
						return false
					},
					cancelValue: "取消",
					cancel: function () {}
				})
				d.showModal()
			})
		},
		showControl:function(e){
			require(["DialogPlus"], function(Dialog){
				var d = Dialog({
					content: "对话框将在两秒内关闭"
				})
				d.showModal()
				setTimeout(function () {
					d.close().remove()
				}, 2000)
			})
		},
		showDefine:function(e){
			require(["DialogPlus"], function(Dialog){
				var d = Dialog({
					title: "欢迎",
					content: "欢迎使用 artDialog 对话框组件！",
					ok: function () {},
					statusbar: "<label><input type=\"checkbox\">不再提醒</label>"
				})
				d.showModal()
			})
		},
		showNoClose:function(e){
			require(["DialogPlus"], function(Dialog){
				var d = Dialog({
					title: "欢迎",
					content: "欢迎使用 artDialog 对话框组件！",
					ok: function () {
						var that = this
						this.title("正在提交..")
						setTimeout(function () {
							that.close().remove()
						}, 2000)
						return false
					},
					cancel: function () {
						alert("不许关闭")
						return false
					}
				})
				d.showModal()
			})
		},
		showNoBtn:function(e){
			require(["DialogPlus"], function(Dialog){
				var d = Dialog({
					title: "欢迎",
					content: "欢迎使用 artDialog 对话框组件！",
					cancel: false,
					ok: function () {}
				})
				d.showModal()
			})
		},
		showIframe:function(e){
		},
		showTest:function(e) {
			require(["TestDialog"], function(TestDialog){
				var v = new TestDialog({})
				v.show()
			})
		},
		confirm:function(){
			this.showConfirm("tipsxxxxxx？",function(){
				console.log(this.el)
			})
		},
        confirm_nobtn:function(){
            this.showConfirm("tipsxxxxxx？",function(){
                console.log(this.el)
            },function(){},{
            	cancel:true,
				ok:false
			})
        },


		toast:function(){
			this.showToast("服务调用异常！", function(){
				//
				console.log("callback toast excute!!")
			},2 )

            
		},
		sloading:function(clickToHide){
			this.showLoading()
		},
		hloading:function(){
			this.hideLoading()
		},
		showDate:function(e){
			var target = e.currentTarget
			require(["LayDate"], function(laydate){
				laydate({
					skin:"default",
					eventArg:e,
					istime: true,
					max: $(".js_date4").val() ? $(".js_date4").val():null,
					format:"DD/MM/YYYY hh:mm:ss", // 分隔符可以任意定义，该例子表示只显示年月
					choose:function(datas){
						console.log(datas)
					}
				})
			})
		},
		showDate4: function(e) {
			var target = e.currentTarget
			require(["LayDate"], function(laydate){
				laydate({
					skin:"default",
					eventArg:e,
					istime: true,
					min:$(".js_date3").val(),
					format:"DD/MM/YYYY hh:mm:ss", // 分隔符可以任意定义，该例子表示只显示年月
					choose:function(datas){
						console.log(datas)
					}
				})
			})
		},



		/***********************util***************************
         * 此处放功能函数或其它所有的函数
         * 所有调用后台API的函数抽取出来，以Api后缀进行命名
         * */
		delUserNameApi: function (userid, fn) {
			var _this = this
			$.post("wpos/control/deluser", {
				userid: userid,
				error: function (err) {
					typeof fn === "function" && fn.apply(_this, arguments)
				}
			}, function (data) {
				typeof fn === "function" && fn.apply(_this, arguments)
			})
		},
		getDate: function () {
			return +new Date
		}
	})
	new View()
})

// laydate({
//     elem: '#js_date',
//     istime: true,
//     format:   'YYYY-MM-DD hh:mm:ss', // 分隔符可以任意定义，该例子表示只显示年月
//     choose:   function(datas){
//         console.log(datas);
//     }
// });

// laydate({
//     elem: '#js_date2',
//     istime: true,
//     format:   'YYYY-MM-DD hh:mm:ss', // 分隔符可以任意定义，该例子表示只显示年月
//     choose:   function(datas){
//         console.log(datas);
//     }
// });