webpackJsonp([2],{

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(38)

var Component = __webpack_require__(8)(
  /* script */
  __webpack_require__(29),
  /* template */
  __webpack_require__(36),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "e:\\Project\\github\\backbone-require-practice\\webpack\\demo_vue_webpack\\src\\views\\list.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] list.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(2)
  hotAPI.install(__webpack_require__(0), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-31f106ba", Component.options)
  } else {
    hotAPI.reload("data-v-31f106ba", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, "\nul{\n\tlist-style: none;\n\tline-height: 40px;\n}\n.list{\n\tmargin:10px;\n\tfont-size:14px;\n}\nul li{\n\tborder:1px solid gray;\n\ttext-align: left;\n\tline-height: 40px;\n\tpadding-left:10px;\n\tmargin-bottom: 5px;\n\tborder-radius: 5px;\n}\nul li:hover{\n\tcolor:#fff;\n\tbackground: #234234;\n}\n", ""]);

// exports


/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = {
	data: function data() {
		return { list: [1, 3, 4, 65] };
	}
};

/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "list"
  }, [_c('div', [_vm._v("这是我的list页面")]), _vm._v(" "), (_vm.list && _vm.list.length > 0) ? _c('ul', _vm._l((_vm.list), function(item) {
    return _c('li', [_vm._v(_vm._s(item))])
  })) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(2).rerender("data-v-31f106ba", module.exports)
  }
}

/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(26);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(9)("bccbb31a", content, false);
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(26, function() {
     var newContent = __webpack_require__(26);
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});