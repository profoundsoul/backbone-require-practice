/**
 * Created by lin.qiu on 2017/5/26.
 */
define(["Zepto", "Inherit", "DialogPlus", "text!myDialogHtml"], function($, Inherit, Dialog, html){
	var Base = new Inherit.Class({
		__propertys__:function(){},
		initialize:function(){
			var d = Dialog({
				title:"my dialog",
				content: html
			})
			d.show()
		}
	})
	return Base
})
