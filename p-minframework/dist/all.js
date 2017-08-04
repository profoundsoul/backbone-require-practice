/*! jQuery v1.9.1 | (c) 2005, 2012 jQuery Foundation, Inc. | jquery.org/license
*/(function(e,t){var n,r,i=typeof t,o=e.document,a=e.location,s=e.jQuery,u=e.$,l={},c=[],p="1.9.1",f=c.concat,d=c.push,h=c.slice,g=c.indexOf,m=l.toString,y=l.hasOwnProperty,v=p.trim,b=function(e,t){return new b.fn.init(e,t,r)},x=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,w=/\S+/g,T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^[\],:{}\s]*$/,E=/(?:^|:|,)(?:\s*\[)+/g,S=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,A=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,j=/^-ms-/,D=/-([\da-z])/gi,L=function(e,t){return t.toUpperCase()},H=function(e){(o.addEventListener||"load"===e.type||"complete"===o.readyState)&&(q(),b.ready())},q=function(){o.addEventListener?(o.removeEventListener("DOMContentLoaded",H,!1),e.removeEventListener("load",H,!1)):(o.detachEvent("onreadystatechange",H),e.detachEvent("onload",H))};b.fn=b.prototype={jquery:p,constructor:b,init:function(e,n,r){var i,a;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof b?n[0]:n,b.merge(this,b.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:o,!0)),C.test(i[1])&&b.isPlainObject(n))for(i in n)b.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(a=o.getElementById(i[2]),a&&a.parentNode){if(a.id!==i[2])return r.find(e);this.length=1,this[0]=a}return this.context=o,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):b.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),b.makeArray(e,this))},selector:"",length:0,size:function(){return this.length},toArray:function(){return h.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=b.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return b.each(this,e,t)},ready:function(e){return b.ready.promise().done(e),this},slice:function(){return this.pushStack(h.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(b.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:d,sort:[].sort,splice:[].splice},b.fn.init.prototype=b.fn,b.extend=b.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},u=1,l=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},u=2),"object"==typeof s||b.isFunction(s)||(s={}),l===u&&(s=this,--u);l>u;u++)if(null!=(o=arguments[u]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(b.isPlainObject(r)||(n=b.isArray(r)))?(n?(n=!1,a=e&&b.isArray(e)?e:[]):a=e&&b.isPlainObject(e)?e:{},s[i]=b.extend(c,a,r)):r!==t&&(s[i]=r));return s},b.extend({noConflict:function(t){return e.$===b&&(e.$=u),t&&e.jQuery===b&&(e.jQuery=s),b},isReady:!1,readyWait:1,holdReady:function(e){e?b.readyWait++:b.ready(!0)},ready:function(e){if(e===!0?!--b.readyWait:!b.isReady){if(!o.body)return setTimeout(b.ready);b.isReady=!0,e!==!0&&--b.readyWait>0||(n.resolveWith(o,[b]),b.fn.trigger&&b(o).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===b.type(e)},isArray:Array.isArray||function(e){return"array"===b.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[m.call(e)]||"object":typeof e},isPlainObject:function(e){if(!e||"object"!==b.type(e)||e.nodeType||b.isWindow(e))return!1;try{if(e.constructor&&!y.call(e,"constructor")&&!y.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||y.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||o;var r=C.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=b.buildFragment([e],t,i),i&&b(i).remove(),b.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=b.trim(n),n&&k.test(n.replace(S,"@").replace(A,"]").replace(E,"")))?Function("return "+n)():(b.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||b.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&b.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(j,"ms-").replace(D,L)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:v&&!v.call("\ufeff\u00a0")?function(e){return null==e?"":v.call(e)}:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?b.merge(n,"string"==typeof e?[e]:e):d.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(g)return g.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return f.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),b.isFunction(e)?(r=h.call(arguments,2),i=function(){return e.apply(n||this,r.concat(h.call(arguments)))},i.guid=e.guid=e.guid||b.guid++,i):t},access:function(e,n,r,i,o,a,s){var u=0,l=e.length,c=null==r;if("object"===b.type(r)){o=!0;for(u in r)b.access(e,n,u,r[u],!0,a,s)}else if(i!==t&&(o=!0,b.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(b(e),n)})),n))for(;l>u;u++)n(e[u],r,s?i:i.call(e[u],u,n(e[u],r)));return o?e:c?n.call(e):l?n(e[0],r):a},now:function(){return(new Date).getTime()}}),b.ready.promise=function(t){if(!n)if(n=b.Deferred(),"complete"===o.readyState)setTimeout(b.ready);else if(o.addEventListener)o.addEventListener("DOMContentLoaded",H,!1),e.addEventListener("load",H,!1);else{o.attachEvent("onreadystatechange",H),e.attachEvent("onload",H);var r=!1;try{r=null==e.frameElement&&o.documentElement}catch(i){}r&&r.doScroll&&function a(){if(!b.isReady){try{r.doScroll("left")}catch(e){return setTimeout(a,50)}q(),b.ready()}}()}return n.promise(t)},b.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=b.type(e);return b.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=b(o);var _={};function F(e){var t=_[e]={};return b.each(e.match(w)||[],function(e,n){t[n]=!0}),t}b.Callbacks=function(e){e="string"==typeof e?_[e]||F(e):b.extend({},e);var n,r,i,o,a,s,u=[],l=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=u.length,n=!0;u&&o>a;a++)if(u[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,u&&(l?l.length&&c(l.shift()):r?u=[]:p.disable())},p={add:function(){if(u){var t=u.length;(function i(t){b.each(t,function(t,n){var r=b.type(n);"function"===r?e.unique&&p.has(n)||u.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=u.length:r&&(s=t,c(r))}return this},remove:function(){return u&&b.each(arguments,function(e,t){var r;while((r=b.inArray(t,u,r))>-1)u.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?b.inArray(e,u)>-1:!(!u||!u.length)},empty:function(){return u=[],this},disable:function(){return u=l=r=t,this},disabled:function(){return!u},lock:function(){return l=t,r||p.disable(),this},locked:function(){return!l},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],!u||i&&!l||(n?l.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},b.extend({Deferred:function(e){var t=[["resolve","done",b.Callbacks("once memory"),"resolved"],["reject","fail",b.Callbacks("once memory"),"rejected"],["notify","progress",b.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return b.Deferred(function(n){b.each(t,function(t,o){var a=o[0],s=b.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&b.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?b.extend(e,r):r}},i={};return r.pipe=r.then,b.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=h.call(arguments),r=n.length,i=1!==r||e&&b.isFunction(e.promise)?r:0,o=1===i?e:b.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?h.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,u,l;if(r>1)for(s=Array(r),u=Array(r),l=Array(r);r>t;t++)n[t]&&b.isFunction(n[t].promise)?n[t].promise().done(a(t,l,n)).fail(o.reject).progress(a(t,u,s)):--i;return i||o.resolveWith(l,n),o.promise()}}),b.support=function(){var t,n,r,a,s,u,l,c,p,f,d=o.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*"),r=d.getElementsByTagName("a")[0],!n||!r||!n.length)return{};s=o.createElement("select"),l=s.appendChild(o.createElement("option")),a=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={getSetAttribute:"t"!==d.className,leadingWhitespace:3===d.firstChild.nodeType,tbody:!d.getElementsByTagName("tbody").length,htmlSerialize:!!d.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:"/a"===r.getAttribute("href"),opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:!!a.value,optSelected:l.selected,enctype:!!o.createElement("form").enctype,html5Clone:"<:nav></:nav>"!==o.createElement("nav").cloneNode(!0).outerHTML,boxModel:"CSS1Compat"===o.compatMode,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},a.checked=!0,t.noCloneChecked=a.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!l.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}a=o.createElement("input"),a.setAttribute("value",""),t.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),t.radioValue="t"===a.value,a.setAttribute("checked","t"),a.setAttribute("name","t"),u=o.createDocumentFragment(),u.appendChild(a),t.appendChecked=a.checked,t.checkClone=u.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;return d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip,b(function(){var n,r,a,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",u=o.getElementsByTagName("body")[0];u&&(n=o.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",u.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",a=d.getElementsByTagName("td"),a[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===a[0].offsetHeight,a[0].style.display="",a[1].style.display="none",t.reliableHiddenOffsets=p&&0===a[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=4===d.offsetWidth,t.doesNotIncludeMarginInBodyOffset=1!==u.offsetTop,e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(o.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(u.style.zoom=1)),u.removeChild(n),n=d=a=r=null)}),n=s=u=l=r=a=null,t}();var O=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,B=/([A-Z])/g;function P(e,n,r,i){if(b.acceptData(e)){var o,a,s=b.expando,u="string"==typeof n,l=e.nodeType,p=l?b.cache:e,f=l?e[s]:e[s]&&s;if(f&&p[f]&&(i||p[f].data)||!u||r!==t)return f||(l?e[s]=f=c.pop()||b.guid++:f=s),p[f]||(p[f]={},l||(p[f].toJSON=b.noop)),("object"==typeof n||"function"==typeof n)&&(i?p[f]=b.extend(p[f],n):p[f].data=b.extend(p[f].data,n)),o=p[f],i||(o.data||(o.data={}),o=o.data),r!==t&&(o[b.camelCase(n)]=r),u?(a=o[n],null==a&&(a=o[b.camelCase(n)])):a=o,a}}function R(e,t,n){if(b.acceptData(e)){var r,i,o,a=e.nodeType,s=a?b.cache:e,u=a?e[b.expando]:b.expando;if(s[u]){if(t&&(o=n?s[u]:s[u].data)){b.isArray(t)?t=t.concat(b.map(t,b.camelCase)):t in o?t=[t]:(t=b.camelCase(t),t=t in o?[t]:t.split(" "));for(r=0,i=t.length;i>r;r++)delete o[t[r]];if(!(n?$:b.isEmptyObject)(o))return}(n||(delete s[u].data,$(s[u])))&&(a?b.cleanData([e],!0):b.support.deleteExpando||s!=s.window?delete s[u]:s[u]=null)}}}b.extend({cache:{},expando:"jQuery"+(p+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?b.cache[e[b.expando]]:e[b.expando],!!e&&!$(e)},data:function(e,t,n){return P(e,t,n)},removeData:function(e,t){return R(e,t)},_data:function(e,t,n){return P(e,t,n,!0)},_removeData:function(e,t){return R(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&b.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),b.fn.extend({data:function(e,n){var r,i,o=this[0],a=0,s=null;if(e===t){if(this.length&&(s=b.data(o),1===o.nodeType&&!b._data(o,"parsedAttrs"))){for(r=o.attributes;r.length>a;a++)i=r[a].name,i.indexOf("data-")||(i=b.camelCase(i.slice(5)),W(o,i,s[i]));b._data(o,"parsedAttrs",!0)}return s}return"object"==typeof e?this.each(function(){b.data(this,e)}):b.access(this,function(n){return n===t?o?W(o,e,b.data(o,e)):null:(this.each(function(){b.data(this,e,n)}),t)},null,n,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){b.removeData(this,e)})}});function W(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(B,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:O.test(r)?b.parseJSON(r):r}catch(o){}b.data(e,n,r)}else r=t}return r}function $(e){var t;for(t in e)if(("data"!==t||!b.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}b.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=b._data(e,n),r&&(!i||b.isArray(r)?i=b._data(e,n,b.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=b.queue(e,t),r=n.length,i=n.shift(),o=b._queueHooks(e,t),a=function(){b.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),o.cur=i,i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return b._data(e,n)||b._data(e,n,{empty:b.Callbacks("once memory").add(function(){b._removeData(e,t+"queue"),b._removeData(e,n)})})}}),b.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?b.queue(this[0],e):n===t?this:this.each(function(){var t=b.queue(this,e,n);b._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&b.dequeue(this,e)})},dequeue:function(e){return this.each(function(){b.dequeue(this,e)})},delay:function(e,t){return e=b.fx?b.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=b.Deferred(),a=this,s=this.length,u=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=b._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(u));return u(),o.promise(n)}});var I,z,X=/[\t\r\n]/g,U=/\r/g,V=/^(?:input|select|textarea|button|object)$/i,Y=/^(?:a|area)$/i,J=/^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,G=/^(?:checked|selected)$/i,Q=b.support.getSetAttribute,K=b.support.input;b.fn.extend({attr:function(e,t){return b.access(this,b.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){b.removeAttr(this,e)})},prop:function(e,t){return b.access(this,b.prop,e,t,arguments.length>1)},removeProp:function(e){return e=b.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,u="string"==typeof e&&e;if(b.isFunction(e))return this.each(function(t){b(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=b.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,u=0===arguments.length||"string"==typeof e&&e;if(b.isFunction(e))return this.each(function(t){b(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?b.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e,r="boolean"==typeof t;return b.isFunction(e)?this.each(function(n){b(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var o,a=0,s=b(this),u=t,l=e.match(w)||[];while(o=l[a++])u=r?u:!s.hasClass(o),s[u?"addClass":"removeClass"](o)}else(n===i||"boolean"===n)&&(this.className&&b._data(this,"__className__",this.className),this.className=this.className||e===!1?"":b._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(X," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=b.isFunction(e),this.each(function(n){var o,a=b(this);1===this.nodeType&&(o=i?e.call(this,n,a.val()):e,null==o?o="":"number"==typeof o?o+="":b.isArray(o)&&(o=b.map(o,function(e){return null==e?"":e+""})),r=b.valHooks[this.type]||b.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=b.valHooks[o.type]||b.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(U,""):null==n?"":n)}}}),b.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,u=0>i?s:o?i:0;for(;s>u;u++)if(n=r[u],!(!n.selected&&u!==i||(b.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&b.nodeName(n.parentNode,"optgroup"))){if(t=b(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n=b.makeArray(t);return b(e).find("option").each(function(){this.selected=b.inArray(b(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attr:function(e,n,r){var o,a,s,u=e.nodeType;if(e&&3!==u&&8!==u&&2!==u)return typeof e.getAttribute===i?b.prop(e,n,r):(a=1!==u||!b.isXMLDoc(e),a&&(n=n.toLowerCase(),o=b.attrHooks[n]||(J.test(n)?z:I)),r===t?o&&a&&"get"in o&&null!==(s=o.get(e,n))?s:(typeof e.getAttribute!==i&&(s=e.getAttribute(n)),null==s?t:s):null!==r?o&&a&&"set"in o&&(s=o.set(e,r,n))!==t?s:(e.setAttribute(n,r+""),r):(b.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(w);if(o&&1===e.nodeType)while(n=o[i++])r=b.propFix[n]||n,J.test(n)?!Q&&G.test(n)?e[b.camelCase("default-"+n)]=e[r]=!1:e[r]=!1:b.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!b.support.radioValue&&"radio"===t&&b.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!b.isXMLDoc(e),a&&(n=b.propFix[n]||n,o=b.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):V.test(e.nodeName)||Y.test(e.nodeName)&&e.href?0:t}}}}),z={get:function(e,n){var r=b.prop(e,n),i="boolean"==typeof r&&e.getAttribute(n),o="boolean"==typeof r?K&&Q?null!=i:G.test(n)?e[b.camelCase("default-"+n)]:!!i:e.getAttributeNode(n);return o&&o.value!==!1?n.toLowerCase():t},set:function(e,t,n){return t===!1?b.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&b.propFix[n]||n,n):e[b.camelCase("default-"+n)]=e[n]=!0,n}},K&&Q||(b.attrHooks.value={get:function(e,n){var r=e.getAttributeNode(n);return b.nodeName(e,"input")?e.defaultValue:r&&r.specified?r.value:t},set:function(e,n,r){return b.nodeName(e,"input")?(e.defaultValue=n,t):I&&I.set(e,n,r)}}),Q||(I=b.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&("id"===n||"name"===n||"coords"===n?""!==r.value:r.specified)?r.value:t},set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},b.attrHooks.contenteditable={get:I.get,set:function(e,t,n){I.set(e,""===t?!1:t,n)}},b.each(["width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}})})),b.support.hrefNormalized||(b.each(["href","src","width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return null==r?t:r}})}),b.each(["href","src"],function(e,t){b.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}})),b.support.style||(b.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),b.support.optSelected||(b.propHooks.selected=b.extend(b.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),b.support.enctype||(b.propFix.enctype="encoding"),b.support.checkOn||b.each(["radio","checkbox"],function(){b.valHooks[this]={get:function(e){return null===e.getAttribute("value")?"on":e.value}}}),b.each(["radio","checkbox"],function(){b.valHooks[this]=b.extend(b.valHooks[this],{set:function(e,n){return b.isArray(n)?e.checked=b.inArray(b(e).val(),n)>=0:t}})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}b.event={global:{},add:function(e,n,r,o,a){var s,u,l,c,p,f,d,h,g,m,y,v=b._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=b.guid++),(u=v.events)||(u=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof b===i||e&&b.event.triggered===e.type?t:b.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(w)||[""],l=n.length;while(l--)s=rt.exec(n[l])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),p=b.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=b.event.special[g]||{},d=b.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&b.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=u[g])||(h=u[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),b.event.global[g]=!0;e=null}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,p,f,d,h,g,m=b.hasData(e)&&b._data(e);if(m&&(c=m.events)){t=(t||"").match(w)||[""],l=t.length;while(l--)if(s=rt.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=b.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),u=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));u&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||b.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)b.event.remove(e,d+t[l],n,r,!0);b.isEmptyObject(c)&&(delete m.handle,b._removeData(e,"events"))}},trigger:function(n,r,i,a){var s,u,l,c,p,f,d,h=[i||o],g=y.call(n,"type")?n.type:n,m=y.call(n,"namespace")?n.namespace.split("."):[];if(l=f=i=i||o,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+b.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),u=0>g.indexOf(":")&&"on"+g,n=n[b.expando]?n:new b.Event(g,"object"==typeof n&&n),n.isTrigger=!0,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:b.makeArray(r,[n]),p=b.event.special[g]||{},a||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!a&&!p.noBubble&&!b.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(l=l.parentNode);l;l=l.parentNode)h.push(l),f=l;f===(i.ownerDocument||o)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((l=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(b._data(l,"events")||{})[n.type]&&b._data(l,"handle"),s&&s.apply(l,r),s=u&&l[u],s&&b.acceptData(l)&&s.apply&&s.apply(l,r)===!1&&n.preventDefault();if(n.type=g,!(a||n.isDefaultPrevented()||p._default&&p._default.apply(i.ownerDocument,r)!==!1||"click"===g&&b.nodeName(i,"a")||!b.acceptData(i)||!u||!i[g]||b.isWindow(i))){f=i[u],f&&(i[u]=null),b.event.triggered=g;try{i[g]()}catch(v){}b.event.triggered=t,f&&(i[u]=f)}return n.result}},dispatch:function(e){e=b.event.fix(e);var n,r,i,o,a,s=[],u=h.call(arguments),l=(b._data(this,"events")||{})[e.type]||[],c=b.event.special[e.type]||{};if(u[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=b.event.handlers.call(this,e,l),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((b.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,u),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],u=n.delegateCount,l=e.target;if(u&&l.nodeType&&(!e.button||"click"!==e.type))for(;l!=this;l=l.parentNode||this)if(1===l.nodeType&&(l.disabled!==!0||"click"!==e.type)){for(o=[],a=0;u>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?b(r,this).index(l)>=0:b.find(r,this,null,[l]).length),o[r]&&o.push(i);o.length&&s.push({elem:l,handlers:o})}return n.length>u&&s.push({elem:this,handlers:n.slice(u)}),s},fix:function(e){if(e[b.expando])return e;var t,n,r,i=e.type,a=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new b.Event(a),t=r.length;while(t--)n=r[t],e[n]=a[n];return e.target||(e.target=a.srcElement||o),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,a):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,a,s=n.button,u=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||o,a=i.documentElement,r=i.body,e.pageX=n.clientX+(a&&a.scrollLeft||r&&r.scrollLeft||0)-(a&&a.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(a&&a.scrollTop||r&&r.scrollTop||0)-(a&&a.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&u&&(e.relatedTarget=u===e.target?n.toElement:u),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},click:{trigger:function(){return b.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t}},focus:{trigger:function(){if(this!==o.activeElement&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===o.activeElement&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=b.extend(new b.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?b.event.trigger(i,null,t):b.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},b.removeEvent=o.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},b.Event=function(e,n){return this instanceof b.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&b.extend(this,n),this.timeStamp=e&&e.timeStamp||b.now(),this[b.expando]=!0,t):new b.Event(e,n)},b.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},b.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){b.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj
	return(!i||i!==r&&!b.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),b.support.submitBubbles||(b.event.special.submit={setup:function(){return b.nodeName(this,"form")?!1:(b.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=b.nodeName(n,"input")||b.nodeName(n,"button")?n.form:t;r&&!b._data(r,"submitBubbles")&&(b.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),b._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&b.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return b.nodeName(this,"form")?!1:(b.event.remove(this,"._submit"),t)}}),b.support.changeBubbles||(b.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(b.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),b.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),b.event.simulate("change",this,e,!0)})),!1):(b.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!b._data(t,"changeBubbles")&&(b.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||b.event.simulate("change",this.parentNode,e,!0)}),b._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return b.event.remove(this,"._change"),!Z.test(this.nodeName)}}),b.support.focusinBubbles||b.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){b.event.simulate(t,e.target,b.event.fix(e),!0)};b.event.special[t]={setup:function(){0===n++&&o.addEventListener(e,r,!0)},teardown:function(){0===--n&&o.removeEventListener(e,r,!0)}}}),b.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return b().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=b.guid++)),this.each(function(){b.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,b(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){b.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){b.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?b.event.trigger(e,n,r,!0):t}}),function(e,t){var n,r,i,o,a,s,u,l,c,p,f,d,h,g,m,y,v,x="sizzle"+-new Date,w=e.document,T={},N=0,C=0,k=it(),E=it(),S=it(),A=typeof t,j=1<<31,D=[],L=D.pop,H=D.push,q=D.slice,M=D.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},_="[\\x20\\t\\r\\n\\f]",F="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=F.replace("w","w#"),B="([*^$|!~]?=)",P="\\["+_+"*("+F+")"+_+"*(?:"+B+_+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+O+")|)|)"+_+"*\\]",R=":("+F+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+P.replace(3,8)+")*)|.*)\\)|)",W=RegExp("^"+_+"+|((?:^|[^\\\\])(?:\\\\.)*)"+_+"+$","g"),$=RegExp("^"+_+"*,"+_+"*"),I=RegExp("^"+_+"*([\\x20\\t\\r\\n\\f>+~])"+_+"*"),z=RegExp(R),X=RegExp("^"+O+"$"),U={ID:RegExp("^#("+F+")"),CLASS:RegExp("^\\.("+F+")"),NAME:RegExp("^\\[name=['\"]?("+F+")['\"]?\\]"),TAG:RegExp("^("+F.replace("w","w*")+")"),ATTR:RegExp("^"+P),PSEUDO:RegExp("^"+R),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+_+"*(even|odd|(([+-]|)(\\d*)n|)"+_+"*(?:([+-]|)"+_+"*(\\d+)|))"+_+"*\\)|)","i"),needsContext:RegExp("^"+_+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+_+"*((?:-\\d)?\\d*)"+_+"*\\)|)(?=[^-]|$)","i")},V=/[\x20\t\r\n\f]*[+~]/,Y=/^[^{]+\{\s*\[native code/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,G=/^(?:input|select|textarea|button)$/i,Q=/^h\d$/i,K=/'|\\/g,Z=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,et=/\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,tt=function(e,t){var n="0x"+t-65536;return n!==n?t:0>n?String.fromCharCode(n+65536):String.fromCharCode(55296|n>>10,56320|1023&n)};try{q.call(w.documentElement.childNodes,0)[0].nodeType}catch(nt){q=function(e){var t,n=[];while(t=this[e++])n.push(t);return n}}function rt(e){return Y.test(e+"")}function it(){var e,t=[];return e=function(n,r){return t.push(n+=" ")>i.cacheLength&&delete e[t.shift()],e[n]=r}}function ot(e){return e[x]=!0,e}function at(e){var t=p.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}}function st(e,t,n,r){var i,o,a,s,u,l,f,g,m,v;if((t?t.ownerDocument||t:w)!==p&&c(t),t=t||p,n=n||[],!e||"string"!=typeof e)return n;if(1!==(s=t.nodeType)&&9!==s)return[];if(!d&&!r){if(i=J.exec(e))if(a=i[1]){if(9===s){if(o=t.getElementById(a),!o||!o.parentNode)return n;if(o.id===a)return n.push(o),n}else if(t.ownerDocument&&(o=t.ownerDocument.getElementById(a))&&y(t,o)&&o.id===a)return n.push(o),n}else{if(i[2])return H.apply(n,q.call(t.getElementsByTagName(e),0)),n;if((a=i[3])&&T.getByClassName&&t.getElementsByClassName)return H.apply(n,q.call(t.getElementsByClassName(a),0)),n}if(T.qsa&&!h.test(e)){if(f=!0,g=x,m=t,v=9===s&&e,1===s&&"object"!==t.nodeName.toLowerCase()){l=ft(e),(f=t.getAttribute("id"))?g=f.replace(K,"\\$&"):t.setAttribute("id",g),g="[id='"+g+"'] ",u=l.length;while(u--)l[u]=g+dt(l[u]);m=V.test(e)&&t.parentNode||t,v=l.join(",")}if(v)try{return H.apply(n,q.call(m.querySelectorAll(v),0)),n}catch(b){}finally{f||t.removeAttribute("id")}}}return wt(e.replace(W,"$1"),t,n,r)}a=st.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},c=st.setDocument=function(e){var n=e?e.ownerDocument||e:w;return n!==p&&9===n.nodeType&&n.documentElement?(p=n,f=n.documentElement,d=a(n),T.tagNameNoComments=at(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),T.attributes=at(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return"boolean"!==t&&"string"!==t}),T.getByClassName=at(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",e.getElementsByClassName&&e.getElementsByClassName("e").length?(e.lastChild.className="e",2===e.getElementsByClassName("e").length):!1}),T.getByName=at(function(e){e.id=x+0,e.innerHTML="<a name='"+x+"'></a><div name='"+x+"'></div>",f.insertBefore(e,f.firstChild);var t=n.getElementsByName&&n.getElementsByName(x).length===2+n.getElementsByName(x+0).length;return T.getIdNotName=!n.getElementById(x),f.removeChild(e),t}),i.attrHandle=at(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==A&&"#"===e.firstChild.getAttribute("href")})?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},T.getIdNotName?(i.find.ID=function(e,t){if(typeof t.getElementById!==A&&!d){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},i.filter.ID=function(e){var t=e.replace(et,tt);return function(e){return e.getAttribute("id")===t}}):(i.find.ID=function(e,n){if(typeof n.getElementById!==A&&!d){var r=n.getElementById(e);return r?r.id===e||typeof r.getAttributeNode!==A&&r.getAttributeNode("id").value===e?[r]:t:[]}},i.filter.ID=function(e){var t=e.replace(et,tt);return function(e){var n=typeof e.getAttributeNode!==A&&e.getAttributeNode("id");return n&&n.value===t}}),i.find.TAG=T.tagNameNoComments?function(e,n){return typeof n.getElementsByTagName!==A?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},i.find.NAME=T.getByName&&function(e,n){return typeof n.getElementsByName!==A?n.getElementsByName(name):t},i.find.CLASS=T.getByClassName&&function(e,n){return typeof n.getElementsByClassName===A||d?t:n.getElementsByClassName(e)},g=[],h=[":focus"],(T.qsa=rt(n.querySelectorAll))&&(at(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||h.push("\\["+_+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||h.push(":checked")}),at(function(e){e.innerHTML="<input type='hidden' i=''/>",e.querySelectorAll("[i^='']").length&&h.push("[*^$]="+_+"*(?:\"\"|'')"),e.querySelectorAll(":enabled").length||h.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),h.push(",.*:")})),(T.matchesSelector=rt(m=f.matchesSelector||f.mozMatchesSelector||f.webkitMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&at(function(e){T.disconnectedMatch=m.call(e,"div"),m.call(e,"[s!='']:x"),g.push("!=",R)}),h=RegExp(h.join("|")),g=RegExp(g.join("|")),y=rt(f.contains)||f.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},v=f.compareDocumentPosition?function(e,t){var r;return e===t?(u=!0,0):(r=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t))?1&r||e.parentNode&&11===e.parentNode.nodeType?e===n||y(w,e)?-1:t===n||y(w,t)?1:0:4&r?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return u=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:0;if(o===a)return ut(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?ut(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},u=!1,[0,0].sort(v),T.detectDuplicates=u,p):p},st.matches=function(e,t){return st(e,null,null,t)},st.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&c(e),t=t.replace(Z,"='$1']"),!(!T.matchesSelector||d||g&&g.test(t)||h.test(t)))try{var n=m.call(e,t);if(n||T.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(r){}return st(t,p,null,[e]).length>0},st.contains=function(e,t){return(e.ownerDocument||e)!==p&&c(e),y(e,t)},st.attr=function(e,t){var n;return(e.ownerDocument||e)!==p&&c(e),d||(t=t.toLowerCase()),(n=i.attrHandle[t])?n(e):d||T.attributes?e.getAttribute(t):((n=e.getAttributeNode(t))||e.getAttribute(t))&&e[t]===!0?t:n&&n.specified?n.value:null},st.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},st.uniqueSort=function(e){var t,n=[],r=1,i=0;if(u=!T.detectDuplicates,e.sort(v),u){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));while(i--)e.splice(n[i],1)}return e};function ut(e,t){var n=t&&e,r=n&&(~t.sourceIndex||j)-(~e.sourceIndex||j);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function lt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function ct(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function pt(e){return ot(function(t){return t=+t,ot(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}o=st.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=o(t);return n},i=st.selectors={cacheLength:50,createPseudo:ot,match:U,find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(et,tt),e[3]=(e[4]||e[5]||"").replace(et,tt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||st.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&st.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return U.CHILD.test(e[0])?null:(e[4]?e[2]=e[4]:n&&z.test(n)&&(t=ft(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){return"*"===e?function(){return!0}:(e=e.replace(et,tt).toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=k[e+" "];return t||(t=RegExp("(^|"+_+")"+e+"("+_+"|$)"))&&k(e,function(e){return t.test(e.className||typeof e.getAttribute!==A&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=st.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!u&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[x]||(m[x]={}),l=c[e]||[],d=l[0]===N&&l[1],f=l[0]===N&&l[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[N,d,f];break}}else if(v&&(l=(t[x]||(t[x]={}))[e])&&l[0]===N)f=l[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[x]||(p[x]={}))[e]=[N,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||st.error("unsupported pseudo: "+e);return r[x]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?ot(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=M.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:ot(function(e){var t=[],n=[],r=s(e.replace(W,"$1"));return r[x]?ot(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:ot(function(e){return function(t){return st(e,t).length>0}}),contains:ot(function(e){return function(t){return(t.textContent||t.innerText||o(t)).indexOf(e)>-1}}),lang:ot(function(e){return X.test(e||"")||st.error("unsupported lang: "+e),e=e.replace(et,tt).toLowerCase(),function(t){var n;do if(n=d?t.getAttribute("xml:lang")||t.getAttribute("lang"):t.lang)return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===f},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return Q.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:pt(function(){return[0]}),last:pt(function(e,t){return[t-1]}),eq:pt(function(e,t,n){return[0>n?n+t:n]}),even:pt(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:pt(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:pt(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:pt(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}};for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[n]=lt(n);for(n in{submit:!0,reset:!0})i.pseudos[n]=ct(n);function ft(e,t){var n,r,o,a,s,u,l,c=E[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=i.preFilter;while(s){(!n||(r=$.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),u.push(o=[])),n=!1,(r=I.exec(s))&&(n=r.shift(),o.push({value:n,type:r[0].replace(W," ")}),s=s.slice(n.length));for(a in i.filter)!(r=U[a].exec(s))||l[a]&&!(r=l[a](r))||(n=r.shift(),o.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?st.error(e):E(e,u).slice(0)}function dt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function ht(e,t,n){var i=t.dir,o=n&&"parentNode"===i,a=C++;return t.first?function(t,n,r){while(t=t[i])if(1===t.nodeType||o)return e(t,n,r)}:function(t,n,s){var u,l,c,p=N+" "+a;if(s){while(t=t[i])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[i])if(1===t.nodeType||o)if(c=t[x]||(t[x]={}),(l=c[i])&&l[0]===p){if((u=l[1])===!0||u===r)return u===!0}else if(l=c[i]=[p],l[1]=e(t,n,s)||r,l[1]===!0)return!0}}function gt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function mt(e,t,n,r,i){var o,a=[],s=0,u=e.length,l=null!=t;for(;u>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),l&&t.push(s));return a}function yt(e,t,n,r,i,o){return r&&!r[x]&&(r=yt(r)),i&&!i[x]&&(i=yt(i,o)),ot(function(o,a,s,u){var l,c,p,f=[],d=[],h=a.length,g=o||xt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:mt(g,f,e,s,u),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,u),r){l=mt(y,d),r(l,[],s,u),c=l.length;while(c--)(p=l[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){l=[],c=y.length;while(c--)(p=y[c])&&l.push(m[c]=p);i(null,y=[],l,u)}c=y.length;while(c--)(p=y[c])&&(l=i?M.call(o,p):f[c])>-1&&(o[l]=!(a[l]=p))}}else y=mt(y===a?y.splice(h,y.length):y),i?i(null,a,y,u):H.apply(a,y)})}function vt(e){var t,n,r,o=e.length,a=i.relative[e[0].type],s=a||i.relative[" "],u=a?1:0,c=ht(function(e){return e===t},s,!0),p=ht(function(e){return M.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;o>u;u++)if(n=i.relative[e[u].type])f=[ht(gt(f),n)];else{if(n=i.filter[e[u].type].apply(null,e[u].matches),n[x]){for(r=++u;o>r;r++)if(i.relative[e[r].type])break;return yt(u>1&&gt(f),u>1&&dt(e.slice(0,u-1)).replace(W,"$1"),n,r>u&&vt(e.slice(u,r)),o>r&&vt(e=e.slice(r)),o>r&&dt(e))}f.push(n)}return gt(f)}function bt(e,t){var n=0,o=t.length>0,a=e.length>0,s=function(s,u,c,f,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,T=l,C=s||a&&i.find.TAG("*",d&&u.parentNode||u),k=N+=null==T?1:Math.random()||.1;for(w&&(l=u!==p&&u,r=n);null!=(h=C[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,u,c)){f.push(h);break}w&&(N=k,r=++n)}o&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,o&&b!==v){g=0;while(m=t[g++])m(x,y,u,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=L.call(f));y=mt(y)}H.apply(f,y),w&&!s&&y.length>0&&v+t.length>1&&st.uniqueSort(f)}return w&&(N=k,l=T),x};return o?ot(s):s}s=st.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=ft(e)),n=t.length;while(n--)o=vt(t[n]),o[x]?r.push(o):i.push(o);o=S(e,bt(i,r))}return o};function xt(e,t,n){var r=0,i=t.length;for(;i>r;r++)st(e,t[r],n);return n}function wt(e,t,n,r){var o,a,u,l,c,p=ft(e);if(!r&&1===p.length){if(a=p[0]=p[0].slice(0),a.length>2&&"ID"===(u=a[0]).type&&9===t.nodeType&&!d&&i.relative[a[1].type]){if(t=i.find.ID(u.matches[0].replace(et,tt),t)[0],!t)return n;e=e.slice(a.shift().value.length)}o=U.needsContext.test(e)?0:a.length;while(o--){if(u=a[o],i.relative[l=u.type])break;if((c=i.find[l])&&(r=c(u.matches[0].replace(et,tt),V.test(a[0].type)&&t.parentNode||t))){if(a.splice(o,1),e=r.length&&dt(a),!e)return H.apply(n,q.call(r,0)),n;break}}}return s(e,p)(r,t,d,n,V.test(e)),n}i.pseudos.nth=i.pseudos.eq;function Tt(){}i.filters=Tt.prototype=i.pseudos,i.setFilters=new Tt,c(),st.attr=b.attr,b.find=st,b.expr=st.selectors,b.expr[":"]=b.expr.pseudos,b.unique=st.uniqueSort,b.text=st.getText,b.isXMLDoc=st.isXML,b.contains=st.contains}(e);var at=/Until$/,st=/^(?:parents|prev(?:Until|All))/,ut=/^.[^:#\[\.,]*$/,lt=b.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};b.fn.extend({find:function(e){var t,n,r,i=this.length;if("string"!=typeof e)return r=this,this.pushStack(b(e).filter(function(){for(t=0;i>t;t++)if(b.contains(r[t],this))return!0}));for(n=[],t=0;i>t;t++)b.find(e,this[t],n);return n=this.pushStack(i>1?b.unique(n):n),n.selector=(this.selector?this.selector+" ":"")+e,n},has:function(e){var t,n=b(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(b.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e,!1))},filter:function(e){return this.pushStack(ft(this,e,!0))},is:function(e){return!!e&&("string"==typeof e?lt.test(e)?b(e,this.context).index(this[0])>=0:b.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,r=0,i=this.length,o=[],a=lt.test(e)||"string"!=typeof e?b(e,t||this.context):0;for(;i>r;r++){n=this[r];while(n&&n.ownerDocument&&n!==t&&11!==n.nodeType){if(a?a.index(n)>-1:b.find.matchesSelector(n,e)){o.push(n);break}n=n.parentNode}}return this.pushStack(o.length>1?b.unique(o):o)},index:function(e){return e?"string"==typeof e?b.inArray(this[0],b(e)):b.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?b(e,t):b.makeArray(e&&e.nodeType?[e]:e),r=b.merge(this.get(),n);return this.pushStack(b.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),b.fn.andSelf=b.fn.addBack;function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}b.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return b.dir(e,"parentNode")},parentsUntil:function(e,t,n){return b.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return b.dir(e,"nextSibling")},prevAll:function(e){return b.dir(e,"previousSibling")},nextUntil:function(e,t,n){return b.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return b.dir(e,"previousSibling",n)},siblings:function(e){return b.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return b.sibling(e.firstChild)},contents:function(e){return b.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:b.merge([],e.childNodes)}},function(e,t){b.fn[e]=function(n,r){var i=b.map(this,t,n);return at.test(e)||(r=n),r&&"string"==typeof r&&(i=b.filter(r,i)),i=this.length>1&&!ct[e]?b.unique(i):i,this.length>1&&st.test(e)&&(i=i.reverse()),this.pushStack(i)}}),b.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),1===t.length?b.find.matchesSelector(t[0],e)?[t[0]]:[]:b.find.matches(e,t)},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!b(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(t=t||0,b.isFunction(t))return b.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return b.grep(e,function(e){return e===t===n});if("string"==typeof t){var r=b.grep(e,function(e){return 1===e.nodeType});if(ut.test(t))return b.filter(t,r,!n);t=b.filter(t,r)}return b.grep(e,function(e){return b.inArray(e,t)>=0===n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Nt=/^(?:checkbox|radio)$/i,Ct=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:b.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(o),Dt=jt.appendChild(o.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,b.fn.extend({text:function(e){return b.access(this,function(e){return e===t?b.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(b.isFunction(e))return this.each(function(t){b(this).wrapAll(e.call(this,t))});if(this[0]){var t=b(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return b.isFunction(e)?this.each(function(t){b(this).wrapInner(e.call(this,t))}):this.each(function(){var t=b(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=b.isFunction(e);return this.each(function(n){b(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){b.nodeName(this,"body")||b(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.insertBefore(e,this.firstChild)})},before:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=0;for(;null!=(n=this[r]);r++)(!e||b.filter(e,[n]).length>0)&&(t||1!==n.nodeType||b.cleanData(Ot(n)),n.parentNode&&(t&&b.contains(n.ownerDocument,n)&&Mt(Ot(n,"script")),n.parentNode.removeChild(n)));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&b.cleanData(Ot(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&b.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return b.clone(this,e,t)})},html:function(e){return b.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!b.support.htmlSerialize&&mt.test(e)||!b.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(b.cleanData(Ot(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){var t=b.isFunction(e);return t||"string"==typeof e||(e=b(e).not(this).detach()),this.domManip([e],!0,function(e){var t=this.nextSibling,n=this.parentNode;n&&(b(this).remove(),n.insertBefore(e,t))})},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=f.apply([],e);var i,o,a,s,u,l,c=0,p=this.length,d=this,h=p-1,g=e[0],m=b.isFunction(g);if(m||!(1>=p||"string"!=typeof g||b.support.checkClone)&&Ct.test(g))return this.each(function(i){var o=d.eq(i);m&&(e[0]=g.call(this,i,n?o.html():t)),o.domManip(e,n,r)});if(p&&(l=b.buildFragment(e,this[0].ownerDocument,!1,this),i=l.firstChild,1===l.childNodes.length&&(l=i),i)){for(n=n&&b.nodeName(i,"tr"),s=b.map(Ot(l,"script"),Ht),a=s.length;p>c;c++)o=l,c!==h&&(o=b.clone(o,!0,!0),a&&b.merge(s,Ot(o,"script"))),r.call(n&&b.nodeName(this[c],"table")?Lt(this[c],"tbody"):this[c],o,c);if(a)for(u=s[s.length-1].ownerDocument,b.map(s,qt),c=0;a>c;c++)o=s[c],kt.test(o.type||"")&&!b._data(o,"globalEval")&&b.contains(u,o)&&(o.src?b.ajax({url:o.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):b.globalEval((o.text||o.textContent||o.innerHTML||"").replace(St,"")));l=i=null}return this}});function Lt(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function Ht(e){var t=e.getAttributeNode("type");return e.type=(t&&t.specified)+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function Mt(e,t){var n,r=0;for(;null!=(n=e[r]);r++)b._data(n,"globalEval",!t||b._data(t[r],"globalEval"))}function _t(e,t){if(1===t.nodeType&&b.hasData(e)){var n,r,i,o=b._data(e),a=b._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)b.event.add(t,n,s[n][r])}a.data&&(a.data=b.extend({},a.data))}}function Ft(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!b.support.noCloneEvent&&t[b.expando]){i=b._data(t);for(r in i.events)b.removeEvent(t,r,i.handle);t.removeAttribute(b.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),b.support.html5Clone&&e.innerHTML&&!b.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Nt.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}b.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){b.fn[e]=function(e){var n,r=0,i=[],o=b(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),b(o[r])[t](n),d.apply(i,n.get());return this.pushStack(i)}});function Ot(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||b.nodeName(o,n)?s.push(o):b.merge(s,Ot(o,n));return n===t||n&&b.nodeName(e,n)?b.merge([e],s):s}function Bt(e){Nt.test(e.type)&&(e.defaultChecked=e.checked)}b.extend({clone:function(e,t,n){var r,i,o,a,s,u=b.contains(e.ownerDocument,e);if(b.support.html5Clone||b.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(b.support.noCloneEvent&&b.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||b.isXMLDoc(e)))for(r=Ot(o),s=Ot(e),a=0;null!=(i=s[a]);++a)r[a]&&Ft(i,r[a]);if(t)if(n)for(s=s||Ot(e),r=r||Ot(o),a=0;null!=(i=s[a]);a++)_t(i,r[a]);else _t(e,o);return r=Ot(o,"script"),r.length>0&&Mt(r,!u&&Ot(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,u,l,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===b.type(o))b.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),u=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[u]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!b.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!b.support.tbody){o="table"!==u||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)b.nodeName(l=o.childNodes[i],"tbody")&&!l.childNodes.length&&o.removeChild(l)
}b.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),b.support.appendChecked||b.grep(Ot(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===b.inArray(o,r))&&(a=b.contains(o.ownerDocument,o),s=Ot(f.appendChild(o),"script"),a&&Mt(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,u=b.expando,l=b.cache,p=b.support.deleteExpando,f=b.event.special;for(;null!=(n=e[s]);s++)if((t||b.acceptData(n))&&(o=n[u],a=o&&l[o])){if(a.events)for(r in a.events)f[r]?b.event.remove(n,r):b.removeEvent(n,r,a.handle);l[o]&&(delete l[o],p?delete n[u]:typeof n.removeAttribute!==i?n.removeAttribute(u):n[u]=null,c.push(o))}}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+x+")(.*)$","i"),Yt=RegExp("^("+x+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+x+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===b.css(e,"display")||!b.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=b._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=b._data(r,"olddisplay",un(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&b._data(r,"olddisplay",i?n:b.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}b.fn.extend({css:function(e,n){return b.access(this,function(e,n,r){var i,o,a={},s=0;if(b.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=b.css(e,n[s],!1,o);return a}return r!==t?b.style(e,n,r):b.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){var t="boolean"==typeof e;return this.each(function(){(t?e:nn(this))?b(this).show():b(this).hide()})}}),b.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":b.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,u=b.camelCase(n),l=e.style;if(n=b.cssProps[u]||(b.cssProps[u]=tn(l,u)),s=b.cssHooks[n]||b.cssHooks[u],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:l[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(b.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||b.cssNumber[u]||(r+="px"),b.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(l[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{l[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,u=b.camelCase(n);return n=b.cssProps[u]||(b.cssProps[u]=tn(e.style,u)),s=b.cssHooks[n]||b.cssHooks[u],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||b.isNumeric(o)?o||0:a):a},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),u=s?s.getPropertyValue(n)||s[n]:t,l=e.style;return s&&(""!==u||b.contains(e.ownerDocument,e)||(u=b.style(e,n)),Yt.test(u)&&Ut.test(n)&&(i=l.width,o=l.minWidth,a=l.maxWidth,l.minWidth=l.maxWidth=l.width=u,u=s.width,l.width=i,l.minWidth=o,l.maxWidth=a)),u}):o.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),u=s?s[n]:t,l=e.style;return null==u&&l&&l[n]&&(u=l[n]),Yt.test(u)&&!zt.test(n)&&(i=l.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),l.left="fontSize"===n?"1em":u,u=l.pixelLeft+"px",l.left=i,a&&(o.left=a)),""===u?"auto":u});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=b.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=b.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=b.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=b.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=b.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(b.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function un(e){var t=o,n=Gt[e];return n||(n=ln(e,t),"none"!==n&&n||(Pt=(Pt||b("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=ln(e,t),Pt.detach()),Gt[e]=n),n}function ln(e,t){var n=b(t.createElement(e)).appendTo(t.body),r=b.css(n[0],"display");return n.remove(),r}b.each(["height","width"],function(e,n){b.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(b.css(e,"display"))?b.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,i),i):0)}}}),b.support.opacity||(b.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=b.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===b.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),b(function(){b.support.reliableMarginRight||(b.cssHooks.marginRight={get:function(e,n){return n?b.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!b.support.pixelPosition&&b.fn.position&&b.each(["top","left"],function(e,n){b.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?b(e).position()[n]+"px":r):t}}})}),b.expr&&b.expr.filters&&(b.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!b.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||b.css(e,"display"))},b.expr.filters.visible=function(e){return!b.expr.filters.hidden(e)}),b.each({margin:"",padding:"",border:"Width"},function(e,t){b.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(b.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;b.fn.extend({serialize:function(){return b.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=b.prop(this,"elements");return e?b.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!b(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Nt.test(e))}).map(function(e,t){var n=b(this).val();return null==n?null:b.isArray(n)?b.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),b.param=function(e,n){var r,i=[],o=function(e,t){t=b.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=b.ajaxSettings&&b.ajaxSettings.traditional),b.isArray(e)||e.jquery&&!b.isPlainObject(e))b.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(b.isArray(t))b.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==b.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}b.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){b.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),b.fn.hover=function(e,t){return this.mouseenter(e).mouseleave(t||e)};var mn,yn,vn=b.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Nn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Cn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=b.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=a.href}catch(Ln){yn=o.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(w)||[];if(b.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(u){var l;return o[u]=!0,b.each(e[u]||[],function(e,u){var c=u(n,r,i);return"string"!=typeof c||a||o[c]?a?!(l=c):t:(n.dataTypes.unshift(c),s(c),!1)}),l}return s(n.dataTypes[0])||!o["*"]&&s("*")}function Mn(e,n){var r,i,o=b.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&b.extend(!0,e,r),e}b.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,u=e.indexOf(" ");return u>=0&&(i=e.slice(u,e.length),e=e.slice(0,u)),b.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&b.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?b("<div>").append(b.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},b.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){b.fn[t]=function(e){return this.on(t,e)}}),b.each(["get","post"],function(e,n){b[n]=function(e,r,i,o){return b.isFunction(r)&&(o=o||i,i=r,r=t),b.ajax({url:e,type:n,dataType:o,data:r,success:i})}}),b.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Nn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":b.parseJSON,"text xml":b.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Mn(Mn(e,b.ajaxSettings),t):Mn(b.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,u,l,c,p=b.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?b(f):b.event,h=b.Deferred(),g=b.Callbacks("once memory"),m=p.statusCode||{},y={},v={},x=0,T="canceled",N={readyState:0,getResponseHeader:function(e){var t;if(2===x){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===x?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return x||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return x||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>x)for(t in e)m[t]=[m[t],e[t]];else N.always(e[N.status]);return this},abort:function(e){var t=e||T;return l&&l.abort(t),k(0,t),this}};if(h.promise(N).complete=g.add,N.success=N.done,N.error=N.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=b.trim(p.dataType||"*").toLowerCase().match(w)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?80:443))==(mn[3]||("http:"===mn[1]?80:443)))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=b.param(p.data,p.traditional)),qn(An,p,n,N),2===x)return N;u=p.global,u&&0===b.active++&&b.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Cn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(b.lastModified[o]&&N.setRequestHeader("If-Modified-Since",b.lastModified[o]),b.etag[o]&&N.setRequestHeader("If-None-Match",b.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&N.setRequestHeader("Content-Type",p.contentType),N.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)N.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,N,p)===!1||2===x))return N.abort();T="abort";for(i in{success:1,error:1,complete:1})N[i](p[i]);if(l=qn(jn,p,n,N)){N.readyState=1,u&&d.trigger("ajaxSend",[N,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){N.abort("timeout")},p.timeout));try{x=1,l.send(y,k)}catch(C){if(!(2>x))throw C;k(-1,C)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,C=n;2!==x&&(x=2,s&&clearTimeout(s),l=t,a=i||"",N.readyState=e>0?4:0,r&&(w=_n(p,N,r)),e>=200&&300>e||304===e?(p.ifModified&&(T=N.getResponseHeader("Last-Modified"),T&&(b.lastModified[o]=T),T=N.getResponseHeader("etag"),T&&(b.etag[o]=T)),204===e?(c=!0,C="nocontent"):304===e?(c=!0,C="notmodified"):(c=Fn(p,w),C=c.state,y=c.data,v=c.error,c=!v)):(v=C,(e||!C)&&(C="error",0>e&&(e=0))),N.status=e,N.statusText=(n||C)+"",c?h.resolveWith(f,[y,C,N]):h.rejectWith(f,[N,C,v]),N.statusCode(m),m=t,u&&d.trigger(c?"ajaxSuccess":"ajaxError",[N,p,c?y:v]),g.fireWith(f,[N,C]),u&&(d.trigger("ajaxComplete",[N,p]),--b.active||b.event.trigger("ajaxStop")))}return N},getScript:function(e,n){return b.get(e,t,n,"script")},getJSON:function(e,t,n){return b.get(e,t,n,"json")}});function _n(e,n,r){var i,o,a,s,u=e.contents,l=e.dataTypes,c=e.responseFields;for(s in c)s in r&&(n[c[s]]=r[s]);while("*"===l[0])l.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in u)if(u[s]&&u[s].test(o)){l.unshift(s);break}if(l[0]in r)a=l[0];else{for(s in r){if(!l[0]||e.converters[s+" "+l[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==l[0]&&l.unshift(a),r[a]):t}function Fn(e,t){var n,r,i,o,a={},s=0,u=e.dataTypes.slice(),l=u[0];if(e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u[1])for(i in e.converters)a[i.toLowerCase()]=e.converters[i];for(;r=u[++s];)if("*"!==r){if("*"!==l&&l!==r){if(i=a[l+" "+r]||a["* "+r],!i)for(n in a)if(o=n.split(" "),o[1]===r&&(i=a[l+" "+o[0]]||a["* "+o[0]])){i===!0?i=a[n]:a[n]!==!0&&(r=o[0],u.splice(s--,0,r));break}if(i!==!0)if(i&&e["throws"])t=i(t);else try{t=i(t)}catch(c){return{state:"parsererror",error:i?c:"No conversion from "+l+" to "+r}}}l=r}return{state:"success",data:t}}b.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return b.globalEval(e),e}}}),b.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),b.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=o.head||b("head")[0]||o.documentElement;return{send:function(t,i){n=o.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var On=[],Bn=/(=)\?(?=&|$)|\?\?/;b.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=On.pop()||b.expando+"_"+vn++;return this[e]=!0,e}}),b.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,u=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return u||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=b.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,u?n[u]=n[u].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||b.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,On.push(o)),s&&b.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}b.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=b.ajaxSettings.xhr(),b.support.cors=!!Rn&&"withCredentials"in Rn,Rn=b.support.ajax=!!Rn,Rn&&b.ajaxTransport(function(n){if(!n.crossDomain||b.support.cors){var r;return{send:function(i,o){var a,s,u=n.xhr();if(n.username?u.open(n.type,n.url,n.async,n.username,n.password):u.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)u[s]=n.xhrFields[s];n.mimeType&&u.overrideMimeType&&u.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)u.setRequestHeader(s,i[s])}catch(l){}u.send(n.hasContent&&n.data||null),r=function(e,i){var s,l,c,p;try{if(r&&(i||4===u.readyState))if(r=t,a&&(u.onreadystatechange=b.noop,$n&&delete Pn[a]),i)4!==u.readyState&&u.abort();else{p={},s=u.status,l=u.getAllResponseHeaders(),"string"==typeof u.responseText&&(p.text=u.responseText);try{c=u.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,l)},n.async?4===u.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},b(e).unload($n)),Pn[a]=r),u.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+x+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n,r,i=this.createTween(e,t),o=Yn.exec(t),a=i.cur(),s=+a||0,u=1,l=20;if(o){if(n=+o[2],r=o[3]||(b.cssNumber[e]?"":"px"),"px"!==r&&s){s=b.css(i.elem,e,!0)||n||1;do u=u||".5",s/=u,b.style(i.elem,e,s+r);while(u!==(u=i.cur()/a)&&1!==u&&--l)}i.unit=r,i.start=s,i.end=o[1]?s+(o[1]+1)*n:n}return i}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=b.now()}function Zn(e,t){b.each(t,function(t,n){var r=(Qn[t]||[]).concat(Qn["*"]),i=0,o=r.length;for(;o>i;i++)if(r[i].call(e,t,n))return})}function er(e,t,n){var r,i,o=0,a=Gn.length,s=b.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,a=0,u=l.tweens.length;for(;u>a;a++)l.tweens[a].run(o);return s.notifyWith(e,[l,o,n]),1>o&&u?n:(s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:b.extend({},t),opts:b.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=b.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?s.resolveWith(e,[l,t]):s.rejectWith(e,[l,t]),this}}),c=l.props;for(tr(c,l.opts.specialEasing);a>o;o++)if(r=Gn[o].call(l,e,c,l.opts))return r;return Zn(l,c),b.isFunction(l.opts.start)&&l.opts.start.call(e,l),b.fx.timer(b.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function tr(e,t){var n,r,i,o,a;for(i in e)if(r=b.camelCase(i),o=t[r],n=e[i],b.isArray(n)&&(o=n[1],n=e[i]=n[0]),i!==r&&(e[r]=n,delete e[i]),a=b.cssHooks[r],a&&"expand"in a){n=a.expand(n),delete e[r];for(i in n)i in e||(e[i]=n[i],t[i]=o)}else t[r]=o}b.Animation=b.extend(er,{tweener:function(e,t){b.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,u,l,c,p,f=this,d=e.style,h={},g=[],m=e.nodeType&&nn(e);n.queue||(c=b._queueHooks(e,"fx"),null==c.unqueued&&(c.unqueued=0,p=c.empty.fire,c.empty.fire=function(){c.unqueued||p()}),c.unqueued++,f.always(function(){f.always(function(){c.unqueued--,b.queue(e,"fx").length||c.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[d.overflow,d.overflowX,d.overflowY],"inline"===b.css(e,"display")&&"none"===b.css(e,"float")&&(b.support.inlineBlockNeedsLayout&&"inline"!==un(e.nodeName)?d.zoom=1:d.display="inline-block")),n.overflow&&(d.overflow="hidden",b.support.shrinkWrapBlocks||f.always(function(){d.overflow=n.overflow[0],d.overflowX=n.overflow[1],d.overflowY=n.overflow[2]}));for(i in t)if(a=t[i],Vn.exec(a)){if(delete t[i],u=u||"toggle"===a,a===(m?"hide":"show"))continue;g.push(i)}if(o=g.length){s=b._data(e,"fxshow")||b._data(e,"fxshow",{}),"hidden"in s&&(m=s.hidden),u&&(s.hidden=!m),m?b(e).show():f.done(function(){b(e).hide()}),f.done(function(){var t;b._removeData(e,"fxshow");for(t in h)b.style(e,t,h[t])});for(i=0;o>i;i++)r=g[i],l=f.createTween(r,m?s[r]:0),h[r]=s[r]||b.style(e,r),r in s||(s[r]=l.start,m&&(l.end=l.start,l.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}b.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(b.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?b.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=b.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){b.fx.step[e.prop]?b.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[b.cssProps[e.prop]]||b.cssHooks[e.prop])?b.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},b.each(["toggle","show","hide"],function(e,t){var n=b.fn[t];b.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),b.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=b.isEmptyObject(e),o=b.speed(t,n,r),a=function(){var t=er(this,b.extend({},e),o);a.finish=function(){t.stop(!0)},(i||b._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=b.timers,a=b._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&b.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=b._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=b.timers,a=r?r.length:0;for(n.finish=!0,b.queue(this,e,[]),i&&i.cur&&i.cur.finish&&i.cur.finish.call(this),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}b.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){b.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),b.speed=function(e,t,n){var r=e&&"object"==typeof e?b.extend({},e):{complete:n||!n&&t||b.isFunction(e)&&e,duration:e,easing:n&&t||t&&!b.isFunction(t)&&t};return r.duration=b.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in b.fx.speeds?b.fx.speeds[r.duration]:b.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){b.isFunction(r.old)&&r.old.call(this),r.queue&&b.dequeue(this,r.queue)},r},b.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},b.timers=[],b.fx=rr.prototype.init,b.fx.tick=function(){var e,n=b.timers,r=0;for(Xn=b.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||b.fx.stop(),Xn=t},b.fx.timer=function(e){e()&&b.timers.push(e)&&b.fx.start()},b.fx.interval=13,b.fx.start=function(){Un||(Un=setInterval(b.fx.tick,b.fx.interval))},b.fx.stop=function(){clearInterval(Un),Un=null},b.fx.speeds={slow:600,fast:200,_default:400},b.fx.step={},b.expr&&b.expr.filters&&(b.expr.filters.animated=function(e){return b.grep(b.timers,function(t){return e===t.elem}).length}),b.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){b.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,b.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},b.offset={setOffset:function(e,t,n){var r=b.css(e,"position");"static"===r&&(e.style.position="relative");var i=b(e),o=i.offset(),a=b.css(e,"top"),s=b.css(e,"left"),u=("absolute"===r||"fixed"===r)&&b.inArray("auto",[a,s])>-1,l={},c={},p,f;u?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),b.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(l.top=t.top-o.top+p),null!=t.left&&(l.left=t.left-o.left+f),"using"in t?t.using.call(e,l):i.css(l)}},b.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===b.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),b.nodeName(e[0],"html")||(n=e.offset()),n.top+=b.css(e[0],"borderTopWidth",!0),n.left+=b.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-b.css(r,"marginTop",!0),left:t.left-n.left-b.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||o.documentElement;while(e&&!b.nodeName(e,"html")&&"static"===b.css(e,"position"))e=e.offsetParent;return e||o.documentElement})}}),b.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);b.fn[e]=function(i){return b.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?b(a).scrollLeft():o,r?o:b(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return b.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}b.each({Height:"height",Width:"width"},function(e,n){b.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){b.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return b.access(this,function(n,r,i){var o;return b.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?b.css(n,r,s):b.style(n,r,i,s)},n,a?i:t,a,null)}})}),e.jQuery=e.$=b,"function"==typeof define&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return b})})(window)
/*! jQuery Migrate v1.2.1 | (c) 2005, 2013 jQuery Foundation, Inc. and other contributors | jquery.org/license */
jQuery.migrateMute===void 0&&(jQuery.migrateMute=!0),function(e,t,n){function r(n){var r=t.console;i[n]||(i[n]=!0,e.migrateWarnings.push(n),r&&r.warn&&!e.migrateMute&&(r.warn("JQMIGRATE: "+n),e.migrateTrace&&r.trace&&r.trace()))}function a(t,a,i,o){if(Object.defineProperty)try{return Object.defineProperty(t,a,{configurable:!0,enumerable:!0,get:function(){return r(o),i},set:function(e){r(o),i=e}}),n}catch(s){}e._definePropertyBroken=!0,t[a]=i}var i={};e.migrateWarnings=[],!e.migrateMute&&t.console&&t.console.log&&t.console.log("JQMIGRATE: Logging is active"),e.migrateTrace===n&&(e.migrateTrace=!0),e.migrateReset=function(){i={},e.migrateWarnings.length=0},"BackCompat"===document.compatMode&&r("jQuery is not compatible with Quirks Mode");var o=e("<input/>",{size:1}).attr("size")&&e.attrFn,s=e.attr,u=e.attrHooks.value&&e.attrHooks.value.get||function(){return null},c=e.attrHooks.value&&e.attrHooks.value.set||function(){return n},l=/^(?:input|button)$/i,d=/^[238]$/,p=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,f=/^(?:checked|selected)$/i;a(e,"attrFn",o||{},"jQuery.attrFn is deprecated"),e.attr=function(t,a,i,u){var c=a.toLowerCase(),g=t&&t.nodeType;return u&&(4>s.length&&r("jQuery.fn.attr( props, pass ) is deprecated"),t&&!d.test(g)&&(o?a in o:e.isFunction(e.fn[a])))?e(t)[a](i):("type"===a&&i!==n&&l.test(t.nodeName)&&t.parentNode&&r("Can't change the 'type' of an input or button in IE 6/7/8"),!e.attrHooks[c]&&p.test(c)&&(e.attrHooks[c]={get:function(t,r){var a,i=e.prop(t,r);return i===!0||"boolean"!=typeof i&&(a=t.getAttributeNode(r))&&a.nodeValue!==!1?r.toLowerCase():n},set:function(t,n,r){var a;return n===!1?e.removeAttr(t,r):(a=e.propFix[r]||r,a in t&&(t[a]=!0),t.setAttribute(r,r.toLowerCase())),r}},f.test(c)&&r("jQuery.fn.attr('"+c+"') may use property instead of attribute")),s.call(e,t,a,i))},e.attrHooks.value={get:function(e,t){var n=(e.nodeName||"").toLowerCase();return"button"===n?u.apply(this,arguments):("input"!==n&&"option"!==n&&r("jQuery.fn.attr('value') no longer gets properties"),t in e?e.value:null)},set:function(e,t){var a=(e.nodeName||"").toLowerCase();return"button"===a?c.apply(this,arguments):("input"!==a&&"option"!==a&&r("jQuery.fn.attr('value', val) no longer sets properties"),e.value=t,n)}};var g,h,v=e.fn.init,m=e.parseJSON,y=/^([^<]*)(<[\w\W]+>)([^>]*)$/;e.fn.init=function(t,n,a){var i;return t&&"string"==typeof t&&!e.isPlainObject(n)&&(i=y.exec(e.trim(t)))&&i[0]&&("<"!==t.charAt(0)&&r("$(html) HTML strings must start with '<' character"),i[3]&&r("$(html) HTML text after last tag is ignored"),"#"===i[0].charAt(0)&&(r("HTML string cannot start with a '#' character"),e.error("JQMIGRATE: Invalid selector string (XSS)")),n&&n.context&&(n=n.context),e.parseHTML)?v.call(this,e.parseHTML(i[2],n,!0),n,a):v.apply(this,arguments)},e.fn.init.prototype=e.fn,e.parseJSON=function(e){return e||null===e?m.apply(this,arguments):(r("jQuery.parseJSON requires a valid JSON string"),null)},e.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||0>e.indexOf("compatible")&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e.browser||(g=e.uaMatch(navigator.userAgent),h={},g.browser&&(h[g.browser]=!0,h.version=g.version),h.chrome?h.webkit=!0:h.webkit&&(h.safari=!0),e.browser=h),a(e,"browser",e.browser,"jQuery.browser is deprecated"),e.sub=function(){function t(e,n){return new t.fn.init(e,n)}e.extend(!0,t,this),t.superclass=this,t.fn=t.prototype=this(),t.fn.constructor=t,t.sub=this.sub,t.fn.init=function(r,a){return a&&a instanceof e&&!(a instanceof t)&&(a=t(a)),e.fn.init.call(this,r,a,n)},t.fn.init.prototype=t.fn;var n=t(document);return r("jQuery.sub() is deprecated"),t},e.ajaxSetup({converters:{"text json":e.parseJSON}});var b=e.fn.data;e.fn.data=function(t){var a,i,o=this[0];return!o||"events"!==t||1!==arguments.length||(a=e.data(o,t),i=e._data(o,t),a!==n&&a!==i||i===n)?b.apply(this,arguments):(r("Use of jQuery.fn.data('events') is deprecated"),i)};var j=/\/(java|ecma)script/i,w=e.fn.andSelf||e.fn.addBack;e.fn.andSelf=function(){return r("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),w.apply(this,arguments)},e.clean||(e.clean=function(t,a,i,o){a=a||document,a=!a.nodeType&&a[0]||a,a=a.ownerDocument||a,r("jQuery.clean() is deprecated");var s,u,c,l,d=[];if(e.merge(d,e.buildFragment(t,a).childNodes),i)for(c=function(e){return!e.type||j.test(e.type)?o?o.push(e.parentNode?e.parentNode.removeChild(e):e):i.appendChild(e):n},s=0;null!=(u=d[s]);s++)e.nodeName(u,"script")&&c(u)||(i.appendChild(u),u.getElementsByTagName!==n&&(l=e.grep(e.merge([],u.getElementsByTagName("script")),c),d.splice.apply(d,[s+1,0].concat(l)),s+=l.length));return d});var Q=e.event.add,x=e.event.remove,k=e.event.trigger,N=e.fn.toggle,T=e.fn.live,M=e.fn.die,S="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",C=RegExp("\\b(?:"+S+")\\b"),H=/(?:^|\s)hover(\.\S+|)\b/,A=function(t){return"string"!=typeof t||e.event.special.hover?t:(H.test(t)&&r("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),t&&t.replace(H,"mouseenter$1 mouseleave$1"))};e.event.props&&"attrChange"!==e.event.props[0]&&e.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),e.event.dispatch&&a(e.event,"handle",e.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),e.event.add=function(e,t,n,a,i){e!==document&&C.test(t)&&r("AJAX events should be attached to document: "+t),Q.call(this,e,A(t||""),n,a,i)},e.event.remove=function(e,t,n,r,a){x.call(this,e,A(t)||"",n,r,a)},e.fn.error=function(){var e=Array.prototype.slice.call(arguments,0);return r("jQuery.fn.error() is deprecated"),e.splice(0,0,"error"),arguments.length?this.bind.apply(this,e):(this.triggerHandler.apply(this,e),this)},e.fn.toggle=function(t,n){if(!e.isFunction(t)||!e.isFunction(n))return N.apply(this,arguments);r("jQuery.fn.toggle(handler, handler...) is deprecated");var a=arguments,i=t.guid||e.guid++,o=0,s=function(n){var r=(e._data(this,"lastToggle"+t.guid)||0)%o;return e._data(this,"lastToggle"+t.guid,r+1),n.preventDefault(),a[r].apply(this,arguments)||!1};for(s.guid=i;a.length>o;)a[o++].guid=i;return this.click(s)},e.fn.live=function(t,n,a){return r("jQuery.fn.live() is deprecated"),T?T.apply(this,arguments):(e(this.context).on(t,this.selector,n,a),this)},e.fn.die=function(t,n){return r("jQuery.fn.die() is deprecated"),M?M.apply(this,arguments):(e(this.context).off(t,this.selector||"**",n),this)},e.event.trigger=function(e,t,n,a){return n||C.test(e)||r("Global events are undocumented and deprecated"),k.call(this,e,t,n||document,a)},e.each(S.split("|"),function(t,n){e.event.special[n]={setup:function(){var t=this;return t!==document&&(e.event.add(document,n+"."+e.guid,function(){e.event.trigger(n,null,t,!0)}),e._data(this,n,e.guid++)),!1},teardown:function(){return this!==document&&e.event.remove(document,n+"."+e._data(this,n)),!1}}})}(jQuery,window)

/**
 * Cookie plugin
 *
 * Copyright (c) 2006 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */
jQuery.cookie = function(name, value, options) {
	if (typeof value != "undefined") { // name and value given, set cookie
		options = options || {}
		if (value === null) {
			value = ""
			options.expires = -1
		}
		var expires = ""
		if (options.expires && (typeof options.expires == "number" || options.expires.toUTCString)) {
			var date
			if (typeof options.expires == "number") {
				date = new Date()
				date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000))
			} else {
				date = options.expires
			}
			expires = "; expires=" + date.toUTCString() // use expires attribute, max-age is not supported by IE
		}
		// CAUTION: Needed to parenthesize options.path and options.domain
		// in the following expressions, otherwise they evaluate to undefined
		// in the packed version for some reason...
		var path = options.path ? "; path=" + (options.path) : ""
		var domain = options.domain ? "; domain=" + (options.domain) : ""
		var secure = options.secure ? "; secure" : ""
		document.cookie = [name, "=", encodeURIComponent(value), expires, path, domain, secure].join("")
	} else { // only name given, get cookie
		var cookieValue = null
		if (document.cookie && document.cookie != "") {
			var cookies = document.cookie.split(";")
			for (var i = 0; i < cookies.length; i++) {
				var cookie = jQuery.trim(cookies[i])
				// Does this cookie string begin with the name we want?
				if (cookie.substring(0, name.length + 1) == (name + "=")) {
					cookieValue = decodeURIComponent(cookie.substring(name.length + 1))
					break
				}
			}
		}
		return cookieValue
	}
};

/*
 * jQuery Hotkeys Plugin
 * Copyright 2010, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Based upon the plugin by Tzury Bar Yochay:
 * http://github.com/tzuryby/hotkeys
 *
 * Original idea by:
 * Binny V A, http://www.openjs.com/scripts/events/keyboard_shortcuts/
*/

(function(jQuery){
    
	jQuery.hotkeys = {
		version: "0.8",

		specialKeys: {
			8: "backspace", 9: "tab", 13: "return", 16: "shift", 17: "ctrl", 18: "alt", 19: "pause",
			20: "capslock", 27: "esc", 32: "space", 33: "pageup", 34: "pagedown", 35: "end", 36: "home",
			37: "left", 38: "up", 39: "right", 40: "down", 45: "insert", 46: "del", 
			96: "0", 97: "1", 98: "2", 99: "3", 100: "4", 101: "5", 102: "6", 103: "7",
			104: "8", 105: "9", 106: "*", 107: "+", 109: "-", 110: ".", 111 : "/", 
			112: "f1", 113: "f2", 114: "f3", 115: "f4", 116: "f5", 117: "f6", 118: "f7", 119: "f8", 
			120: "f9", 121: "f10", 122: "f11", 123: "f12", 144: "numlock", 145: "scroll", 191: "/", 224: "meta"
		},
    
		shiftNums: {
			"`": "~", "1": "!", "2": "@", "3": "#", "4": "$", "5": "%", "6": "^", "7": "&", 
			"8": "*", "9": "(", "0": ")", "-": "_", "=": "+", ";": ": ", "'": "\"", ",": "<", 
			".": ">",  "/": "?",  "\\": "|"
		}
	}

	function keyHandler( handleObj ) {
		// Only care when a possible input has been specified
		if ( typeof handleObj.data !== "string" ) {
			return
		}
        
		var origHandler = handleObj.handler,
			keys = handleObj.data.toLowerCase().split(" ")
    
		handleObj.handler = function( event ) {
			// Don't fire in text-accepting inputs that we didn't directly bind to
			if ( this !== event.target && (/textarea|select/i.test( event.target.nodeName ) ||
																	event.target.type === "text") ) {
				return
			}
            
			// Keypress represents characters, not special keys
			var special = event.type !== "keypress" && jQuery.hotkeys.specialKeys[ event.which ],
				character = String.fromCharCode( event.which ).toLowerCase(),
				key, modif = "", possible = {}

			// check combinations (alt|ctrl|shift+anything)
			if ( event.altKey && special !== "alt" ) {
				modif += "alt+"
			}

			if ( event.ctrlKey && special !== "ctrl" ) {
				modif += "ctrl+"
			}
            
			// TODO: Need to make sure this works consistently across platforms
			if ( event.metaKey && !event.ctrlKey && special !== "meta" ) {
				modif += "meta+"
			}

			if ( event.shiftKey && special !== "shift" ) {
				modif += "shift+"
			}

			if ( special ) {
				possible[ modif + special ] = true

			} else {
				possible[ modif + character ] = true
				possible[ modif + jQuery.hotkeys.shiftNums[ character ] ] = true

				// "$" can be triggered as "Shift+4" or "Shift+$" or just "$"
				if ( modif === "shift+" ) {
					possible[ jQuery.hotkeys.shiftNums[ character ] ] = true
				}
			}

			for ( var i = 0, l = keys.length; i < l; i++ ) {
				if ( possible[ keys[i] ] ) {
					return origHandler.apply( this, arguments )
				}
			}
		}
	}

	jQuery.each([ "keydown", "keyup", "keypress" ], function() {
		jQuery.event.special[ this ] = { add: keyHandler }
	})
})( jQuery )
/*!
 * ZUI: zui for zentao - v1.5.0 - 2017-03-02
 * http://zui.sexy
 * GitHub: https://github.com/easysoft/zui.git 
 * Copyright (c) 2017 cnezsoft.com; Licensed MIT
 */
/*! Some code copy from Bootstrap v3.0.0 by @fat and @mdo. (Copyright 2013 Twitter, Inc. Licensed under http://www.apache.org/licenses/)*/
!
function(t, e) {
	"use strict"
	if ("undefined" == typeof t) throw new Error("ZUI requires jQuery")
	t.zui || (t.zui = function(e) {
		t.isPlainObject(e) && t.extend(t.zui, e)
	})
	var i = 0
	t.zui({
		uuid: function() {
			return 1e3 * (new Date).getTime() + i++%1e3
		},
		callEvent: function(e, i, a) {
			if (t.isFunction(e)) {
				void 0 !== a && (e = t.proxy(e, a))
				var o = e(i)
				return i && (i.result = o),
				!(void 0 !== o && !o)
			}
			return 1
		},
		clientLang: function() {
			var i, a = e.config
			if ("undefined" != typeof a && a.clientLang && (i = a.clientLang), !i) {
				var o = t("html").attr("lang")
				i = o ? o: navigator.userLanguage || navigator.userLanguage || "zh_cn"
			}
			return i.replace("-", "_").toLowerCase()
		},
		strCode: function(t) {
			var e = 0
			if (t && t.length) for (var i = 0; i < t.length; ++i) e += i * t.charCodeAt(i)
			return e
		}
	}),
	t.fn.callEvent = function(e, i, a) {
		var o = t(this),
			n = e.indexOf(".zui."),
			s = 0 > n ? e: e.substring(0, n),
			r = t.Event(s, i)
		if (void 0 === a && n > 0 && (a = o.data(e.substring(n + 1))), a && a.options) {
			var l = a.options[s]
			t.isFunction(l) && t.zui.callEvent(l, r, a)
		}
		return o.trigger(r),
		r
	}
} (jQuery, window),
function() {
	"use strict"
	String.prototype.format || (String.prototype.format = function(t) {
		var e = this
		if (arguments.length > 0) {
			var i
			if (arguments.length <= 2 && "object" == typeof t) for (var a in t) void 0 !== t[a] && (i = new RegExp("(" + (arguments[1] ? arguments[1].replace("0", a) : "{" + a + "}") + ")", "g"), e = e.replace(i, t[a]))
			else for (var o = 0; o < arguments.length; o++) void 0 !== arguments[o] && (i = new RegExp("({[" + o + "]})", "g"), e = e.replace(i, arguments[o]))
		}
		return e
	}),
	String.prototype.isNum || (String.prototype.isNum = function(t) {
		if (null !== t) {
			var e, i
			return i = /\d*/i,
			e = t.match(i),
			e == t ? !0 : !1
		}
		return ! 1
	})
} (),
/*!
     * jQuery resize event - v1.1
     * http://benalman.com/projects/jquery-resize-plugin/
     * Copyright (c) 2010 "Cowboy" Ben Alman
     * MIT & GPL http://benalman.com/about/license/
     */
function(t, e, i) {
	"$:nomunge"
	function a() {
		o = e[r](function() {
			n.each(function() {
				var e = t(this),
					i = e.width(),
					a = e.height(),
					o = t.data(this, d); (i !== o.w || a !== o.h) && e.trigger(l, [o.w = i, o.h = a])
			}),
			a()
		},
		s[c])
	}
	var o, n = t([]),
		s = t.resize = t.extend(t.resize, {}),
		r = "setTimeout",
		l = "resize",
		d = l + "-special-event",
		c = "delay",
		p = "throttleWindow"
	s[c] = 250,
	s[p] = !0,
	t.event.special[l] = {
		setup: function() {
			if (!s[p] && this[r]) return ! 1
			var e = t(this)
			n = n.add(e),
			t.data(this, d, {
				w: e.width(),
				h: e.height()
			}),
			1 === n.length && a()
		},
		teardown: function() {
			if (!s[p] && this[r]) return ! 1
			var e = t(this)
			n = n.not(e),
			e.removeData(d),
			n.length || clearTimeout(o)
		},
		add: function(e) {
			function a(e, a, n) {
				var s = t(this),
					r = t.data(this, d) || {}
				r.w = a !== i ? a: s.width(),
				r.h = n !== i ? n: s.height(),
				o.apply(this, arguments)
			}
			if (!s[p] && this[r]) return ! 1
			var o
			return t.isFunction(e) ? (o = e, a) : (o = e.handler, void(e.handler = a))
		}
	}
} (jQuery, this),
function() {
	"use strict"
	Date.ONEDAY_TICKS = 864e5,
	Date.prototype.format || (Date.prototype.format = function(t) {
		var e = {
			"M+": this.getMonth() + 1,
			"d+": this.getDate(),
			"h+": this.getHours(),
			"m+": this.getMinutes(),
			"s+": this.getSeconds(),
			"q+": Math.floor((this.getMonth() + 3) / 3),
			"S+": this.getMilliseconds()
		};
		/(y+)/i.test(t) && (t = t.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length)))
		for (var i in e) new RegExp("(" + i + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[i] : ("00" + e[i]).substr(("" + e[i]).length)))
		return t
	}),
	Date.prototype.addMilliseconds || (Date.prototype.addMilliseconds = function(t) {
		return this.setTime(this.getTime() + t),
		this
	}),
	Date.prototype.addDays || (Date.prototype.addDays = function(t) {
		return this.addMilliseconds(t * Date.ONEDAY_TICKS),
		this
	}),
	Date.prototype.clone || (Date.prototype.clone = function() {
		var t = new Date
		return t.setTime(this.getTime()),
		t
	}),
	Date.isLeapYear || (Date.isLeapYear = function(t) {
		return t % 4 === 0 && t % 100 !== 0 || t % 400 === 0
	}),
	Date.getDaysInMonth || (Date.getDaysInMonth = function(t, e) {
		return [31, Date.isLeapYear(t) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][e]
	}),
	Date.prototype.isLeapYear || (Date.prototype.isLeapYear = function() {
		return Date.isLeapYear(this.getFullYear())
	}),
	Date.prototype.clearTime || (Date.prototype.clearTime = function() {
		return this.setHours(0),
		this.setMinutes(0),
		this.setSeconds(0),
		this.setMilliseconds(0),
		this
	}),
	Date.prototype.getDaysInMonth || (Date.prototype.getDaysInMonth = function() {
		return Date.getDaysInMonth(this.getFullYear(), this.getMonth())
	}),
	Date.prototype.addMonths || (Date.prototype.addMonths = function(t) {
		var e = this.getDate()
		return this.setDate(1),
		this.setMonth(this.getMonth() + t),
		this.setDate(Math.min(e, this.getDaysInMonth())),
		this
	}),
	Date.prototype.getLastWeekday || (Date.prototype.getLastWeekday = function(t) {
		t = t || 1
		for (var e = this.clone(); e.getDay() != t;) e.addDays( - 1)
		return e.clearTime(),
		e
	}),
	Date.prototype.isSameDay || (Date.prototype.isSameDay = function(t) {
		return t.toDateString() === this.toDateString()
	}),
	Date.prototype.isSameWeek || (Date.prototype.isSameWeek = function(t) {
		var e = this.getLastWeekday(),
			i = e.clone().addDays(7)
		return t >= e && i > t
	}),
	Date.prototype.isSameYear || (Date.prototype.isSameYear = function(t) {
		return this.getFullYear() === t.getFullYear()
	})
} (),
function(t, e) {
	"use strict"
	var i, a, o = "localStorage",
		n = "page_" + t.location.pathname + t.location.search,
		s = function() {
			this.slience = !0
			try {
				o in t && t[o] && t[o].setItem && (this.enable = !0, i = t[o])
			} catch(s) {}
			this.enable || (a = {},
				i = {
					getLength: function() {
						var t = 0
						return e.each(a,
							function() {
								t++
							}),
						t
					},
					key: function(t) {
						var i, o = 0
						return e.each(a,
							function(e) {
								return o === t ? (i = e, !1) : void o++
							}),
						i
					},
					removeItem: function(t) {
						delete a[t]
					},
					getItem: function(t) {
						return a[t]
					},
					setItem: function(t, e) {
						a[t] = e
					},
					clear: function() {
						a = {}
					}
				}),
			this.storage = i,
			this.page = this.get(n, {})
		}
	s.prototype.pageSave = function() {
		if (e.isEmptyObject(this.page)) this.remove(n)
		else {
			var t, i = []
			for (t in this.page) {
				var a = this.page[t]
				null === a && i.push(t)
			}
			for (t = i.length - 1; t >= 0; t--) delete this.page[i[t]]
			this.set(n, this.page)
		}
	},
	s.prototype.pageRemove = function(t) {
		"undefined" != typeof this.page[t] && (this.page[t] = null, this.pageSave())
	},
	s.prototype.pageClear = function() {
		this.page = {},
		this.pageSave()
	},
	s.prototype.pageGet = function(t, e) {
		var i = this.page[t]
		return void 0 === e || null !== i && void 0 !== i ? i: e
	},
	s.prototype.pageSet = function(t, i) {
		e.isPlainObject(t) ? e.extend(!0, this.page, t) : this.page[this.serialize(t)] = i,
		this.pageSave()
	},
	s.prototype.check = function() {
		if (!this.enable && !this.slience) throw new Error("Browser not support localStorage or enable status been set true.")
		return this.enable
	},
	s.prototype.length = function() {
		return this.check() ? i.getLength ? i.getLength() : i.length: 0
	},
	s.prototype.removeItem = function(t) {
		return i.removeItem(t),
		this
	},
	s.prototype.remove = function(t) {
		return this.removeItem(t)
	},
	s.prototype.getItem = function(t) {
		return i.getItem(t)
	},
	s.prototype.get = function(t, e) {
		var i = this.deserialize(this.getItem(t))
		return "undefined" != typeof i && null !== i || "undefined" == typeof e ? i: e
	},
	s.prototype.key = function(t) {
		return i.key(t)
	},
	s.prototype.setItem = function(t, e) {
		return i.setItem(t, e),
		this
	},
	s.prototype.set = function(t, e) {
		return void 0 === e ? this.remove(t) : (this.setItem(t, this.serialize(e)), this)
	},
	s.prototype.clear = function() {
		return i.clear(),
		this
	},
	s.prototype.forEach = function(t) {
		for (var e = this.length(), a = e - 1; a >= 0; a--) {
			var o = i.key(a)
			t(o, this.get(o))
		}
		return this
	},
	s.prototype.getAll = function() {
		var t = {}
		return this.forEach(function(e, i) {
			t[e] = i
		}),
		t
	},
	s.prototype.serialize = function(t) {
		return "string" == typeof t ? t: JSON.stringify(t)
	},
	s.prototype.deserialize = function(t) {
		if ("string" == typeof t) try {
			return JSON.parse(t)
		} catch(e) {
				return t || void 0
			}
	},
	e.zui({
		store: new s
	})
} (window, jQuery),
function(t, e, i, a) {
	"use strict"
	function o(t) {
		if (t = t.toLowerCase(), t && c.test(t)) {
			var e
			if (4 === t.length) {
				var i = "#"
				for (e = 1; 4 > e; e += 1) i += t.slice(e, e + 1).concat(t.slice(e, e + 1))
				t = i
			}
			var a = []
			for (e = 1; 7 > e; e += 2) a.push(y("0x" + t.slice(e, e + 2)))
			return {
				r: a[0],
				g: a[1],
				b: a[2],
				a: 1
			}
		}
		throw new Error("Wrong hex string! (hex: " + t + ")")
	}
	function n(e) {
		return typeof e === u && ("transparent" === e.toLowerCase() || v[e.toLowerCase()] || c.test(t.trim(e.toLowerCase())))
	}
	function s(t) {
		function e(t) {
			return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t,
			1 > 6 * t ? r + (s - r) * t * 6 : 1 > 2 * t ? s: 2 > 3 * t ? r + (s - r) * (2 / 3 - t) * 6 : r
		}
		var i = t.h,
			a = t.s,
			o = t.l,
			n = t.a
		i = d(i) % h / h,
		a = l(d(a)),
		o = l(d(o)),
		n = l(d(n))
		var s = .5 >= o ? o * (a + 1) : o + a - o * a,
			r = 2 * o - s,
			c = {
				r: e(i + 1 / 3) * p,
				g: e(i) * p,
				b: e(i - 1 / 3) * p,
				a: n
			}
		return c
	}
	function r(t, i, a) {
		return m(a) && (a = 0),
		m(i) && (i = p),
		e.min(e.max(t, a), i)
	}
	function l(t, e) {
		return r(t, e)
	}
	function d(t) {
		return "number" == typeof t ? t: parseFloat(t)
	}
	var c = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/,
		p = 255,
		h = 360,
		f = 100,
		u = "string",
		g = "object",
		v = {
			aliceblue: "#f0f8ff",
			antiquewhite: "#faebd7",
			aqua: "#00ffff",
			aquamarine: "#7fffd4",
			azure: "#f0ffff",
			beige: "#f5f5dc",
			bisque: "#ffe4c4",
			black: "#000000",
			blanchedalmond: "#ffebcd",
			blue: "#0000ff",
			blueviolet: "#8a2be2",
			brown: "#a52a2a",
			burlywood: "#deb887",
			cadetblue: "#5f9ea0",
			chartreuse: "#7fff00",
			chocolate: "#d2691e",
			coral: "#ff7f50",
			cornflowerblue: "#6495ed",
			cornsilk: "#fff8dc",
			crimson: "#dc143c",
			cyan: "#00ffff",
			darkblue: "#00008b",
			darkcyan: "#008b8b",
			darkgoldenrod: "#b8860b",
			darkgray: "#a9a9a9",
			darkgreen: "#006400",
			darkkhaki: "#bdb76b",
			darkmagenta: "#8b008b",
			darkolivegreen: "#556b2f",
			darkorange: "#ff8c00",
			darkorchid: "#9932cc",
			darkred: "#8b0000",
			darksalmon: "#e9967a",
			darkseagreen: "#8fbc8f",
			darkslateblue: "#483d8b",
			darkslategray: "#2f4f4f",
			darkturquoise: "#00ced1",
			darkviolet: "#9400d3",
			deeppink: "#ff1493",
			deepskyblue: "#00bfff",
			dimgray: "#696969",
			dodgerblue: "#1e90ff",
			firebrick: "#b22222",
			floralwhite: "#fffaf0",
			forestgreen: "#228b22",
			fuchsia: "#ff00ff",
			gainsboro: "#dcdcdc",
			ghostwhite: "#f8f8ff",
			gold: "#ffd700",
			goldenrod: "#daa520",
			gray: "#808080",
			green: "#008000",
			greenyellow: "#adff2f",
			honeydew: "#f0fff0",
			hotpink: "#ff69b4",
			indianred: "#cd5c5c",
			indigo: "#4b0082",
			ivory: "#fffff0",
			khaki: "#f0e68c",
			lavender: "#e6e6fa",
			lavenderblush: "#fff0f5",
			lawngreen: "#7cfc00",
			lemonchiffon: "#fffacd",
			lightblue: "#add8e6",
			lightcoral: "#f08080",
			lightcyan: "#e0ffff",
			lightgoldenrodyellow: "#fafad2",
			lightgray: "#d3d3d3",
			lightgreen: "#90ee90",
			lightpink: "#ffb6c1",
			lightsalmon: "#ffa07a",
			lightseagreen: "#20b2aa",
			lightskyblue: "#87cefa",
			lightslategray: "#778899",
			lightsteelblue: "#b0c4de",
			lightyellow: "#ffffe0",
			lime: "#00ff00",
			limegreen: "#32cd32",
			linen: "#faf0e6",
			magenta: "#ff00ff",
			maroon: "#800000",
			mediumaquamarine: "#66cdaa",
			mediumblue: "#0000cd",
			mediumorchid: "#ba55d3",
			mediumpurple: "#9370db",
			mediumseagreen: "#3cb371",
			mediumslateblue: "#7b68ee",
			mediumspringgreen: "#00fa9a",
			mediumturquoise: "#48d1cc",
			mediumvioletred: "#c71585",
			midnightblue: "#191970",
			mintcream: "#f5fffa",
			mistyrose: "#ffe4e1",
			moccasin: "#ffe4b5",
			navajowhite: "#ffdead",
			navy: "#000080",
			oldlace: "#fdf5e6",
			olive: "#808000",
			olivedrab: "#6b8e23",
			orange: "#ffa500",
			orangered: "#ff4500",
			orchid: "#da70d6",
			palegoldenrod: "#eee8aa",
			palegreen: "#98fb98",
			paleturquoise: "#afeeee",
			palevioletred: "#db7093",
			papayawhip: "#ffefd5",
			peachpuff: "#ffdab9",
			peru: "#cd853f",
			pink: "#ffc0cb",
			plum: "#dda0dd",
			powderblue: "#b0e0e6",
			purple: "#800080",
			red: "#ff0000",
			rosybrown: "#bc8f8f",
			royalblue: "#4169e1",
			saddlebrown: "#8b4513",
			salmon: "#fa8072",
			sandybrown: "#f4a460",
			seagreen: "#2e8b57",
			seashell: "#fff5ee",
			sienna: "#a0522d",
			silver: "#c0c0c0",
			skyblue: "#87ceeb",
			slateblue: "#6a5acd",
			slategray: "#708090",
			snow: "#fffafa",
			springgreen: "#00ff7f",
			steelblue: "#4682b4",
			tan: "#d2b48c",
			teal: "#008080",
			thistle: "#d8bfd8",
			tomato: "#ff6347",
			turquoise: "#40e0d0",
			violet: "#ee82ee",
			wheat: "#f5deb3",
			white: "#ffffff",
			whitesmoke: "#f5f5f5",
			yellow: "#ffff00",
			yellowgreen: "#9acd32"
		},
		m = function(t) {
			return t === a
		},
		b = function(t) {
			return ! m(t)
		},
		y = function(t) {
			return parseInt(t)
		},
		w = function(t) {
			return y(l(d(t), p))
		},
		C = function(t, e, i, a) {
			var n = this
			if (n.r = n.g = n.b = 0, n.a = 1, b(a) && (n.a = l(d(a), 1)), b(t) && b(e) && b(i)) n.r = w(t),
				n.g = w(e),
				n.b = w(i)
			else if (b(t)) {
				var r = typeof t
				if (r == u) t = t.toLowerCase(),
					"transparent" === t ? n.a = 0 : v[t] ? this.rgb(o(v[t])) : n.rgb(o(t))
				else if ("number" == r && m(e)) n.r = n.g = n.b = w(t)
				else if (r == g && b(t.r)) n.r = w(t.r),
					b(t.g) && (n.g = w(t.g)),
					b(t.b) && (n.b = w(t.b)),
					b(t.a) && (n.a = l(d(t.a), 1))
				else if (r == g && b(t.h)) {
					var c = {
						h: l(d(t.h), h),
						s: 1,
						l: 1,
						a: 1
					}
					b(t.s) && (c.s = l(d(t.s), 1)),
					b(t.l) && (c.l = l(d(t.l), 1)),
					b(t.a) && (c.a = l(d(t.a), 1)),
					n.rgb(s(c))
				}
			}
		}
	C.prototype.rgb = function(t) {
		var e = this
		if (b(t)) {
			if (typeof t == g) b(t.r) && (e.r = w(t.r)),
				b(t.g) && (e.g = w(t.g)),
				b(t.b) && (e.b = w(t.b)),
				b(t.a) && (e.a = l(d(t.a), 1))
			else {
				var i = y(d(t))
				e.r = i,
				e.g = i,
				e.b = i
			}
			return e
		}
		return {
			r: e.r,
			g: e.g,
			b: e.b,
			a: e.a
		}
	},
	C.prototype.hue = function(t) {
		var e = this,
			i = e.toHsl()
		return m(t) ? i.h: (i.h = l(d(t), h), e.rgb(s(i)), e)
	},
	C.prototype.darken = function(t) {
		var e = this,
			i = e.toHsl()
		return i.l -= t / f,
		i.l = l(i.l, 1),
		e.rgb(s(i)),
		e
	},
	C.prototype.clone = function() {
		var t = this
		return new C(t.r, t.g, t.b, t.a)
	},
	C.prototype.lighten = function(t) {
		return this.darken( - t)
	},
	C.prototype.fade = function(t) {
		return this.a = l(t / f, 1),
		this
	},
	C.prototype.spin = function(t) {
		var e = this.toHsl(),
			i = (e.h + t) % h
		return e.h = 0 > i ? h + i: i,
		this.rgb(s(e))
	},
	C.prototype.toHsl = function() {
		var t, i, a = this,
			o = a.r / p,
			n = a.g / p,
			s = a.b / p,
			r = a.a,
			l = e.max(o, n, s),
			d = e.min(o, n, s),
			c = (l + d) / 2,
			f = l - d
		if (l === d) t = i = 0
		else {
			switch (i = c > .5 ? f / (2 - l - d) : f / (l + d), l) {
			case o:
				t = (n - s) / f + (s > n ? 6 : 0)
				break
			case n:
				t = (s - o) / f + 2
				break
			case s:
				t = (o - n) / f + 4
			}
			t /= 6
		}
		return {
			h: t * h,
			s: i,
			l: c,
			a: r
		}
	},
	C.prototype.luma = function() {
		var t = this.r / p,
			i = this.g / p,
			a = this.b / p
		return t = .03928 >= t ? t / 12.92 : e.pow((t + .055) / 1.055, 2.4),
		i = .03928 >= i ? i / 12.92 : e.pow((i + .055) / 1.055, 2.4),
		a = .03928 >= a ? a / 12.92 : e.pow((a + .055) / 1.055, 2.4),
		.2126 * t + .7152 * i + .0722 * a
	},
	C.prototype.saturate = function(t) {
		var e = this.toHsl()
		return e.s += t / f,
		e.s = l(e.s),
		this.rgb(s(e))
	},
	C.prototype.desaturate = function(t) {
		return this.saturate( - t)
	},
	C.prototype.contrast = function(t, e, i) {
		if (e = m(e) ? new C(p, p, p, 1) : new C(e), t = m(t) ? new C(0, 0, 0, 1) : new C(t), t.luma() > e.luma()) {
			var a = e
			e = t,
			t = a
		}
		return this.a < .5 ? t: (i = m(i) ? .43 : d(i), this.luma() < i ? e: t)
	},
	C.prototype.hexStr = function() {
		var t = this.r.toString(16),
			e = this.g.toString(16),
			i = this.b.toString(16)
		return 1 == t.length && (t = "0" + t),
		1 == e.length && (e = "0" + e),
		1 == i.length && (i = "0" + i),
		"#" + t + e + i
	},
	C.prototype.toCssStr = function() {
		var t = this
		return t.a > 0 ? t.a < 1 ? "rgba(" + t.r + "," + t.g + "," + t.b + "," + t.a + ")": t.hexStr() : "transparent"
	},
	C.isColor = n,
	C.names = v,
	t.zui({
		Color: C
	})
} (jQuery, Math, window, void 0),
/*!
     * ZUI: Generated from less code - v1.5.0 - 2017-03-02
     * http://zui.sexy
     * GitHub: https://github.com/easysoft/zui.git
     * Copyright (c) 2017 cnezsoft.com; Licensed MIT
     */
function(t) {
	"use strict"
	var e = 0,
		i = ["primary", "red", "yellow", "green", "blue", "purple", "brown", "dark"],
		a = {
			primary: "#3280fc",
			secondary: "#145ccd",
			pale: "#ebf2f9",
			fore: "#353535",
			back: "#fff",
			grayDarker: "#222222",
			grayDark: "#333333",
			gray: "#808080",
			grayLight: "#dddddd",
			grayLighter: "#e5e5e5",
			grayPale: "#f1f1f1",
			white: "#fff",
			black: "#000",
			red: "#ea644a",
			yellow: "#f1a325",
			green: "#38b03f",
			blue: "#03b8cf",
			purple: "#8666b8",
			brown: "#bd7b46",
			greenPale: "#ddf4df",
			yellowPale: "#fff0d5",
			redPale: "#ffe5e0",
			bluePale: "#ddf3f5",
			brownPale: "#f7ebe1",
			purplePale: "#f5eeff",
			light: "#fff",
			dark: "#353535",
			success: "#38b03f",
			warning: "#f1a325",
			danger: "#ea644a",
			info: "#03b8cf",
			important: "#bd7b46",
			special: "#8666b8",
			successPale: "#ddf4df",
			warningPale: "#fff0d5",
			dangerPale: "#ffe5e0",
			infoPale: "#ddf3f5",
			importantPale: "#f7ebe1",
			specialPale: "#f5eeff"
		}
	a.get = function(o) { ("undefined" == typeof o || "random" === o) && (o = i[e++%i.length])
		var n = a[o] ? a[o] : o
		return t.zui.Color ? new t.zui.Color(n) : n
	},
	t.zui({
		colorset: a
	}),
	t.zui.Color && t.extend(t.zui.Color, a)
} (jQuery),
+
function(t) {
	"use strict"
	function e() {
		var t = document.createElement("bootstrap"),
			e = {
				WebkitTransition: "webkitTransitionEnd",
				MozTransition: "transitionend",
				OTransition: "oTransitionEnd otransitionend",
				transition: "transitionend"
			}
		for (var i in e) if (void 0 !== t.style[i]) return {
			end: e[i]
		}
		return ! 1
	}
	t.fn.emulateTransitionEnd = function(e) {
		var i = !1,
			a = this
		t(this).one("bsTransitionEnd",
			function() {
				i = !0
			})
		var o = function() {
			i || t(a).trigger(t.support.transition.end)
		}
		return setTimeout(o, e),
		this
	},
	t(function() {
		t.support.transition = e(),
		t.support.transition && (t.event.special.bsTransitionEnd = {
			bindType: t.support.transition.end,
			delegateType: t.support.transition.end,
			handle: function(e) {
				return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
			}
		})
	})
} (jQuery),
+
function(t) {
	"use strict"
	var e = function(i, a) {
		this.$element = t(i),
		this.options = t.extend({},
			e.DEFAULTS, a),
		this.isLoading = !1
	}
	e.DEFAULTS = {
		loadingText: "loading..."
	},
	e.prototype.setState = function(e) {
		var i = "disabled",
			a = this.$element,
			o = a.is("input") ? "val": "html",
			n = a.data()
		e += "Text",
		n.resetText || a.data("resetText", a[o]()),
		a[o](n[e] || this.options[e]),
		setTimeout(t.proxy(function() {
			"loadingText" == e ? (this.isLoading = !0, a.addClass(i).attr(i, i)) : this.isLoading && (this.isLoading = !1, a.removeClass(i).removeAttr(i))
		},
		this), 0)
	},
	e.prototype.toggle = function() {
		var t = !0,
			e = this.$element.closest("[data-toggle=\"buttons\"]")
		if (e.length) {
			var i = this.$element.find("input")
			"radio" == i.prop("type") && (i.prop("checked") && this.$element.hasClass("active") ? t = !1 : e.find(".active").removeClass("active")),
			t && i.prop("checked", !this.$element.hasClass("active")).trigger("change")
		}
		t && this.$element.toggleClass("active")
	}
	var i = t.fn.button
	t.fn.button = function(i) {
		return this.each(function() {
			var a = t(this),
				o = a.data("zui.button"),
				n = "object" == typeof i && i
			o || a.data("zui.button", o = new e(this, n)),
			"toggle" == i ? o.toggle() : i && o.setState(i)
		})
	},
	t.fn.button.Constructor = e,
	t.fn.button.noConflict = function() {
		return t.fn.button = i,
		this
	},
	t(document).on("click.zui.button.data-api", "[data-toggle^=button]",
		function(e) {
			var i = t(e.target)
			i.hasClass("btn") || (i = i.closest(".btn")),
			i.button("toggle"),
			e.preventDefault()
		})
} (jQuery),
function(t) {
	"use strict"
	var e = {
			zh_cn: "您的浏览器版本过低，无法体验所有功能，建议升级或者更换浏览器。 <a href=\"http://browsehappy.com/\" target=\"_blank\" class=\"alert-link\">了解更多...</a>",
			zh_tw: "您的瀏覽器版本過低，無法體驗所有功能，建議升級或者更换瀏覽器。<a href=\"http://browsehappy.com/\" target=\"_blank\" class=\"alert-link\">了解更多...</a>",
			en: "Your browser is too old, it has been unable to experience the colorful internet. We strongly recommend that you upgrade a better one. <a href=\"http://browsehappy.com/\" target=\"_blank\" class=\"alert-link\">Learn more...</a>"
		},
		i = function() {
			var t = this.isIE() || this.isIE10() || !1
			if (t) for (var e = 10; e > 5; e--) if (this.isIE(e)) {
				t = e
				break
			}
			this.ie = t,
			this.cssHelper()
		}
	i.prototype.cssHelper = function() {
		var e = this.ie,
			i = t("html")
		i.toggleClass("ie", e).removeClass("ie-6 ie-7 ie-8 ie-9 ie-10"),
		e && i.addClass("ie-" + e).toggleClass("gt-ie-7 gte-ie-8 support-ie", e >= 8).toggleClass("lte-ie-7 lt-ie-8 outdated-ie", 8 > e).toggleClass("gt-ie-8 gte-ie-9", e >= 9).toggleClass("lte-ie-8 lt-ie-9", 9 > e).toggleClass("gt-ie-9 gte-ie-10", e >= 10).toggleClass("lte-ie-9 lt-ie-10", 10 > e)
	},
	i.prototype.tip = function(i) {
		var a = t("#browseHappyTip")
		a.length || (a = t("<div id=\"browseHappyTip\" class=\"alert alert-dismissable alert-danger-inverse alert-block\" style=\"position: relative; z-index: 99999\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">×</button><div class=\"container\"><div class=\"content text-center\"></div></div></div>"), a.prependTo("body")),
		a.find(".content").html(i || this.browseHappyTip || e[t.zui.clientLang() || "zh_cn"])
	},
	i.prototype.isIE = function(t) {
		if (10 === t) return this.isIE10()
		var e = document.createElement("b")
		return e.innerHTML = "<!--[if IE " + (t || "") + "]><i></i><![endif]-->",
		1 === e.getElementsByTagName("i").length
	},
	i.prototype.isIE10 = function() {
		return ! 1
	},
	t.zui({
		browser: new i
	}),
	t(function() {
		t("body").hasClass("disabled-browser-tip") || t.zui.browser.ie && t.zui.browser.ie < 8 && t.zui.browser.tip()
	})
} (jQuery),
+
function(t) {
	"use strict"
	var e = "zui.collapse",
		i = function(e, a) {
			this.$element = t(e),
			this.options = t.extend({},
				i.DEFAULTS, a),
			this.transitioning = null,
			this.options.parent && (this.$parent = t(this.options.parent)),
			this.options.toggle && this.toggle()
		}
	i.DEFAULTS = {
		toggle: !0
	},
	i.prototype.dimension = function() {
		var t = this.$element.hasClass("width")
		return t ? "width": "height"
	},
	i.prototype.show = function() {
		if (!this.transitioning && !this.$element.hasClass("in")) {
			var i = t.Event("show." + e)
			if (this.$element.trigger(i), !i.isDefaultPrevented()) {
				var a = this.$parent && this.$parent.find(".in")
				if (a && a.length) {
					var o = a.data(e)
					if (o && o.transitioning) return
					a.collapse("hide"),
					o || a.data(e, null)
				}
				var n = this.dimension()
				this.$element.removeClass("collapse").addClass("collapsing")[n](0),
				this.transitioning = 1
				var s = function() {
					this.$element.removeClass("collapsing").addClass("in")[n]("auto"),
					this.transitioning = 0,
					this.$element.trigger("shown." + e)
				}
				if (!t.support.transition) return s.call(this)
				var r = t.camelCase(["scroll", n].join("-"))
				this.$element.one(t.support.transition.end, t.proxy(s, this)).emulateTransitionEnd(350)[n](this.$element[0][r])
			}
		}
	},
	i.prototype.hide = function() {
		if (!this.transitioning && this.$element.hasClass("in")) {
			var i = t.Event("hide." + e)
			if (this.$element.trigger(i), !i.isDefaultPrevented()) {
				var a = this.dimension()
				this.$element[a](this.$element[a]())[0].offsetHeight,
				this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),
				this.transitioning = 1
				var o = function() {
					this.transitioning = 0,
					this.$element.trigger("hidden." + e).removeClass("collapsing").addClass("collapse")
				}
				return t.support.transition ? void this.$element[a](0).one(t.support.transition.end, t.proxy(o, this)).emulateTransitionEnd(350) : o.call(this)
			}
		}
	},
	i.prototype.toggle = function() {
		this[this.$element.hasClass("in") ? "hide": "show"]()
	}
	var a = t.fn.collapse
	t.fn.collapse = function(a) {
		return this.each(function() {
			var o = t(this),
				n = o.data(e),
				s = t.extend({},
					i.DEFAULTS, o.data(), "object" == typeof a && a)
			n || o.data(e, n = new i(this, s)),
			"string" == typeof a && n[a]()
		})
	},
	t.fn.collapse.Constructor = i,
	t.fn.collapse.noConflict = function() {
		return t.fn.collapse = a,
		this
	},
	t(document).on("click." + e + ".data-api", "[data-toggle=collapse]",
		function(i) {
			var a, o = t(this),
				n = o.attr("data-target") || i.preventDefault() || (a = o.attr("href")) && a.replace(/.*(?=#[^\s]+$)/, ""),
				s = t(n),
				r = s.data(e),
				l = r ? "toggle": o.data(),
				d = o.attr("data-parent"),
				c = d && t(d)
			r && r.transitioning || (c && c.find("[data-toggle=collapse][data-parent=\"" + d + "\"]").not(o).addClass("collapsed"), o[s.hasClass("in") ? "addClass": "removeClass"]("collapsed")),
			s.collapse(l)
		})
} (window.jQuery),
+
function(t) {
	"use strict"
	function e() {
		t(o).remove(),
		t(n).each(function(e) {
			var o = i(t(this))
			o.hasClass("open") && (o.trigger(e = t.Event("hide." + a)), e.isDefaultPrevented() || o.removeClass("open").trigger("hidden." + a))
		})
	}
	function i(e) {
		var i = e.attr("data-target")
		i || (i = e.attr("href"), i = i && /#/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""))
		var a
		try {
			a = i && t(i)
		} catch(o) {}
		return a && a.length ? a: e.parent()
	}
	var a = "zui.dropdown",
		o = ".dropdown-backdrop",
		n = "[data-toggle=dropdown]",
		s = function(e) {
			t(e).on("click." + a, this.toggle)
		}
	s.prototype.toggle = function(o) {
		var n = t(this)
		if (!n.is(".disabled, :disabled")) {
			var s = i(n),
				r = s.hasClass("open")
			if (e(), !r) {
				if ("ontouchstart" in document.documentElement && !s.closest(".navbar-nav").length && t("<div class=\"dropdown-backdrop\"/>").insertAfter(t(this)).on("click", e), s.trigger(o = t.Event("show." + a)), o.isDefaultPrevented()) return
				s.toggleClass("open").trigger("shown." + a),
				n.focus()
			}
			return ! 1
		}
	},
	s.prototype.keydown = function(e) {
		if (/(38|40|27)/.test(e.keyCode)) {
			var a = t(this)
			if (e.preventDefault(), e.stopPropagation(), !a.is(".disabled, :disabled")) {
				var o = i(a),
					s = o.hasClass("open")
				if (!s || s && 27 == e.keyCode) return 27 == e.which && o.find(n).focus(),
					a.click()
				var r = t("[role=menu] li:not(.divider):visible a", o)
				if (r.length) {
					var l = r.index(r.filter(":focus"))
					38 == e.keyCode && l > 0 && l--,
					40 == e.keyCode && l < r.length - 1 && l++,
					~l || (l = 0),
					r.eq(l).focus()
				}
			}
		}
	}
	var r = t.fn.dropdown
	t.fn.dropdown = function(e) {
		return this.each(function() {
			var i = t(this),
				a = i.data("dropdown")
			a || i.data("dropdown", a = new s(this)),
			"string" == typeof e && a[e].call(i)
		})
	},
	t.fn.dropdown.Constructor = s,
	t.fn.dropdown.noConflict = function() {
		return t.fn.dropdown = r,
		this
	}
	var l = a + ".data-api"
	t(document).on("click." + l, e).on("click." + l, ".dropdown form",
		function(t) {
			t.stopPropagation()
		}).on("click." + l, n, s.prototype.toggle).on("keydown." + l, n + ", [role=menu]", s.prototype.keydown)
} (window.jQuery),
+
function(t) {
	"use strict"
	var e = "[data-dismiss=\"alert\"]",
		i = "zui.alert",
		a = function(i) {
			t(i).on("click", e, this.close)
		}
	a.prototype.close = function(e) {
		function a() {
			s.trigger("closed." + i).remove()
		}
		var o = t(this),
			n = o.attr("data-target")
		n || (n = o.attr("href"), n = n && n.replace(/.*(?=#[^\s]*$)/, ""))
		var s = t(n)
		e && e.preventDefault(),
		s.length || (s = o.hasClass("alert") ? o: o.parent()),
		s.trigger(e = t.Event("close." + i)),
		e.isDefaultPrevented() || (s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.one(t.support.transition.end, a).emulateTransitionEnd(150) : a())
	}
	var o = t.fn.alert
	t.fn.alert = function(e) {
		return this.each(function() {
			var o = t(this),
				n = o.data(i)
			n || o.data(i, n = new a(this)),
			"string" == typeof e && n[e].call(o)
		})
	},
	t.fn.alert.Constructor = a,
	t.fn.alert.noConflict = function() {
		return t.fn.alert = o,
		this
	},
	t(document).on("click." + i + ".data-api", e, a.prototype.close)
} (window.jQuery),
+
function(t) {
	"use strict"
	var e = "zui.tab",
		i = function(e) {
			this.element = t(e)
		}
	i.prototype.show = function() {
		var i = this.element,
			a = i.closest("ul:not(.dropdown-menu)"),
			o = i.attr("data-target") || i.attr("data-tab")
		if (o || (o = i.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, "")), !i.parent("li").hasClass("active")) {
			var n = a.find(".active:last a")[0],
				s = t.Event("show." + e, {
					relatedTarget: n
				})
			if (i.trigger(s), !s.isDefaultPrevented()) {
				var r = t(o)
				this.activate(i.parent("li"), a),
				this.activate(r, r.parent(),
					function() {
						i.trigger({
							type: "shown." + e,
							relatedTarget: n
						})
					})
			}
		}
	},
	i.prototype.activate = function(e, i, a) {
		function o() {
			n.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),
			e.addClass("active"),
			s ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"),
			e.parent(".dropdown-menu") && e.closest("li.dropdown").addClass("active"),
			a && a()
		}
		var n = i.find("> .active"),
			s = a && t.support.transition && n.hasClass("fade")
		s ? n.one(t.support.transition.end, o).emulateTransitionEnd(150) : o(),
		n.removeClass("in")
	}
	var a = t.fn.tab
	t.fn.tab = function(a) {
		return this.each(function() {
			var o = t(this),
				n = o.data(e)
			n || o.data(e, n = new i(this)),
			"string" == typeof a && n[a]()
		})
	},
	t.fn.tab.Constructor = i,
	t.fn.tab.noConflict = function() {
		return t.fn.tab = a,
		this
	},
	t(document).on("click.zui.tab.data-api", "[data-toggle=\"tab\"], [data-tab]",
		function(e) {
			e.preventDefault(),
			t(this).tab("show")
		})
} (window.jQuery),
+
function(t) {
	"use strict"
	function e(e, o, n) {
		return this.each(function() {
			var s = t(this),
				r = s.data(i),
				l = t.extend({},
					a.DEFAULTS, s.data(), "object" == typeof e && e)
			r || s.data(i, r = new a(this, l)),
			"string" == typeof e ? r[e](o, n) : l.show && r.show(o, n)
		})
	}
	var i = "zui.modal",
		a = function(e, a) {
			this.options = a,
			this.$body = t(document.body),
			this.$element = t(e),
			this.$backdrop = this.isShown = null,
			this.scrollbarWidth = 0,
			"undefined" == typeof this.options.moveable && (this.options.moveable = this.$element.hasClass("modal-moveable")),
			this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
				this.$element.trigger("loaded." + i)
			},
			this))
		}
	a.VERSION = "3.2.0",
	a.TRANSITION_DURATION = 300,
	a.BACKDROP_TRANSITION_DURATION = 150,
	a.DEFAULTS = {
		backdrop: !0,
		keyboard: !0,
		show: !0,
		position: "fit"
	},
	a.prototype.toggle = function(t, e) {
		return this.isShown ? this.hide() : this.show(t, e)
	},
	a.prototype.ajustPosition = function(e) {
		if ("undefined" == typeof e && (e = this.options.position), "undefined" != typeof e) {
			var a = this.$element.find(".modal-dialog"),
				o = Math.max(0, (t(window).height() - a.outerHeight()) / 2),
				n = "fit" == e ? 2 * o / 3 : "center" == e ? o: e
			if (a.hasClass("modal-moveable")) {
				var s = null
				this.options.rememberPos && (this.options.rememberPos === !0 ? s = this.$element.data("modal-pos") : t.zui.store && (s = t.zui.store.pageGet(i + ".rememberPos"))),
				s || (s = {
					left: Math.max(0, (t(window).width() - a.outerWidth()) / 2),
					top: n
				}),
				a.css(s)
			} else {
				a.css("transform", "translate(0px," + (n-100) + "px)")
			}
		}
	},
	a.prototype.setMoveale = function() {
		t.fn.draggable || console.error("Moveable modal requires draggable.js.")
		var e = this,
			a = e.options,
			o = e.$element.find(".modal-dialog").removeClass("modal-dragged")
		o.toggleClass("modal-moveable", a.moveable),
		e.$element.data("modal-moveable-setup") || o.draggable({
			container: e.$element,
			handle: ".modal-header",
			before: function() {
				o.css("margin-top", "").addClass("modal-dragged")
			},
			finish: function(o) {
				a.rememberPos && (e.$element.data("modal-pos", o.pos), t.zui.store && a.rememberPos !== !0 && t.zui.store.pageSet(i + ".rememberPos", o.pos))
			}
		})
	},
	a.prototype.show = function(e, o) {
		var n = this,
			s = t.Event("show." + i, {
				relatedTarget: e
			})
		n.$element.trigger(s),
		n.isShown || s.isDefaultPrevented() || (n.isShown = !0, n.options.moveable && n.setMoveale(), n.checkScrollbar(), n.$body.addClass("modal-open"), n.setScrollbar(), n.escape(), n.$element.on("click.dismiss." + i, "[data-dismiss=\"modal\"]", t.proxy(n.hide, n)), n.backdrop(function() {
			var s = t.support.transition && n.$element.hasClass("fade")
			n.$element.parent().length || n.$element.appendTo(n.$body),
			n.$element.show().scrollTop(0),
			s && n.$element[0].offsetWidth,
			n.$element.addClass("in").attr("aria-hidden", !1),
			n.ajustPosition(o),
			n.enforceFocus()
			var r = t.Event("shown." + i, {
				relatedTarget: e
			})
			s ? n.$element.find(".modal-dialog").one("bsTransitionEnd",
				function() {
					n.$element.trigger("focus").trigger(r)
				}).emulateTransitionEnd(a.TRANSITION_DURATION) : n.$element.trigger("focus").trigger(r)
		}))
	},
	a.prototype.hide = function(e) {
		e && e.preventDefault(),
		e = t.Event("hide." + i),
		this.$element.trigger(e),
		this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.$body.removeClass("modal-open"), this.resetScrollbar(), this.escape(), t(document).off("focusin." + i), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss." + i), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(a.TRANSITION_DURATION) : this.hideModal())
	},
	a.prototype.enforceFocus = function() {
		t(document).off("focusin." + i).on("focusin." + i, t.proxy(function(t) {
			this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
		},
		this))
	},
	a.prototype.escape = function() {
		this.isShown && this.options.keyboard ? t(document).on("keydown.dismiss." + i, t.proxy(function(e) {
			if (27 == e.which) {
				var a = t.Event("escaping." + i),
					o = this.$element.triggerHandler(a, "esc")
				if (void 0 != o && !o) return
				this.hide()
			}
		},
		this)) : this.isShown || t(document).off("keydown.dismiss." + i)
	},
	a.prototype.hideModal = function() {
		var t = this
		this.$element.hide(),
		this.backdrop(function() {
			t.$element.trigger("hidden." + i)
		})
	},
	a.prototype.removeBackdrop = function() {
		this.$backdrop && this.$backdrop.remove(),
		this.$backdrop = null
	},
	a.prototype.backdrop = function(e) {
		var o = this,
			n = this.$element.hasClass("fade") ? "fade": ""
		if (this.isShown && this.options.backdrop) {
			var s = t.support.transition && n
			if (this.$backdrop = t("<div class=\"modal-backdrop " + n + "\" />").appendTo(this.$body), this.$element.on("mousedown.dismiss." + i, t.proxy(function(t) {
				t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
			},
			this)), s && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return
			s ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(a.BACKDROP_TRANSITION_DURATION) : e()
		} else if (!this.isShown && this.$backdrop) {
			this.$backdrop.removeClass("in")
			var r = function() {
				o.removeBackdrop(),
				e && e()
			}
			t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", r).emulateTransitionEnd(a.BACKDROP_TRANSITION_DURATION) : r()
		} else e && e()
	},
	a.prototype.checkScrollbar = function() {
		document.body.clientWidth >= window.innerWidth || (this.scrollbarWidth = this.scrollbarWidth || this.measureScrollbar())
	},
	a.prototype.setScrollbar = function() {
		var t = parseInt(this.$body.css("padding-right") || 0, 10)
		this.scrollbarWidth && this.$body.css("padding-right", t + this.scrollbarWidth)
	},
	a.prototype.resetScrollbar = function() {
		this.$body.css("padding-right", "")
	},
	a.prototype.measureScrollbar = function() {
		var t = document.createElement("div")
		t.className = "modal-scrollbar-measure",
		this.$body.append(t)
		var e = t.offsetWidth - t.clientWidth
		return this.$body[0].removeChild(t),
		e
	}
	var o = t.fn.modal
	t.fn.modal = e,
	t.fn.modal.Constructor = a,
	t.fn.modal.noConflict = function() {
		return t.fn.modal = o,
		this
	},
	t(document).on("click." + i + ".data-api", "[data-toggle=\"modal\"]",
		function(a) {
			var o = t(this),
				n = o.attr("href"),
				s = null
			try {
				s = t(o.attr("data-target") || n && n.replace(/.*(?=#[^\s]+$)/, ""))
			} catch(r) {
				return
			}
			if (s.length) {
				var l = s.data(i) ? "toggle": t.extend({
					remote: !/#/.test(n) && n
				},
				s.data(), o.data())
				o.is("a") && a.preventDefault(),
				s.one("show." + i,
					function(t) {
						t.isDefaultPrevented() || s.one("hidden." + i,
							function() {
								o.is(":visible") && o.trigger("focus")
							})
					}),
				e.call(s, l, this, o.data("position"))
			}
		})
} (jQuery),
+
function(t) {
	"use strict"
	var e = function(t, e) {
		this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null,
		this.init("tooltip", t, e)
	}
	e.DEFAULTS = {
		animation: !0,
		placement: "top",
		selector: !1,
		template: "<div class=\"tooltip\"><div class=\"tooltip-arrow\"></div><div class=\"tooltip-inner\"></div></div>",
		trigger: "hover focus",
		title: "",
		delay: 0,
		html: !1,
		container: !1
	},
	e.prototype.init = function(e, i, a) {
		this.enabled = !0,
		this.type = e,
		this.$element = t(i),
		this.options = this.getOptions(a)
		for (var o = this.options.trigger.split(" "), n = o.length; n--;) {
			var s = o[n]
			if ("click" == s) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this))
			else if ("manual" != s) {
				var r = "hover" == s ? "mouseenter": "focus",
					l = "hover" == s ? "mouseleave": "blur"
				this.$element.on(r + "." + this.type, this.options.selector, t.proxy(this.enter, this)),
				this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
			}
		}
		this.options.selector ? this._options = t.extend({},
			this.options, {
				trigger: "manual",
				selector: ""
			}) : this.fixTitle()
	},
	e.prototype.getDefaults = function() {
		return e.DEFAULTS
	},
	e.prototype.getOptions = function(e) {
		return e = t.extend({},
			this.getDefaults(), this.$element.data(), e),
		e.delay && "number" == typeof e.delay && (e.delay = {
			show: e.delay,
			hide: e.delay
		}),
		e
	},
	e.prototype.getDelegateOptions = function() {
		var e = {},
			i = this.getDefaults()
		return this._options && t.each(this._options,
			function(t, a) {
				i[t] != a && (e[t] = a)
			}),
		e
	},
	e.prototype.enter = function(e) {
		var i = e instanceof this.constructor ? e: t(e.currentTarget)[this.type](this.getDelegateOptions()).data("zui." + this.type)
		return clearTimeout(i.timeout),
		i.hoverState = "in",
		i.options.delay && i.options.delay.show ? void(i.timeout = setTimeout(function() {
			"in" == i.hoverState && i.show()
		},
		i.options.delay.show)) : i.show()
	},
	e.prototype.leave = function(e) {
		var i = e instanceof this.constructor ? e: t(e.currentTarget)[this.type](this.getDelegateOptions()).data("zui." + this.type)
		return clearTimeout(i.timeout),
		i.hoverState = "out",
		i.options.delay && i.options.delay.hide ? void(i.timeout = setTimeout(function() {
			"out" == i.hoverState && i.hide()
		},
		i.options.delay.hide)) : i.hide()
	},
	e.prototype.show = function(e) {
		var i = t.Event("show.zui." + this.type)
		if ((e || this.hasContent()) && this.enabled) {
			if (this.$element.trigger(i), i.isDefaultPrevented()) return
			var a = this.tip()
			this.setContent(e),
			this.options.animation && a.addClass("fade")
			var o = "function" == typeof this.options.placement ? this.options.placement.call(this, a[0], this.$element[0]) : this.options.placement,
				n = /\s?auto?\s?/i,
				s = n.test(o)
			s && (o = o.replace(n, "") || "top"),
			a.detach().css({
				top: 0,
				left: 0,
				display: "block"
			}).addClass(o),
			this.options.container ? a.appendTo(this.options.container) : a.insertAfter(this.$element)
			var r = this.getPosition(),
				l = a[0].offsetWidth,
				d = a[0].offsetHeight
			if (s) {
				var c = this.$element.parent(),
					p = o,
					h = document.documentElement.scrollTop || document.body.scrollTop,
					f = "body" == this.options.container ? window.innerWidth: c.outerWidth(),
					u = "body" == this.options.container ? window.innerHeight: c.outerHeight(),
					g = "body" == this.options.container ? 0 : c.offset().left
				o = "bottom" == o && r.top + r.height + d - h > u ? "top": "top" == o && r.top - h - d < 0 ? "bottom": "right" == o && r.right + l > f ? "left": "left" == o && r.left - l < g ? "right": o,
				a.removeClass(p).addClass(o)
			}
			var v = this.getCalculatedOffset(o, r, l, d)
			this.applyPlacement(v, o),
			this.$element.trigger("shown.zui." + this.type)
		}
	},
	e.prototype.applyPlacement = function(t, e) {
		var i, a = this.tip(),
			o = a[0].offsetWidth,
			n = a[0].offsetHeight,
			s = parseInt(a.css("margin-top"), 10),
			r = parseInt(a.css("margin-left"), 10)
		isNaN(s) && (s = 0),
		isNaN(r) && (r = 0),
		t.top = t.top + s,
		t.left = t.left + r,
		a.offset(t).addClass("in")
		var l = a[0].offsetWidth,
			d = a[0].offsetHeight
		if ("top" == e && d != n && (i = !0, t.top = t.top + n - d), /bottom|top/.test(e)) {
			var c = 0
			t.left < 0 && (c = -2 * t.left, t.left = 0, a.offset(t), l = a[0].offsetWidth, d = a[0].offsetHeight),
			this.replaceArrow(c - o + l, l, "left")
		} else this.replaceArrow(d - n, d, "top")
		i && a.offset(t)
	},
	e.prototype.replaceArrow = function(t, e, i) {
		this.arrow().css(i, t ? 50 * (1 - t / e) + "%": "")
	},
	e.prototype.setContent = function(t) {
		var e = this.tip(),
			i = t || this.getTitle()
		this.options.tipId && e.attr("id", this.options.tipId),
		this.options.tipClass && e.addClass(this.options.tipClass),
		e.find(".tooltip-inner")[this.options.html ? "html": "text"](i),
		e.removeClass("fade in top bottom left right")
	},
	e.prototype.hide = function() {
		function e() {
			"in" != i.hoverState && a.detach()
		}
		var i = this,
			a = this.tip(),
			o = t.Event("hide.zui." + this.type)
		return this.$element.trigger(o),
		o.isDefaultPrevented() ? void 0 : (a.removeClass("in"), t.support.transition && this.$tip.hasClass("fade") ? a.one(t.support.transition.end, e).emulateTransitionEnd(150) : e(), this.$element.trigger("hidden.zui." + this.type), this)
	},
	e.prototype.fixTitle = function() {
		var t = this.$element; (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
	},
	e.prototype.hasContent = function() {
		return this.getTitle()
	},
	e.prototype.getPosition = function() {
		var e = this.$element[0]
		return t.extend({},
			"function" == typeof e.getBoundingClientRect ? e.getBoundingClientRect() : {
				width: e.offsetWidth,
				height: e.offsetHeight
			},
			this.$element.offset())
	},
	e.prototype.getCalculatedOffset = function(t, e, i, a) {
		return "bottom" == t ? {
			top: e.top + e.height,
			left: e.left + e.width / 2 - i / 2
		}: "top" == t ? {
			top: e.top - a,
			left: e.left + e.width / 2 - i / 2
		}: "left" == t ? {
			top: e.top + e.height / 2 - a / 2,
			left: e.left - i
		}: {
			top: e.top + e.height / 2 - a / 2,
			left: e.left + e.width
		}
	},
	e.prototype.getTitle = function() {
		var t, e = this.$element,
			i = this.options
		return t = e.attr("data-original-title") || ("function" == typeof i.title ? i.title.call(e[0]) : i.title)
	},
	e.prototype.tip = function() {
		return this.$tip = this.$tip || t(this.options.template)
	},
	e.prototype.arrow = function() {
		return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
	},
	e.prototype.validate = function() {
		this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
	},
	e.prototype.enable = function() {
		this.enabled = !0
	},
	e.prototype.disable = function() {
		this.enabled = !1
	},
	e.prototype.toggleEnabled = function() {
		this.enabled = !this.enabled
	},
	e.prototype.toggle = function(e) {
		var i = e ? t(e.currentTarget)[this.type](this.getDelegateOptions()).data("zui." + this.type) : this
		i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
	},
	e.prototype.destroy = function() {
		this.hide().$element.off("." + this.type).removeData("zui." + this.type)
	}
	var i = t.fn.tooltip
	t.fn.tooltip = function(i, a) {
		return this.each(function() {
			var o = t(this),
				n = o.data("zui.tooltip"),
				s = "object" == typeof i && i
			n || o.data("zui.tooltip", n = new e(this, s)),
			"string" == typeof i && n[i](a)
		})
	},
	t.fn.tooltip.Constructor = e,
	t.fn.tooltip.noConflict = function() {
		return t.fn.tooltip = i,
		this
	}
} (window.jQuery),
+
function(t) {
	"use strict"
	var e = function(t, e) {
		this.init("popover", t, e)
	}
	if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js")
	e.DEFAULTS = t.extend({},
		t.fn.tooltip.Constructor.DEFAULTS, {
			placement: "right",
			trigger: "click",
			content: "",
			template: "<div class=\"popover\"><div class=\"arrow\"></div><h3 class=\"popover-title\"></h3><div class=\"popover-content\"></div></div>"
		}),
	e.prototype = t.extend({},
		t.fn.tooltip.Constructor.prototype),
	e.prototype.constructor = e,
	e.prototype.getDefaults = function() {
		return e.DEFAULTS
	},
	e.prototype.setContent = function() {
		var t = this.tip(),
			e = this.getTarget()
		if (e) return e.find(".arrow").length < 1 && t.addClass("no-arrow"),
			void t.html(e.html())
		var i = this.getTitle(),
			a = this.getContent()
		t.find(".popover-title")[this.options.html ? "html": "text"](i),
		t.find(".popover-content")[this.options.html ? "html": "text"](a),
		t.removeClass("fade top bottom left right in"),
		this.options.tipId && t.attr("id", this.options.tipId),
		this.options.tipClass && t.addClass(this.options.tipClass),
		t.find(".popover-title").html() || t.find(".popover-title").hide()
	},
	e.prototype.hasContent = function() {
		return this.getTarget() || this.getTitle() || this.getContent()
	},
	e.prototype.getContent = function() {
		var t = this.$element,
			e = this.options
		return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
	},
	e.prototype.getTarget = function() {
		var e = this.$element,
			i = this.options,
			a = e.attr("data-target") || ("function" == typeof i.target ? i.target.call(e[0]) : i.target)
		return a ? "$next" == a ? e.next(".popover") : t(a) : !1
	},
	e.prototype.arrow = function() {
		return this.$arrow = this.$arrow || this.tip().find(".arrow")
	},
	e.prototype.tip = function() {
		return this.$tip || (this.$tip = t(this.options.template)),
		this.$tip
	}
	var i = t.fn.popover
	t.fn.popover = function(i) {
		return this.each(function() {
			var a = t(this),
				o = a.data("zui.popover"),
				n = "object" == typeof i && i
			o || a.data("zui.popover", o = new e(this, n)),
			"string" == typeof i && o[i]()
		})
	},
	t.fn.popover.Constructor = e,
	t.fn.popover.noConflict = function() {
		return t.fn.popover = i,
		this
	}
} (window.jQuery),
function(t, e, i) {
	"use strict"
	var a = function(e, i) {
		this.$ = t(e),
		this.options = this.getOptions(i),
		this.init()
	}
	a.DEFAULTS = {
		container: "body",
		deviation: 5,
		sensorOffsetX: 0,
		sensorOffsetY: 0
	},
	a.prototype.getOptions = function(e) {
		return e = t.extend({},
			a.DEFAULTS, this.$.data(), e)
	},
	a.prototype.callEvent = function(e, i) {
		return t.zui.callEvent(this.options[e], i, this)
	},
	a.prototype.init = function() {
		this.handleMouseEvents()
	},
	a.prototype.handleMouseEvents = function() {
		var a = this.$,
			o = this,
			n = this.options,
			s = "before"
		this.$triggerTarget = n.trigger ? (t.isFunction(n.trigger) ? n.trigger(a) : a.find(n.trigger)).first() : a,
		this.$triggerTarget.on("mousedown",
			function(r) {
				function l(e) {
					var s = {
						left: e.pageX,
						top: e.pageY
					}
					if (! (i.abs(s.left - y.left) < n.deviation && i.abs(s.top - y.top) < n.deviation)) {
						if (null === u) {
							var r = g.css("position")
							"absolute" != r && "relative" != r && "fixed" != r && (p = r, g.css("position", "relative")),
							u = a.clone().removeClass("drag-from").addClass("drag-shadow").css({
								position: "absolute",
								width: a.outerWidth(),
								transition: "none"
							}).appendTo(g),
							a.addClass("dragging"),
							o.callEvent("start", {
								event: e,
								element: a
							})
						}
						var l = {
								left: s.left - C.left,
								top: s.top - C.top
							},
							d = {
								left: l.left - w.left,
								top: l.top - w.top
							}
						u.css(d),
						x.left = s.left,
						x.top = s.top
						var c = !1
						v = !1,
						n.flex || h.removeClass("drop-to")
						var b = null
						if (h.each(function() {
							var e = t(this),
								i = e.offset(),
								a = e.outerWidth(),
								o = e.outerHeight(),
								r = i.left + n.sensorOffsetX,
								l = i.top + n.sensorOffsetY
							return s.left > r && s.top > l && s.left < r + a && s.top < l + o && (b && b.removeClass("drop-to"), b = e, !n.nested) ? !1 : void 0
						}), b) {
							v = !0
							var $ = b.data("id")
							a.data("id") != $ && (m = !1),
							(null === f || f.data("id") !== $ && !m) && (c = !0),
							f = b,
							n.flex && h.removeClass("drop-to"),
							f.addClass("drop-to")
						}
						n.flex ? null !== f && f.length && (v = !0) : (a.toggleClass("drop-in", v), u.toggleClass("drop-in", v)),
						o.callEvent("drag", {
							event: e,
							isIn: v,
							target: f,
							element: a,
							isNew: c,
							selfTarget: m,
							clickOffset: C,
							offset: l,
							position: {
								left: l.left - w.left,
								top: l.top - w.top
							},
							mouseOffset: s
						}),
						e.preventDefault()
					}
				}
				function d(i) {
					if (p && g.css("position", p), null === u) return a.removeClass("drag-from"),
						t(e).unbind("mousemove", l).unbind("mouseup", d),
						void o.callEvent("always", {
							event: i,
							cancel: !0
						})
					v || (f = null)
					var n = !0,
						s = {
							left: i.pageX,
							top: i.pageY
						},
						r = {
							left: s.left - C.left,
							top: s.top - C.top
						},
						c = {
							left: s.left - x.left,
							top: s.top - x.top
						}
					x.left = s.left,
					x.top = s.top
					var b = {
						event: i,
						isIn: v,
						target: f,
						element: a,
						isNew: !m && null !== f,
						selfTarget: m,
						offset: r,
						mouseOffset: s,
						position: {
							left: r.left - w.left,
							top: r.top - w.top
						},
						lastMouseOffset: x,
						moveOffset: c
					}
					n = o.callEvent("beforeDrop", b),
					n && v && o.callEvent("drop", b),
					t(e).unbind("mousemove", l).unbind("mouseup", d),
					h.removeClass("drop-to"),
					a.removeClass("dragging").removeClass("drag-from"),
					u.remove(),
					o.callEvent("finish", b),
					o.callEvent("always", b),
					i.preventDefault()
				}
				if (t.isFunction(n[s])) {
					var c = n[s]({
						event: r,
						element: a
					})
					if (c === !1) return
				}
				var p, h = t.isFunction(n.target) ? n.target(a) : t(n.target),
					f = null,
					u = null,
					g = t(n.container).first(),
					v = !1,
					m = !0,
					b = a.offset(),
					y = {
						left: r.pageX,
						top: r.pageY
					},
					w = g.offset(),
					C = {
						left: y.left - b.left,
						top: y.top - b.top
					},
					x = {
						left: y.left,
						top: y.top
					}
				a.addClass("drag-from"),
				t(e).bind("mousemove", l).bind("mouseup", d),
				r.preventDefault()
			})
	},
	a.prototype.reset = function() {
		this.$triggerTarget.off("mousedown"),
		this.handleMouseEvents()
	},
	t.fn.droppable = function(e) {
		return this.each(function() {
			var i = t(this),
				o = i.data("zui.droppable"),
				n = "object" == typeof e && e
			o || i.data("zui.droppable", o = new a(this, n)),
			"string" == typeof e && o[e]()
		})
	},
	t.fn.droppable.Constructor = a
} (jQuery, document, Math),
+
function(t, e, i, a) {
	"use strict"
	if (!t.fn.droppable) return void console.error("Sortable requires droppable.js")
	var o = function(e, i) {
		this.$ = t(e),
		this.options = this.getOptions(i),
		this.init()
	}
	o.DEFAULTS = {
		selector: "li, div",
		dragCssClass: "invisible"
	},
	o.prototype.getOptions = function(e) {
		return e = t.extend({},
			o.DEFAULTS, this.$.data(), e)
	},
	o.prototype.init = function() {
		this.bindEventToList(this.$.children(this.options.selector))
	},
	o.prototype.reset = function() {
		var e = this,
			i = this.$.children(this.options.selector).not(".drag-shadow")
		i.each(function() {
			var a = t(this)
			return a.data("zui.droppable") ? (a.data("zui.droppable").options.target = i, void a.droppable("reset")) : (e.bindEventToList(i), !1)
		})
	},
	o.prototype.bindEventToList = function(e) {
		function i(e) {
			var i = []
			e.each(function() {
				var e = t(this).data("order")
				"number" == typeof e && i.push(e)
			}),
			i.sort(function(t, e) {
				return t - e
			})
			for (var a = e.length; i.length < a;) i.push(i.length ? i[i.length - 1] + 1 : 0)
			n && i.reverse()
			var o = 0
			e.each(function() {
				t(this).attr("data-order", i[o++])
			})
		}
		var a = this.$,
			o = this.options,
			n = o.reverse
		i(e),
		e.droppable({
			trigger: o.trigger,
			target: a.children(o.selector),
			container: a,
			always: o.always,
			flex: !0,
			before: o.before,
			start: function(e) {
				o.dragCssClass && e.element.addClass(o.dragCssClass),
				t.zui.callEvent(o.start)
			},
			drag: function(e) {
				if (a.addClass("sortable-sorting"), e.isIn) {
					var s = e.element,
						r = e.target,
						l = s.attr("data-order"),
						d = r.attr("data-order")
					if (l == d) return
					l > d ? r[n ? "after": "before"](s) : r[n ? "before": "after"](s)
					var c = a.children(o.selector).not(".drag-shadow")
					i(c),
					t.zui.callEvent(o.order, {
						list: c,
						element: s
					})
				}
			},
			finish: function(e) {
				o.dragCssClass && e.element && e.element.removeClass(o.dragCssClass),
				t.zui.callEvent(o.finish, {
					list: a.children(o.selector),
					element: e.element
				}),
				a.removeClass("sortable-sorting")
			}
		})
	},
	t.fn.sortable = function(e) {
		return this.each(function() {
			var i = t(this),
				a = i.data("zui.sortable"),
				n = "object" == typeof e && e
			a ? "object" == typeof e && a.reset() : i.data("zui.sortable", a = new o(this, n)),
			"string" == typeof e && a[e]()
		})
	},
	t.fn.sortable.Constructor = o
} (jQuery, window, document, Math),
/*! bootbox.js v4.4.0 http://bootboxjs.com/license.txt */
function(t, e) {
	"use strict"
	"function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : t.bootbox = e(t.jQuery)
} (this,
	function t(e, i) {
		"use strict"
		function a(t) {
			var e = v[u.locale]
			return e ? e[t] : v.en[t]
		}
		function o(t, i, a) {
			t.stopPropagation(),
			t.preventDefault()
			var o = e.isFunction(a) && a.call(i, t) === !1
			o || i.modal("hide")
		}
		function n(t) {
			var e, i = 0
			for (e in t) i++
			return i
		}
		function s(t, i) {
			var a = 0
			e.each(t,
				function(t, e) {
					i(t, e, a++)
				})
		}
		function r(t) {
			var i, a
			if ("object" != typeof t) throw new Error("Please supply an object of options")
			if (!t.message) throw new Error("Please specify a message")
			return t = e.extend({},
				u, t),
			t.buttons || (t.buttons = {}),
			i = t.buttons,
			a = n(i),
			s(i,
				function(t, o, n) {
					if (e.isFunction(o) && (o = i[t] = {
						callback: o
					}), "object" !== e.type(o)) throw new Error("button with key " + t + " must be an object")
					o.label || (o.label = t),
					o.className || (2 === a && ("ok" === t || "confirm" === t) || 1 === a ? o.className = "btn-primary": o.className = "btn-default")
				}),
			t
		}
		function l(t, e) {
			var i = t.length,
				a = {}
			if (1 > i || i > 2) throw new Error("Invalid argument length")
			return 2 === i || "string" == typeof t[0] ? (a[e[0]] = t[0], a[e[1]] = t[1]) : a = t[0],
			a
		}
		function d(t, i, a) {
			return e.extend(!0, {},
				t, l(i, a))
		}
		function c(t, e, i, a) {
			var o = {
				className: "bootbox-" + t,
				buttons: p.apply(null, e)
			}
			return h(d(o, a, i), e)
		}
		function p() {
			for (var t = {},
				e = 0,
				i = arguments.length; i > e; e++) {
				var o = arguments[e],
					n = o.toLowerCase(),
					s = o.toUpperCase()
				t[n] = {
					label: a(s)
				}
			}
			return t
		}
		function h(t, e) {
			var a = {}
			return s(e,
				function(t, e) {
					a[e] = !0
				}),
			s(t.buttons,
				function(t) {
					if (a[t] === i) throw new Error("button key " + t + " is not allowed (options are " + e.join("\n") + ")")
				}),
			t
		}
		var f = {
				dialog: "<div class='bootbox modal' tabindex='-1' role='dialog'><div class='modal-dialog'><div class='modal-content'><div class='modal-body'><div class='bootbox-body'></div></div></div></div></div>",
				header: "<div class='modal-header'><h4 class='modal-title'></h4></div>",
				footer: "<div class='modal-footer'></div>",
				closeButton: "<button type='button' class='bootbox-close-button close' data-dismiss='modal' aria-hidden='true'>&times;</button>",
				form: "<form class='bootbox-form'></form>",
				inputs: {
					text: "<input class='bootbox-input bootbox-input-text form-control' autocomplete=off type=text />",
					textarea: "<textarea class='bootbox-input bootbox-input-textarea form-control'></textarea>",
					email: "<input class='bootbox-input bootbox-input-email form-control' autocomplete='off' type='email' />",
					select: "<select class='bootbox-input bootbox-input-select form-control'></select>",
					checkbox: "<div class='checkbox'><label><input class='bootbox-input bootbox-input-checkbox' type='checkbox' /></label></div>",
					date: "<input class='bootbox-input bootbox-input-date form-control' autocomplete=off type='date' />",
					time: "<input class='bootbox-input bootbox-input-time form-control' autocomplete=off type='time' />",
					number: "<input class='bootbox-input bootbox-input-number form-control' autocomplete=off type='number' />",
					password: "<input class='bootbox-input bootbox-input-password form-control' autocomplete='off' type='password' />"
				}
			},
			u = {
				locale: e.zui && e.zui.clientLang ? e.zui.clientLang() : "zh_cn",
				backdrop: "static",
				animate: !0,
				className: null,
				closeButton: !0,
				show: !0,
				container: "body"
			},
			g = {}
		g.alert = function() {
			var t
			if (t = c("alert", ["ok"], ["message", "callback"], arguments), t.callback && !e.isFunction(t.callback)) throw new Error("alert requires callback property to be a function when provided")
			return t.buttons.ok.callback = t.onEscape = function() {
				return e.isFunction(t.callback) ? t.callback.call(this) : !0
			},
			g.dialog(t)
		},
		g.confirm = function() {
			var t
			if (t = c("confirm", ["confirm", "cancel"], ["message", "callback"], arguments), t.buttons.cancel.callback = t.onEscape = function() {
				return t.callback.call(this, !1)
			},
				t.buttons.confirm.callback = function() {
					return t.callback.call(this, !0)
				},
				!e.isFunction(t.callback)) throw new Error("confirm requires a callback")
			return g.dialog(t)
		},
		g.prompt = function() {
			var t, a, o, n, r, l, c
			if (n = e(f.form), a = {
				className: "bootbox-prompt",
				buttons: p("cancel", "confirm"),
				value: "",
				inputType: "text"
			},
				t = h(d(a, arguments, ["title", "callback"]), ["confirm", "cancel"]), l = t.show === i ? !0 : t.show, t.message = n, t.buttons.cancel.callback = t.onEscape = function() {
					return t.callback.call(this, null)
				},
				t.buttons.confirm.callback = function() {
					var i
					switch (t.inputType) {
					case "text":
					case "textarea":
					case "email":
					case "select":
					case "date":
					case "time":
					case "number":
					case "password":
						i = r.val()
						break
					case "checkbox":
						var a = r.find("input:checked")
						i = [],
						s(a,
							function(t, a) {
								i.push(e(a).val())
							})
					}
					return t.callback.call(this, i)
				},
				t.show = !1, !t.title) throw new Error("prompt requires a title")
			if (!e.isFunction(t.callback)) throw new Error("prompt requires a callback")
			if (!f.inputs[t.inputType]) throw new Error("invalid prompt type")
			switch (r = e(f.inputs[t.inputType]), t.inputType) {
			case "text":
			case "textarea":
			case "email":
			case "date":
			case "time":
			case "number":
			case "password":
				r.val(t.value)
				break
			case "select":
				var u = {}
				if (c = t.inputOptions || [], !e.isArray(c)) throw new Error("Please pass an array of input options")
				if (!c.length) throw new Error("prompt with select requires options")
				s(c,
					function(t, a) {
						var o = r
						if (a.value === i || a.text === i) throw new Error("given options in wrong format")
						a.group && (u[a.group] || (u[a.group] = e("<optgroup/>").attr("label", a.group)), o = u[a.group]),
						o.append("<option value='" + a.value + "'>" + a.text + "</option>")
					}),
				s(u,
					function(t, e) {
						r.append(e)
					}),
				r.val(t.value)
				break
			case "checkbox":
				var v = e.isArray(t.value) ? t.value: [t.value]
				if (c = t.inputOptions || [], !c.length) throw new Error("prompt with checkbox requires options")
				if (!c[0].value || !c[0].text) throw new Error("given options in wrong format")
				r = e("<div/>"),
				s(c,
					function(i, a) {
						var o = e(f.inputs[t.inputType])
						o.find("input").attr("value", a.value),
						o.find("label").append(a.text),
						s(v,
							function(t, e) {
								e === a.value && o.find("input").prop("checked", !0)
							}),
						r.append(o)
					})
			}
			return t.placeholder && r.attr("placeholder", t.placeholder),
			t.pattern && r.attr("pattern", t.pattern),
			t.maxlength && r.attr("maxlength", t.maxlength),
			n.append(r),
			n.on("submit",
				function(t) {
					t.preventDefault(),
					t.stopPropagation(),
					o.find(".btn-primary").click()
				}),
			o = g.dialog(t),
			o.off("shown.zui.modal"),
			o.on("shown.zui.modal",
				function() {
					r.focus()
				}),
			l === !0 && o.modal("show"),
			o
		},
		g.dialog = function(t) {
			t = r(t)
			var a = e(f.dialog),
				n = a.find(".modal-dialog"),
				l = a.find(".modal-body"),
				d = t.buttons,
				c = "",
				p = {
					onEscape: t.onEscape
				}
			if (e.fn.modal === i) throw new Error("$.fn.modal is not defined; please double check you have included the Bootstrap JavaScript library. See http://getbootstrap.com/javascript/ for more details.")
			if (s(d,
				function(t, e) {
					c += "<button data-bb-handler='" + t + "' type='button' class='btn " + e.className + "'>" + e.label + "</button>",
					p[t] = e.callback
				}), l.find(".bootbox-body").html(t.message), t.animate === !0 && a.addClass("fade"), t.className && a.addClass(t.className), "large" === t.size ? n.addClass("modal-lg") : "small" === t.size && n.addClass("modal-sm"), t.title && l.before(f.header), t.closeButton) {
				var h = e(f.closeButton)
				t.title ? a.find(".modal-header").prepend(h) : h.css("margin-top", "-10px").prependTo(l)
			}
			return t.title && a.find(".modal-title").html(t.title),
			c.length && (l.after(f.footer), a.find(".modal-footer").html(c)),
			a.on("hidden.zui.modal",
				function(t) {
					t.target === this && a.remove()
				}),
			a.on("shown.zui.modal",
				function() {
					a.find(".btn-primary:first").focus()
				}),
			"static" !== t.backdrop && a.on("click.dismiss.zui.modal",
				function(t) {
					a.children(".modal-backdrop").length && (t.currentTarget = a.children(".modal-backdrop").get(0)),
					t.target === t.currentTarget && a.trigger("escape.close.bb")
				}),
			a.on("escape.close.bb",
				function(t) {
					p.onEscape && o(t, a, p.onEscape)
				}),
			a.on("click", ".modal-footer button",
				function(t) {
					var i = e(this).data("bb-handler")
					o(t, a, p[i])
				}),
			a.on("click", ".bootbox-close-button",
				function(t) {
					o(t, a, p.onEscape)
				}),
			a.on("keyup",
				function(t) {
					27 === t.which && a.trigger("escape.close.bb")
				}),
			e(t.container).append(a),
			a.modal({
				backdrop: t.backdrop ? "static": !1,
				keyboard: !1,
				show: !1
			}),
			t.show && a.modal("show"),
			a
		},
		g.setDefaults = function() {
			var t = {}
			2 === arguments.length ? t[arguments[0]] = arguments[1] : t = arguments[0],
			e.extend(u, t)
		},
		g.hideAll = function() {
			return e(".bootbox").modal("hide"),
			g
		}
		var v = {
			en: {
				OK: "OK",
				CANCEL: "Cancel",
				CONFIRM: "OK"
			},
			zh_cn: {
				OK: "确认",
				CANCEL: "取消",
				CONFIRM: "确认"
			},
			zh_tw: {
				OK: "確認",
				CANCEL: "取消",
				CONFIRM: "確認"
			}
		}
		return g.addLocale = function(t, i) {
			return e.each(["OK", "CANCEL", "CONFIRM"],
				function(t, e) {
					if (!i[e]) throw new Error("Please supply a translation for '" + e + "'")
				}),
			v[t] = {
				OK: i.OK,
				CANCEL: i.CANCEL,
				CONFIRM: i.CONFIRM
			},
			g
		},
		g.removeLocale = function(t) {
			return delete v[t],
			g
		},
		g.setLocale = function(t) {
			return g.setDefaults("locale", t)
		},
		g.init = function(i) {
			return t(i || e)
		},
		g
	}),
function(t) {
	"use strict"
	var e = function(e, i) {
		this.$ = t(e),
		this.options = this.getOptions(i),
		this.init()
	}
	e.DEFAULTS = {
		container: "body",
		move: !0
	},
	e.prototype.getOptions = function(i) {
		return i = t.extend({},
			e.DEFAULTS, this.$.data(), i)
	},
	e.prototype.init = function() {
		this.handleMouseEvents()
	},
	e.prototype.handleMouseEvents = function() {
		var e, i, a, o, n, s = this.$,
			r = "before",
			l = "drag",
			d = "finish",
			c = this.options,
			p = function(l) {
				if (t.isFunction(c[r])) {
					var d = c[r]({
						event: l,
						element: s
					})
					if (d === !1) return
				}
				var p = t(c.container),
					u = s.offset()
				i = p.offset(),
				e = {
					x: l.pageX,
					y: l.pageY
				},
				a = {
					x: l.pageX - u.left + i.left,
					y: l.pageY - u.top + i.top
				},
				o = t.extend({},
					e),
				n = !1,
				s.addClass("drag-ready"),
				t(document).bind("mousemove", h).bind("mouseup", f),
				l.preventDefault(),
				c.stopPropagation && l.stopPropagation()
			},
			h = function(i) {
				n = !0
				var r = i.pageX,
					d = i.pageY,
					p = {
						left: r - a.x,
						top: d - a.y
					}
				s.removeClass("drag-ready").addClass("dragging"),
				c.move && s.css(p),
				t.isFunction(c[l]) && c[l]({
					event: i,
					element: s,
					startOffset: a,
					pos: p,
					offset: {
						x: r - e.x,
						y: d - e.y
					},
					smallOffset: {
						x: r - o.x,
						y: d - o.y
					}
				}),
				o.x = r,
				o.y = d,
				c.stopPropagation && i.stopPropagation()
			},
			f = function(i) {
				if (t(document).unbind("mousemove", h).unbind("mouseup", f), !n) return void s.removeClass("drag-ready")
				var r = {
					left: i.pageX - a.x,
					top: i.pageY - a.y
				}
				s.removeClass("drag-ready").removeClass("dragging"),
				c.move && s.css(r),
				t.isFunction(c[d]) && c[d]({
					event: i,
					element: s,
					startOffset: a,
					pos: r,
					offset: {
						x: i.pageX - e.x,
						y: i.pageY - e.y
					},
					smallOffset: {
						x: i.pageX - o.x,
						y: i.pageY - o.y
					}
				}),
				i.preventDefault(),
				c.stopPropagation && i.stopPropagation()
			}
		c.handle ? s.on("mousedown", c.handle, p) : s.on("mousedown", p)
	},
	t.fn.draggable = function(i) {
		return this.each(function() {
			var a = t(this),
				o = a.data("zui.draggable"),
				n = "object" == typeof i && i
			o || a.data("zui.draggable", o = new e(this, n)),
			"string" == typeof i && o[i]()
		})
	},
	t.fn.draggable.Constructor = e
} (jQuery),
function(t) {
	"use strict"
	function e(e, i) {
		if (e === !1) return e
		if (!e) return i
		e === !0 ? e = {
			add: !0,
			"delete": !0,
			edit: !0,
			sort: !0
		}: "string" == typeof e && (e = e.split(","))
		var a
		return t.isArray(e) && (a = {},
			t.each(e,
				function(e, i) {
					t.isPlainObject(i) ? a[i.action] = i: a[i] = !0
				}), e = a),
		t.isPlainObject(e) && (a = {},
			t.each(e,
				function(e, i) {
					i ? a[e] = t.extend({
						type: e
					},
					s[e], t.isPlainObject(i) ? i: null) : a[e] = !1
				}), e = a),
		i ? t.extend(!0, {},
			i, e) : e
	}
	function i(e, i, a) {
		return i = i || e.type,
		t(a || e.template).addClass("tree-action").attr(t.extend({
			"data-type": i,
			title: e.title || ""
		},
		e.attr)).data("action", e)
	}
	var a = "zui.tree",
		o = 0,
		n = function(e, i) {
			this.name = a,
			this.$ = t(e),
			this.getOptions(i),
			this._init()
		},
		s = {
			sort: {
				template: "<a class=\"sort-handler\" href=\"javascript:;\"><i class=\"icon icon-move\"></i></a>"
			},
			add: {
				template: "<a href=\"javascript:;\"><i class=\"icon icon-plus\"></i></a>"
			},
			edit: {
				template: "<a href=\"javascript:;\"><i class=\"icon icon-pencil\"></i></a>"
			},
			"delete": {
				template: "<a href=\"javascript:;\"><i class=\"icon icon-trash\"></i></a>"
			}
		}
	n.DEFAULTS = {
		animate: null,
		initialState: "normal",
		toggleTemplate: "<i class=\"list-toggle icon\"></i>"
	},
	n.prototype.add = function(e, i, a, o, n) {
		var s, r = t(e),
			l = this.options
		if (r.is("li") ? (s = r.children("ul"), s.length || (s = t("<ul/>"), r.append(s), this._initList(s, r))) : s = r, s) {
			var d = this
			t.isArray(i) || (i = [i]),
			t.each(i,
				function(e, i) {
					var a = t("<li/>").data(i).appendTo(s)
					void 0 !== i.id && a.attr("data-id", i.id)
					var o = l.itemWrapper ? t(l.itemWrapper === !0 ? "<div class=\"tree-item-wrapper\"/>": l.itemWrapper).appendTo(a) : a
					if (i.html) o.html(i.html)
					else if (t.isFunction(d.options.itemCreator)) {
						var n = d.options.itemCreator(a, i)
						n !== !0 && n !== !1 && o.html(n)
					} else i.url ? o.append(t("<a/>", {
						href: i.url
					}).text(i.title || i.name)) : o.append(t("<span/>").text(i.title || i.name))
					d._initItem(a, i.idx || e, s, i),
					i.children && i.children.length && d.add(a, i.children)
				}),
			this._initList(s),
			a && !s.hasClass("tree") && d.expand(s.parent("li"), o, n)
		}
	},
	n.prototype.reload = function(e) {
		var i = this
		e && (i.$.empty(), i.add(i.$, e)),
		i.isPreserve && i.store.time && i.$.find("li:not(.tree-action-item)").each(function() {
			var e = t(this)
			i[i.store[e.data("id")] ? "expand": "collapse"](e, !0, !0)
		})
	},
	n.prototype._initList = function(a, o, n, s) {
		var r = this
		a.hasClass("tree") ? (n = 0, o = null) : (o = (o || a.closest("li")).addClass("has-list"), o.find(".list-toggle").length || o.prepend(this.options.toggleTemplate), n = n || o.data("idx"))
		var l = a.attr("data-idx", n || 0).children("li:not(.tree-action-item)").each(function(e) {
			r._initItem(t(this), e + 1, a)
		})
		1 !== l.length || l.find("ul").length || l.addClass("tree-single-item"),
		s = s || (o ? o.data() : null)
		var d = e(s ? s.actions: null, this.actions)
		if (d) {
			if (d.add && d.add.templateInList !== !1) {
				var c = a.children("li.tree-action-item")
				c.length ? c.detach().appendTo(a) : t("<li class=\"tree-action-item\"/>").append(i(d.add, "add", d.add.templateInList)).appendTo(a)
			}
			d.sort && a.sortable(t.extend({
				dragCssClass: "tree-drag-holder",
				trigger: ".sort-handler",
				selector: "li:not(.tree-action-item)",
				finish: function(t) {
					r.callEvent("action", {
						action: d.sort,
						$list: a,
						target: t.target,
						item: s
					})
				}
			},
			d.sort.options, t.isPlainObject(this.options.sortable) ? this.options.sortable: null))
		}
		o && (o.hasClass("open") || s && s.open) && o.addClass("open in")
	},
	n.prototype._initItem = function(a, o, n, s) {
		if (void 0 === o) {
			var r = a.prev("li")
			o = r.length ? r.data("idx") + 1 : 1
		}
		if (n = n || a.closest("ul"), a.attr("data-idx", o).removeClass("tree-single-item"), !a.data("id")) {
			var l = o
			n.hasClass("tree") || (l = n.parent("li").data("id") + "-" + l),
			a.attr("data-id", l)
		}
		s = s || a.data()
		var d = e(s.actions, this.actions)
		if (d) {
			var c = a.find(".tree-actions")
			c.length || (c = t("<div class=\"tree-actions\"/>").appendTo(this.options.itemWrapper ? a.find(".tree-item-wrapper") : a), t.each(d,
				function(t, e) {
					e && c.append(i(e, t))
				}))
		}
		var p = a.children("ul")
		p.length && this._initList(p, a, o, s)
	},
	n.prototype._init = function() {
		var i = this.options,
			n = this
		this.actions = e(i.actions),
		this.$.addClass("tree"),
		i.animate && this.$.addClass("tree-animate"),
		this._initList(this.$)
		var s = i.initialState,
			r = t.zui && t.zui.store && t.zui.store.enable
		r && (this.selector = a + "::" + (i.name || "") + "#" + (this.$.attr("id") || o++), this.store = t.zui.store[i.name ? "get": "pageGet"](this.selector, {})),
		"preserve" === s && (r ? this.isPreserve = !0 : this.options.initialState = s = "normal"),
		this.reload(i.data),
		r && (this.isPreserve = !0),
		"expand" === s ? this.expand() : "collapse" === s && this.collapse(),
		this.$.on("click", ".list-toggle,a[href=\"#\"],.tree-toggle",
			function(e) {
				var i = t(this),
					a = i.parent("li")
				n.callEvent("hit", {
					target: a,
					item: a.data()
				}),
				n.toggle(a),
				i.is("a") && e.preventDefault()
			}).on("click", ".tree-action",
			function() {
				var e = t(this),
					i = e.data()
				if (i.action && (i = i.action), "sort" !== i.type) {
					var a = e.closest("li:not(.tree-action-item)")
					n.callEvent("action", {
						action: i,
						target: this,
						$item: a,
						item: a.data()
					})
				}
			})
	},
	n.prototype.preserve = function(e, i, a) {
		if (this.isPreserve) if (e) i = i || e.data("id"),
			a = void 0 === a ? e.hasClass("open") : !1,
			a ? this.store[i] = a: delete this.store[i],
			this.store.time = (new Date).getTime(),
			t.zui.store[this.options.name ? "set": "pageSet"](this.selector, this.store)
			else {
			var o = this
			this.store = {},
			this.$.find("li").each(function() {
				o.preserve(t(this))
			})
		}
	},
	n.prototype.expand = function(t, e, i) {
		t ? (t.addClass("open"), !e && this.options.animate ? setTimeout(function() {
			t.addClass("in")
		},
		10) : t.addClass("in")) : t = this.$.find("li.has-list").addClass("open in"),
		i || this.preserve(t),
		this.callEvent("expand", t, this)
	},
	n.prototype.show = function(e, i, a) {
		var o = this
		e.each(function() {
			var e = t(this)
			if (o.expand(e, i, a), e) for (var n = e.parent("ul"); n && n.length && !n.hasClass("tree");) {
				var s = n.parent("li")
				s.length ? (o.expand(s, i, a), n = s.parent("ul")) : n = !1
			}
		})
	},
	n.prototype.collapse = function(t, e, i) {
		t ? !e && this.options.animate ? (t.removeClass("in"), setTimeout(function() {
			t.removeClass("open")
		},
		300)) : t.removeClass("open in") : t = this.$.find("li.has-list").removeClass("open in"),
		i || this.preserve(t),
		this.callEvent("collapse", t, this)
	},
	n.prototype.toggle = function(t) {
		var e = t && t.hasClass("open") || t === !1 || void 0 === t && this.$.find("li.has-list.open").length
		this[e ? "collapse": "expand"](t)
	},
	n.prototype.getOptions = function(e) {
		this.options = t.extend({},
			n.DEFAULTS, this.$.data(), e),
		null === this.options.animate && this.$.hasClass("tree-animate") && (this.options.animate = !0)
	},
	n.prototype.toData = function(e, i) {
		t.isFunction(e) && (i = e, e = null),
		e = e || this.$
		var a = this
		return e.children("li:not(.tree-action-item)").map(function() {
			var e = t(this),
				o = e.data()
			delete o["zui.droppable"]
			var n = e.children("ul")
			return n.length && (o.children = a.toData(n)),
			t.isFunction(i) ? i(o, e) : o
		}).get()
	},
	n.prototype.callEvent = function(e, i) {
		var a
		return t.isFunction(this.options[e]) && (a = this.options[e](i, this)),
		this.$.trigger(t.Event(e + "." + this.name, i)),
		a
	},
	t.fn.tree = function(e, i) {
		return this.each(function() {
			var o = t(this),
				s = o.data(a),
				r = "object" == typeof e && e
			s || o.data(a, s = new n(this, r)),
			"string" == typeof e && s[e](i)
		})
	},
	t.fn.tree.Constructor = n,
	t(function() {
		t("[data-ride=\"tree\"]").tree()
	})
} (jQuery),
function(t, e) {
	function i(e, o) {
		if (t.isArray(e)) return void t.each(e,
			function(t, e) {
				i(e, o)
			})
		var n = {}
		n[e] = a[e],
		o ? t.extend(o, n) : t.extend(n)
	}
	var a = t.zui
	a && (i(["uuid", "callEvent", "clientLang", "browser", "messager", "Messager", "showMessager", "closeModal", "ajustModalPosition", "ModalTrigger", "modalTrigger", "store"]), i(["Color", "imgReady", "messager", "Messager", "showMessager", "closeModal", "ajustModalPosition", "ModalTrigger", "modalTrigger", "store"], e))
} (jQuery, window),
function(t, e, i) {
	"use strict"
	function a(t, i, a, o) {
		return e.abs((a - t) * (o - i))
	}
	function o(t, e, i, a, o, n) {
		return t >= i && o >= t && e >= a && n >= e
	}
	function n(t, i, n, s, r, l, d, c) {
		var p = e.max(t, r),
			h = e.max(i, l),
			f = e.min(n, d),
			u = e.min(s, c)
		return o(p, h, t, i, n, s) && o(f, u, t, i, n, s) && o(p, h, r, l, d, c) && o(f, u, r, l, d, c) ? a(p, h, f, u) : 0
	}
	var s = t.zui.Messager ? new t.zui.Messager({
			placement: "top",
			time: 1500,
			close: 0,
			scale: !1,
			fade: !1
		}) : 0,
		r = function(e, i) {
			this.$ = t(e),
			this.options = this.getOptions(i),
			this.draggable = this.$.hasClass("dashboard-draggable") || this.options.draggable,
			this.init()
		}
	r.DEFAULTS = {
		minHeight: 100,
		height: 360,
		shadowType: "normal",
		sensitive: !1,
		circleShadowSize: 100,
		onlyRefreshBody: !0,
		resizable: !0,
		resizeMessage: !1
	},
	r.prototype.getOptions = function(e) {
		return e = t.extend({},
			r.DEFAULTS, this.$.data(), e)
	},
	r.prototype.handleRemoveEvent = function() {
		var e = this.options.afterPanelRemoved,
			a = this.options.panelRemovingTip
		this.$.on("click", ".remove-panel",
			function() {
				var o = t(this).closest(".panel"),
					n = o.data("name") || o.find(".panel-heading").text().replace("\n", "").replace(/(^\s*)|(\s*$)/g, ""),
					s = o.attr("data-id"); (a === i || a === !1 || confirm(a.format(n))) && (o.parent().remove(), e && t.isFunction(e) && e(s))
			})
	},
	r.prototype.handleRefreshEvent = function() {
		var e = this,
			i = this.options.onlyRefreshBody
		this.$.on("click", ".refresh-panel",
			function() {
				var a = t(this).closest(".panel")
				e.refresh(a, i)
			})
	},
	r.prototype.handleDraggable = function() {
		var i = this.$,
			o = this.options,
			s = "circle" === o.shadowType,
			r = o.circleShadowSize,
			l = r / 2,
			d = o.afterOrdered
		this.$.addClass("dashboard-draggable"),
		this.$.on("mousedown", ".panel-actions, .drag-disabled",
			function(t) {
				t.stopPropagation()
			})
		var c
		this.$.on("mousedown", ".panel-heading, .panel-drag-handler",
			function(p) {
				function h(i) {
					var s = E.data("mouseOffset")
					g = i.pageX - s.x,
					v = i.pageY - s.y,
					m = g + L,
					b = v + O,
					E.css({
						left: g,
						top: v
					}),
					T.find(".dragging-in").removeClass("dragging-in"),
					C = !1,
					w = null
					var r, l = 0
					T.children(":not(.dragging-col)").each(function() {
						var s = t(this)
						if (s.hasClass("dragging-col-holder")) return C = !o.sensitive || 100 > l,
							!0
						var d = s.children(".panel"),
							c = d.offset(),
							p = d.width(),
							h = d.height(),
							f = c.left,
							u = c.top
						if (o.sensitive) f -= S.left,
							u -= S.top,
							r = n(g, v, m, b, f, u, f + p, u + h),
							r > 100 && r > l && r > e.min(a(g, v, m, b), a(f, u, f + p, u + h)) / 3 && (l = r, w = s)
						else {
							var y = i.pageX,
								x = i.pageY
							if (y > f && x > u && f + p > y && u + h > x) return w = s,
								!1
						}
					}),
					w && (y && clearTimeout(y), x = w, y = setTimeout(f, 50)),
					i.preventDefault()
				}
				function f() {
					x && (x.addClass("dragging-in"), C ? D.insertAfter(x) : D.insertBefore(x), i.addClass("dashboard-holding"), y = null, x = null)
				}
				function u(e) {
					y && clearTimeout(y)
					var a = $.data("order")
					$.parent().insertAfter(D)
					var o = 0,
						n = {}
					T.children(":not(.dragging-col-holder)").each(function() {
						var e = t(this).children(".panel")
						e.data("order", ++o),
						n[e.data("id") || e.attr("id")] = o,
						e.parent().attr("data-order", o)
					}),
					a != n[$.data("id") || $.attr("id")] && (T.data("orders", n), d && t.isFunction(d) && d(n)),
					E.remove(),
					i.removeClass("dashboard-holding"),
					i.find(".dragging-col").removeClass("dragging-col"),
					i.find(".panel-dragging").removeClass("panel-dragging"),
					T.find(".dragging-in").removeClass("dragging-in"),
					i.removeClass("dashboard-dragging"),
					t(document).unbind("mousemove", h).unbind("mouseup", u),
					e.preventDefault()
				}
				var g, v, m, b, y, w, C, x, $ = t(this).closest(".panel"),
					k = $.parent(),
					T = $.closest(".row"),
					E = $.clone().addClass("panel-dragging-shadow"),
					z = $.offset(),
					S = i.offset(),
					D = T.find(".dragging-col-holder"),
					L = $.width(),
					O = $.height()
				D.length || (D = t("<div class=\"dragging-col-holder\"><div class=\"panel\"></div></div>").removeClass("dragging-col").appendTo(T)),
				c && D.removeClass(c),
				D.addClass(c = k.attr("class")),
				D.insertBefore(k).find(".panel").replaceWith($.clone().addClass("panel-dragging panel-dragging-holder")),
				i.addClass("dashboard-dragging"),
				$.addClass("panel-dragging").parent().addClass("dragging-col"),
				E.css({
					left: z.left - S.left,
					top: z.top - S.top,
					width: L,
					height: O
				}).appendTo(i).data("mouseOffset", {
					x: p.pageX - z.left + S.left,
					y: p.pageY - z.top + S.top
				}),
				s && (E.addClass("circle"), setTimeout(function() {
					E.css({
						left: p.pageX - S.left - l,
						top: p.pageY - S.top - l,
						width: r,
						height: r
					}).data("mouseOffset", {
						x: S.left + l,
						y: S.top + l
					})
				},
				100)),
				t(document).bind("mousemove", h).bind("mouseup", u),
				p.preventDefault()
			})
	},
	r.prototype.handlePanelPadding = function() {
		this.$.find(".panel-body > table, .panel-body > .list-group").parent().addClass("no-padding")
	},
	r.prototype.updatePanelHeight = function() {
		var i = this,
			a = i.options.height,
			o = i.options.minHeight,
			n = {}
		return i.id && t.zui.store && (n = t.zui.store.pageGet("zui.dashboard." + i.id + ".sizeConfig", n)),
		this.$.children(".row").each(function() {
			var i = t(this),
				s = i.width(),
				r = [],
				l = [],
				d = 0
			i.children(":not(.dragging-col-holder)").each(function() {
				var e = t(this),
					i = e.width()
				d + i > s ? (l.length && r.push(l), l = [e], d = i) : (d += i, l.push(e))
			}),
			l.length && r.push(l),
			r.length && t.each(r,
				function(i) {
					l = r[i]
					var s = 0,
						d = [],
						c = !1
					t.each(l,
						function(t) {
							var a = l[t].data("row-id", i),
								r = a.children(".panel:first")
							if (d.push(r), !c) {
								var p = r.data("newHeight")
								if (p) r.data("newHeight", null).data("height", p),
									s = e.max(o, p),
									c = !0
								else {
									var h = r.data("height") || n[r.data("id")]
									h && (s = e.max(s, h))
								}
							}
						}),
					s || (s = a),
					t.each(d,
						function(t) {
							var e = d[t].css("height", s)
							n[e.data("id")] = e.data("height")
						})
				})
		}),
		i.id && t.zui.store && t.zui.store.pageSet("zui.dashboard." + i.id + ".sizeConfig", n),
		n
	},
	r.prototype.handleResizeEvent = function() {
		var i = this,
			a = i.options,
			o = a.resizable,
			n = a.onResize,
			r = a.minHeight,
			l = a.resizeMessage,
			d = l && s
		i.$.on("mousedown", ".resize-handle",
			function(a) {
				var o = t(this),
					l = o.hasClass("resize-vertical"),
					c = o.parent().addClass("resizing").toggleClass("resizing-v", l).toggleClass("resizing-h", !l),
					p = c.closest(".row"),
					h = c.children(".panel"),
					f = a.pageX,
					u = a.pageY,
					g = c.width(),
					v = h.height(),
					m = p.width(),
					b = e.round(12 * g / m),
					y = b
				l || c.attr("data-grid", b)
				var w = function(t) {
						if (l) h.css("height", e.max(r, v + (t.pageY - u)))
						else {
							var i = t.pageX,
								a = e.max(1, e.min(12, e.round(12 * (g + (i - f)) / m)))
							y != a && (c.attr("data-grid", a).css("width", 100 * a / 12 + "%"), d && s[s.isShow ? "update": "show"](e.round(100 * a / 12) + "% (" + a + "/12)"), y = a)
						}
						t.preventDefault(),
						t.stopPropagation()
					},
					C = function(a) {
						if (c.removeClass("resizing resizing-v resizing-h"), l) {
							var o = e.max(r, v + (a.pageY - u))
							if (o !== v) {
								if (t.isFunction(n)) {
									var p = function() {
											h.css("height", v).data("height", v),
											i.updatePanelHeight()
										},
										f = n({
											type: "vertical",
											id: h.data("id"),
											element: c,
											old: v,
											height: o,
											revert: p
										})
									f === !1 && p()
								}
								h.css("height", o).data("newHeight", o)
							}
						} else {
							var g = c.attr("data-grid")
							if (b != g && t.isFunction(n)) {
								var p = function() {
										c.attr("data-grid", b).css("width", null),
										i.updatePanelHeight()
									},
									f = n({
										type: "horizontal",
										id: h.data("id"),
										element: c,
										old: b,
										grid: g,
										revert: p
									})
								f === !1 ? p() : f !== !0 && d && s.show(e.round(100 * g / 12) + "% (" + g + "/12)")
							}
						}
						i.updatePanelHeight(),
						t("body").off("mousemove.resize", w).off("mouseup.resize", C),
						a.preventDefault(),
						a.stopPropagation()
					}
				t("body").on("mousemove.resize", w).on("mouseup.resize", C),
				a.preventDefault(),
				a.stopPropagation()
			})
		var c = i.$.children(".row").children(":not(.dragging-col-holder)"); (o === !0 || "horizontal" === o) && c.append("<div class=\"resize-handle resize-horizontal\"><i class=\"icon icon-resize-h\"></i></div>"),
		(o === !0 || "vertical" === o) && c.append("<div class=\"resize-handle resize-vertical\"><i class=\"icon icon-resize-v\"></i></div>")
	},
	r.prototype.refresh = function(e, a) {
		a === i && (a = this.options.onlyRefreshBody)
		var o = this.options.afterRefresh
		e = t(e)
		var n = e.data("url")
		n && (e.addClass("panel-loading").find(".panel-heading .icon-refresh,.panel-heading .icon-repeat").addClass("icon-spin"), t.ajax({
			url: n,
			dataType: "html"
		}).done(function(i) {
			var n = t(i)
			n.hasClass("panel") ? e.empty().append(n.children()) : a ? e.find(".panel-body").empty().html(i) : e.html(i),
			t.isFunction(o) && o.call(this, {
				result: !0,
				data: i,
				$panel: e
			})
		}).fail(function() {
			e.addClass("panel-error"),
			t.isFunction(o) && o.call(this, {
				result: !1,
				$panel: e
			})
		}).always(function() {
			e.removeClass("panel-loading"),
			e.find(".panel-heading .icon-refresh,.panel-heading .icon-repeat").removeClass("icon-spin")
		}))
	},
	r.prototype.init = function() {
		var e = this.options,
			a = this
		if (a.id = e.id ? e.id: a.$.attr("id"), e.data) {
			var o = t("<div class=\"row\"/>")
			t.each(e.data,
				function(e, a) {
					var n = t("<div class=\"col-sm-" + (a.colWidth || 4) + "\"/>", a.colAttrs),
						s = t("<div class=\"panel\" data-id=\"" + (a.id || t.zui.uuid()) + "\"/>", a.panelAttrs)
					if (a.height !== i && s.data("height", a.height), a.content !== i) if (t.isFunction(a.content)) {
						var r = a.content(s)
						r !== !0 && s.html(r)
					} else s.html(a.content)
					o.append(n.append(s.data("url", a.url)))
				}),
			a.$.append(o)
		}
		a.updatePanelHeight(),
		a.handlePanelPadding(),
		a.handleRemoveEvent(),
		a.handleRefreshEvent(),
		e.resizable && a.handleResizeEvent(),
		a.draggable && a.handleDraggable()
		var n = 0
		a.$.find(".panel").each(function() {
			var i = t(this)
			i.data("order", ++n),
			i.attr("id") || i.attr("id", "panel" + n),
			i.attr("data-id") || i.attr("data-id", n),
			a.refresh(i, e.onlyRefreshBody)
		}),
		a.$.find("[data-toggle=\"tooltip\"]").tooltip({
			container: "body"
		})
	},
	t.fn.dashboard = function(e) {
		return this.each(function() {
			var i = t(this),
				a = i.data("zui.dashboard"),
				o = "object" == typeof e && e
			a || i.data("zui.dashboard", a = new r(this, o)),
			"string" == typeof e && a[e]()
		})
	},
	t.fn.dashboard.Constructor = r
} (jQuery, Math, void 0),
function(t) {
	"use strict"
	var e = "zui.colorPicker",
		i = "<div class=\"colorpicker\"><button type=\"button\" class=\"btn dropdown-toggle\" data-toggle=\"dropdown\"><span class=\"cp-title\"></span><i class=\"ic\"></i></button><ul class=\"dropdown-menu clearfix\"></ul></div>",
		a = {
			zh_cn: {
				errorTip: "不是有效的颜色值"
			},
			zh_tw: {
				errorTip: "不是有效的顏色值"
			},
			en: {
				errorTip: "Not a valid color value"
			}
		},
		o = function(i, a) {
			this.name = e,
			this.$ = t(i),
			this.getOptions(a),
			this.init()
		}
	o.DEFAULTS = {
		colors: ["#00BCD4", "#388E3C", "#3280fc", "#3F51B5", "#9C27B0", "#795548", "#F57C00", "#F44336", "#E91E63"],
		pullMenuRight: !0,
		wrapper: "btn-wrapper",
		tileSize: 30,
		lineCount: 5,
		optional: !0,
		tooltip: "top",
		icon: "caret-down"
	},
	o.prototype.init = function() {
		var e = this.options,
			a = this
		this.$picker = t(i).addClass(e.wrapper),
		this.$picker.find(".cp-title").toggle(void 0 !== e.title).text(e.title),
		this.$menu = this.$picker.find(".dropdown-menu").toggleClass("pull-right", e.pullMenuRight),
		this.$btn = this.$picker.find(".btn.dropdown-toggle"),
		this.$btn.find(".ic").addClass("icon-" + e.icon),
		e.btnTip && this.$picker.attr("data-toggle", "tooltip").tooltip({
			title: e.btnTip,
			placement: e.tooltip,
			container: "body"
		}),
		this.$.attr("data-provide", null).after(this.$picker),
		this.colors = {},
		t.each(this.options.colors,
			function(e, i) {
				if (t.zui.Color.isColor(i)) {
					var o = new t.zui.Color(i)
					a.colors[o.toCssStr()] = o
				}
			}),
		this.updateColors()
		var a = this
		this.$picker.on("click", ".cp-tile",
			function() {
				a.setValue(t(this).data("color"))
			})
		var o = this.$,
			n = function() {
				var i = o.val(),
					n = t.zui.Color.isColor(i)
				o.parent().toggleClass("has-error", !(n || e.optional && "" === i)),
				n ? a.setValue(i, !0) : e.optional && "" === i ? o.tooltip("hide") : o.is(":focus") || o.tooltip("show", e.errorTip)
			}
		o.is("input:not([type=hidden])") ? (e.tooltip && o.attr("data-toggle", "tooltip").tooltip({
			trigger: "manual",
			placement: e.tooltip,
			tipClass: "tooltip-danger",
			container: "body"
		}), o.on("keyup paste input change", n)) : o.appendTo(this.$picker),
		n()
	},
	o.prototype.addColor = function(e) {
		var i = e.toCssStr(),
			a = this.options
		this.colors[i] || (this.colors[i] = e)
		var o = t("<a href=\"###\" class=\"cp-tile\"></a>", {
			titile: e
		}).data("color", e).css({
			color: e.contrast().toCssStr(),
			background: i,
			"border-color": e.luma() > .43 ? "#ccc": "transparent"
		}).attr("data-color", i)
		this.$menu.append(t("<li/>").css({
			width: a.tileSize,
			height: a.tileSize
		}).append(o)),
		a.optional && this.$menu.find(".cp-tile.empty").parent().detach().appendTo(this.$menu)
	},
	o.prototype.updateColors = function(e) {
		var i = (this.$picker, this.$menu.empty()),
			a = this.options,
			e = e || this.colors,
			o = this,
			n = 0
		if (t.each(e,
			function(t, e) {
				o.addColor(e),
				n++
			}), a.optional) {
			var s = t("<li><a class=\"cp-tile empty\" href=\"###\"></a></li>").css({
				width: a.tileSize,
				height: a.tileSize
			})
			this.$menu.append(s),
			n++
		}
		i.css("width", Math.min(n, a.lineCount) * a.tileSize + 6)
	},
	o.prototype.setValue = function(e, i) {
		var a = this.options
		this.$menu.find(".cp-tile.active").removeClass("active")
		var o = ""
		if (e) {
			var n = new t.zui.Color(e)
			o = n.toCssStr().toLowerCase(),
			this.$btn.css({
				background: o,
				color: n.contrast().toCssStr(),
				borderColor: n.luma() > .43 ? "#ccc": o
			}),
			this.colors[o] || this.addColor(n),
			i || this.$.val().toLowerCase() === o || this.$.val(o).trigger("change"),
			this.$menu.find(".cp-tile[data-color=\"" + o + "\"]").addClass("active"),
			this.$.tooltip("hide"),
			this.$.trigger("colorchange", n)
		} else this.$btn.attr("style", null),
			i || "" === this.$.val() || this.$.val(o).trigger("change"),
			a.optional && this.$.tooltip("hide"),
			this.$menu.find(".cp-tile.empty").addClass("active"),
			this.$.trigger("colorchange", null)
		a.updateBorder && t(a.updateBorder).css("border-color", o),
		a.updateBackground && t(a.updateBackground).css("background-color", o),
		a.updateColor && t(a.updateText).css("color", o),
		a.updateText && t(a.updateText).text(o)
	},
	o.prototype.getOptions = function(e) {
		var i = t.extend({},
			o.DEFAULTS, this.$.data(), e)
		"string" == typeof i.colors && (i.colors = i.colors.split(","))
		var n = (i.lang || t.zui.clientLang()).toLowerCase()
		i.errorTip || (i.errorTip = a[n].errorTip),
		t.fn.tooltip || (i.btnTip = !1),
		this.options = i
	},
	t.fn.colorPicker = function(i) {
		return this.each(function() {
			var a = t(this),
				n = a.data(e),
				s = "object" == typeof i && i
			n || a.data(e, n = new o(this, s)),
			"string" == typeof i && n[i]()
		})
	},
	t.fn.colorPicker.Constructor = o,
	t(function() {
		t("[data-provide=\"colorpicker\"]").colorPicker()
	})
} (jQuery),
function(t, e, i) {
	"use strict"
	var a = 0,
		o = "<div class=\"messager messager-{type} {placement}\" style=\"display: none\"><div class=\"messager-content\"></div><div class=\"messager-actions\"></div></div>",
		n = {
			type: "default",
			placement: "top",
			time: 4e3,
			parent: "body",
			icon: null,
			close: !0,
			fade: !0,
			scale: !0
		},
		s = {},
		r = function(e, r) {
			t.isPlainObject(e) && (r = e, e = r.message)
			var l = this
			r = l.options = t.extend({},
				n, r),
			l.id = r.id || a++
			var d = s[l.id]
			d && d.destroy(),
			s[l.id] = l,
			l.message = (r.icon ? "<i class=\"icon-" + r.icon + " icon\"></i> ": "") + e,
			l.$ = t(o.format(r)).toggleClass("fade", r.fade).toggleClass("scale", r.scale).attr("id", "messager-" + l.id),
			r.cssClass && l.$.addClass(r.cssClass)
			var c = !1,
				p = l.$.find(".messager-actions"),
				h = function(e) {
					var a = t("<button type=\"button\" class=\"action action-" + e.name + "\"/>")
					"close" === e.name && a.addClass("close"),
					e.html !== i && a.html(e.html),
					e.icon !== i && a.append("<i class=\"action-icon icon-" + e.icon + "\"/>"),
					e.text !== i && a.append("<span class=\"action-text\">" + e.text + "</span>"),
					e.tooltip !== i && a.attr("title", e.tooltip).tooltip(),
					a.data("action", e),
					p.append(a)
				}
			r.actions && t.each(r.actions,
				function(t, e) {
					e.name === i && (e.name = t),
					"close" == e.name && (c = !0),
					h(e)
				}),
			!c && r.close && h({
				name: "close",
				html: "&times;"
			}),
			l.$.on("click", ".action",
				function(e) {
					var i, a = t(this).data("action")
					r.onAction && (i = r.onAction.call(this, a.name, a, l), i === !1) || t.isFunction(a.action) && (i = a.action.call(this, l), i === !1) || (l.hide(), e.stopPropagation())
				}),
			l.$.on("click",
				function(t) {
					r.onAction && (result = r.onAction.call(this, "content", null, l), result === !0 && l.hide())
				})
			var f = l.$.find(".messager-content").html(l.message)
			r.contentClass && f.addClass(r.cssClass),
			l.$.data("zui.messager", l),
			r.show && l.message !== i && l.show()
		}
	r.prototype.update = function(e, i) {
		var a = this,
			o = a.options
		a.$.removeClass("messager-" + o.type),
		i && (o = t.extend(o, i)),
		a.$.addClass("messager-" + o.type),
		e && (a.message = (o.icon ? "<i class=\"icon-" + o.icon + " icon\"></i> ": "") + e, a.$.find(".messager-content").html(a.message))
	},
	r.prototype.show = function(a, o) {
		var n = this,
			s = this.options
		if (t.isFunction(a)) {
			var r = o
			o = a,
			r !== i && (a = r)
		}
		if (n.isShow) return void n.hide(function() {
			n.show(a, o)
		})
		n.hiding && (clearTimeout(n.hiding), n.hiding = null),
		n.update(a)
		var l = s.placement,
			d = t(s.parent),
			c = d.children(".messagers-holder." + l)
		if (c.length || (c = t("<div/>").attr("class", "messagers-holder " + l).appendTo(d)), c.append(n.$), "center" === l) {
			var p = t(e).height() - c.height()
			c.css("top", Math.max( - p, p / 2))
		}
		return n.$.show().addClass("in"),
		s.time && (n.hiding = setTimeout(function() {
			n.hide()
		},
		s.time)),
		n.isShow = !0,
		o && o(),
		n
	},
	r.prototype.hide = function(t, e) {
		t === !0 && (e = !0, t = null)
		var i = this
		if (i.$.hasClass("in")) {
			i.$.removeClass("in")
			var a = function() {
				var e = i.$.parent()
				i.$.detach(),
				e.children().length || e.remove(),
				t && t(!0)
			}
			e ? a() : setTimeout(a, 200)
		} else t && t(!1)
		i.isShow = !1
	},
	r.prototype.destroy = function() {
		var t = this
		t.hide(function() {
			t.$.remove(),
			t.$ = null
		},
		!0),
		delete s[t.id]
	},
	r.all = s
	var l = function() {
			t(".messager").each(function() {
				var e = t(this).data("zui.messager")
				e && e.hide && e.hide(!0)
			})
		},
		d = function(e, a) {
			"string" == typeof a && (a = {
				type: a
			}),
			a = t.extend({},
				a),
			a.id === i && l()
			var o = s[a.id] || new r(e, a)
			return o.show(),
			o
		},
		c = function(t) {
			return "string" == typeof t ? {
				placement: t
			}: t
		},
		p = {
			show: d,
			hide: l
		}
	t.each({
		primary: 0,
		success: "ok-sign",
		info: "info-sign",
		warning: "warning-sign",
		danger: "exclamation-sign",
		important: 0,
		special: 0
	},
	function(e, i) {
		p[e] = function(a, o) {
			return d(a, t.extend({
				type: e,
				icon: i || null
			},
			c(o)))
		}
	}),
	t.zui({
		Messager: r,
		showMessager: d,
		messager: p
	})
} (jQuery, window, void 0),
function(t) {
	"use strict"
	var e = "zui.selectable",
		i = function(i, a) {
			this.name = e,
			this.$ = t(i),
			this.id = t.zui.uuid(),
			this.selectOrder = 1,
			this.selections = {},
			this.getOptions(a),
			this._init()
		},
		a = function(t, e, i) {
			return t >= i.left && t <= i.left + i.width && e >= i.top && e <= i.top + i.height
		},
		o = function(t, e) {
			var i = Math.max(t.left, e.left),
				o = Math.max(t.top, e.top),
				n = Math.min(t.left + t.width, e.left + e.width),
				s = Math.min(t.top + t.height, e.top + e.height)
			return a(i, o, t) && a(n, s, t) && a(i, o, e) && a(n, s, e)
		}
	i.DEFAULTS = {
		selector: "li,tr,div",
		trigger: "",
		selectClass: "active",
		rangeStyle: {
			border: "1px solid " + (t.zui.colorset ? t.zui.colorset.primary: "#3280fc"),
			backgroundColor: t.zui.colorset ? new t.zui.Color(t.zui.colorset.primary).fade(20).toCssStr() : "rgba(50, 128, 252, 0.2)"
		},
		clickBehavior: "toggle",
		ignoreVal: 3
	},
	i.prototype.getOptions = function(e) {
		this.options = t.extend({},
			i.DEFAULTS, this.$.data(), e)
	},
	i.prototype.select = function(t) {
		this.toggle(t, !0)
	},
	i.prototype.unselect = function(t) {
		this.toggle(t, !1)
	},
	i.prototype.toggle = function(e, i, a) {
		var o, n, s = this.options.selector,
			r = this
		if (void 0 === e) return void this.$.find(s).each(function() {
			r.toggle(this, i)
		})
		if ("object" == typeof e ? (o = t(e).closest(s), n = o.data("id")) : (n = e, o = r.$.find(".slectable-item[data-id=\"" + n + "\"]")), o && o.length) {
			if (n || (n = t.zui.uuid(), o.attr("data-id", n)), (void 0 === i || null === i) && (i = !r.selections[n]), !!i != !!r.selections[n]) {
				var l
				t.isFunction(a) && (l = a(i)),
				l !== !0 && (r.selections[n] = i ? r.selectOrder++:!1, r.callEvent(i ? "select": "unselect", {
					id: n,
					selections: r.selections,
					target: o,
					selected: r.getSelectedArray()
				},
				r))
			}
			o.toggleClass(r.options.selectClass, i)
		}
	},
	i.prototype.getSelectedArray = function() {
		var e = []
		return t.each(this.selections,
			function(t, i) {
				i && e.push(t)
			}),
		e
	},
	i.prototype._init = function() {
		var e, i, a, n, s, r, l, d = this.options,
			c = this,
			p = d.ignoreVal,
			h = !0,
			f = "." + this.name + "." + this.id,
			u = t.isFunction(d.checkFunc) ? d.checkFunc: null,
			g = t.isFunction(d.rangeFunc) ? d.rangeFunc: null,
			v = function() {
				n && c.$children.each(function() {
					var e = t(this),
						i = e.offset()
					i.width = e.outerWidth(),
					i.height = e.outerHeight()
					var a = g ? g.call(this, n, i) : o(n, i)
					if (u) {
						var s = u.call(c, {
							intersect: a,
							target: e,
							range: n,
							targetRange: i
						})
						s === !0 ? c.select(e) : s === !1 && c.unselect(e)
					} else a ? c.select(e) : c.multiKey || c.unselect(e)
				})
			},
			m = function(o) {
				s = o.pageX,
				r = o.pageY,
				n = {
					width: Math.abs(s - e),
					height: Math.abs(r - i),
					left: s > e ? e: s,
					top: r > i ? i: r
				},
				h && n.width < p && n.height < p || (a || (a = t(".selectable-range[data-id=\"" + c.id + "\"]"), a.length || (a = t("<div class=\"selectable-range\" data-id=\"" + c.id + "\"></div>").css(t.extend({
					zIndex: 1060,
					position: "absolute",
					top: e,
					left: i,
					pointerEvents: "none"
				},
				c.options.rangeStyle)).appendTo(t("body")))), a.css(n), clearTimeout(l), l = setTimeout(v, 10), h = !1)
			},
			b = function(e) {
				t(document).off(f),
				a && a.remove(),
				h || n && (clearTimeout(l), v(), n = null),
				c.callEvent("finish", {
					selections: c.selections,
					selected: c.getSelectedArray()
				}),
				e.preventDefault()
			},
			y = function(o) {
				if (!c.altKey && 3 !== o.which && c.callEvent("start", o) !== !1) {
					var n = c.$children = c.$.find(d.selector)
					n.addClass("slectable-item")
					var s = c.multiKey ? "multi": d.clickBehavior
					if ("multi" === s ? c.toggle(o.target) : "single" === s ? (c.unselect(), c.select(o.target)) : "toggle" === s && c.toggle(o.target, null,
						function(t) {
							c.unselect()
						}), c.callEvent("startDrag", o) === !1) return void c.callEvent("finish", {
						selections: c.selections,
						selected: c.getSelectedArray()
					})
					e = o.pageX,
					i = o.pageY,
					a = null,
					h = !0,
					t(document).on("mousemove" + f, m).on("mouseup" + f, b),
					o.preventDefault()
				}
			},
			w = d.container && "default" !== d.container ? t(d.container) : this.$
		d.trigger ? w.on("mousedown" + f, d.trigger, y) : w.on("mousedown" + f, y),
		t(document).on("keydown",
			function(t) {
				var e = t.keyCode
				17 === e || 91 == e ? c.multiKey = e: 18 === e && (c.altKey = !0)
			}).on("keyup",
			function(t) {
				c.multiKey = !1,
				c.altKey = !1
			})
	},
	i.prototype.callEvent = function(e, i) {
		var a = t.Event(e + "." + this.name)
		this.$.trigger(a, i)
		var o = a.result,
			n = this.options[e]
		return t.isFunction(n) && (o = n.apply(this, t.isArray(i) ? i: [i])),
		o
	},
	t.fn.selectable = function(a) {
		return this.each(function() {
			var o = t(this),
				n = o.data(e),
				s = "object" == typeof a && a
			n || o.data(e, n = new i(this, s)),
			"string" == typeof a && n[a]()
		})
	},
	t.fn.selectable.Constructor = i,
	t(function() {
		t("[data-ride=\"selectable\"]").selectable()
	})
} (jQuery),
function(t) {
	"use strict"
	var e = "zui.datatable",
		i = t.zui.store,
		a = function(i, a) {
			this.name = e,
			this.$ = t(i),
			this.isTable = "TABLE" === this.$[0].tagName,
			this.firstShow = !0,
			this.isTable ? (this.$table = this.$, this.id = "datatable-" + (this.$.attr("id") || t.zui.uuid())) : (this.$datatable = this.$.addClass("datatable"), this.$.attr("id") ? this.id = this.$.attr("id") : (this.id = "datatable-" + t.zui.uuid(), this.$.attr("id", this.id))),
			this.getOptions(a),
			this.load(),
			this.callEvent("ready")
		}
	a.DEFAULTS = {
		checkable: !1,
		checkByClickRow: !0,
		checkedClass: "active",
		checkboxName: null,
		selectable: !0,
		sortable: !1,
		storage: !0,
		fixedHeader: !1,
		fixedHeaderOffset: 0,
		fixedLeftWidth: "30%",
		fixedRightWidth: "30%",
		flexHeadDrag: !0,
		scrollPos: "in",
		rowHover: !0,
		colHover: !0,
		hoverClass: "hover",
		colHoverClass: "col-hover",
		mergeRows: !1,
		minColWidth: 20,
		minFixedLeftWidth: 200,
		minFixedRightWidth: 200,
		minFlexAreaWidth: 200
	},
	a.prototype.getOptions = function(e) {
		var i = this.$
		e = t.extend({},
			a.DEFAULTS, this.$.data(), e),
		e.tableClass = e.tableClass || "",
		e.tableClass = " " + e.tableClass + " table-datatable",
		t.each(["bordered", "condensed", "striped", "condensed", "fixed"],
			function(t, a) {
				a = "table-" + a,
				i.hasClass(a) && (e.tableClass += " " + a)
			}),
		(i.hasClass("table-hover") || e.rowHover) && (e.tableClass += " table-hover"),
		e.checkable && t.fn.selectable || (e.selectable = !1),
		this.options = e
	},
	a.prototype.load = function(i) {
		var a, o = this.options
		if (t.isFunction(i)) i = i(this.data, this),
			i.keepSort = !0
		else if (t.isPlainObject(i)) this.data = i
		else if ("string" == typeof i) {
			var n = t(i)
			n.length && (this.$table = n.first(), this.$table.data(e, this), this.isTable = !0),
			i = null
		} else i = o.data
		if (!i) {
			if (!this.isTable) throw new Error("No data avaliable!")
			i = {
				cols: [],
				rows: []
			},
			a = i.cols
			var s, r, l, d, c, p, h = i.rows,
				f = this.$table
			f.find("thead > tr:first").children("th").each(function() {
				r = t(this),
				a.push(t.extend({
					text: r.html(),
					flex: r.hasClass("flex-col"),
					width: "auto",
					cssClass: r.attr("class"),
					css: r.attr("style"),
					type: "string",
					ignore: r.hasClass("ignore"),
					sort: !r.hasClass("sort-disabled"),
					mergeRows: r.attr("merge-rows")
				},
				r.data()))
			}),
			f.find("tbody > tr").each(function() {
				l = t(this),
				c = t.extend({
					data: [],
					checked: !1,
					cssClass: l.attr("class"),
					css: l.attr("style"),
					id: l.attr("id")
				},
				l.data()),
				l.children("td").each(function() {
					if (d = t(this), p = d.attr("colspan") || 1, c.data.push(t.extend({
						cssClass: d.attr("class"),
						css: d.attr("style"),
						text: d.html(),
						colSpan: p,
						title: d.attr("title")
					},
					d.data())), p > 1) for (s = 1; p > s; s++) c.data.push({
						empty: !0
					})
				}),
				h.push(c)
			})
			var u = f.find("tfoot")
			u.length && (i.footer = t("<table class=\"table" + o.tableClass + "\"></table>").append(u))
		}
		i.flexStart = -1,
		i.flexEnd = -1,
		a = i.cols,
		i.colsLength = a.length
		for (var s = 0; s < i.colsLength; ++s) {
			var g = a[s]
			g.flex && (i.flexStart < 0 && (i.flexStart = s), i.flexEnd = s)
		}
		0 === i.flexStart && i.flexEnd === i.colsLength && (i.flexStart = -1, i.flexEnd = -1),
		i.flexArea = i.flexStart >= 0,
		i.fixedRight = i.flexEnd >= 0 && i.flexEnd < i.colsLength - 1,
		i.fixedLeft = i.flexStart > 0,
		i.flexStart < 0 && i.flexEnd < 0 && (i.fixedLeft = !0, i.flexStart = i.colsLength, i.flexEnd = i.colsLength),
		this.data = i,
		this.callEvent("afterLoad", {
			data: i
		}),
		this.render()
	},
	a.prototype.render = function() {
		var i, a, o, n, s = this,
			r = s.$datatable || (s.isTable ? t("<div class=\"datatable\" id=\"" + s.id + "\"/>") : s.$datatable),
			l = s.options,
			d = s.data,
			c = s.data.cols,
			p = s.data.rows,
			h = l.checkable,
			f = "<div class=\"datatable-rows-span datatable-span\"><div class=\"datatable-wrapper\"><table class=\"table\"></table></div></div>",
			u = "<div class=\"datatable-head-span datatable-span\"><div class=\"datatable-wrapper\"><table class=\"table\"><thead></thead></table></div></div>"
		r.children(".datatable-head, .datatable-rows, .scroll-wrapper").remove(),
		r.toggleClass("sortable", l.sortable)
		var g, v, m, b = t("<div class=\"datatable-head\"/>")
		for (i = t("<tr/>"), o = t("<tr/>"), n = t("<tr/>"), a = 0; a < c.length; a++) m = c[a],
			g = a < d.flexStart ? i: a >= d.flexStart && a <= d.flexEnd ? n: o,
			0 === a && h && g.append("<th data-index=\"check\" class=\"check-all check-btn\"><i class=\"icon-check-empty\"></i></th>"),
			m.ignore || (v = t("<th/>"), v.toggleClass("sort-down", "down" === m.sort).toggleClass("sort-up", "up" === m.sort).toggleClass("sort-disabled", m.sort === !1), v.addClass(m.cssClass).addClass(m.colClass).html(m.text).attr({
				"data-index": a,
				"data-type": m.type,
				style: m.css
			}), g.append(v))
		var y
		d.fixedLeft && (y = t(u), y.addClass("fixed-left").find("table").addClass(l.tableClass).find("thead").append(i), b.append(y)),
		d.flexArea && (y = t(u), y.addClass("flexarea").find(".datatable-wrapper").append("<div class=\"scrolled-shadow scrolled-in-shadow\"></div><div class=\"scrolled-shadow scrolled-out-shadow\"></div>").find("table").addClass(l.tableClass).find("thead").append(n), b.append(y)),
		d.fixedRight && (y = t(u), y.addClass("fixed-right").find("table").addClass(l.tableClass).find("thead").append(o), b.append(y)),
		r.append(b)
		var w, C, x, $, k, T, E, z, S = t("<div class=\"datatable-rows\">"),
			D = p.length
		i = t("<tbody/>"),
		o = t("<tbody/>"),
		n = t("<tbody/>")
		for (var L = 0; D > L; ++L) {
			for (T = p[L], "undefined" == typeof T.id && (T.id = L), T.index = L, w = t("<tr/>"), w.addClass(T.cssClass).toggleClass(l.checkedClass, !!T.checked).attr({
				"data-index": L,
				"data-id": T.id
			}), C = w.clone(), x = w.clone(), z = T.data.length, a = 0; z > a; ++a) E = T.data[a],
				a > 0 && E.empty || (g = a < d.flexStart ? w: a >= d.flexStart && a <= d.flexEnd ? C: x, 0 === a && h && (k = t("<td data-index=\"check\" class=\"check-row check-btn\"><i class=\"icon-check-empty\"></i></td>"), l.checkboxName && k.append("<input class=\"hide\" type=\"checkbox\" name=\"" + l.checkboxName + "\" value=\"" + T.id + "\">"), g.append(k)), c[a].ignore || (t.isPlainObject(E) ? (E.row = L, E.index = a) : E = {
					text: E,
					row: L,
					index: a
				},
					T.data[a] = E, $ = t("<td/>"), $.html(E.text).addClass(E.cssClass).addClass(c[a].colClass).attr("colspan", E.colSpan).attr({
						"data-row": L,
						"data-index": a,
						"data-flex": !1,
						"data-type": c[a].type,
						style: E.css,
						title: E.title || ""
					}), g.append($)))
			i.append(w),
			n.append(C),
			o.append(x)
		}
		var O
		d.fixedLeft && (O = t(f), O.addClass("fixed-left").find("table").addClass(l.tableClass).append(i), S.append(O)),
		d.flexArea && (O = t(f), O.addClass("flexarea").find(".datatable-wrapper").append("<div class=\"scrolled-shadow scrolled-in-shadow\"></div><div class=\"scrolled-shadow scrolled-out-shadow\"></div>").find("table").addClass(l.tableClass).append(n), S.append(O)),
		d.fixedRight && (O = t(f), O.addClass("fixed-right").find("table").addClass(l.tableClass).append(o), S.append(O)),
		r.append(S),
		d.flexArea && r.append("<div class=\"scroll-wrapper\"><div class=\"scroll-slide scroll-pos-" + l.scrollPos + "\"><div class=\"bar\"></div></div></div>")
		var A = r.children(".datatable-footer").detach()
		d.footer ? (r.append(t("<div class=\"datatable-footer\"/>").append(d.footer)), d.footer = null) : A.length && r.append(A),
		s.$datatable = r.data(e, s),
		s.isTable && s.firstShow && (s.$table.attr("data-datatable-id", this.id).hide().after(r), s.firstShow = !1),
		s.bindEvents(),
		s.refreshSize(),
		s.callEvent("render")
	},
	a.prototype.bindEvents = function() {
		var e = this,
			a = this.data,
			o = this.options,
			n = this.$datatable,
			s = e.$dataSpans = n.children(".datatable-head, .datatable-rows").find(".datatable-span"),
			r = e.$rowsSpans = n.children(".datatable-rows").children(".datatable-rows-span"),
			l = e.$headSpans = n.children(".datatable-head").children(".datatable-head-span"),
			d = e.$cells = s.find("td, th"),
			c = e.$dataCells = d.filter("td")
		e.$headCells = d.filter("th")
		var p = e.$rows = e.$rowsSpans.find(".table > tbody > tr")
		if (o.rowHover) {
			var h = o.hoverClass
			r.on("mouseenter", "td",
				function() {
					c.filter("." + h).removeClass(h),
					p.filter("." + h).removeClass(h),
					p.filter("[data-index=\"" + t(this).addClass(h).closest("tr").data("index") + "\"]").addClass(h)
				}).on("mouseleave", "td",
				function() {
					c.filter("." + h).removeClass(h),
					p.filter("." + h).removeClass(h)
				})
		}
		if (o.colHover) {
			var f = o.colHoverClass
			l.on("mouseenter", "th",
				function() {
					d.filter("." + f).removeClass(f),
					d.filter("[data-index=\"" + t(this).data("index") + "\"]").addClass(f)
				}).on("mouseleave", "th",
				function() {
					d.filter("." + f).removeClass(f)
				})
		}
		if (a.flexArea) {
			var u, g, v, m, b, y, w, C = n.find(".scroll-slide"),
				x = n.find(".datatable-span.flexarea"),
				$ = n.find(".datatable-span.fixed-left"),
				k = n.find(".datatable-span.flexarea .table"),
				T = C.children(".bar"),
				E = e.id + "_scrollOffset"
			e.width = n.width(),
			n.resize(function() {
				e.width = n.width()
			})
			var z = function(t, e) {
					b = Math.max(0, Math.min(u - g, t)),
					e || n.addClass("scrolling"),
					T.css("left", b),
					w = 0 - Math.floor((v - u) * b / (u - g)),
					k.css("left", w),
					m = b,
					n.toggleClass("scrolled-in", b > 2).toggleClass("scrolled-out", u - g - 2 > b),
					o.storage && i.pageSet(E, b)
				},
				S = function() {
					u = x.width(),
					C.width(u).css("left", $.width()),
					v = k.width(),
					g = Math.floor(u * u / v),
					T.css("width", g),
					k.css("min-width", u),
					n.toggleClass("show-scroll-slide", v > u),
					y || u === g || (y = !0, z(i.pageGet(E, 0), !0)),
					n.hasClass("size-changing") && z(b, !0)
				}
			x.resize(S),
			o.storage && S()
			var D = {
				move: !1,
				stopPropagation: !0,
				drag: function(t) {
					z(T.position().left + t.smallOffset.x * (t.element.hasClass("bar") ? 1 : -1))
				},
				finish: function() {
					n.removeClass("scrolling")
				}
			}
			t.fn.draggable ? (T.draggable(D), o.flexHeadDrag && n.find(".datatable-head-span.flexarea").draggable(D)) : console.error("DataTable requires draggable.js to improve UI."),
			C.mousedown(function(t) {
				var e = t.pageX - C.offset().left
				z(e - g / 2)
			})
		}
		if (o.checkable) {
			var L, O = e.id + "_checkedStatus",
				A = o.checkedClass,
				P = function() {
					var n = r.first().find(".table > tbody > tr"),
						s = n.filter("." + A)
					o.checkboxName && n.find(".check-row input:checkbox").prop("checked", !1)
					var d = {
						checkedAll: n.length === s.length && s.length > 0,
						checks: s.map(function() {
							return L = t(this).data("id"),
							o.checkboxName && t(this).find(".check-row input:checkbox").prop("checked", !0),
							L
						}).toArray()
					}
					e.checks = d,
					t.each(a.rows,
						function(e, i) {
							i.checked = t.inArray(i.id, d.checks) > -1
						}),
					l.find(".check-all").toggleClass("checked", !!d.checkedAll),
					o.storage && i.pageSet(O, d),
					e.callEvent("checksChanged", {
						checks: d
					})
				},
				F = function(e, i) {
					var a = t(e).closest("tr")
					void 0 === i && (i = !a.hasClass(A)),
					p.filter("[data-index=\"" + a.data("index") + "\"]").toggleClass(A, !!i)
				},
				M = "click.zui.datatable.check"
			if (o.selectable) {
				var j = {
					selector: ".datatable-rows tr",
					trigger: ".datatable-rows",
					start: function(e) {
						var i = t(e.target).closest(".check-row, .check-btn")
						return i.length ? (i.is(".check-row") && (F(i), P()), !1) : void 0
					},
					rangeFunc: function(t, e) {
						return Math.max(t.top, e.top) < Math.min(t.top + t.height, e.top + e.height)
					},
					select: function(t) {
						F(t.target, !0)
					},
					unselect: function(t) {
						F(t.target, !1)
					},
					finish: function(t) {
						P()
					}
				}
				t.isPlainObject(o.selectable) && t.extend(j, o.selectable),
				this.$datatable.selectable(j)
			} else this.$rowsSpans.off(M).on(M + "row", o.checkByClickRow ? "tr": ".check-row",
				function() {
					F(this),
					P()
				})
			if (this.$datatable.off(M).on("click.zui.datatable.check", ".check-all",
				function() {
					p.toggleClass(A, t(this).toggleClass("checked").hasClass("checked")),
					P()
				}).on(M + ".none", ".check-none",
				function() {
					p.toggleClass(A, !1),
					P()
				}).on(M + ".inverse", ".check-inverse",
				function() {
					p.toggleClass(A),
					P()
				}), o.storage) {
				var I = i.pageGet(O)
				I && (l.find(".check-all").toggleClass("checked", I.checkedAll), I.checkedAll ? p.addClass(A) : (p.removeClass(A), t.each(I.checks,
					function(t, e) {
						p.filter("[data-id=\"" + e + "\"]").addClass(A)
					})), I.checks.length && P())
			}
		}
		if (o.fixedHeader) {
			var N, R, H, W = n.children(".datatable-head"),
				_ = o.fixedHeaderOffset || t(".navbar.navbar-fixed-top").height() || 0,
				U = function() {
					N = n.offset().top,
					H = t(window).scrollTop(),
					R = n.height(),
					n.toggleClass("head-fixed", H + _ > N && N + R > H + _),
					n.hasClass("head-fixed") ? W.css({
						width: n.width(),
						top: _
					}) : W.attr("style", "")
				}
			t(window).scroll(U),
			U()
		}
		o.sortable ? (l.on("click", "th:not(.sort-disabled, .check-btn)",
			function() {
				n.hasClass("size-changing") || e.sortTable(t(this))
			}), o.storage && e.sortTable()) : o.mergeRows && this.mergeRows()
	},
	a.prototype.mergeRows = function() {
		for (var e = this.$rowsSpans.find(".table > tbody > tr > td"), i = this.data.cols, a = 0; a < i.length; a++) {
			var o = i[a]
			if (o.mergeRows) {
				var n = e.filter("[data-index=\"" + a + "\"]")
				if (n.length > 1) {
					var s, r
					n.each(function() {
						var e = t(this)
						s && e.html() === s.html() ? (r = s.attr("rowspan") || 1, "number" != typeof r && (r = parseInt(r), isNaN(r) && (r = 1)), s.attr("rowspan", r + 1).css("vertical-align", "middle"), e.remove()) : s = e
					})
				}
			}
		}
	},
	a.prototype.sortTable = function(e) {
		var i = t.zui.store,
			a = this.options,
			o = this.id + "_datatableSorter",
			n = a.storage ? i.pageGet(o) : null
		if (e || (e = n ? this.$headCells.filter("[data-index=\"" + n.index + "\"]").addClass("sort-" + n.type) : this.$headCells.filter(".sort-up, .sort-down").first()), e.length) {
			var s, r, l, d = this.data,
				c = d.cols,
				p = d.rows,
				h = this.$headCells
			s = !e.hasClass("sort-up"),
			d.keepSort && (s = !s),
			d.keepSort = null,
			h.removeClass("sort-up sort-down"),
			e.addClass(s ? "sort-up": "sort-down"),
			l = e.data("index"),
			t.each(c,
				function(t, e) {
					t == l || "up" !== e.sort && "down" !== e.sort ? t == l && (e.sort = s ? "up": "down", r = e.type) : e.sort = !0
				})
			var f, u, g, v = this.$dataCells.filter("[data-index=\"" + l + "\"]")
			p.sort(function(t, e) {
				return t = t.data[l],
				e = e.data[l],
				f = v.filter("[data-row=\"" + t.row + "\"]").text(),
				u = v.filter("[data-row=\"" + e.row + "\"]").text(),
				"number" === r ? (f = parseFloat(f), u = parseFloat(u)) : "date" === r ? (f = Date.parse(f), u = Date.parse(u)) : (f = f.toLowerCase(), u = u.toLowerCase()),
				g = f > u ? 1 : u > f ? -1 : 0,
				s && (g = -1 * g),
				g
			})
			var m, b, y, w = this.$rows,
				C = []
			t.each(p,
				function(e, i) {
					m = w.filter("[data-index=\"" + i.index + "\"]"),
					m.each(function(e) {
						y = t(this),
						b = C[e],
						b ? b.after(y) : y.parent().prepend(y),
						C[e] = y
					})
				}),
			n = {
				index: l,
				type: s ? "up": "down"
			},
			a.storage && i.pageSet(o, n),
			this.callEvent("sort", {
				sorter: n
			})
		}
	},
	a.prototype.refreshSize = function() {
		var e, i = this.$datatable,
			a = this.options,
			o = this.data.rows,
			n = this.data.cols
		i.find(".datatable-span.fixed-left").css("width", a.fixedLeftWidth),
		i.find(".datatable-span.fixed-right").css("width", a.fixedRightWidth)
		var s = function(e) {
				var i, a, o = 0
				return e.css("height", "auto"),
				e.each(function() {
					i = t(this),
					a = i.attr("rowspan"),
					a && 1 != a || (o = Math.max(o, i.outerHeight()))
				}),
				o
			},
			r = this.$dataCells,
			l = this.$cells,
			d = this.$headCells
		for (e = 0; e < n.length; ++e) l.filter("[data-index=\"" + e + "\"]").css("width", n[e].width)
		var c = s(d)
		d.css("min-height", c).css("height", c)
		var p
		for (e = 0; e < o.length; ++e) {
			p = r.filter("[data-row=\"" + e + "\"]")
			var h = s(p)
			p.css("min-height", h).css("height", h)
		}
	},
	a.prototype.callEvent = function(t, e) {
		var i = this.$.callEvent(t + "." + this.name, e, this).result
		return ! (void 0 !== i && !i)
	},
	t.fn.datatable = function(i, o) {
		return this.each(function() {
			var n = t(this),
				s = n.data(e),
				r = "object" == typeof i && i
			s || n.data(e, s = new a(this, r)),
			"string" == typeof i && ("load" !== i || !t.isPlainObject(o) || void 0 !== o.keepSort && null !== o.keepSort || (o.keepSort = !0), s[i](o))
		})
	},
	t.fn.datatable.Constructor = a
} (jQuery)/**
 * Create link. 
 * 
 * @param  string $moduleName 
 * @param  string $methodName 
 * @param  string $vars 
 * @param  string $viewType 
 * @access public
 * @return string
 */
function createLink(moduleName, methodName, vars, viewType, isOnlyBody)
{
	if(!viewType)   viewType   = config.defaultView
	if(!isOnlyBody) isOnlyBody = false
	if(vars)
	{
		vars = vars.split("&")
		for(i = 0; i < vars.length; i ++) vars[i] = vars[i].split("=")
	}
	if(config.requestType != "GET")
	{
		if(config.requestType == "PATH_INFO")  link = config.webRoot + moduleName + config.requestFix + methodName
		if(config.requestType == "PATH_INFO2") link = config.webRoot + "index.php/"  + moduleName + config.requestFix + methodName
		if(vars)
		{
			for(i = 0; i < vars.length; i ++) link += config.requestFix + vars[i][1]
		}
		link += "." + viewType
	}
	else
	{
		link = config.router + "?" + config.moduleVar + "=" + moduleName + "&" + config.methodVar + "=" + methodName + "&" + config.viewVar + "=" + viewType
		if(vars) for(i = 0; i < vars.length; i ++) link += "&" + vars[i][0] + "=" + vars[i][1]
	}

	/* if page has onlybody param then add this param in all link. the param hide header and footer. */
	if((typeof(config.onlybody) != "undefined" && config.onlybody == "yes") || isOnlyBody)
	{
		var onlybody = config.requestType != "GET" ? "?onlybody=yes" : "&onlybody=yes"
		link = link + onlybody
	}
	return link
}

/**
 * Bind Event for searchbox
 * 
 */
function setSearchBox()
{
	$("#typeSelector a").click(function()
	{
		$("#typeSelector li.active").removeClass("active")
		var $this = $(this)
		$this.closest("li").addClass("active")
		$("#searchType").val($this.data("value"))
		$("#searchTypeName").text($this.text())
	})
}

/**
 * Go to the view page of one object.
 * 
 * @access public
 * @return void
 */
function shortcut()
{
	objectType  = $("#searchType").attr("value")
	objectValue = $("#searchQuery").attr("value")
	if(objectType && objectValue)
	{
		location.href=createLink(objectType, "view", "id=" + objectValue)
	}
}

/**
 * Show search drop menu. 
 * 
 * @param  string $objectType product|project
 * @param  int    $objectID 
 * @param  string $module 
 * @param  string $method 
 * @param  string $extra 
 * @access public
 * @return void
 */
function showSearchMenu(objectType, objectID, module, method, extra)
{
	var $toggle = $(objectType == "branch" ? "#currentBranch" : "#currentItem").closest("li").toggleClass("show")
	if(!$toggle.hasClass("show")) return
	var $menu = $toggle.find("#dropMenu")
	var uuid = $.zui.uuid()
	if(!$menu.data("initData"))
	{
		var remoteUrl = createLink(objectType, "ajaxGetDropMenu", "objectID=" + objectID + "&module=" + module + "&method=" + method + "&extra=" + extra)
		$.get(remoteUrl, function(data)
		{
			var $search = $menu.html(data).find("#search").focus()
			var $items = $menu.find("#searchResult ul > li:not(.heading)")
			var items = []
			$items.each(function()
			{
				var $item = $(this).removeClass("active")
				var item = $item.data()
				item.uuid = "searchItem-" + (uuid++)
				item.key = (item.key || "") + $item.text()
				item.tag = (item.tag || "") + "#" + item.id
				$item.attr("id", item.uuid)
				items.push(item)
			})

			var searchItems = function()
			{
				var searchText = $.trim($search.val())
				if(searchText !== null && searchText.length)
				{
					$items.removeClass("show-search")
					$menu.addClass("searching")
					var isTag = searchText.length > 1 && (searchText[0] === ":" || searchText[0] === "@" || searchText[0] === "#")
					$.each(items, function(idx, item)
					{
						if((isTag && item.tag.indexOf(searchText) > -1) || item.key.indexOf(searchText) > -1)
						{
							$("#" + item.uuid).addClass("show-search")
						}
					})
					var $resultItems = $items.filter(".show-search")
					if(!$resultItems.filter(".active").length)
					{
						$resultItems.first().addClass("active")
					}
				}
				else
				{
					$menu.removeClass("searching")
				}
			}
			var searchCallTask = null
			$search.on("change keyup paste input propertychange", function()
			{
				clearTimeout(searchCallTask)
				searchCallTask = setTimeout(searchItems, 200)
			}).on("keydown", function(e)
			{
				var code = e.which
				var isSearching = $menu.hasClass("searching")
				var $resultItems = isSearching ? $items.filter(".show-search") : $items
				var resultLength = $resultItems.length
				if(!resultLength) return
				var $this = $resultItems.filter(".active:first")
				var getIndex = function()
				{
					var thisIdx = -1
					$resultItems.each(function(idx)
					{
						if($(this).is($this))
						{
							thisIdx = idx
							return false
						}
					})
					return thisIdx
				}
				if(code === 38) // up
				{
					$items.removeClass("active")
					if($this.length) $resultItems.eq((getIndex() - 1)%resultLength).addClass("active")
					else $resultItems.last().addClass("active")
				}
				else if(code === 40) // down
				{
					$items.removeClass("active")
					if($this.length) $resultItems.eq((getIndex() + 1)%resultLength).addClass("active")
					else $resultItems.first().addClass("active")
				}
				else if(code === 13) // enter
				{
					if($this.length) window.location.href = $this.children("a").attr("href")
				}
			})
			$menu.on("mouseenter", " ul > li:not(.heading)", function()
			{
				$items.filter(".active").removeClass("active")
				$(this).addClass("active")
			})
		})
		$menu.data("initData", true)
		$(document).on("click", function(){$toggle.removeClass("show")})
		$toggle.on("click", function(e){e.stopPropagation()})
	}
	else
	{
		$menu.find("#search").focus()
	}
}

/**
 * Show or hide more items. 
 * 
 * @access public
 * @return void
 */
function switchMore()
{
	$("#search").width($("#search").width()).focus()
	$("#moreMenu").width($("#defaultMenu").outerWidth())
	$("#searchResult").toggleClass("show-more")
}

/**
 * Switch doc library.
 * 
 * @param  int    $libID 
 * @param  string $module 
 * @param  string $method 
 * @param  string $extra 
 * @access public
 * @return void
 */
function switchDocLib(libID, module, method, extra)
{
	if(module == "doc")
	{
		if(method != "view" && method != "edit")
		{
			link = createLink(module, method, "rootID=" + libID)
		}
		else
		{
			link = createLink("doc", "browse")
		}
	}
	else if(module == "tree")
	{
		link = createLink(module, method, "rootID=" + libID + "&type=" + extra)
	}
	location.href = link
}

/**
 * Set the ping url.
 * 
 * @access public
 * @return void
 */
function setPing()
{
	$("#hiddenwin").attr("src", createLink("misc", "ping"))
}

/**
 * Set required fields, add star class to them.
 * 
 * @access public
 * @return void
 */
function setRequiredFields()
{
	if(config.requiredFields)
	{
		requiredFields = config.requiredFields.split(",")
		for(i = 0; i < requiredFields.length; i++)
		{
			$("#" + requiredFields[i]).closest("td,th").prepend("<div class='required required-wrapper'></div>")
			var colEle = $("#" + requiredFields[i]).closest("[class*=\"col-\"]")
			if(colEle.parent().hasClass("form-group")) colEle.addClass("required")
		}
	}
	$(".required").closest("td,th").next().css("padding-left", "15px")
}

/**
 * Set the help links of forum's items.
 * 
 * @access public
 * @return void
 */
function setHelpLink()
{
	if(!$.cookie("help")) $.cookie("help", "off", {expires:config.cookieLife, path:config.webRoot})
	className = $.cookie("help") == "off" ? "hidden" : ""

	$("form input[id], form select[id], form textarea[id]").each(function()
	{
		if($(this).attr("type") == "hidden" || $(this).attr("type") == "file") return
		currentFieldName = $(this).attr("name") ? $(this).attr("name") : $(this).attr("id")
		if(currentFieldName == "submit" || currentFieldName == "reset") return
		if(currentFieldName.indexOf("[") > 0) currentFieldName = currentFieldName.substr(0, currentFieldName.indexOf("["))
		currentFieldName = currentFieldName.toLowerCase()
		helpLink = createLink("help", "field", "module=" + config.currentModule + "&method=" + config.currentMethod + "&field=" + currentFieldName)
		$(this).after(" <a class=\"helplink " + className + "\" href=" + helpLink + " target=\"_blank\">?</a> ")
	})

	$("a.helplink").modalTrigger({width:600, type:"iframe"})
}

/**
 * Set paceholder. 
 * 
 * @access public
 * @return void
 */
function setPlaceholder()
{
	if(typeof(holders) != "undefined")
	{
		for(var key in holders)
		{
			if($("#" + key).prop("tagName") == "INPUT")
			{
				$("#" + key).attr("placeholder", holders[key])
			}
		}
	}
}

/**
 * Toggle the help links.
 * 
 * @access public
 * @return void
 */
function toggleHelpLink()
{
	$(".helplink").toggle()
	if($.cookie("help") == "off") return $.cookie("help", "on",  {expires:config.cookieLife, path:config.webRoot})
	if($.cookie("help") == "on")  return $.cookie("help", "off", {expires:config.cookieLife, path:config.webRoot})
}

/**
 * Hide tree box 
 * 
 * @param  string $treeType 
 * @access public
 * @return void
 */
function hideTreeBox(treeType)
{
	$.cookie(treeType, "hide", {expires:config.cookieLife, path:config.webRoot})
	$(".outer").addClass("hide-side")
	var direction = $(".side-handle .icon-caret-left").size() > 0 ? "left" : "right"
	$(".side-handle .icon-caret-" + direction).removeClass("icon-caret-" + direction).addClass("icon-caret-" + (direction == "left" ? "right" : "left"))
}

/**
 * Show tree box 
 * 
 * @param  string $treeType 
 * @access public
 * @return void
 */
function showTreeBox(treeType)
{
	$.cookie(treeType, "show", {expires:config.cookieLife, path:config.webRoot})
	$(".outer").removeClass("hide-side")
	var direction = $(".side-handle .icon-caret-left").size() > 0 ? "left" : "right"
	$(".side-handle .icon-caret-" + direction).removeClass("icon-caret-" + direction).addClass("icon-caret-" + (direction == "left" ? "right" : "left"))
}

/**
 * set tree menu.
  
 * @access public
 * @return void
 */
function setTreeBox()
{
	var $handle = $(".side-handle")
	if($handle.data("setted")) return

	var treeType = $handle.data("id")
	if(treeType)
	{
		if($.cookie(treeType) == "hide") hideTreeBox(treeType)

		$handle.toggle
		(
			function()
			{
				if($.cookie(treeType) == "hide") return showTreeBox(treeType)
				hideTreeBox(treeType)
			}, 
			function()
			{
				if($.cookie(treeType) == "show") return hideTreeBox(treeType)
				showTreeBox(treeType)
			}
		).data("setted", true)
	}

	if($(".outer > .side").length) $(".outer").addClass("with-side")
	setTimeout(function(){$(".outer.with-side").addClass("with-transition")}, 1000)
	adjustOuterSize()
}

/**
 * Set language.
 * 
 * @access public
 * @return void
 */
function selectLang(lang)
{
	$.cookie("lang", lang, {expires:config.cookieLife, path:config.webRoot})
	location.href = removeAnchor(location.href)
}

/**
 * Set theme.
 * 
 * @access public
 * @return void
 */
function selectTheme(theme)
{
	$.cookie("theme", theme, {expires:config.cookieLife, path:config.webRoot})
	location.href = removeAnchor(location.href)
}

/**
 * Remove anchor from the url.
 * 
 * @param  string $url 
 * @access public
 * @return string
 */
function removeAnchor(url)
{
	pos = url.indexOf("#")
	if(pos > 0) return url.substring(0, pos)
	return url
}

/**
 * Get the window size and save to cookie.
 * 
 * @access public
 * @return void
 */
function saveWindowSize()
{
	width  = $(window).width() 
	height = $(window).height()
	$.cookie("windowWidth",  width)
	$.cookie("windowHeight", height)
}

/**
 * Adjust Outer box's width and height.
 * 
 * @access public
 * @return void
 */
function adjustOuterSize()
{
	var side   = $("#wrap .outer > .side")
	var sideH  = side.length ? (side.outerHeight() + $("#featurebar").outerHeight() + 20) : 0
	var height = Math.max(sideH, $(window).height() - $("#header").outerHeight() - ($("#footer").outerHeight() || 0) - 20)
	if(navigator.userAgent.indexOf("MSIE 8.0") >= 0) height -= 40
	$("#wrap .outer").css("min-height", height)
}

/**
 * Set Outer box's width and height.
 * 
 * @access public
 * @return void
 */
function setOuterBox()
{
	var side   = $("#wrap .outer > .side")
	side.resize(adjustOuterSize)
	$(window).resize(adjustOuterSize)
	adjustOuterSize()
}

/**
 * Disable the submit button when submit form.
 * 
 * @access public
 * @return void
 */
function setForm()
{
	var formClicked = false
	$("form").submit(function()
	{
		submitObj   = $(this).find(":submit")
		if($(submitObj).size() >= 1)
		{
			var isBtn = submitObj.prop("tagName") == "BUTTON"
			submitLabel = isBtn ? $(submitObj).html() : $(submitObj).attr("value")
			$(submitObj).attr("disabled", "disabled")
			var submitting = submitObj.attr("data-submitting") || lang.submitting
			if(isBtn) submitObj.text(submitting)
			else $(submitObj).attr("value", submitting)
			formClicked = true
		}
	})

	$("body").click(function()
	{
		if(formClicked)
		{
			$(submitObj).removeAttr("disabled")
			if(submitObj.prop("tagName") == "BUTTON")
			{
				submitObj.text(submitLabel)
			}
			else
			{
				$(submitObj).attr("value", submitLabel)
			}
			$(submitObj).removeClass("button-d")
		}
		formClicked = false
	})
}

/**
 * Set form action and submit.
 * 
 * @param  url    $actionLink 
 * @param  string $hiddenwin 'hiddenwin'
 * @access public
 * @return void
 */
function setFormAction(actionLink, hiddenwin, obj)
{
	$form = typeof(obj) == "undefined" ? $("form") : $(obj).closest("form")
	if(hiddenwin) $form.attr("target", hiddenwin)
	else $form.removeAttr("target")

	$form.attr("action", actionLink).submit()
}

/**
 * Set the max with of image.
 * 
 * @access public
 * @return void
 */
function setImageSize(image, maxWidth)
{
	/* If not set maxWidth, set it auto. */
	if(!maxWidth)
	{
		bodyWidth = $("body").width()
		maxWidth  = bodyWidth - 470 // The side bar's width is 336, and add some margins.
	}

	if($(image).width() > maxWidth) $(image).attr("width", maxWidth)
	$(image).wrap("<a href=\"" + $(image).attr("src") + "\" target=\"_blank\"></a>")
}

/**
 * Set the modal trigger to link.
 * 
 * @access public
 * @return void
 */
function setModalTriggerLink()
{
	$(".repolink").modalTrigger({width:960, type:"iframe"})
	$(".export").modalTrigger({width:650, type:"iframe"})
}

/**
 * Set mailto list from a contact list..
 * 
 * @param  string $mailto 
 * @param  int    $contactListID 
 * @access public
 * @return void
 */
function setMailto(mailto, contactListID)
{
	link = createLink("user", "ajaxGetContactUsers", "listID=" + contactListID)
	$.get(link, function(users)
	{
		$("#" + mailto).replaceWith(users)
		$("#" + mailto + "_chosen").remove()
		$("#" + mailto).chosen(defaultChosenOptions)
	})
}

/**
 * Ajax get contacts.
 * 
 * @param  obj $obj 
 * @access public
 * @return void
 */
function ajaxGetContacts(obj)
{
	link = createLink("user", "ajaxGetContactList")
	$.get(link, function(contacts)
	{
		if(!contacts) return false

		$inputgroup = $(obj).closest(".input-group")
		$inputgroup.find(".input-group-btn").remove()
		$inputgroup.append(contacts)
		$inputgroup.find("select:last").chosen(defaultChosenOptions)
	})
}

/**
 * Set comment. 
 * 
 * @access public
 * @return void
 */
function setComment()
{
	$("#commentBox").toggle()
	$(".ke-container").css("width", "100%")
	setTimeout(function() { $("#commentBox textarea").focus() }, 50)
}

/**
 * Make table checkable by click row
 *
 * @param  $table
 * @access public
 * @return void
 */
function checkTable($table)
{
	$(document).off("change.checktable").on("change.checktable", ".rows-selector:checkbox", function()
	{
		var $checkbox = $(this)
		var $datatable = $checkbox.closest(".datatable")
		if($datatable.length)
		{
			var $checkAll = $datatable.find(".check-all.check-btn:first").trigger("click")
			$checkbox.prop("checked", $checkAll.hasClass("checked"))
			return
		}
		var scope = $checkbox.data("scope")
		var $target = scope ? $("#" + scope) : $checkbox.closest(".table")
		var isChecked = $checkbox.prop("checked")
		$target.find("tbody > tr").toggleClass("active", isChecked).find("td :checkbox").prop("checked", isChecked)
	})

	$table = $table || $(".table-selectable")

	if(!$table.length) return

	if(!$table.find(":checkbox").length)
	{
		$table.on("click", "tbody > tr", function()
		{
			$table.find("tr.active").removeClass("active")
			$(this).addClass("active")
		})
		return
	}

	var checkRow = function(checked)
	{
		if(document.activeElement.type != "select-one" && document.activeElement.type != "text")
		{
			var $this = $(this)
			var $tr = $this.closest("tr")
			var $checkbox = $tr.find(":checkbox")
			if($checkbox.size() == 0) return

			var isChecked = $checkbox.prop("checked")
			if(!$this.is(":checkbox"))
			{
				isChecked = checked === true || checked === false  ? checked : !isChecked
				$checkbox.prop("checked", isChecked)
			}
			if(!$tr.hasClass(".active-disabled")) {
				$tr.toggleClass("active", isChecked)
			}
			$tr.closest(".table").find(".rows-selector").prop("checked", false)
		}
	}

	var isSelectableTable = $table.hasClass("table-selectable")

	$table.selectable(
		{
			selector: "tbody > tr",
			trigger: "tbody",
			ignoreVal: 10,
			start: function(e)
			{
				if($(e.target).is(":checkbox,a")) return false
				var that = this
				that.selections = {}
				that.$.find("tbody > tr").each(function(idx)
				{
					var $tr = $(this)
					if($tr.hasClass(that.options.selectClass))
					{
						that.selections[$tr.data("id")] = idx + 1
					}
				})
			},
			clickBehavior: "multi",
			startDrag: function(e)
			{
				if(!this.multiKey && isSelectableTable && !$(e.target).closest(".cell-id").length) return false
			},
			select: function(e)
			{
				checkRow.call(e.target, true)
			},
			unselect: function(e)
			{
				checkRow.call(e.target, false)
			}
		}).on("click", "tbody > tr :checkbox", function(e){checkRow.call(this); e.stopPropagation()}).on("click mousedown mousemove mouseup", "tbody a,tbody select,tbody input", function(e) {e.stopPropagation()})
}

/**
 * Toogle the search form.
 * 
 * @access public
 * @return void
 */
function toggleSearch()
{
	$("#bysearchTab").toggle
	(
		function()
		{
			if(browseType == "bymodule")
			{
				$("#bymoduleTab").removeClass("active")
			}
			else
			{
				$("#" + browseType + "Tab").removeClass("active")
			}
			$("#bysearchTab").addClass("active")
			ajaxGetSearchForm()
			$("#querybox").addClass("show")
		},
		function()
		{
			if(browseType == "bymodule")
			{
				$("#bymoduleTab").addClass("active")
			}
			else
			{
				$("#" + browseType +"Tab").addClass("active")
			}
			$("#bysearchTab").removeClass("active")
			$("#querybox").removeClass("show")
		} 
	)
}

/**
 * Ajax get search form 
 * 
 * @access public
 * @return void
 */
function ajaxGetSearchForm(querybox)
{
	var $querybox = $(querybox || "#querybox")
	if($querybox.html() == "")
	{
		$.get(createLink("search", "buildForm"), function(data)
		{
			$querybox.html(data)
		})
	}
}

/**
 * add one option of a select to another select. 
 * 
 * @param  string $SelectID 
 * @param  string $TargetID 
 * @access public
 * @return void
 */
function addItem(SelectID,TargetID)
{
	ItemList = document.getElementById(SelectID)
	Target   = document.getElementById(TargetID)
	for(var x = 0; x < ItemList.length; x++)
	{
		var opt = ItemList.options[x]
		if (opt.selected)
		{
			flag = true
			for (var y=0;y<Target.length;y++)
			{
				var myopt = Target.options[y]
				if (myopt.value == opt.value)
				{
					flag = false
				}
			}
			if(flag)
			{
				Target.options[Target.options.length] = new Option(opt.text, opt.value, 0, 0)
			}
		}
	}
}

/**
 * Remove one selected option from a select.
 * 
 * @param  string $SelectID 
 * @access public
 * @return void
 */
function delItem(SelectID)
{
	ItemList = document.getElementById(SelectID)
	for(var x=ItemList.length-1;x>=0;x--)
	{
		var opt = ItemList.options[x]
		if (opt.selected)
		{
			ItemList.options[x] = null
		}
	}
}

/**
 * move one selected option up from a select. 
 * 
 * @param  string $SelectID 
 * @access public
 * @return void
 */
function upItem(SelectID)
{
	ItemList = document.getElementById(SelectID)
	for(var x=1;x<ItemList.length;x++)
	{
		var opt = ItemList.options[x]
		if(opt.selected)
		{
			tmpUpValue = ItemList.options[x-1].value
			tmpUpText  = ItemList.options[x-1].text
			ItemList.options[x-1].value = opt.value
			ItemList.options[x-1].text  = opt.text
			ItemList.options[x].value = tmpUpValue
			ItemList.options[x].text  = tmpUpText
			ItemList.options[x-1].selected = true
			ItemList.options[x].selected = false
			break
		}
	}
}

/**
 * move one selected option down from a select. 
 * 
 * @param  string $SelectID 
 * @access public
 * @return void
 */
function downItem(SelectID)
{
	ItemList = document.getElementById(SelectID)
	for(var x=0;x<ItemList.length;x++)
	{
		var opt = ItemList.options[x]
		if(opt.selected)
		{
			tmpUpValue = ItemList.options[x+1].value
			tmpUpText  = ItemList.options[x+1].text
			ItemList.options[x+1].value = opt.value
			ItemList.options[x+1].text  = opt.text
			ItemList.options[x].value = tmpUpValue
			ItemList.options[x].text  = tmpUpText
			ItemList.options[x+1].selected = true
			ItemList.options[x].selected = false
			break
		}
	}
}

/**
 * select all items of a select. 
 * 
 * @param  string $SelectID 
 * @access public
 * @return void
 */
function selectItem(SelectID)
{
	ItemList = document.getElementById(SelectID)
	for(var x=ItemList.length-1;x>=0;x--)
	{
		var opt = ItemList.options[x]
		opt.selected = true
	}
}

/**
 * Delete item use ajax.
 * 
 * @param  string url 
 * @param  string replaceID 
 * @param  string notice 
 * @access public
 * @return void
 */
function ajaxDelete(url, replaceID, notice)
{
	if(confirm(notice))
	{
		$.ajax(
			{
				type:     "GET", 
				url:      url,
				dataType: "json", 
				success:  function(data) 
				{
					if(data.result == "success") 
					{
						$.get(document.location.href, function(data)
						{
							$("#" + replaceID).html($(data).find("#" + replaceID).html())
							if(typeof sortTable == "function") sortTable() 
							$("#" + replaceID).find("[data-toggle=modal], a.iframe").modalTrigger()
							$("#" + replaceID).find("table.datatable").datatable()
						})
					}
				}
			})
	}
}

/**
 * Judge the string is a integer number
 * 
 * @access public
 * @return bool
 */
function isNum(s)
{
	if(s!=null)
	{
		var r, re
		re = /\d*/i
		r = s.match(re)
		return (r == s) ? true : false
	}
	return false
}

/**
 * Set modal load content with ajax or iframe
 * 
 * @access public
 * @return void
 */
function setModal()
{
	jQuery.fn.modalTrigger = function(setting)
	{
		return $(this).each(function()
		{
			var $this = $(this)
			$this.off("click.modalTrigger.zui")

			$this.on("click.modalTrigger.zui", function(event)
			{
				var $e   = $(this)
				if($e.closest(".body-modal").length) return

				if($e.hasClass("disabled")) return false

				var url  = (setting ? setting.url : false) || $e.attr("href") || $e.data("url")
				var type = (setting ? setting.type : false) || ($e.hasClass("iframe") ? "iframe" : ($e.data("type") || "ajax"))
				if(type == "iframe")
				{
					var options = $.extend(
						{
							url:        url,
							title:      $e.attr("title") || $e.text(),
							cssClass:   $e.data("class"),
							icon:       "?",
							center:     true
						}, setting, $e.data())

					if(options.icon == "?")
					{
						var i = $e.find("[class^='icon-']")
						options.icon = i.length ? i.attr("class").substring(5) : "file-text"
					}

					showIframeModal(options)
				}
				else
				{
					initModalFrame()
					$.get(url, function(data)
					{
						var options = $.extend(
							{
								width: 800,
								title: $e.attr("title") || $e.text(),
								icon: "?",
								backdrop: "static",
								show: true
							}, setting, $e.data())

						var ajaxModal = $("#ajaxModal")
						if(data.indexOf("modal-dialog") < 0)
						{
							data = "<div class='modal-dialog modal-ajax' style='width: {width};'><div class='modal-content'><div class='modal-header'><button class='close' data-dismiss='modal'>×</button><h4 class='modal-title'><i class='icon-{icon}'></i> {title}</h4></div><div class='modal-body' style='height:{height}'>{content}</div></div></div>".format($.extend({content: data}, options))
						}
						ajaxModal.html(data)

						/* Set the width of modal dialog. */
						if(options.width)
						{
							var modalWidth = parseInt(options.width)
							$ajaxModal.data("width", modalWidth).find(".modal-dialog").css("width", modalWidth)
							ajustModalPosition()
						}
						ajaxModal.modal(options)
					})
				}

				/* Save the href to rel attribute thus we can save it. */
				$("#ajaxModal").attr("rel", url)

				event.preventDefault()
				return false
			})
		})
	}

	function showIframeModal(settings)
	{
		var options = 
								{
									width:      800,
									height:     "auto",
									icon:       "?",
									title:      "",
									name:       "modalIframe",
									cssClass:   "",
									headerless: false,
									waittime:   0,
									center:     true,
									backdrop:   "static",
									show:       true
								}
        
		if(typeof(settings) == "string")
		{
			options.url = settings
		}
		else
		{
			options = $.extend(options, settings)
		}

		initModalFrame(options)

		if(isNum(options.height.toString())) options.height += "px"
		if(isNum(options.width.toString())) options.width += "px"
		if(options.size == "fullscreen")
		{
			var $w = $(window)
			options.width = $w.width()
			options.height = $w.height()
			options.cssClass += " fullscreen"
		}
		if(options.headerless)
		{
			options.cssClass += " hide-header"
		}
		if(typeof(options.url) == "undefined" || !options.url) return false

		var modal = $("#ajaxModal").addClass("modal-loading").data("first", true)

		modal.html("<div class='icon-spinner icon-spin loader'></div><div class='modal-dialog modal-iframe' style='width: {width};'><div class='modal-content'><div class='modal-header'><button class='close' data-dismiss='modal'>×</button><h4 class='modal-title'><i class='icon-{icon}'></i> {title}</h4></div><div class='modal-body' style='height:{height}'><iframe id='{name}' name='{name}' src='{url}' frameborder='no' allowtransparency='true' scrolling='auto' hidefocus='' style='width: 100%; height: 100%; left: 0px;'></iframe></div></div></div>".format(options))

		var modalBody = modal.find(".modal-body"), dialog = modal.find(".modal-dialog")
		if(options.cssClass)
		{
			dialog.addClass(options.cssClass)
		}

		if(options.waittime > 0)
		{
			options.waitingFuc = setTimeout(function(){showModal(options, modal, modalBody, dialog)}, options.waittime )
		}

		var frame = document.getElementById(options.name)
		frame.onload = frame.onreadystatechange = function()
		{
			if(this.readyState && this.readyState != "complete") return
			if(modal.data("first") && (!modal.hasClass("modal-loading"))) return
			if(!modal.data("first")) modal.addClass("modal-loading")

			if(options.waittime > 0)
			{
				clearTimeout(options.waitingFuc)
			}
			showModal(options, modal, modalBody, dialog)
		}
		modal.modal(options)
	}

	function showModal(options, modal, modalBody, dialog)
	{
		modalBody.css("height", options.height - modal.find(".modal-header").outerHeight())
		try
		{
			var frame$ = window.frames[options.name].$
			if(frame$("#titlebar").length)
			{
				modal.addClass("with-titlebar")
				if(options.size == "fullscreen")
				{
					modalBody.css("height", options.height)
				}
			}
			if(options.height == "auto")
			{
				var $framebody = frame$("body")
				setTimeout(function()
				{
					modal.removeClass("fade")
					var fbH = $framebody.addClass("body-modal").outerHeight()
					frame$("#titlebar > .heading a").each(function()
					{
						var $a = frame$(this)
						$a.replaceWith("<strong class='heading-title'>" + $a.text() + "</strong>")
					})
					if(typeof fbH == "object") fbH = $framebody.height()
					modalBody.css("height", fbH)
					ajustModalPosition()
					if(modal.data("first")) modal.data("first", false)
					modal.removeClass("modal-loading").addClass("fade")
				}, 100)

				$framebody.resize(function()
				{
					var fbH = $framebody.outerHeight()
					if(typeof fbH == "object") fbH = $framebody.height()
					modalBody.css("height", fbH)
					ajustModalPosition()
				})
			}
			else
			{
				modal.removeClass("modal-loading")
			}

			if(frame$)
			{
				frame$.extend({"closeModal": $.closeModal})
			}
		}
		catch(e)
		{
			modal.removeClass("modal-loading")
		}
	}

	function initModalFrame(setting)
	{
		if($("#ajaxModal").length)
		{
			/* unbind all events */
			$("#ajaxModal").attr("class", "modal fade").off("show.zui.modal shown.zui.modal hide.zui.modal hidden.zui.modal")
		}
		else
		{
			/* Addpend modal div. */
			$("<div id=\"ajaxModal\" class=\"modal fade\"></div>").appendTo("body")
		}

		$ajaxModal = $("#ajaxModal")
		$ajaxModal.data("cancel-reload", false)

		$.extend({"closeModal":function(callback, location)
		{
			$ajaxModal.on("hidden.zui.modal", function()
			{
				if(location && (!$ajaxModal.data("cancel-reload")))
				{
					if(location == "this") window.location.reload()
					else window.location = location
				}
				if(callback && $.isFunction(callback)) callback()
			})
			$ajaxModal.modal("hide")
		}, "cancelReloadCloseModal": function(){$ajaxModal.data("cancel-reload", true)}})

		/* rebind events */
		if(!setting) return
		if(setting.afterShow && $.isFunction(setting.afterShow)) $ajaxModal.on("show.zui.modal", setting.afterShow)
		if(setting.afterShown && $.isFunction(setting.afterShown)) $ajaxModal.on("shown.zui.modal", setting.afterShown)
		if(setting.afterHide && $.isFunction(setting.afterHide)) $ajaxModal.on("hide.zui.modal", setting.afterHide)
		if(setting.afterHidden && $.isFunction(setting.afterHidden)) $ajaxModal.on("hidden.zui.modal", setting.afterHidden)
	}

	function ajustModalPosition(position, dialog)
	{
		position = position || "fit"
		if(!dialog) dialog = $("#ajaxModal .modal-dialog")
		if(position)
		{
			var half = Math.max(0, ($(window).height() - dialog.outerHeight())/2)
			var pos = position == "fit" ? (half*2/3) : (position == "center" ? half : position)
			//dialog.css('margin-top', pos);
			// dialog.css("transform","translate(0px,"+pos+"px)")
		}
	}

	$.extend({ajustModalPosition: ajustModalPosition, modalTrigger: showIframeModal, colorbox: function(setting)
	{
		if((typeof setting == "object") && setting.iframe)
		{
			$.modalTrigger({type: "iframe", width: setting["width"], afterHide: setting["onCleanup"], url: setting["href"]})
		}
	}})

	$("[data-toggle=modal], a.iframe").modalTrigger()

	jQuery.fn.colorbox = function(setting)
	{
		if((typeof setting == "object") && setting.iframe)
		{
			$(this).modalTrigger({type: "iframe", width: setting["width"], afterHide: setting["onCleanup"], url: setting["href"]})
		}
	}
}

/**
 * Set modal for list page.
 *
 * Open operation pages in modal for list pages, after the modal window close, reload the list content and repace the replaceID.
 * 
 * @param string   triggerClass   the class for colorbox binding.
 * @param string   replaceID       the html object to be replaced.
 * @access public
 * @return void
 */
function setModal4List(triggerClass, replaceID, callback, width)
{
	if(typeof(width) == "undefined") width = 900
	$("." + triggerClass).modalTrigger(
		{
			width: width,
			type: "iframe",

			afterHide:function()
			{
				var selfClose = $.cookie("selfClose")
				if(selfClose != 1) return
				saveWindowSize()

				if(typeof(replaceID) == "string" && replaceID.length > 0)
				{
					$.cancelReloadCloseModal()

					var link = self.location.href
					var idQuery = "#" + replaceID
					$(idQuery).wrap("<div id='tmpDiv'></div>")
					$("#tmpDiv").load(link + " " + idQuery, function()
					{
						$("#tmpDiv").replaceWith($("#tmpDiv").html())
						setTimeout(function(){setModal4List(triggerClass, replaceID, callback, width)},150)

						var $list = $(idQuery), $datatable = $("#datatable-" + $list.attr("id"))
						if($list.hasClass("datatable") && $datatable.length && $.fn.datatable)
						{
							$list.hide()
							$datatable.data("zui.datatable").load(idQuery)
						}

						$list.find("[data-toggle=modal], a.iframe").modalTrigger()
						try
						{
							$(".date").datetimepicker(datepickerOptions)
						}
						catch(err){}

						if($list.is(".table-selectable:not(.table-datatable)")) checkTable($list)
						else $list.find("tbody tr:not(.active-disabled) td").click(function(){$(this).closest("tr").toggleClass("active")})

						if($.isFunction(callback)) callback($list)
						$.cookie("selfClose", 0)
					})
				}
				else if($.isFunction(callback)) callback()
			}
		})
}

/**
 * Set table behavior
 * 
 * @access public
 * @return void
 */
function setTableBehavior()
{
	$("#wrap .outer > .table, #wrap .outer > form > .table, #wrap .outer > .mian > .table, #wrap .outer > .mian > form > .table, #wrap .outer > .container > .table").not(".table-data, .table-form, .table-custom").addClass("table table-condensed table-hover table-striped tablesorter").each(function()
	{
		var $tbody = $(this).children("tbody")
		if(!$tbody.children().length) $tbody.remove()
	})

	$(document).on("click", "tr[data-url]", function()
	{
		var url = $(this).data("url")
		if(url) window.location.href = url
	})
}

/**
 * Fix style
 * 
 * @access public
 * @return void
 */
function fixStyle()
{
	var $actions = $("#titlebar > .actions")
	if($actions.length) $("#titlebar > .heading").css("padding-right", $actions.width())
}

/**
 * Start cron.
 * 
 * @access public
 * @return void
 */
function startCron()
{
	$.ajax({type:"GET", timeout:100, url:createLink("cron", "ajaxExec")})
}

function computePasswordStrength(password)
{
	if(password.length == 0) return 0

	var strength = 0
	var length   = password.length

	var uniqueChars = ""
	var complexity  = new Array()
	for(i = 0; i < length; i++)
	{
		letter = password.charAt(i)
		var asc = letter.charCodeAt()
		if(asc >= 48 && asc <= 57)
		{
			complexity[2] = 2
		}
		else if((asc >= 65 && asc <= 90))
		{
			complexity[1] = 2
		}
		else if(asc >= 97 && asc <= 122)
		{
			complexity[0] = 1
		}
		else
		{
			complexity[3] = 3
		}
		if(uniqueChars.indexOf(letter) == -1) uniqueChars += letter
	}

	if(uniqueChars.length > 4) strength += uniqueChars.length - 4
	var sumComplexity = 0
	var complexitySize = 0
	for(i in complexity)
	{
		complexitySize += 1
		sumComplexity += complexity[i]
	}
	strength += sumComplexity + (2 * (complexitySize - 1))
	if(length < 6 && strength >= 10) strength = 9

	strength = strength > 29 ? 29 : strength
	strength = Math.floor(strength / 10)

	if(strength < 2){
		var newStrength = passwordMediumStrong(password)
		if(newStrength != 0){
			strength = newStrength
		}
	}
	console.log(strength)

	return strength
}

function passwordMediumStrong(password)
{
	if(password.length == 0) return 0
	var length   = password.length
	if(length < 8){
		return 0
	}
	var complexity  = new Array()
	for(var i = 0; i < length; i++)
	{
		var letter = password.charAt(i)
		var asc = letter.charCodeAt()
		if(asc >= 48 && asc <= 57)
		{
			complexity[2] = 2
		}
		else if((asc >= 65 && asc <= 90))
		{
			complexity[1] = 2
		}
		else if(asc >= 97 && asc <= 122)
		{
			complexity[0] = 1
		}
		else
		{
			complexity[3] = 3
		}
	}

	var complexitySize = 0
	for(var j in complexity)
	{
		complexitySize += 1
	}
	if(complexitySize < 3){
		return 0
	}
	return 3
}

/**
 * Check onlybody page when it is not open in modal then location to on onlybody page. 
 * 
 * @access public
 * @return void
 */
function checkOnlybodyPage()
{
	if(location.href == top.location.href)
	{
		href = location.href.replace("?onlybody=yes", "")
		location.href = href.replace("&onlybody=yes", "")
	}
}

/**
 * Fixed tfoot action like productplan,release.
 * 
 * @param  string $formID 
 * @access public
 * @return void
 */
function fixedTfootAction(formID)
{
	var $form = $(formID)
	if(!$form.length) return false
	var $table = $form.find("table:last")
	var $tfoot = $table.find("tfoot")
	if($table.hasClass("table-datatable"))
	{
		$table = $form.find(".datatable-rows")
		$tfoot = $form.find(".datatable-footer tfoot")
	}
	if(!$tfoot.length) return false

	var $tbody = $table.find("tbody"),
		$inputGroup = $tfoot.find(".table-actions").children(".input-group"),
		pageFooterHeight = $("#footer").height(),
		tableWidth,
		tableOffset,
		hasFixed
	if(!$tbody.length) return false
	function fixTfoot()
	{
		tableWidth   = $table.width()
		hasFixed     = $tfoot.hasClass("fixedTfootAction")
		offsetHeight = $(window).height() + $(window).scrollTop() - pageFooterHeight/2
		tableOffset  = $tbody.offset().top + $tbody.height() + $tfoot.height()

		if(!hasFixed && offsetHeight <= tableOffset)
		{
			$tfoot.addClass("fixedTfootAction")
				.width(tableWidth)
				.find("td").width(tableWidth)
			if($inputGroup.size() > 0) $inputGroup.width($inputGroup.width())
		}
		if(hasFixed && (offsetHeight > tableOffset || $(document).height() == offsetHeight))
		{
			$tfoot.removeClass("fixedTfootAction")
				.removeAttr("style")
				.find("td").removeAttr("style")
		}
	}
	function fixTfootInit()
	{
		if($tfoot.hasClass("fixedTfootAction")) $tfoot.removeClass("fixedTfootAction")
		fixTfoot()
	}

	fixTfootInit()
	var scrollCallTask
	$(window).scroll(function()
	{
		// Fix table foot when scrolling.
		fixTfoot()
		$tfoot.addClass("scrolling scrolled")
		clearTimeout(scrollCallTask)
		scrollCallTask = setTimeout(function(){$tfoot.removeClass("scrolling")}, 200)
	}).resize(fixTfoot)
	$(".side-handle").click(function(){setTimeout(fixTfootInit, 300)}) // Fix table foot if module tree is hidden or displayed.
}

/**
 * Fixed table head in div box.
 * 
 * @param  string $boxObj 
 * @access public
 * @return void
 */
function fixedTableHead(boxObj)
{
	$(boxObj).scroll(function()
	{
		var hasFixed  = $(this).find(".fixedHead").size() > 0
		if(!hasFixed)
		{
			$(this).css("position", "relative")
			if($(this).find("table").size() == 1)
			{
				var fixed = "<table class='fixedHead' style='position:absolute;top:0px'><thead>" + $(this).find("table thead").html() + "</thead></table>"
				$(this).prepend(fixed)
				var $fixTable = $(this).find("table.fixedHead")
				$fixTable.addClass($(this).find("table:last").attr("class"))
				var $dataTable = $(this).find("table:last thead th")
				$fixTable.find("thead th").each(function(i){$fixTable.find("thead th").eq(i).width($dataTable.eq(i).width())})
			}
		}
		$(this).find("table.fixedHead").css("top",$(this).scrollTop())
	})
}

/**
 * Fixed table head in list when scrolling.
 * 
 * @param  string $tableID 
 * @access public
 * @return void
 */
function fixedTheadOfList(tableID)
{
	if($(tableID).size() == 0) return false
	if($(tableID).css("display") == "none") return false
	if($(tableID).find("thead").size() == 0) return false

	fixTheadInit()
	$(window).scroll(fixThead)//Fix table head when scrolling.
	$(".side-handle").click(function(){setTimeout(fixTheadInit, 300)})//Fix table head if module tree is hidden or displayed.

	var tableWidth, theadOffset, fixedThead, $fixedThead
	function fixThead()
	{
		theadOffset = $(tableID).find("thead").offset().top
		$fixedThead = $(tableID).parent().find(".fixedTheadOfList")
		if($fixedThead.size() <= 0 &&theadOffset < $(window).scrollTop())
		{
			tableWidth  = $(tableID).width()
			fixedThead  = "<table class='fixedTheadOfList'><thead>" + $(tableID).find("thead").html() + "</thead></table>"
			$(tableID).before(fixedThead)
			$(".fixedTheadOfList").addClass($(tableID).attr("class")).width(tableWidth)
		}
		if($fixedThead.size() > 0 && theadOffset >= $(window).scrollTop()) $fixedThead.remove()
	}
	function fixTheadInit()
	{
		$fixedThead = $(tableID).parent().find(".fixedTheadOfList")
		if($fixedThead.size() > 0) $fixedThead.remove()
		fixThead()
	}
}

/**
 * Init prioprity selectors
 * @return void
 */
function initPrioritySelector()
{
	$(".dropdown-pris").each(function()
	{
		var $dropdown = $(this)
		var prefix = $dropdown.data("prefix") || "pri"
		var $select = $dropdown.find("select")
		var selectVal = parseInt($select.hide().val())
		var $menu = $dropdown.children(".dropdown-menu")
		if(!$menu.length)
		{
			$menu = $("<ul class=\"dropdown-menu\"></ul>")
			$dropdown.append($menu)
		}
		if(!$menu.children("li").length)
		{
			var set = $select.children("option").map(function() {return parseInt($(this).val())}).get()
			if(!set || !set.length)
			{
				set = $dropdown.data("set")
				set = set ? set.split(",") : [0,1,2,3,4]
			}
			set.sort(function(a,b){return a - b})
			for(var i = 0; i < set.length; ++i)
			{
				var v = set[i]
				$menu.append("<li><a href=\"###\" data-pri=\"" + v + "\"><span class=\"" + prefix + v + "\">" + (v ? v : "") + "</span></a></li>")
			}
		}
		$menu.find("a[data-pri=\"" + selectVal + "\"]").parent().addClass("active")
		$dropdown.find(".pri-text").html("<span class=\"" + prefix + selectVal + "\">" + (selectVal ? selectVal : "") + "</span>")

		$dropdown.on("click", ".dropdown-menu > li > a", function()
		{
			var $a = $(this)
			$menu.children("li.active").removeClass("active")
			$a.parent().addClass("active")
			selectVal = $a.data("pri")
			$select.val(selectVal)
			$dropdown.find(".pri-text").html("<span class=\"" + prefix + selectVal + "\">" + (selectVal ? selectVal : "") + "</span>")
		})
	})
}

/**
 * Apply cs style to page
 * @return void
 */
function applyCssStyle(css, tag)
{
	tag = tag || "default"
	var name = "applyStyle-" + tag
	var $style = $("style#" + name)
	if(!$style.length)
	{
		$style = $("<style id=\"" + name + "\">").appendTo("body")
	}
	var styleTag = $style.get(0)
	if (styleTag.styleSheet) styleTag.styleSheet.cssText = css
	else styleTag.innerHTML = css
}

/**
 * Show browser notice 
 * 
 * @access public
 * @return void
 */
function showBrowserNotice()
{
	userAgent = navigator.userAgent.toLowerCase()
	$browser  = new Object()
	$browser.msie   = /msie/.test(userAgent)
	$browser.chrome = /chrome/.test(userAgent)

	//if($browser.msie)
	//{
	//    match = /(msie) ([\w.]+)/.exec(userAgent);
	//    $browser.version = match[2] || '0';
	//}

	var show = false

	/* IE 6,7. */
	//if($browser.msie && $browser.version <= 7) show = true;

	/* Souhu */
	if(navigator.userAgent.indexOf("MetaSr") >= 0)
	{
		show = true
	}
	else if(navigator.userAgent.indexOf("LBBROWSER") >= 0)
	{
		show = true
	}
	else if(navigator.userAgent.indexOf("QQBrowser") >= 0)
	{
		show = true
	}
	else if(navigator.userAgent.indexOf("TheWorld") >= 0)
	{
		show = true
	}
	else if(navigator.userAgent.indexOf("BIDUBrowser") >= 0)
	{
		show = true
	}
	else if(navigator.userAgent.indexOf("Maxthon") >= 0)
	{
		show = true
	}
	/* 360. */
	//else if($browser.chrome && !(window.clientInformation && window.clientInformation.mediaDevices))
	//{
	//    show = true;
	//}

	if(show) $("body").prepend("<div class=\"alert alert-info alert-dismissable\" style=\"margin:0px;\"><button type=button\" onclick=\"ajaxIgnoreBrowser()\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\"><i class=\"icon-remove\"></i></button><p>" + browserNotice + "</p></div>")
}

/**
 * Remove cookie by key
 * 
 * @param  cookieKey $cookieKey 
 * @access public
 * @return void
 */
function removeCookieByKey(cookieKey)
{
	$.cookie(cookieKey, "", {expires:config.cookieLife, path:config.webRoot})
	location.href = location.href
}

/**
 * Bind hotkey event
 * @access public
 * @return void
 */
function initHotKey()
{
	$(document).bind("keydown", "Ctrl+g", function(e)
	{
		/* CTRL+g, auto focus on the search box. */
		$("#searchQuery").val("").focus()
		e.stopPropagation()
		e.preventDefault()
		return false
	}).bind("keydown", "Alt+up", function()
	{
		/* Alt+up, go back to the previous page. */
		var backLink = $("#back").attr("href")
		if(backLink) location.href = backLink
	}).bind("keydown", "left", function()
	{
		/* left, go to pre object. */
		var preLink = $("#pre").attr("href")
		if(preLink) location.href = preLink
	}).bind("keydown", "right", function()
	{
		/* right, go to next object. */
		var nextLink = $("#next").attr("href")
		if(nextLink) location.href = nextLink
	})
}

/**
 * Init help link for user to open zentao help website in iframe
 * @access public
 * @return void
 */
function initHelpLink()
{
	var zentaoUrl = "http://www.zentao.net/book/zentaopmshelp.html?fullScreen=zentao"
	if(config.clientLang == "en") zentaoUrl = "http://www.zentao.pm/book/zentaomanual/8.html?fullScreen=zentao"
	var $mainNav = $("#mainmenu > .nav").first()
	var showLoadingError
	var timeout = 10000

	var clearLoadingError = function()
	{
		clearTimeout(showLoadingError)
		$("#helpContent").removeClass("show-error")
	}

	var openHelp = function()
	{
		clearLoadingError()
		var $oldActiveItem = $mainNav.children("li.active:not(#helpMenuItem)").removeClass("active").addClass("close-help-tab")
		var $helpMenuItem = $("#helpMenuItem").addClass("active")
		var $help = $("#helpContent")
		if(!$help.length)
		{
			$help = $("<div id=\"helpContent\"><div class=\"load-error text-center\"><h4 class=\"text-danger\">" + lang.timeout + "</h4><p><a href=\"###\" class=\"open-help-tab\"><i class=\"icon icon-arrow-right\"></i> " + zentaoUrl + "</a></p></div><iframe id=\"helpIframe\" name=\"helpIframe\" src=\"" + zentaoUrl + "\" frameborder=\"no\" allowtransparency=\"true\" scrolling=\"auto\" hidefocus=\"\" style=\"width: 100%; height: 100%; left: 0px;\"></iframe></div>")
			$("#header").after($help)
			var frame = $("#helpIframe").get(0)
			showLoadingError = setTimeout(function()
			{
				$("#helpContent").addClass("show-error")
			}, timeout)
			frame.onload = frame.onreadystatechange = function()
			{
				if(this.readyState && this.readyState != "complete") return
				clearLoadingError()
			}
		} else if($("body").hasClass("show-help-tab"))
		{
			$("#helpIframe").get(0).contentWindow.location.replace(zentaoUrl)
			return
		}
		$("body").addClass("show-help-tab")
	}

	var closeHelp = function()
	{
		$("body").removeClass("show-help-tab")
		$("#helpMenuItem").removeClass("active")
		$mainNav.find("li.close-help-tab").removeClass("close-help-tab").addClass("active")
	}

	$(document).on("click", ".open-help-tab", function()
	{
		var $helpMenuItem = $("#helpMenuItem")
		if(!$helpMenuItem.length)
		{
			$helpMenuItem = $("<li id=\"helpMenuItem\"><a href=\"javascript:;\" class=\"open-help-tab\">" + $(this).text() + "<i class=\"icon icon-remove close-help-tab\"></i></a></li>")
			$mainNav.find(".custom-item").before($helpMenuItem)
		}
		openHelp()
	}).on("click", ".close-help-tab", function(e)
	{
		closeHelp()
		e.stopPropagation()
		e.preventDefault()
	})
}

/**
 * Set homepage.
 * 
 * @param  string $module 
 * @param  string $page 
 * @access public
 * @return void
 */
function setHomepage(module, page)
{
	$.get(createLink("custom", "ajaxSetHomepage", "module=" + module + "&page=" + page), function(){location.reload(true)})
}

/**
 * Reload page when tutorial mode setted in this session but not load in iframe
 * 
 * @access public
 * @return void
 */
function checkTutorial()
{
	if(config.currentModule != "tutorial" && window.TUTORIAL && (!frameElement || frameElement.tagName != "IFRAME"))
	{
		if(confirm(window.TUTORIAL.tip))
		{
			$.getJSON(createLink("tutorial", "ajaxQuit"), function()
			{
				window.location.reload()
			}).error(function(){alert(lang.timeout)})
		}
	}
}

/* Remove 'ditto' in first row when batch create or edit. */
function removeDitto()
{
	$firstTr = $(".table-form").find("tbody tr:first")
	$firstTr.find("td select").each(function()
	{
		$(this).find("option[value='ditto']").remove()
		$(this).trigger("chosen:updated")
	})
}

/**
 * Revert module cookie.
 * 
 * @access public
 * @return void
 */
function revertModuleCookie()
{
	if($("#mainmenu .nav li[data-id=\"project\"]").hasClass("active"))
	{
		$("#modulemenu .nav li[data-id=\"task\"] a").click(function()
		{
			$.cookie("moduleBrowseParam", 0, {expires:config.cookieLife, path:config.webRoot})
		})
	}
	if($("#mainmenu .nav li[data-id=\"product\"]").hasClass("active"))
	{
		$("#modulemenu .nav li[data-id=\"story\"] a").click(function()
		{
			$.cookie("storyModule", 0, {expires:config.cookieLife, path:config.webRoot})
		})
	}
	if($("#mainmenu .nav li[data-id=\"qa\"]").hasClass("active"))
	{
		$("#modulemenu .nav li[data-id=\"bug\"] a").click(function()
		{
			$.cookie("bugModule", 0, {expires:config.cookieLife, path:config.webRoot})
		})
		$("#modulemenu .nav li[data-id=\"testcase\"] a").click(function()
		{
			$.cookie("caseModule", 0, {expires:config.cookieLife, path:config.webRoot})
		})
	}
}

/* Ping the server every some minutes to keep the session. */
needPing = true

/* When body's ready, execute these. */
$(document).ready(function() 
{
	if(typeof(config.onlybody) != "undefined" && config.onlybody == "yes") checkOnlybodyPage()
	$("body").addClass("m-{currentModule}-{currentMethod}".format(config))

	setModal()
	setTableBehavior()
	setForm()
	saveWindowSize()
	setSearchBox()
	setOuterBox()

	setRequiredFields()
	setPlaceholder()

	setModalTriggerLink()

	checkTable()
	toggleSearch()

	fixStyle()

	// Init tree menu
	$(".tree").tree({name: config.currentModule + "-" + config.currentMethod, initialState: "preserve"})

	$(window).resize(saveWindowSize)   // When window resized, call it again.

	if(needPing) setTimeout("setPing()", 1000 * 60 * 10)  // After 10 minutes, begin ping.

	$(".export").bind("click", function()
	{
		var checkeds = ""
		$(":checkbox").each(function()
		{
			if($(this).attr("checked"))
			{
				var checkedVal = parseInt($(this).val())
				if(checkedVal != 0) checkeds = checkeds + checkedVal + ","
			}
		})
		if(checkeds != "") checkeds = checkeds.substring(0, checkeds.length - 1)
		$.cookie("checkedItem", checkeds, {expires:config.cookieLife, path:config.webRoot})
	})

	initPrioritySelector()
	initHotKey()
	initHelpLink()
	checkTutorial()
	revertModuleCookie()
});
/*!
Chosen, a Select Box Enhancer for jQuery and Prototype
by Patrick Filler for Harvest, http://getharvest.com

Version 1.1.0
Full source at https://github.com/harvesthq/chosen
Copyright (c) 2011 Harvest http://getharvest.com

MIT License, https://github.com/harvesthq/chosen/blob/master/LICENSE.md
*/
(function(){var t,e,s,i,r,o={}.hasOwnProperty,h=function(t,e){function s(){this.constructor=t}for(var i in e)o.call(e,i)&&(t[i]=e[i]);return s.prototype=e.prototype,t.prototype=new s,t.__super__=e.prototype,t},n={zh_cn:{no_results_text:"没有找到"},zh_tw:{no_results_text:"沒有找到"},en:{no_results_text:"No results match"}};i=function(){function e(){this.options_index=0,this.parsed=[]}return e.prototype.add_node=function(t){return"OPTGROUP"===t.nodeName.toUpperCase()?this.add_group(t):this.add_option(t)},e.prototype.add_group=function(e){var s,i,r,o,h,n;for(s=this.parsed.length,this.parsed.push({array_index:s,group:!0,label:this.escapeExpression(e.label),children:0,disabled:e.disabled,title:e.title,search_keys:t.trim(e.getAttribute("data-keys")||"").replace(/,/g," ")}),h=e.childNodes,n=[],r=0,o=h.length;o>r;r++)i=h[r],n.push(this.add_option(i,s,e.disabled));return n},e.prototype.add_option=function(e,s,i){return"OPTION"===e.nodeName.toUpperCase()?(""!==e.text?(null!=s&&(this.parsed[s].children+=1),this.parsed.push({array_index:this.parsed.length,options_index:this.options_index,value:e.value,text:e.text,title:e.title,html:e.innerHTML,selected:e.selected,disabled:i===!0?i:e.disabled,group_array_index:s,classes:e.className,style:e.style.cssText,search_keys:t.trim(e.getAttribute("data-keys")||"").replace(/,/," ")})):this.parsed.push({array_index:this.parsed.length,options_index:this.options_index,empty:!0}),this.options_index+=1):void 0},e.prototype.escapeExpression=function(t){var e,s;return null==t||t===!1?"":/[\&\<\>\"\'\`]/.test(t)?(e={"<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#x27;","`":"&#x60;"},s=/&(?!\w+;)|[\<\>\"\'\`]/g,t.replace(s,function(t){return e[t]||"&amp;"})):t},e}(),i.select_to_array=function(t){var e,s,r,o,h;for(s=new i,h=t.childNodes,r=0,o=h.length;o>r;r++)e=h[r],s.add_node(e);return s.parsed},e=function(){function e(s,i){this.form_field=s,this.options=null!=i?i:{},e.browser_is_supported()&&(this.lang=n[this.options.lang||(t.zui.clientLang?t.zui.clientLang():"zh_cn")],this.is_multiple=this.form_field.multiple,this.set_default_text(),this.set_default_values(),this.setup(),this.set_up_html(),this.register_observers())}return e.prototype.set_default_values=function(){var t=this;return this.click_test_action=function(e){return t.test_active_click(e)},this.activate_action=function(e){return t.activate_field(e)},this.active_field=!1,this.mouse_on_container=!1,this.results_showing=!1,this.result_highlighted=null,this.allow_single_deselect=null!=this.options.allow_single_deselect&&null!=this.form_field.options[0]&&""===this.form_field.options[0].text?this.options.allow_single_deselect:!1,this.disable_search_threshold=this.options.disable_search_threshold||0,this.disable_search=this.options.disable_search||!1,this.enable_split_word_search=null!=this.options.enable_split_word_search?this.options.enable_split_word_search:!0,this.group_search=null!=this.options.group_search?this.options.group_search:!0,this.search_contains=this.options.search_contains||!1,this.single_backstroke_delete=null!=this.options.single_backstroke_delete?this.options.single_backstroke_delete:!0,this.max_selected_options=this.options.max_selected_options||1/0,this.drop_direction=this.options.drop_direction||"auto",this.middle_highlight=this.options.middle_highlight,this.inherit_select_classes=this.options.inherit_select_classes||!1,this.display_selected_options=null!=this.options.display_selected_options?this.options.display_selected_options:!0,this.display_disabled_options=null!=this.options.display_disabled_options?this.options.display_disabled_options:!0},e.prototype.set_default_text=function(){return this.form_field.getAttribute("data-placeholder")?this.default_text=this.form_field.getAttribute("data-placeholder"):this.is_multiple?this.default_text=this.options.placeholder_text_multiple||this.options.placeholder_text||e.default_multiple_text:this.default_text=this.options.placeholder_text_single||this.options.placeholder_text||e.default_single_text,this.results_none_found=this.form_field.getAttribute("data-no_results_text")||this.options.no_results_text||this.lang.no_results_text||e.default_no_result_text},e.prototype.mouse_enter=function(){return this.mouse_on_container=!0},e.prototype.mouse_leave=function(){return this.mouse_on_container=!1},e.prototype.input_focus=function(t){var e=this;if(this.is_multiple){if(!this.active_field)return setTimeout(function(){return e.container_mousedown()},50)}else if(!this.active_field)return this.activate_field()},e.prototype.input_blur=function(t){var e=this;return this.mouse_on_container?void 0:(this.active_field=!1,setTimeout(function(){return e.blur_test()},100))},e.prototype.results_option_build=function(t){var e,s,i,r,o;for(e="",o=this.results_data,i=0,r=o.length;r>i;i++)s=o[i],e+=s.group?this.result_add_group(s):this.result_add_option(s),(null!=t?t.first:void 0)&&(s.selected&&this.is_multiple?this.choice_build(s):s.selected&&!this.is_multiple&&this.single_set_selected_text(s.text));return e},e.prototype.result_add_option=function(t){var e,s;return t.search_match&&this.include_option_in_results(t)?(e=[],t.disabled||t.selected&&this.is_multiple||e.push("active-result"),!t.disabled||t.selected&&this.is_multiple||e.push("disabled-result"),t.selected&&e.push("result-selected"),null!=t.group_array_index&&e.push("group-option"),""!==t.classes&&e.push(t.classes),s=document.createElement("li"),s.className=e.join(" "),s.style.cssText=t.style,s.title=t.title,s.setAttribute("data-option-array-index",t.array_index),s.innerHTML=t.search_text,this.outerHTML(s)):""},e.prototype.result_add_group=function(t){var e;return(t.search_match||t.group_match)&&t.active_options>0?(e=document.createElement("li"),e.className="group-result",e.title=t.title,e.innerHTML=t.search_text,this.outerHTML(e)):""},e.prototype.results_update_field=function(){return this.set_default_text(),this.is_multiple||this.results_reset_cleanup(),this.result_clear_highlight(),this.results_build(),this.results_showing?this.winnow_results():void 0},e.prototype.reset_single_select_options=function(){var t,e,s,i,r;for(i=this.results_data,r=[],e=0,s=i.length;s>e;e++)t=i[e],t.selected?r.push(t.selected=!1):r.push(void 0);return r},e.prototype.results_toggle=function(){return this.results_showing?this.results_hide():this.results_show()},e.prototype.results_search=function(t){return this.results_showing?this.winnow_results(1):this.results_show()},e.prototype.winnow_results=function(t){var e,s,i,r,o,h,n,l,c,a,_,u,d;for(this.no_results_clear(),o=0,n=this.get_search_text(),e=n.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"),r=this.search_contains?"":"^",i=new RegExp(r+e,"i"),a=new RegExp(e,"i"),d=this.results_data,_=0,u=d.length;u>_;_++)s=d[_],s.search_match=!1,h=null,this.include_option_in_results(s)&&(s.group&&(s.group_match=!1,s.active_options=0),null!=s.group_array_index&&this.results_data[s.group_array_index]&&(h=this.results_data[s.group_array_index],0===h.active_options&&h.search_match&&(o+=1),h.active_options+=1),(!s.group||this.group_search)&&(s.search_text=s.group?s.label:s.html,s.search_keys_match=this.search_string_match(s.search_keys,i),s.search_text_match=this.search_string_match(s.search_text,i),s.search_match=s.search_text_match||s.search_keys_match,s.search_match&&!s.group&&(o+=1),s.search_match?(s.search_text_match&&s.search_text.length?(l=s.search_text.search(a),c=s.search_text.substr(0,l+n.length)+"</em>"+s.search_text.substr(l+n.length),s.search_text=c.substr(0,l)+"<em>"+c.substr(l)):s.search_keys_match&&s.search_keys.length&&(l=s.search_keys.search(a),c=s.search_keys.substr(0,l+n.length)+"</em>"+s.search_keys.substr(l+n.length),s.search_text+="&nbsp; <small style=\"opacity: 0.7\">"+c.substr(0,l)+"<em>"+c.substr(l)+"</small>"),null!=h&&(h.group_match=!0)):null!=s.group_array_index&&this.results_data[s.group_array_index].search_match&&(s.search_match=!0)));return this.result_clear_highlight(),1>o&&n.length?(this.update_results_content(""),this.no_results(n)):(this.update_results_content(this.results_option_build()),this.winnow_results_set_highlight(t))},e.prototype.search_string_match=function(t,e){var s,i,r,o;if(e.test(t))return!0;if(this.enable_split_word_search&&(t.indexOf(" ")>=0||0===t.indexOf("["))&&(i=t.replace(/\[|\]/g,"").split(" "),i.length))for(r=0,o=i.length;o>r;r++)if(s=i[r],e.test(s))return!0},e.prototype.choices_count=function(){var t,e,s,i;if(null!=this.selected_option_count)return this.selected_option_count;for(this.selected_option_count=0,i=this.form_field.options,e=0,s=i.length;s>e;e++)t=i[e],t.selected&&""!=t.value&&(this.selected_option_count+=1);return this.selected_option_count},e.prototype.choices_click=function(t){return t.preventDefault(),this.results_showing||this.is_disabled?void 0:this.results_show()},e.prototype.keyup_checker=function(t){var e,s;switch(e=null!=(s=t.which)?s:t.keyCode,this.search_field_scale(),e){case 8:if(this.is_multiple&&this.backstroke_length<1&&this.choices_count()>0)return this.keydown_backstroke();if(!this.pending_backstroke)return this.result_clear_highlight(),this.results_search();break;case 13:if(t.preventDefault(),this.results_showing)return this.result_select(t);break;case 27:return this.results_showing&&this.results_hide(),!0;case 9:case 38:case 40:case 16:case 91:case 17:break;default:return this.results_search()}},e.prototype.clipboard_event_checker=function(t){var e=this;return setTimeout(function(){return e.results_search()},50)},e.prototype.container_width=function(){return null!=this.options.width?this.options.width:""+this.form_field.offsetWidth+"px"},e.prototype.include_option_in_results=function(t){return this.is_multiple&&!this.display_selected_options&&t.selected?!1:!this.display_disabled_options&&t.disabled?!1:t.empty?!1:!0},e.prototype.search_results_touchstart=function(t){return this.touch_started=!0,this.search_results_mouseover(t)},e.prototype.search_results_touchmove=function(t){return this.touch_started=!1,this.search_results_mouseout(t)},e.prototype.search_results_touchend=function(t){return this.touch_started?this.search_results_mouseup(t):void 0},e.prototype.outerHTML=function(t){var e;return t.outerHTML?t.outerHTML:(e=document.createElement("div"),e.appendChild(t),e.innerHTML)},e.browser_is_supported=function(){return"Microsoft Internet Explorer"===window.navigator.appName?document.documentMode>=8:/iP(od|hone)/i.test(window.navigator.userAgent)?!1:/Android/i.test(window.navigator.userAgent)&&/Mobile/i.test(window.navigator.userAgent)?!1:!0},e.default_multiple_text="",e.default_single_text="",e.default_no_result_text="No results match",e}(),t=jQuery,t.fn.extend({chosen:function(i){return e.browser_is_supported()?this.each(function(e){var r,o;r=t(this),o=r.data("chosen"),"destroy"===i&&o?o.destroy():o||r.data("chosen",new s(this,i))}):this}}),s=function(e){function s(){return r=s.__super__.constructor.apply(this,arguments)}return h(s,e),s.prototype.setup=function(){return this.form_field_jq=t(this.form_field),this.current_selectedIndex=this.form_field.selectedIndex,this.is_rtl=this.form_field_jq.hasClass("chosen-rtl")},s.prototype.set_up_html=function(){var e,s;e=["chosen-container"],e.push("chosen-container-"+(this.is_multiple?"multi":"single")),this.inherit_select_classes&&this.form_field.className&&e.push(this.form_field.className),this.is_rtl&&e.push("chosen-rtl");var i=this.form_field.getAttribute("data-css-class");return i&&e.push(i),s={"class":e.join(" "),style:"width: "+this.container_width()+";",title:this.form_field.title},this.form_field.id.length&&(s.id=this.form_field.id.replace(/[^\w]/g,"_")+"_chosen"),this.container=t("<div />",s),this.is_multiple?this.container.html("<ul class=\"chosen-choices\"><li class=\"search-field\"><input type=\"text\" value=\""+this.default_text+"\" class=\"default\" autocomplete=\"off\" style=\"width:25px;\" /></li></ul><div class=\"chosen-drop\"><ul class=\"chosen-results\"></ul></div>"):this.container.html("<a class=\"chosen-single chosen-default\" tabindex=\"-1\"><span>"+this.default_text+"</span><div><b></b></div></a><div class=\"chosen-drop\"><div class=\"chosen-search\"><input type=\"text\" autocomplete=\"off\" /></div><ul class=\"chosen-results\"></ul></div>"),this.form_field_jq.hide().after(this.container),this.dropdown=this.container.find("div.chosen-drop").first(),this.search_field=this.container.find("input").first(),this.search_results=this.container.find("ul.chosen-results").first(),this.search_field_scale(),this.search_no_results=this.container.find("li.no-results").first(),this.is_multiple?(this.search_choices=this.container.find("ul.chosen-choices").first(),this.search_container=this.container.find("li.search-field").first()):(this.search_container=this.container.find("div.chosen-search").first(),this.selected_item=this.container.find(".chosen-single").first()),this.options.drop_width&&this.dropdown.css("width",this.options.drop_width).addClass("chosen-drop-size-limited"),this.results_build(),this.set_tab_index(),this.set_label_behavior(),this.form_field_jq.trigger("chosen:ready",{chosen:this})},s.prototype.register_observers=function(){var t=this;return this.container.bind("mousedown.chosen",function(e){t.container_mousedown(e)}),this.container.bind("mouseup.chosen",function(e){t.container_mouseup(e)}),this.container.bind("mouseenter.chosen",function(e){t.mouse_enter(e)}),this.container.bind("mouseleave.chosen",function(e){t.mouse_leave(e)}),this.search_results.bind("mouseup.chosen",function(e){t.search_results_mouseup(e)}),this.search_results.bind("mouseover.chosen",function(e){t.search_results_mouseover(e)}),this.search_results.bind("mouseout.chosen",function(e){t.search_results_mouseout(e)}),this.search_results.bind("mousewheel.chosen DOMMouseScroll.chosen",function(e){t.search_results_mousewheel(e)}),this.search_results.bind("touchstart.chosen",function(e){t.search_results_touchstart(e)}),this.search_results.bind("touchmove.chosen",function(e){t.search_results_touchmove(e)}),this.search_results.bind("touchend.chosen",function(e){t.search_results_touchend(e)}),this.form_field_jq.bind("chosen:updated.chosen",function(e){t.results_update_field(e)}),this.form_field_jq.bind("chosen:activate.chosen",function(e){t.activate_field(e)}),this.form_field_jq.bind("chosen:open.chosen",function(e){t.container_mousedown(e)}),this.form_field_jq.bind("chosen:close.chosen",function(e){t.input_blur(e)}),this.search_field.bind("blur.chosen",function(e){t.input_blur(e)}),this.search_field.bind("keyup.chosen",function(e){t.keyup_checker(e)}),this.search_field.bind("keydown.chosen",function(e){t.keydown_checker(e)}),this.search_field.bind("focus.chosen",function(e){t.input_focus(e)}),this.search_field.bind("cut.chosen",function(e){t.clipboard_event_checker(e)}),this.search_field.bind("paste.chosen",function(e){t.clipboard_event_checker(e)}),this.is_multiple?this.search_choices.bind("click.chosen",function(e){t.choices_click(e)}):this.container.bind("click.chosen",function(t){t.preventDefault()})},s.prototype.destroy=function(){return t(this.container[0].ownerDocument).unbind("click.chosen",this.click_test_action),this.search_field[0].tabIndex&&(this.form_field_jq[0].tabIndex=this.search_field[0].tabIndex),this.container.remove(),this.form_field_jq.removeData("chosen"),this.form_field_jq.show()},s.prototype.search_field_disabled=function(){return this.is_disabled=this.form_field_jq[0].disabled,this.is_disabled?(this.container.addClass("chosen-disabled"),this.search_field[0].disabled=!0,this.is_multiple||this.selected_item.unbind("focus.chosen",this.activate_action),this.close_field()):(this.container.removeClass("chosen-disabled"),this.search_field[0].disabled=!1,this.is_multiple?void 0:this.selected_item.bind("focus.chosen",this.activate_action))},s.prototype.container_mousedown=function(e){return this.is_disabled||(e&&"mousedown"===e.type&&!this.results_showing&&e.preventDefault(),null!=e&&t(e.target).hasClass("search-choice-close"))?void 0:(this.active_field?this.is_multiple||!e||t(e.target)[0]!==this.selected_item[0]&&!t(e.target).parents("a.chosen-single").length||(e.preventDefault(),this.results_toggle()):(this.is_multiple&&this.search_field.val(""),t(this.container[0].ownerDocument).bind("click.chosen",this.click_test_action),this.results_show()),this.activate_field())},s.prototype.container_mouseup=function(t){return"ABBR"!==t.target.nodeName||this.is_disabled?void 0:this.results_reset(t)},s.prototype.search_results_mousewheel=function(t){var e;return t.originalEvent&&(e=-t.originalEvent.wheelDelta||t.originalEvent.detail),null!=e?(t.preventDefault(),"DOMMouseScroll"===t.type&&(e=40*e),this.search_results.scrollTop(e+this.search_results.scrollTop())):void 0},s.prototype.blur_test=function(t){return!this.active_field&&this.container.hasClass("chosen-container-active")?this.close_field():void 0},s.prototype.close_field=function(){return t(this.container[0].ownerDocument).unbind("click.chosen",this.click_test_action),this.active_field=!1,this.results_hide(),this.container.removeClass("chosen-container-active"),this.clear_backstroke(),this.show_search_field_default(),this.search_field_scale()},s.prototype.activate_field=function(){return this.container.addClass("chosen-container-active"),this.active_field=!0,this.search_field.val(this.search_field.val()),this.search_field.focus()},s.prototype.test_active_click=function(e){var s;return s=t(e.target).closest(".chosen-container"),s.length&&this.container[0]===s[0]?this.active_field=!0:this.close_field()},s.prototype.results_build=function(){return this.parsing=!0,this.selected_option_count=null,this.results_data=i.select_to_array(this.form_field),this.is_multiple?this.search_choices.find("li.search-choice").remove():this.is_multiple||(this.single_set_selected_text(),this.disable_search||this.form_field.options.length<=this.disable_search_threshold?(this.search_field[0].readOnly=!0,this.container.addClass("chosen-container-single-nosearch")):(this.search_field[0].readOnly=!1,this.container.removeClass("chosen-container-single-nosearch"))),this.update_results_content(this.results_option_build({first:!0})),this.search_field_disabled(),this.show_search_field_default(),this.search_field_scale(),this.parsing=!1},s.prototype.result_do_highlight=function(t,e){var s,i,r,o,h,n,l=-1;t.length&&(this.result_clear_highlight(),this.result_highlight=t,this.result_highlight.addClass("highlighted"),r=parseInt(this.search_results.css("maxHeight"),10),n=this.result_highlight.outerHeight(),h=this.search_results.scrollTop(),o=r+h,i=this.result_highlight.position().top+this.search_results.scrollTop(),s=i+n,this.middle_highlight&&(e||"always"===this.middle_highlight||s>=o||h>i)?l=Math.min(i-n,Math.max(0,i-(r-n)/2)):s>=o?l=s-r>0?s-r:0:h>i&&(l=i),l>-1&&this.search_results.scrollTop(l))},s.prototype.result_clear_highlight=function(){return this.result_highlight&&this.result_highlight.removeClass("highlighted"),this.result_highlight=null},s.prototype.results_show=function(){if(this.is_multiple&&this.max_selected_options<=this.choices_count())return this.form_field_jq.trigger("chosen:maxselected",{chosen:this}),!1;this.container.addClass("chosen-with-drop"),this.results_showing=!0,this.search_field.focus(),this.search_field.val(this.search_field.val()),this.winnow_results(1);var e=this.drop_direction;if("auto"===e){var s=this.container.find(".chosen-drop"),i=this.container.offset();i.top+s.outerHeight()+30>t(window).height()+t(window).scrollTop()&&(e="up")}return this.container.toggleClass("chosen-up","up"===e),this.form_field_jq.trigger("chosen:showing_dropdown",{chosen:this})},s.prototype.update_results_content=function(t){return this.search_results.html(t)},s.prototype.results_hide=function(){return this.results_showing&&(this.result_clear_highlight(),this.container.removeClass("chosen-with-drop"),this.form_field_jq.trigger("chosen:hiding_dropdown",{chosen:this})),this.results_showing=!1},s.prototype.set_tab_index=function(t){var e;return this.form_field.tabIndex?(e=this.form_field.tabIndex,this.form_field.tabIndex=-1,this.search_field[0].tabIndex=e):void 0},s.prototype.set_label_behavior=function(){var e=this;return this.form_field_label=this.form_field_jq.parents("label"),!this.form_field_label.length&&this.form_field.id.length&&(this.form_field_label=t("label[for='"+this.form_field.id+"']")),this.form_field_label.length>0?this.form_field_label.bind("click.chosen",function(t){return e.is_multiple?e.container_mousedown(t):e.activate_field()}):void 0},s.prototype.show_search_field_default=function(){return this.is_multiple&&this.choices_count()<1&&!this.active_field?(this.search_field.val(this.default_text),this.search_field.addClass("default")):(this.search_field.val(""),this.search_field.removeClass("default"))},s.prototype.search_results_mouseup=function(e){var s;return s=t(e.target).hasClass("active-result")?t(e.target):t(e.target).parents(".active-result").first(),s.length?(this.result_highlight=s,this.result_select(e),this.search_field.focus()):void 0},s.prototype.search_results_mouseover=function(e){var s;return s=t(e.target).hasClass("active-result")?t(e.target):t(e.target).parents(".active-result").first(),s?this.result_do_highlight(s):void 0},s.prototype.search_results_mouseout=function(e){return t(e.target).hasClass("active-result")?this.result_clear_highlight():void 0},s.prototype.choice_build=function(e){var s,i,r=this;return s=t("<li />",{"class":"search-choice"}).html("<span title='"+e.html+"'>"+e.html+"</span>"),e.disabled?s.addClass("search-choice-disabled"):(i=t("<a />",{"class":"search-choice-close","data-option-array-index":e.array_index}),i.bind("click.chosen",function(t){return r.choice_destroy_link_click(t)}),s.append(i)),this.search_container.before(s)},s.prototype.choice_destroy_link_click=function(e){return e.preventDefault(),e.stopPropagation(),this.is_disabled?void 0:this.choice_destroy(t(e.target))},s.prototype.choice_destroy=function(t){return this.result_deselect(t[0].getAttribute("data-option-array-index"))?(this.show_search_field_default(),this.is_multiple&&this.choices_count()>0&&this.search_field.val().length<1&&this.results_hide(),t.parents("li").first().remove(),this.search_field_scale()):void 0},s.prototype.results_reset=function(){return this.reset_single_select_options(),this.form_field.options[0].selected=!0,this.single_set_selected_text(),this.show_search_field_default(),this.results_reset_cleanup(),this.form_field_jq.trigger("change"),this.active_field?this.results_hide():void 0},s.prototype.results_reset_cleanup=function(){return this.current_selectedIndex=this.form_field.selectedIndex,this.selected_item.find("abbr").remove()},s.prototype.result_select=function(t){var e,s;return this.result_highlight?(e=this.result_highlight,this.result_clear_highlight(),this.is_multiple&&this.max_selected_options<=this.choices_count()?(this.form_field_jq.trigger("chosen:maxselected",{chosen:this}),!1):(this.is_multiple?e.removeClass("active-result"):this.reset_single_select_options(),s=this.results_data[e[0].getAttribute("data-option-array-index")],s.selected=!0,this.form_field.options[s.options_index].selected=!0,this.selected_option_count=null,this.is_multiple?this.choice_build(s):this.single_set_selected_text(s.text),(t.metaKey||t.ctrlKey)&&this.is_multiple||this.results_hide(),this.search_field.val(""),(this.is_multiple||this.form_field.selectedIndex!==this.current_selectedIndex)&&this.form_field_jq.trigger("change",{selected:this.form_field.options[s.options_index].value}),this.current_selectedIndex=this.form_field.selectedIndex,this.search_field_scale())):void 0},s.prototype.single_set_selected_text=function(t){return null==t&&(t=this.default_text),t===this.default_text?this.selected_item.addClass("chosen-default"):(this.single_deselect_control_build(),this.selected_item.removeClass("chosen-default")),this.selected_item.find("span").attr("title",t).text(t)},s.prototype.result_deselect=function(t){var e;return e=this.results_data[t],this.form_field.options[e.options_index].disabled?!1:(e.selected=!1,this.form_field.options[e.options_index].selected=!1,this.selected_option_count=null,this.result_clear_highlight(),this.results_showing&&this.winnow_results(),this.form_field_jq.trigger("change",{deselected:this.form_field.options[e.options_index].value}),this.search_field_scale(),!0)},s.prototype.single_deselect_control_build=function(){return this.allow_single_deselect?(this.selected_item.find("abbr").length||this.selected_item.find("span").first().after("<abbr class=\"search-choice-close\"></abbr>"),this.selected_item.addClass("chosen-single-with-deselect")):void 0},s.prototype.get_search_text=function(){return this.search_field.val()===this.default_text?"":t("<div/>").text(t.trim(this.search_field.val())).html()},s.prototype.winnow_results_set_highlight=function(t){var e,s;return s=this.is_multiple?[]:this.search_results.find(".result-selected.active-result"),e=s.length?s.first():this.search_results.find(".active-result").first(),null!=e?this.result_do_highlight(e,t):void 0},s.prototype.no_results=function(e){var s;return s=t("<li class=\"no-results\">"+this.results_none_found+" \"<span></span>\"</li>"),s.find("span").first().html(e),this.search_results.append(s),this.form_field_jq.trigger("chosen:no_results",{chosen:this})},s.prototype.no_results_clear=function(){return this.search_results.find(".no-results").remove()},s.prototype.keydown_arrow=function(){var t;return this.results_showing&&this.result_highlight?(t=this.result_highlight.nextAll("li.active-result").first())?this.result_do_highlight(t):void 0:this.results_show()},s.prototype.keyup_arrow=function(){var t;return this.results_showing||this.is_multiple?this.result_highlight?(t=this.result_highlight.prevAll("li.active-result"),t.length?this.result_do_highlight(t.first()):(this.choices_count()>0&&this.results_hide(),this.result_clear_highlight())):void 0:this.results_show()},s.prototype.keydown_backstroke=function(){var t;return this.pending_backstroke?(this.choice_destroy(this.pending_backstroke.find("a").first()),this.clear_backstroke()):(t=this.search_container.siblings("li.search-choice").last(),t.length&&!t.hasClass("search-choice-disabled")?(this.pending_backstroke=t,this.single_backstroke_delete?this.keydown_backstroke():this.pending_backstroke.addClass("search-choice-focus")):void 0)},s.prototype.clear_backstroke=function(){return this.pending_backstroke&&this.pending_backstroke.removeClass("search-choice-focus"),this.pending_backstroke=null},s.prototype.keydown_checker=function(t){var e,s;switch(e=null!=(s=t.which)?s:t.keyCode,this.search_field_scale(),8!==e&&this.pending_backstroke&&this.clear_backstroke(),e){case 8:this.backstroke_length=this.search_field.val().length;break;case 9:this.results_showing&&!this.is_multiple&&this.result_select(t),this.mouse_on_container=!1;break;case 13:t.preventDefault();break;case 38:t.preventDefault(),this.keyup_arrow();break;case 40:t.preventDefault(),this.keydown_arrow()}},s.prototype.search_field_scale=function(){var e,s,i,r,o,h,n,l,c;if(this.is_multiple){for(i=0,n=0,o="position:absolute; left: -1000px; top: -1000px; display:none;",h=["font-size","font-style","font-weight","font-family","line-height","text-transform","letter-spacing"],l=0,c=h.length;c>l;l++)r=h[l],o+=r+":"+this.search_field.css(r)+";";return e=t("<div />",{style:o}),e.text(this.search_field.val()),t("body").append(e),n=e.width()+25,e.remove(),s=this.container.outerWidth(),n>s-10&&(n=s-10),this.search_field.css({width:n+"px"})}},s}(e)}).call(this);/*!
 * ZUI: Chart.js - v1.5.0 - 2016-11-01
 * http://zui.sexy
 * GitHub: https://github.com/easysoft/zui.git 
 * Copyright (c) 2016 cnezsoft.com; Licensed MIT
 */
/*!
 * Chart.js 1.0.2 
 * Copyright 2015 Nick Downie
 * Released under the MIT license
 * http://chartjs.org/
 */
(function(t){"use strict";var i=t&&t.zui?t.zui:this,e=(i.Chart,function(t){this.canvas=t.canvas,this.ctx=t;var i=function(t,i){return t["offset"+i]?t["offset"+i]:document.defaultView.getComputedStyle(t).getPropertyValue(i)},e=this.width=i(t.canvas,"Width"),n=this.height=i(t.canvas,"Height");t.canvas.width=e,t.canvas.height=n;var e=this.width=t.canvas.width,n=this.height=t.canvas.height;return this.aspectRatio=this.width/this.height,s.retinaScale(this),this});e.defaults={global:{animation:!0,animationSteps:60,animationEasing:"easeOutQuart",showScale:!0,scaleOverride:!1,scaleSteps:null,scaleStepWidth:null,scaleStartValue:null,scaleLineColor:"rgba(0,0,0,.1)",scaleLineWidth:1,scaleShowLabels:!0,scaleLabel:"<%=value%>",scaleIntegersOnly:!0,scaleBeginAtZero:!1,scaleFontFamily:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",scaleFontSize:12,scaleFontStyle:"normal",scaleFontColor:"#666",responsive:!1,maintainAspectRatio:!0,showTooltips:!0,customTooltips:!1,tooltipEvents:["mousemove","touchstart","touchmove","mouseout"],tooltipFillColor:"rgba(0,0,0,0.8)",tooltipFontFamily:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",tooltipFontSize:14,tooltipFontStyle:"normal",tooltipFontColor:"#fff",tooltipTitleFontFamily:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",tooltipTitleFontSize:14,tooltipTitleFontStyle:"bold",tooltipTitleFontColor:"#fff",tooltipYPadding:6,tooltipXPadding:6,tooltipCaretSize:8,tooltipCornerRadius:6,tooltipXOffset:10,tooltipTemplate:"<%if (label){%><%=label%>: <%}%><%= value %>",multiTooltipTemplate:"<%= value %>",multiTooltipKeyBackground:"#fff",onAnimationProgress:function(){},onAnimationComplete:function(){}}},e.types={};var s=e.helpers={},n=s.each=function(t,i,e){var s=Array.prototype.slice.call(arguments,3);if(t)if(t.length===+t.length){var n;for(n=0;n<t.length;n++)i.apply(e,[t[n],n].concat(s))}else for(var o in t)i.apply(e,[t[o],o].concat(s))},o=s.clone=function(t){var i={};return n(t,function(e,s){t.hasOwnProperty(s)&&(i[s]=e)}),i},a=s.extend=function(t){return n(Array.prototype.slice.call(arguments,1),function(i){n(i,function(e,s){i.hasOwnProperty(s)&&(t[s]=e)})}),t},h=s.merge=function(t,i){var e=Array.prototype.slice.call(arguments,0);return e.unshift({}),a.apply(null,e)},l=s.indexOf=function(t,i){if(Array.prototype.indexOf)return t.indexOf(i);for(var e=0;e<t.length;e++)if(t[e]===i)return e;return-1},r=(s.where=function(t,i){var e=[];return s.each(t,function(t){i(t)&&e.push(t)}),e},s.findNextWhere=function(t,i,e){e||(e=-1);for(var s=e+1;s<t.length;s++){var n=t[s];if(i(n))return n}},s.findPreviousWhere=function(t,i,e){e||(e=t.length);for(var s=e-1;s>=0;s--){var n=t[s];if(i(n))return n}},s.inherits=function(t){var i=this,e=t&&t.hasOwnProperty("constructor")?t.constructor:function(){return i.apply(this,arguments)},s=function(){this.constructor=e};return s.prototype=i.prototype,e.prototype=new s,e.extend=r,t&&a(e.prototype,t),e.__super__=i.prototype,e}),c=s.noop=function(){},u=s.uid=function(){var t=0;return function(){return"chart-"+t++}}(),d=s.warn=function(t){window.console&&"function"==typeof window.console.warn&&console.warn(t)},f=s.amd="function"==typeof define&&define.amd,p=s.isNumber=function(t){return!isNaN(parseFloat(t))&&isFinite(t)},g=s.max=function(t){return Math.max.apply(Math,t)},v=s.min=function(t){return Math.min.apply(Math,t)},x=(s.cap=function(t,i,e){if(p(i)){if(t>i)return i}else if(p(e)&&e>t)return e;return t},s.getDecimalPlaces=function(t){return t%1!==0&&p(t)?t.toString().split(".")[1].length:0}),m=s.radians=function(t){return t*(Math.PI/180)},y=(s.getAngleFromPoint=function(t,i){var e=i.x-t.x,s=i.y-t.y,n=Math.sqrt(e*e+s*s),o=2*Math.PI+Math.atan2(s,e);return 0>e&&0>s&&(o+=2*Math.PI),{angle:o,distance:n}},s.aliasPixel=function(t){return t%2===0?0:.5}),w=(s.splineCurve=function(t,i,e,s){var n=Math.sqrt(Math.pow(i.x-t.x,2)+Math.pow(i.y-t.y,2)),o=Math.sqrt(Math.pow(e.x-i.x,2)+Math.pow(e.y-i.y,2)),a=s*n/(n+o),h=s*o/(n+o);return{inner:{x:i.x-a*(e.x-t.x),y:i.y-a*(e.y-t.y)},outer:{x:i.x+h*(e.x-t.x),y:i.y+h*(e.y-t.y)}}},s.calculateOrderOfMagnitude=function(t){return Math.floor(Math.log(t)/Math.LN10)}),S=(s.calculateScaleRange=function(t,i,e,s,n){var o=2,a=Math.floor(i/(1.5*e)),h=o>=a,l=g(t),r=v(t);l===r&&(l+=.5,r>=.5&&!s?r-=.5:l+=.5);for(var c=Math.abs(l-r),u=w(c),d=Math.ceil(l/(1*Math.pow(10,u)))*Math.pow(10,u),f=s?0:Math.floor(r/(1*Math.pow(10,u)))*Math.pow(10,u),p=d-f,x=Math.pow(10,u),m=Math.round(p/x);(m>a||a>2*m)&&!h;)if(m>a)x*=2,m=Math.round(p/x),m%1!==0&&(h=!0);else if(n&&u>=0){if(x/2%1!==0)break;x/=2,m=Math.round(p/x)}else x/=2,m=Math.round(p/x);return h&&(m=o,x=p/m),{steps:m,stepValue:x,min:f,max:f+m*x}},s.template=function(t,i){function e(t,i){var e=/\W/.test(t)?new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('"+t.replace(/[\r\t\n]/g," ").split("<%").join("	").replace(/((^|%>)[^\t]*)'/g,"$1\r").replace(/\t=(.*?)%>/g,"',$1,'").split("	").join("');").split("%>").join("p.push('").split("\r").join("\\'")+"');}return p.join('');"):s[t]=s[t];return i?e(i):e}if(t instanceof Function)return t(i);var s={};return e(t,i)}),C=(s.generateLabels=function(t,i,e,s){var o=new Array(i);return labelTemplateString&&n(o,function(i,n){o[n]=S(t,{value:e+s*(n+1)})}),o},s.easingEffects={linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return-1*t*(t-2)},easeInOutQuad:function(t){return(t/=.5)<1?.5*t*t:-0.5*(--t*(t-2)-1)},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return 1*((t=t/1-1)*t*t+1)},easeInOutCubic:function(t){return(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return-1*((t=t/1-1)*t*t*t-1)},easeInOutQuart:function(t){return(t/=.5)<1?.5*t*t*t*t:-0.5*((t-=2)*t*t*t-2)},easeInQuint:function(t){return 1*(t/=1)*t*t*t*t},easeOutQuint:function(t){return 1*((t=t/1-1)*t*t*t*t+1)},easeInOutQuint:function(t){return(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},easeInSine:function(t){return-1*Math.cos(t/1*(Math.PI/2))+1},easeOutSine:function(t){return 1*Math.sin(t/1*(Math.PI/2))},easeInOutSine:function(t){return-0.5*(Math.cos(Math.PI*t/1)-1)},easeInExpo:function(t){return 0===t?1:1*Math.pow(2,10*(t/1-1))},easeOutExpo:function(t){return 1===t?1:1*(-Math.pow(2,-10*t/1)+1)},easeInOutExpo:function(t){return 0===t?0:1===t?1:(t/=.5)<1?.5*Math.pow(2,10*(t-1)):.5*(-Math.pow(2,-10*--t)+2)},easeInCirc:function(t){return t>=1?t:-1*(Math.sqrt(1-(t/=1)*t)-1)},easeOutCirc:function(t){return 1*Math.sqrt(1-(t=t/1-1)*t)},easeInOutCirc:function(t){return(t/=.5)<1?-0.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},easeInElastic:function(t){var i=1.70158,e=0,s=1;return 0===t?0:1==(t/=1)?1:(e||(e=.3),s<Math.abs(1)?(s=1,i=e/4):i=e/(2*Math.PI)*Math.asin(1/s),-(s*Math.pow(2,10*(t-=1))*Math.sin((1*t-i)*(2*Math.PI)/e)))},easeOutElastic:function(t){var i=1.70158,e=0,s=1;return 0===t?0:1==(t/=1)?1:(e||(e=.3),s<Math.abs(1)?(s=1,i=e/4):i=e/(2*Math.PI)*Math.asin(1/s),s*Math.pow(2,-10*t)*Math.sin((1*t-i)*(2*Math.PI)/e)+1)},easeInOutElastic:function(t){var i=1.70158,e=0,s=1;return 0===t?0:2==(t/=.5)?1:(e||(e=1*(.3*1.5)),s<Math.abs(1)?(s=1,i=e/4):i=e/(2*Math.PI)*Math.asin(1/s),1>t?-.5*(s*Math.pow(2,10*(t-=1))*Math.sin((1*t-i)*(2*Math.PI)/e)):s*Math.pow(2,-10*(t-=1))*Math.sin((1*t-i)*(2*Math.PI)/e)*.5+1)},easeInBack:function(t){var i=1.70158;return 1*(t/=1)*t*((i+1)*t-i)},easeOutBack:function(t){var i=1.70158;return 1*((t=t/1-1)*t*((i+1)*t+i)+1)},easeInOutBack:function(t){var i=1.70158;return(t/=.5)<1?.5*(t*t*(((i*=1.525)+1)*t-i)):.5*((t-=2)*t*(((i*=1.525)+1)*t+i)+2)},easeInBounce:function(t){return 1-C.easeOutBounce(1-t)},easeOutBounce:function(t){return(t/=1)<1/2.75?1*(7.5625*t*t):2/2.75>t?1*(7.5625*(t-=1.5/2.75)*t+.75):2.5/2.75>t?1*(7.5625*(t-=2.25/2.75)*t+.9375):1*(7.5625*(t-=2.625/2.75)*t+.984375)},easeInOutBounce:function(t){return.5>t?.5*C.easeInBounce(2*t):.5*C.easeOutBounce(2*t-1)+.5}}),b=s.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return window.setTimeout(t,1e3/60)}}(),P=s.cancelAnimFrame=function(){return window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||window.msCancelAnimationFrame||function(t){return window.clearTimeout(t,1e3/60)}}(),L=(s.animationLoop=function(t,i,e,s,n,o){var a=0,h=C[e]||C.linear,l=function(){a++;var e=a/i,r=h(e);t.call(o,r,e,a),s.call(o,r,e),i>a?o.animationFrame=b(l):n.apply(o)};b(l)},s.getRelativePosition=function(t){var i,e,s=t.originalEvent||t,n=t.currentTarget||t.srcElement,o=n.getBoundingClientRect();return s.touches?(i=s.touches[0].clientX-o.left,e=s.touches[0].clientY-o.top):(i=s.clientX-o.left,e=s.clientY-o.top),{x:i,y:e}},s.addEvent=function(t,i,e){t.addEventListener?t.addEventListener(i,e):t.attachEvent?t.attachEvent("on"+i,e):t["on"+i]=e}),k=s.removeEvent=function(t,i,e){t.removeEventListener?t.removeEventListener(i,e,!1):t.detachEvent?t.detachEvent("on"+i,e):t["on"+i]=c},F=(s.bindEvents=function(t,i,e){t.events||(t.events={}),n(i,function(i){t.events[i]=function(){e.apply(t,arguments)},L(t.chart.canvas,i,t.events[i])})},s.unbindEvents=function(t,i){n(i,function(i,e){k(t.chart.canvas,e,i)})}),z=s.getMaximumWidth=function(t){var i=t.parentNode;return i.clientWidth},T=s.getMaximumHeight=function(t){var i=t.parentNode;return i.clientHeight},M=(s.getMaximumSize=s.getMaximumWidth,s.retinaScale=function(t){var i=t.ctx,e=t.canvas.width,s=t.canvas.height;window.devicePixelRatio&&(i.canvas.style.width=e+"px",i.canvas.style.height=s+"px",i.canvas.height=s*window.devicePixelRatio,i.canvas.width=e*window.devicePixelRatio,i.scale(window.devicePixelRatio,window.devicePixelRatio))}),R=s.clear=function(t){t.ctx.clearRect(0,0,t.width,t.height)},A=s.fontString=function(t,i,e){return i+" "+t+"px "+e},W=s.longestText=function(t,i,e){t.font=i;var s=0;return n(e,function(i){var e=t.measureText(i).width;s=e>s?e:s}),s},B=s.drawRoundedRectangle=function(t,i,e,s,n,o){t.beginPath(),t.moveTo(i+o,e),t.lineTo(i+s-o,e),t.quadraticCurveTo(i+s,e,i+s,e+o),t.lineTo(i+s,e+n-o),t.quadraticCurveTo(i+s,e+n,i+s-o,e+n),t.lineTo(i+o,e+n),t.quadraticCurveTo(i,e+n,i,e+n-o),t.lineTo(i,e+o),t.quadraticCurveTo(i,e,i+o,e),t.closePath()};e.instances={},e.Type=function(t,i,s){this.options=i,this.chart=s,this.id=u(),e.instances[this.id]=this,i.responsive&&this.resize(),this.initialize.call(this,t)},a(e.Type.prototype,{initialize:function(){return this},clear:function(){return R(this.chart),this},stop:function(){return P(this.animationFrame),this},resize:function(t){this.stop();var i=this.chart.canvas,e=z(this.chart.canvas),s=this.options.maintainAspectRatio?e/this.chart.aspectRatio:T(this.chart.canvas);return i.width=this.chart.width=e,i.height=this.chart.height=s,M(this.chart),"function"==typeof t&&t.apply(this,Array.prototype.slice.call(arguments,1)),this},reflow:c,render:function(t){return t&&this.reflow(),this.options.animation&&!t?s.animationLoop(this.draw,this.options.animationSteps,this.options.animationEasing,this.options.onAnimationProgress,this.options.onAnimationComplete,this):(this.draw(),this.options.onAnimationComplete.call(this)),this},generateLegend:function(){return S(this.options.legendTemplate,this)},destroy:function(){this.clear(),F(this,this.events);var t=this.chart.canvas;t.width=this.chart.width,t.height=this.chart.height,t.style.removeProperty?(t.style.removeProperty("width"),t.style.removeProperty("height")):(t.style.removeAttribute("width"),t.style.removeAttribute("height")),delete e.instances[this.id]},showTooltip:function(t,i){"undefined"==typeof this.activeElements&&(this.activeElements=[]);var o=function(t){var i=!1;return t.length!==this.activeElements.length?i=!0:(n(t,function(t,e){t!==this.activeElements[e]&&(i=!0)},this),i)}.call(this,t);if(o||i){if(this.activeElements=t,this.draw(),this.options.customTooltips&&this.options.customTooltips(!1),t.length>0)if(this.datasets&&this.datasets.length>1){for(var a,h,r=this.datasets.length-1;r>=0&&(a=this.datasets[r].points||this.datasets[r].bars||this.datasets[r].segments,h=l(a,t[0]),-1===h);r--);var c=[],u=[],d=function(t){var i,e,n,o,a,l=[],r=[],d=[];return s.each(this.datasets,function(t){t.showTooltips!==!1&&(i=t.points||t.bars||t.segments,i[h]&&i[h].hasValue()&&l.push(i[h]))}),s.each(l,function(t){r.push(t.x),d.push(t.y),c.push(s.template(this.options.multiTooltipTemplate,t)),u.push({fill:t._saved.fillColor||t.fillColor,stroke:t._saved.strokeColor||t.strokeColor})},this),a=v(d),n=g(d),o=v(r),e=g(r),{x:o>this.chart.width/2?o:e,y:(a+n)/2}}.call(this,h);new e.MultiTooltip({x:d.x,y:d.y,xPadding:this.options.tooltipXPadding,yPadding:this.options.tooltipYPadding,xOffset:this.options.tooltipXOffset,fillColor:this.options.tooltipFillColor,textColor:this.options.tooltipFontColor,fontFamily:this.options.tooltipFontFamily,fontStyle:this.options.tooltipFontStyle,fontSize:this.options.tooltipFontSize,titleTextColor:this.options.tooltipTitleFontColor,titleFontFamily:this.options.tooltipTitleFontFamily,titleFontStyle:this.options.tooltipTitleFontStyle,titleFontSize:this.options.tooltipTitleFontSize,cornerRadius:this.options.tooltipCornerRadius,labels:c,legendColors:u,legendColorBackground:this.options.multiTooltipKeyBackground,title:t[0].label,chart:this.chart,ctx:this.chart.ctx,custom:this.options.customTooltips}).draw()}else n(t,function(t){var i=t.tooltipPosition();new e.Tooltip({x:Math.round(i.x),y:Math.round(i.y),xPadding:this.options.tooltipXPadding,yPadding:this.options.tooltipYPadding,fillColor:this.options.tooltipFillColor,textColor:this.options.tooltipFontColor,fontFamily:this.options.tooltipFontFamily,fontStyle:this.options.tooltipFontStyle,fontSize:this.options.tooltipFontSize,caretHeight:this.options.tooltipCaretSize,cornerRadius:this.options.tooltipCornerRadius,text:S(this.options.tooltipTemplate,t),chart:this.chart,custom:this.options.customTooltips}).draw()},this);return this}},toBase64Image:function(){return this.chart.canvas.toDataURL.apply(this.chart.canvas,arguments)}}),e.Type.extend=function(t){var i=this,s=function(){return i.apply(this,arguments)};if(s.prototype=o(i.prototype),a(s.prototype,t),s.extend=e.Type.extend,t.name||i.prototype.name){var n=t.name||i.prototype.name,l=e.defaults[i.prototype.name]?o(e.defaults[i.prototype.name]):{};e.defaults[n]=a(l,t.defaults),e.types[n]=s,e.prototype[n]=function(t,i){var o=h(e.defaults.global,e.defaults[n],i||{});return new s(t,o,this)}}else d("Name not provided for this chart, so it hasn't been registered");return i},e.Element=function(t){a(this,t),this.initialize.apply(this,arguments),this.save()},a(e.Element.prototype,{initialize:function(){},restore:function(t){return t?n(t,function(t){this[t]=this._saved[t]},this):a(this,this._saved),this},save:function(){return this._saved=o(this),delete this._saved._saved,this},update:function(t){return n(t,function(t,i){this._saved[i]=this[i],this[i]=t},this),this},transition:function(t,i){return n(t,function(t,e){this[e]=(t-this._saved[e])*i+this._saved[e]},this),this},tooltipPosition:function(){return{x:this.x,y:this.y}},hasValue:function(){return p(this.value)}}),e.Element.extend=r,e.Point=e.Element.extend({display:!0,inRange:function(t,i){var e=this.hitDetectionRadius+this.radius;return Math.pow(t-this.x,2)+Math.pow(i-this.y,2)<Math.pow(e,2)},draw:function(){if(this.display){var t=this.ctx;t.beginPath(),t.arc(this.x,this.y,this.radius,0,2*Math.PI),t.closePath(),t.strokeStyle=this.strokeColor,t.lineWidth=this.strokeWidth,t.fillStyle=this.fillColor,t.fill(),t.stroke()}}}),e.Arc=e.Element.extend({inRange:function(t,i){var e=s.getAngleFromPoint(this,{x:t,y:i}),n=e.angle>=this.startAngle&&e.angle<=this.endAngle,o=e.distance>=this.innerRadius&&e.distance<=this.outerRadius;return n&&o},tooltipPosition:function(){var t=this.startAngle+(this.endAngle-this.startAngle)/2,i=(this.outerRadius-this.innerRadius)/2+this.innerRadius;return{x:this.x+Math.cos(t)*i,y:this.y+Math.sin(t)*i}},draw:function(t){var i=this.ctx;i.beginPath(),i.arc(this.x,this.y,this.outerRadius,this.startAngle,this.endAngle),i.arc(this.x,this.y,this.innerRadius,this.endAngle,this.startAngle,!0),i.closePath(),i.strokeStyle=this.strokeColor,i.lineWidth=this.strokeWidth,i.fillStyle=this.fillColor,i.fill(),i.lineJoin="bevel",this.showStroke&&i.stroke()}}),e.Rectangle=e.Element.extend({draw:function(){var t=this.ctx,i=this.width/2,e=this.x-i,s=this.x+i,n=this.base-(this.base-this.y),o=this.strokeWidth/2;this.showStroke&&(e+=o,s-=o,n+=o),t.beginPath(),t.fillStyle=this.fillColor,t.strokeStyle=this.strokeColor,t.lineWidth=this.strokeWidth,t.moveTo(e,this.base),t.lineTo(e,n),t.lineTo(s,n),t.lineTo(s,this.base),t.fill(),this.showStroke&&t.stroke()},height:function(){return this.base-this.y},inRange:function(t,i){return t>=this.x-this.width/2&&t<=this.x+this.width/2&&i>=this.y&&i<=this.base}}),e.Tooltip=e.Element.extend({draw:function(){var t=this.chart.ctx;t.font=A(this.fontSize,this.fontStyle,this.fontFamily),this.xAlign="center",this.yAlign="above";var i=this.caretPadding=2,e=t.measureText(this.text).width+2*this.xPadding,s=this.fontSize+2*this.yPadding,n=s+this.caretHeight+i;this.x+e/2>this.chart.width?this.xAlign="left":this.x-e/2<0&&(this.xAlign="right"),this.y-n<0&&(this.yAlign="below");var o=this.x-e/2,a=this.y-n;if(t.fillStyle=this.fillColor,this.custom)this.custom(this);else{switch(this.yAlign){case"above":t.beginPath(),t.moveTo(this.x,this.y-i),t.lineTo(this.x+this.caretHeight,this.y-(i+this.caretHeight)),t.lineTo(this.x-this.caretHeight,this.y-(i+this.caretHeight)),t.closePath(),t.fill();break;case"below":a=this.y+i+this.caretHeight,t.beginPath(),t.moveTo(this.x,this.y+i),t.lineTo(this.x+this.caretHeight,this.y+i+this.caretHeight),t.lineTo(this.x-this.caretHeight,this.y+i+this.caretHeight),t.closePath(),t.fill()}switch(this.xAlign){case"left":o=this.x-e+(this.cornerRadius+this.caretHeight);break;case"right":o=this.x-(this.cornerRadius+this.caretHeight)}B(t,o,a,e,s,this.cornerRadius),t.fill(),t.fillStyle=this.textColor,t.textAlign="center",t.textBaseline="middle",t.fillText(this.text,o+e/2,a+s/2)}}}),e.MultiTooltip=e.Element.extend({initialize:function(){this.font=A(this.fontSize,this.fontStyle,this.fontFamily),this.titleFont=A(this.titleFontSize,this.titleFontStyle,this.titleFontFamily),this.height=this.labels.length*this.fontSize+(this.labels.length-1)*(this.fontSize/2)+2*this.yPadding+1.5*this.titleFontSize,this.ctx.font=this.titleFont;var t=this.ctx.measureText(this.title).width,i=W(this.ctx,this.font,this.labels)+this.fontSize+3,e=g([i,t]);this.width=e+2*this.xPadding;var s=this.height/2;this.y-s<0?this.y=s:this.y+s>this.chart.height&&(this.y=this.chart.height-s),this.x>this.chart.width/2?this.x-=this.xOffset+this.width:this.x+=this.xOffset},getLineHeight:function(t){var i=this.y-this.height/2+this.yPadding,e=t-1;return 0===t?i+this.titleFontSize/2:i+(1.5*this.fontSize*e+this.fontSize/2)+1.5*this.titleFontSize},draw:function(){if(this.custom)this.custom(this);else{B(this.ctx,this.x,this.y-this.height/2,this.width,this.height,this.cornerRadius);var t=this.ctx;t.fillStyle=this.fillColor,t.fill(),t.closePath(),t.textAlign="left",t.textBaseline="middle",t.fillStyle=this.titleTextColor,t.font=this.titleFont,t.fillText(this.title,this.x+this.xPadding,this.getLineHeight(0)),t.font=this.font,s.each(this.labels,function(i,e){t.fillStyle=this.textColor,t.fillText(i,this.x+this.xPadding+this.fontSize+3,this.getLineHeight(e+1)),t.fillStyle=this.legendColorBackground,t.fillRect(this.x+this.xPadding,this.getLineHeight(e+1)-this.fontSize/2,this.fontSize,this.fontSize),t.fillStyle=this.legendColors[e].fill,t.fillRect(this.x+this.xPadding,this.getLineHeight(e+1)-this.fontSize/2,this.fontSize,this.fontSize)},this)}}}),e.Scale=e.Element.extend({initialize:function(){this.fit()},buildYLabels:function(){this.yLabels=[];for(var t=x(this.stepValue),i=0;i<=this.steps;i++)this.yLabels.push(S(this.templateString,{value:(this.min+i*this.stepValue).toFixed(t)}));this.yLabelWidth=this.display&&this.showLabels?W(this.ctx,this.font,this.yLabels):0},addXLabel:function(t){this.xLabels.push(t),this.valuesCount++,this.fit()},removeXLabel:function(){this.xLabels.shift(),this.valuesCount--,this.fit()},fit:function(){this.startPoint=this.display?this.fontSize:0,this.endPoint=this.display?this.height-1.5*this.fontSize-5:this.height,this.startPoint+=this.padding,this.endPoint-=this.padding;var t,i=this.endPoint-this.startPoint;for(this.calculateYRange(i),this.buildYLabels(),this.calculateXLabelRotation();i>this.endPoint-this.startPoint;)i=this.endPoint-this.startPoint,t=this.yLabelWidth,this.calculateYRange(i),this.buildYLabels(),t<this.yLabelWidth&&this.calculateXLabelRotation()},calculateXLabelRotation:function(){this.ctx.font=this.font;var t,i,e=this.ctx.measureText(this.xLabels[0]).width,s=this.ctx.measureText(this.xLabels[this.xLabels.length-1]).width;if(this.xScalePaddingRight=s/2+3,this.xScalePaddingLeft=e/2>this.yLabelWidth+10?e/2:this.yLabelWidth+10,this.xLabelRotation=0,this.display){var n,o=W(this.ctx,this.font,this.xLabels);this.xLabelWidth=o;for(var a=Math.floor(this.calculateX(1)-this.calculateX(0))-6;this.xLabelWidth>a&&0===this.xLabelRotation||this.xLabelWidth>a&&this.xLabelRotation<=90&&this.xLabelRotation>0;)n=Math.cos(m(this.xLabelRotation)),t=n*e,i=n*s,t+this.fontSize/2>this.yLabelWidth+8&&(this.xScalePaddingLeft=t+this.fontSize/2),this.xScalePaddingRight=this.fontSize/2,this.xLabelRotation++,this.xLabelWidth=n*o;this.xLabelRotation>0&&(this.endPoint-=Math.sin(m(this.xLabelRotation))*o+3)}else this.xLabelWidth=0,this.xScalePaddingRight=this.padding,this.xScalePaddingLeft=this.padding},calculateYRange:c,drawingArea:function(){return this.startPoint-this.endPoint},calculateY:function(t){var i=this.drawingArea()/(this.min-this.max);return this.endPoint-i*(t-this.min)},calculateX:function(t){var i=(this.xLabelRotation>0,this.width-(this.xScalePaddingLeft+this.xScalePaddingRight)),e=i/Math.max(this.valuesCount-(this.offsetGridLines?0:1),1),s=e*t+this.xScalePaddingLeft;return this.offsetGridLines&&(s+=e/2),Math.round(s)},update:function(t){s.extend(this,t),this.fit()},draw:function(){var t=this.ctx,i=(this.endPoint-this.startPoint)/this.steps,e=Math.round(this.xScalePaddingLeft);if(this.display){t.fillStyle=this.textColor,t.font=this.font;var o=this.showBeyondLine?5:0;n(this.yLabels,function(n,a){var h=this.endPoint-i*a,l=Math.round(h),r=this.showHorizontalLines;t.textAlign="right",t.textBaseline="middle",this.showLabels&&t.fillText(n,e-10,h),0!==a||r||(r=!0),r&&t.beginPath(),a>0?(t.lineWidth=this.gridLineWidth,t.strokeStyle=this.gridLineColor):(t.lineWidth=this.lineWidth,t.strokeStyle=this.lineColor),l+=s.aliasPixel(t.lineWidth),r&&(t.moveTo(e,l),t.lineTo(this.width,l),t.stroke(),t.closePath()),t.lineWidth=this.lineWidth,t.strokeStyle=this.lineColor,t.beginPath(),t.moveTo(e-o,l),t.lineTo(e,l),t.stroke(),t.closePath()},this),n(this.xLabels,function(i,e){var s=this.calculateX(e)+y(this.lineWidth),n=this.calculateX(e-(this.offsetGridLines?.5:0))+y(this.lineWidth),a=this.xLabelRotation>0,h=this.showVerticalLines;0!==e||h||(h=!0),h&&t.beginPath(),e>0?(t.lineWidth=this.gridLineWidth,t.strokeStyle=this.gridLineColor):(t.lineWidth=this.lineWidth,t.strokeStyle=this.lineColor),h&&(t.moveTo(n,this.endPoint),t.lineTo(n,this.startPoint-3),t.stroke(),t.closePath()),t.lineWidth=this.lineWidth,t.strokeStyle=this.lineColor,t.beginPath(),t.moveTo(n,this.endPoint),t.lineTo(n,this.endPoint+o),t.stroke(),t.closePath(),t.save(),t.translate(s,a?this.endPoint+12:this.endPoint+8),t.rotate(-1*m(this.xLabelRotation)),t.font=this.font,t.textAlign=a?"right":"center",t.textBaseline=a?"middle":"top",t.fillText(i,0,0),t.restore()},this)}}}),e.RadialScale=e.Element.extend({initialize:function(){this.size=v([this.height,this.width]),this.drawingArea=this.display?this.size/2-(this.fontSize/2+this.backdropPaddingY):this.size/2},calculateCenterOffset:function(t){var i=this.drawingArea/(this.max-this.min);return(t-this.min)*i},update:function(){this.lineArc?this.drawingArea=this.display?this.size/2-(this.fontSize/2+this.backdropPaddingY):this.size/2:this.setScaleSize(),this.buildYLabels()},buildYLabels:function(){this.yLabels=[];for(var t=x(this.stepValue),i=0;i<=this.steps;i++)this.yLabels.push(S(this.templateString,{value:(this.min+i*this.stepValue).toFixed(t)}))},getCircumference:function(){return 2*Math.PI/this.valuesCount},setScaleSize:function(){var t,i,e,s,n,o,a,h,l,r,c,u,d=v([this.height/2-this.pointLabelFontSize-5,this.width/2]),f=this.width,g=0;for(this.ctx.font=A(this.pointLabelFontSize,this.pointLabelFontStyle,this.pointLabelFontFamily),i=0;i<this.valuesCount;i++)t=this.getPointPosition(i,d),e=this.ctx.measureText(S(this.templateString,{value:this.labels[i]})).width+5,0===i||i===this.valuesCount/2?(s=e/2,t.x+s>f&&(f=t.x+s,n=i),t.x-s<g&&(g=t.x-s,a=i)):i<this.valuesCount/2?t.x+e>f&&(f=t.x+e,n=i):i>this.valuesCount/2&&t.x-e<g&&(g=t.x-e,a=i);l=g,r=Math.ceil(f-this.width),o=this.getIndexAngle(n),h=this.getIndexAngle(a),c=r/Math.sin(o+Math.PI/2),u=l/Math.sin(h+Math.PI/2),c=p(c)?c:0,u=p(u)?u:0,this.drawingArea=d-(u+c)/2,this.setCenterPoint(u,c)},setCenterPoint:function(t,i){var e=this.width-i-this.drawingArea,s=t+this.drawingArea;this.xCenter=(s+e)/2,this.yCenter=this.height/2},getIndexAngle:function(t){var i=2*Math.PI/this.valuesCount;return t*i-Math.PI/2},getPointPosition:function(t,i){var e=this.getIndexAngle(t);return{x:Math.cos(e)*i+this.xCenter,y:Math.sin(e)*i+this.yCenter}},draw:function(){if(this.display){var t=this.ctx;if(n(this.yLabels,function(i,e){if(e>0){var s,n=e*(this.drawingArea/this.steps),o=this.yCenter-n;if(this.lineWidth>0)if(t.strokeStyle=this.lineColor,t.lineWidth=this.lineWidth,this.lineArc)t.beginPath(),t.arc(this.xCenter,this.yCenter,n,0,2*Math.PI),t.closePath(),t.stroke();else{t.beginPath();for(var a=0;a<this.valuesCount;a++)s=this.getPointPosition(a,this.calculateCenterOffset(this.min+e*this.stepValue)),0===a?t.moveTo(s.x,s.y):t.lineTo(s.x,s.y);t.closePath(),t.stroke()}if(this.showLabels){if(t.font=A(this.fontSize,this.fontStyle,this.fontFamily),this.showLabelBackdrop){var h=t.measureText(i).width;t.fillStyle=this.backdropColor,t.fillRect(this.xCenter-h/2-this.backdropPaddingX,o-this.fontSize/2-this.backdropPaddingY,h+2*this.backdropPaddingX,this.fontSize+2*this.backdropPaddingY)}t.textAlign="center",t.textBaseline="middle",t.fillStyle=this.fontColor,t.fillText(i,this.xCenter,o)}}},this),!this.lineArc){t.lineWidth=this.angleLineWidth,t.strokeStyle=this.angleLineColor;for(var i=this.valuesCount-1;i>=0;i--){if(this.angleLineWidth>0){var e=this.getPointPosition(i,this.calculateCenterOffset(this.max));t.beginPath(),t.moveTo(this.xCenter,this.yCenter),t.lineTo(e.x,e.y),t.stroke(),t.closePath()}var s=this.getPointPosition(i,this.calculateCenterOffset(this.max)+5);t.font=A(this.pointLabelFontSize,this.pointLabelFontStyle,this.pointLabelFontFamily),t.fillStyle=this.pointLabelFontColor;var o=this.labels.length,a=this.labels.length/2,h=a/2,l=h>i||i>o-h,r=i===h||i===o-h;0===i?t.textAlign="center":i===a?t.textAlign="center":a>i?t.textAlign="left":t.textAlign="right",r?t.textBaseline="middle":l?t.textBaseline="bottom":t.textBaseline="top",t.fillText(this.labels[i],s.x,s.y)}}}}}),s.addEvent(window,"resize",function(){var t;return function(){clearTimeout(t),t=setTimeout(function(){n(e.instances,function(t){t.options.responsive&&t.resize(t.render,!0)})},50)}}()),f?define(function(){return e}):"object"==typeof module&&module.exports&&(module.exports=e),i.Chart=e,t.fn.chart=function(){var t=[];return this.each(function(){t.push(new e(this.getContext("2d")))}),1===t.length?t[0]:t}}).call(this,jQuery),function(t){"use strict";var i=t&&t.zui?t.zui:this,e=i.Chart,s=e.helpers,n={scaleShowGridLines:!0,scaleGridLineColor:"rgba(0,0,0,.05)",scaleGridLineWidth:1,scaleShowHorizontalLines:!0,scaleShowBeyondLine:!0,scaleShowVerticalLines:!0,bezierCurve:!0,bezierCurveTension:.4,pointDot:!0,pointDotRadius:4,pointDotStrokeWidth:1,pointHitDetectionRadius:20,datasetStroke:!0,datasetStrokeWidth:2,datasetFill:!0,legendTemplate:"<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"};e.Type.extend({name:"Line",defaults:n,initialize:function(i){this.PointClass=e.Point.extend({strokeWidth:this.options.pointDotStrokeWidth,radius:this.options.pointDotRadius,display:this.options.pointDot,hitDetectionRadius:this.options.pointHitDetectionRadius,ctx:this.chart.ctx,inRange:function(t){return Math.pow(t-this.x,2)<Math.pow(this.radius+this.hitDetectionRadius,2)}}),this.datasets=[],this.options.showTooltips&&s.bindEvents(this,this.options.tooltipEvents,function(t){var i="mouseout"!==t.type?this.getPointsAtEvent(t):[];this.eachPoints(function(t){t.restore(["fillColor","strokeColor"])}),s.each(i,function(t){t.fillColor=t.highlightFill,t.strokeColor=t.highlightStroke}),this.showTooltip(i)}),s.each(i.datasets,function(e){if(t.zui&&t.zui.Color&&t.zui.Color.get){var n=t.zui.Color.get(e.color),o=n.toCssStr();e.fillColor||(e.fillColor=n.clone().fade(20).toCssStr()),e.strokeColor||(e.strokeColor=o),e.pointColor||(e.pointColor=o),e.pointStrokeColor||(e.pointStrokeColor="#fff"),e.pointHighlightFill||(e.pointHighlightFill="#fff"),e.pointHighlightStroke||(e.pointHighlightStroke=o)}var a={label:e.label||null,fillColor:e.fillColor,strokeColor:e.strokeColor,pointColor:e.pointColor,pointStrokeColor:e.pointStrokeColor,showTooltips:e.showTooltips!==!1,points:[]};this.datasets.push(a),s.each(e.data,function(t,s){a.points.push(new this.PointClass({value:t,label:i.labels[s],datasetLabel:e.label,strokeColor:e.pointStrokeColor,fillColor:e.pointColor,highlightFill:e.pointHighlightFill||e.pointColor,highlightStroke:e.pointHighlightStroke||e.pointStrokeColor}))},this),this.buildScale(i.labels),this.eachPoints(function(t,i){s.extend(t,{x:this.scale.calculateX(i),y:this.scale.endPoint}),t.save()},this)},this),this.render()},update:function(){this.scale.update(),s.each(this.activeElements,function(t){t.restore(["fillColor","strokeColor"])}),this.eachPoints(function(t){t.save()}),this.render()},eachPoints:function(t){s.each(this.datasets,function(i){s.each(i.points,t,this)},this)},getPointsAtEvent:function(t){var i=[],e=s.getRelativePosition(t);return s.each(this.datasets,function(t){s.each(t.points,function(t){t.inRange(e.x,e.y)&&i.push(t)})},this),i},buildScale:function(t){var i=this,n=function(){var t=[];return i.eachPoints(function(i){t.push(i.value)}),t},o={templateString:this.options.scaleLabel,height:this.chart.height,width:this.chart.width,ctx:this.chart.ctx,textColor:this.options.scaleFontColor,fontSize:this.options.scaleFontSize,fontStyle:this.options.scaleFontStyle,fontFamily:this.options.scaleFontFamily,valuesCount:t.length,beginAtZero:this.options.scaleBeginAtZero,integersOnly:this.options.scaleIntegersOnly,calculateYRange:function(t){var i=s.calculateScaleRange(n(),t,this.fontSize,this.beginAtZero,this.integersOnly);s.extend(this,i)},xLabels:t,font:s.fontString(this.options.scaleFontSize,this.options.scaleFontStyle,this.options.scaleFontFamily),lineWidth:this.options.scaleLineWidth,lineColor:this.options.scaleLineColor,showHorizontalLines:this.options.scaleShowHorizontalLines,showVerticalLines:this.options.scaleShowVerticalLines,showBeyondLine:this.options.scaleShowBeyondLine,gridLineWidth:this.options.scaleShowGridLines?this.options.scaleGridLineWidth:0,gridLineColor:this.options.scaleShowGridLines?this.options.scaleGridLineColor:"rgba(0,0,0,0)",padding:this.options.showScale?0:this.options.pointDotRadius+this.options.pointDotStrokeWidth,showLabels:this.options.scaleShowLabels,display:this.options.showScale};this.options.scaleOverride&&s.extend(o,{calculateYRange:s.noop,steps:this.options.scaleSteps,stepValue:this.options.scaleStepWidth,min:this.options.scaleStartValue,max:this.options.scaleStartValue+this.options.scaleSteps*this.options.scaleStepWidth
}),this.scale=new e.Scale(o)},addData:function(t,i){s.each(t,function(t,e){this.datasets[e].points.push(new this.PointClass({value:t,label:i,x:this.scale.calculateX(this.scale.valuesCount+1),y:this.scale.endPoint,strokeColor:this.datasets[e].pointStrokeColor,fillColor:this.datasets[e].pointColor}))},this),this.scale.addXLabel(i),this.update()},removeData:function(){this.scale.removeXLabel(),s.each(this.datasets,function(t){t.points.shift()},this),this.update()},reflow:function(){var t=s.extend({height:this.chart.height,width:this.chart.width});this.scale.update(t)},draw:function(t){var i=t||1;this.clear();var e=this.chart.ctx,n=function(t){return null!==t.value},o=function(t,i,e){return s.findNextWhere(i,n,e)||t},a=function(t,i,e){return s.findPreviousWhere(i,n,e)||t};this.scale.draw(i),s.each(this.datasets,function(t){var h=s.where(t.points,n);s.each(t.points,function(t,e){t.hasValue()&&t.transition({y:this.scale.calculateY(t.value),x:this.scale.calculateX(e)},i)},this),this.options.bezierCurve&&s.each(h,function(t,i){var e=i>0&&i<h.length-1?this.options.bezierCurveTension:0;t.controlPoints=s.splineCurve(a(t,h,i),t,o(t,h,i),e),t.controlPoints.outer.y>this.scale.endPoint?t.controlPoints.outer.y=this.scale.endPoint:t.controlPoints.outer.y<this.scale.startPoint&&(t.controlPoints.outer.y=this.scale.startPoint),t.controlPoints.inner.y>this.scale.endPoint?t.controlPoints.inner.y=this.scale.endPoint:t.controlPoints.inner.y<this.scale.startPoint&&(t.controlPoints.inner.y=this.scale.startPoint)},this),e.lineWidth=this.options.datasetStrokeWidth,e.strokeStyle=t.strokeColor,e.beginPath(),s.each(h,function(t,i){if(0===i)e.moveTo(t.x,t.y);else if(this.options.bezierCurve){var s=a(t,h,i);e.bezierCurveTo(s.controlPoints.outer.x,s.controlPoints.outer.y,t.controlPoints.inner.x,t.controlPoints.inner.y,t.x,t.y)}else e.lineTo(t.x,t.y)},this),e.stroke(),this.options.datasetFill&&h.length>0&&(e.lineTo(h[h.length-1].x,this.scale.endPoint),e.lineTo(h[0].x,this.scale.endPoint),e.fillStyle=t.fillColor,e.closePath(),e.fill()),s.each(h,function(t){t.draw()})},this)}}),t.fn.lineChart=function(i,s){var n=[];return this.each(function(){var o=t(this);n.push(new e(this.getContext("2d")).Line(i,t.extend(o.data(),s)))}),1===n.length?n[0]:n}}.call(this,jQuery),function(t){"use strict";var i=t&&t.zui?t.zui:this,e=i.Chart,s=e.helpers,n={segmentShowStroke:!0,segmentStrokeColor:"#fff",segmentStrokeWidth:1,percentageInnerCutout:50,scaleShowLabels:!1,scaleLabel:"<%=value%>",scaleLabelPlacement:"auto",animationSteps:60,animationEasing:"easeOutBounce",animateRotate:!0,animateScale:!1,legendTemplate:"<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"};e.Type.extend({name:"Doughnut",defaults:n,initialize:function(t){this.segments=[],this.outerRadius=(s.min([this.chart.width,this.chart.height])-this.options.segmentStrokeWidth/2)/2,this.SegmentArc=e.Arc.extend({ctx:this.chart.ctx,x:this.chart.width/2,y:this.chart.height/2}),this.options.showTooltips&&s.bindEvents(this,this.options.tooltipEvents,function(t){var i="mouseout"!==t.type?this.getSegmentsAtEvent(t):[];s.each(this.segments,function(t){t.restore(["fillColor"])}),s.each(i,function(t){t.fillColor=t.highlightColor}),this.showTooltip(i)}),this.calculateTotal(t),s.each(t,function(t,i){this.addData(t,i,!0)},this),this.render()},getSegmentsAtEvent:function(t){var i=[],e=s.getRelativePosition(t);return s.each(this.segments,function(t){t.inRange(e.x,e.y)&&i.push(t)},this),i},addData:function(i,e,s){if(t.zui&&t.zui.Color&&t.zui.Color.get){var n=new t.zui.Color.get(i.color);i.color=n.toCssStr(),i.highlight||(i.highlight=n.lighten(5).toCssStr())}var o=e||this.segments.length;this.segments.splice(o,0,new this.SegmentArc({id:"undefined"==typeof i.id?o:i.id,value:i.value,outerRadius:this.options.animateScale?0:this.outerRadius,innerRadius:this.options.animateScale?0:this.outerRadius/100*this.options.percentageInnerCutout,fillColor:i.color,highlightColor:i.highlight||i.color,showStroke:this.options.segmentShowStroke,strokeWidth:this.options.segmentStrokeWidth,strokeColor:this.options.segmentStrokeColor,startAngle:1.5*Math.PI,circumference:this.options.animateRotate?0:this.calculateCircumference(i.value),showLabel:i.showLabel!==!1,label:i.label})),s||(this.reflow(),this.update())},calculateCircumference:function(t){return 2*Math.PI*(Math.abs(t)/this.total)},calculateTotal:function(t){this.total=0,s.each(t,function(t){this.total+=Math.abs(t.value)},this)},update:function(){this.calculateTotal(this.segments),s.each(this.activeElements,function(t){t.restore(["fillColor"])}),s.each(this.segments,function(t){t.save()}),this.render()},removeData:function(t){var i=s.isNumber(t)?t:this.segments.length-1;this.segments.splice(i,1),this.reflow(),this.update()},reflow:function(){s.extend(this.SegmentArc.prototype,{x:this.chart.width/2,y:this.chart.height/2}),this.outerRadius=(s.min([this.chart.width,this.chart.height])-this.options.segmentStrokeWidth/2)/2,s.each(this.segments,function(t){t.update({outerRadius:this.outerRadius,innerRadius:this.outerRadius/100*this.options.percentageInnerCutout})},this)},drawLabel:function(i,e,n){var o=this.options,a=(i.endAngle+i.startAngle)/2,h=o.scaleLabelPlacement;"inside"!==h&&"outside"!==h&&this.chart.width-this.chart.height>50&&i.circumference<Math.PI/18&&(h="outside");var l=Math.cos(a)*i.outerRadius,r=Math.sin(a)*i.outerRadius,c=s.template(o.scaleLabel,{value:"undefined"==typeof e?i.value:Math.round(e*i.value),label:i.label}),u=this.chart.ctx;u.font=s.fontString(o.scaleFontSize,o.scaleFontStyle,o.scaleFontFamily),u.textBaseline="middle",u.textAlign="center";var d=(u.measureText(c).width,this.chart.width/2),f=this.chart.height/2;if("outside"===h){var p=l>=0,g=l+d,v=r+f;u.textAlign=p?"left":"right",u.measureText(c).width,l=p?Math.max(d+i.outerRadius+10,l+30+d):Math.min(d-i.outerRadius-10,l-30+d);var x=o.scaleFontSize,m=Math.round((.8*r+f)/x)+1,y=(Math.floor(this.chart.width/x)+1,p?1:-1);if(n[m*y]&&(m>1?m--:m++),n[m*y])return;r=(m-1)*x+o.scaleFontSize/2,n[m*y]=!0,u.beginPath(),u.moveTo(g,v),u.lineTo(l,r),l=p?l+5:l-5,u.lineTo(l,r),u.strokeStyle=t.zui&&t.zui.Color?new t.zui.Color(i.fillColor).fade(40).toCssStr():i.fillColor,u.strokeWidth=o.scaleLineWidth,u.stroke(),u.fillStyle=i.fillColor}else l=.7*l+d,r=.7*r+f,u.fillStyle=t.zui&&t.zui.Color?new t.zui.Color(i.fillColor).contrast().toCssStr():"#fff";u.fillText(c,l,r)},draw:function(t){var i=t?t:1;this.clear();var e;if(s.each(this.segments,function(t,e){t.transition({circumference:this.calculateCircumference(t.value),outerRadius:this.outerRadius,innerRadius:this.outerRadius/100*this.options.percentageInnerCutout},i),t.endAngle=t.startAngle+t.circumference,t.draw(),0===e&&(t.startAngle=1.5*Math.PI),e<this.segments.length-1&&(this.segments[e+1].startAngle=t.endAngle)},this),this.options.scaleShowLabels){var n=this.segments.slice().sort(function(t,i){return i.value-t.value}),e={};s.each(n,function(i,s){i.showLabel&&this.drawLabel(i,t,e)},this)}}}),e.types.Doughnut.extend({name:"Pie",defaults:s.merge(n,{percentageInnerCutout:0})}),t.fn.pieChart=function(i,s){var n=[];return this.each(function(){var o=t(this);n.push(new e(this.getContext("2d")).Pie(i,t.extend(o.data(),s)))}),1===n.length?n[0]:n},t.fn.doughnutChart=function(i,s){var n=[];return this.each(function(){var o=t(this);n.push(new e(this.getContext("2d")).Doughnut(i,t.extend(o.data(),s)))}),1===n.length?n[0]:n}}.call(this,jQuery),function(t){"use strict";var i=t&&t.zui?t.zui:this,e=i.Chart,s=e.helpers,n={scaleBeginAtZero:!0,scaleShowGridLines:!0,scaleGridLineColor:"rgba(0,0,0,.05)",scaleGridLineWidth:1,scaleShowHorizontalLines:!0,scaleShowVerticalLines:!0,scaleShowBeyondLine:!0,barShowStroke:!0,barStrokeWidth:1,scaleValuePlacement:"auto",barValueSpacing:5,barDatasetSpacing:1,legendTemplate:"<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"};e.Type.extend({name:"Bar",defaults:n,initialize:function(i){var n=this.options;this.ScaleClass=e.Scale.extend({offsetGridLines:!0,calculateBarX:function(t,i,e){var s=this.calculateBaseWidth(),o=this.calculateX(e)-s/2,a=this.calculateBarWidth(t);return o+a*i+i*n.barDatasetSpacing+a/2},calculateBaseWidth:function(){return this.calculateX(1)-this.calculateX(0)-2*n.barValueSpacing},calculateBarWidth:function(t){var i=this.calculateBaseWidth()-(t-1)*n.barDatasetSpacing;return i/t}}),this.datasets=[],this.options.showTooltips&&s.bindEvents(this,this.options.tooltipEvents,function(t){var i="mouseout"!==t.type?this.getBarsAtEvent(t):[];this.eachBars(function(t){t.restore(["fillColor","strokeColor"])}),s.each(i,function(t){t.fillColor=t.highlightFill,t.strokeColor=t.highlightStroke}),this.showTooltip(i)}),this.BarClass=e.Rectangle.extend({strokeWidth:this.options.barStrokeWidth,showStroke:this.options.barShowStroke,ctx:this.chart.ctx}),s.each(i.datasets,function(e,n){if(t.zui&&t.zui.Color&&t.zui.Color.get){var o=t.zui.Color.get(e.color),a=o.toCssStr();e.fillColor||(e.fillColor=o.clone().fade(50).toCssStr()),e.strokeColor||(e.strokeColor=a)}var h={label:e.label||null,fillColor:e.fillColor,strokeColor:e.strokeColor,bars:[]};this.datasets.push(h),s.each(e.data,function(t,s){h.bars.push(new this.BarClass({value:t,label:i.labels[s],datasetLabel:e.label,strokeColor:e.strokeColor,fillColor:e.fillColor,highlightFill:e.highlightFill||e.fillColor,highlightStroke:e.highlightStroke||e.strokeColor}))},this)},this),this.buildScale(i.labels),this.BarClass.prototype.base=this.scale.endPoint,this.eachBars(function(t,i,e){s.extend(t,{width:this.scale.calculateBarWidth(this.datasets.length),x:this.scale.calculateBarX(this.datasets.length,e,i),y:this.scale.endPoint}),t.save()},this),this.render()},update:function(){this.scale.update(),s.each(this.activeElements,function(t){t.restore(["fillColor","strokeColor"])}),this.eachBars(function(t){t.save()}),this.render()},eachBars:function(t){s.each(this.datasets,function(i,e){s.each(i.bars,t,this,e)},this)},getBarsAtEvent:function(t){for(var i,e=[],n=s.getRelativePosition(t),o=function(t){e.push(t.bars[i])},a=0;a<this.datasets.length;a++)for(i=0;i<this.datasets[a].bars.length;i++)if(this.datasets[a].bars[i].inRange(n.x,n.y))return s.each(this.datasets,o),e;return e},buildScale:function(t){var i=this,e=function(){var t=[];return i.eachBars(function(i){t.push(i.value)}),t},n={templateString:this.options.scaleLabel,height:this.chart.height,width:this.chart.width,ctx:this.chart.ctx,textColor:this.options.scaleFontColor,fontSize:this.options.scaleFontSize,fontStyle:this.options.scaleFontStyle,fontFamily:this.options.scaleFontFamily,valuesCount:t.length,beginAtZero:this.options.scaleBeginAtZero,integersOnly:this.options.scaleIntegersOnly,calculateYRange:function(t){var i=s.calculateScaleRange(e(),t,this.fontSize,this.beginAtZero,this.integersOnly);s.extend(this,i)},xLabels:t,font:s.fontString(this.options.scaleFontSize,this.options.scaleFontStyle,this.options.scaleFontFamily),lineWidth:this.options.scaleLineWidth,lineColor:this.options.scaleLineColor,showHorizontalLines:this.options.scaleShowHorizontalLines,showVerticalLines:this.options.scaleShowVerticalLines,showBeyondLine:this.options.scaleShowBeyondLine,gridLineWidth:this.options.scaleShowGridLines?this.options.scaleGridLineWidth:0,gridLineColor:this.options.scaleShowGridLines?this.options.scaleGridLineColor:"rgba(0,0,0,0)",padding:this.options.showScale?0:this.options.barShowStroke?this.options.barStrokeWidth:0,showLabels:this.options.scaleShowLabels,display:this.options.showScale};this.options.scaleOverride&&s.extend(n,{calculateYRange:s.noop,steps:this.options.scaleSteps,stepValue:this.options.scaleStepWidth,min:this.options.scaleStartValue,max:this.options.scaleStartValue+this.options.scaleSteps*this.options.scaleStepWidth}),this.scale=new this.ScaleClass(n)},addData:function(t,i){s.each(t,function(t,e){this.datasets[e].bars.push(new this.BarClass({value:t,label:i,x:this.scale.calculateBarX(this.datasets.length,e,this.scale.valuesCount+1),y:this.scale.endPoint,width:this.scale.calculateBarWidth(this.datasets.length),base:this.scale.endPoint,strokeColor:this.datasets[e].strokeColor,fillColor:this.datasets[e].fillColor}))},this),this.scale.addXLabel(i),this.update()},removeData:function(){this.scale.removeXLabel(),s.each(this.datasets,function(t){t.bars.shift()},this),this.update()},reflow:function(){s.extend(this.BarClass.prototype,{y:this.scale.endPoint,base:this.scale.endPoint});var t=s.extend({height:this.chart.height,width:this.chart.width});this.scale.update(t)},drawLabel:function(t,i){var e=this.options;i=i||e.scaleValuePlacement,i=i?i.toLowerCase():"auto","auto"===i&&(i=t.y<15?"insdie":"outside");var n="insdie"===i?t.y+10:t.y-10,o=this.chart.ctx;o.font=s.fontString(e.scaleFontSize,e.scaleFontStyle,e.scaleFontFamily),o.textBaseline="middle",o.textAlign="center",o.fillStyle=e.scaleFontColor,o.fillText(t.value,t.x,n)},draw:function(t){var i=t||1;this.clear();this.chart.ctx;this.scale.draw(i);var e=this.options.scaleShowLabels&&this.options.scaleValuePlacement;s.each(this.datasets,function(t,n){s.each(t.bars,function(t,s){t.hasValue()&&(t.base=this.scale.endPoint,t.transition({x:this.scale.calculateBarX(this.datasets.length,n,s),y:this.scale.calculateY(t.value),width:this.scale.calculateBarWidth(this.datasets.length)},i).draw()),e&&this.drawLabel(t)},this)},this)}}),t.fn.barChart=function(i,s){var n=[];return this.each(function(){var o=t(this);n.push(new e(this.getContext("2d")).Bar(i,t.extend(o.data(),s)))}),1===n.length?n[0]:n}}.call(this,jQuery);!function(e){function t(){return new Date(Date.UTC.apply(Date,arguments))}var i=function(t,i){var n=this;this.element=e(t),this.language=i.language||this.element.data("date-language")||"en",this.language=this.language in s?this.language:"en",this.isRTL=s[this.language].rtl||!1,this.formatType=i.formatType||this.element.data("format-type")||"standard",this.format=a.parseFormat(i.format||this.element.data("date-format")||s[this.language].format||a.getDefaultFormat(this.formatType,"input"),this.formatType),this.isInline=!1,this.isVisible=!1,this.isInput=this.element.is("input"),this.component=this.element.is(".date")?this.element.find(".input-group-addon .icon-th, .input-group-addon .icon-time, .input-group-addon .icon-calendar").parent():!1,this.componentReset=this.element.is(".date")?this.element.find(".input-group-addon .icon-remove").parent():!1,this.hasInput=this.component&&this.element.find("input").length,this.component&&0===this.component.length&&(this.component=!1),this.linkField=i.linkField||this.element.data("link-field")||!1,this.linkFormat=a.parseFormat(i.linkFormat||this.element.data("link-format")||a.getDefaultFormat(this.formatType,"link"),this.formatType),this.minuteStep=i.minuteStep||this.element.data("minute-step")||5,this.pickerPosition=i.pickerPosition||this.element.data("picker-position")||"bottom-right",this.showMeridian=i.showMeridian||this.element.data("show-meridian")||!1,this.initialDate=i.initialDate||new Date,this._attachEvents(),this.formatViewType="datetime","formatViewType"in i?this.formatViewType=i.formatViewType:"formatViewType"in this.element.data()&&(this.formatViewType=this.element.data("formatViewType")),this.minView=0,"minView"in i?this.minView=i.minView:"minView"in this.element.data()&&(this.minView=this.element.data("min-view")),this.minView=a.convertViewMode(this.minView),this.maxView=a.modes.length-1,"maxView"in i?this.maxView=i.maxView:"maxView"in this.element.data()&&(this.maxView=this.element.data("max-view")),this.maxView=a.convertViewMode(this.maxView),this.wheelViewModeNavigation=!1,"wheelViewModeNavigation"in i?this.wheelViewModeNavigation=i.wheelViewModeNavigation:"wheelViewModeNavigation"in this.element.data()&&(this.wheelViewModeNavigation=this.element.data("view-mode-wheel-navigation")),this.wheelViewModeNavigationInverseDirection=!1,"wheelViewModeNavigationInverseDirection"in i?this.wheelViewModeNavigationInverseDirection=i.wheelViewModeNavigationInverseDirection:"wheelViewModeNavigationInverseDirection"in this.element.data()&&(this.wheelViewModeNavigationInverseDirection=this.element.data("view-mode-wheel-navigation-inverse-dir")),this.wheelViewModeNavigationDelay=100,"wheelViewModeNavigationDelay"in i?this.wheelViewModeNavigationDelay=i.wheelViewModeNavigationDelay:"wheelViewModeNavigationDelay"in this.element.data()&&(this.wheelViewModeNavigationDelay=this.element.data("view-mode-wheel-navigation-delay")),this.startViewMode=2,"startView"in i?this.startViewMode=i.startView:"startView"in this.element.data()&&(this.startViewMode=this.element.data("start-view")),this.startViewMode=a.convertViewMode(this.startViewMode),this.viewMode=this.startViewMode,this.viewSelect=this.minView,"viewSelect"in i?this.viewSelect=i.viewSelect:"viewSelect"in this.element.data()&&(this.viewSelect=this.element.data("view-select")),this.viewSelect=a.convertViewMode(this.viewSelect),this.forceParse=!0,"forceParse"in i?this.forceParse=i.forceParse:"dateForceParse"in this.element.data()&&(this.forceParse=this.element.data("date-force-parse")),this.picker=e(a.template).appendTo(this.isInline?this.element:"body").on({click:e.proxy(this.click,this),mousedown:e.proxy(this.mousedown,this)}),this.wheelViewModeNavigation&&(e.fn.mousewheel?this.picker.on({mousewheel:e.proxy(this.mousewheel,this)}):console.log("Mouse Wheel event is not supported. Please include the jQuery Mouse Wheel plugin before enabling this option")),this.isInline?this.picker.addClass("datetimepicker-inline"):this.picker.addClass("datetimepicker-dropdown-"+this.pickerPosition+" dropdown-menu"),this.isRTL&&(this.picker.addClass("datetimepicker-rtl"),this.picker.find(".prev span, .next span").toggleClass("icon-arrow-left icon-arrow-right")),e(document).on("mousedown",function(t){0===e(t.target).closest(".datetimepicker").length&&n.hide()}),this.autoclose=!1,"autoclose"in i?this.autoclose=i.autoclose:"dateAutoclose"in this.element.data()&&(this.autoclose=this.element.data("date-autoclose")),this.keyboardNavigation=!0,"keyboardNavigation"in i?this.keyboardNavigation=i.keyboardNavigation:"dateKeyboardNavigation"in this.element.data()&&(this.keyboardNavigation=this.element.data("date-keyboard-navigation")),this.todayBtn=i.todayBtn||this.element.data("date-today-btn")||!1,this.todayHighlight=i.todayHighlight||this.element.data("date-today-highlight")||!1,this.weekStart=(i.weekStart||this.element.data("date-weekstart")||s[this.language].weekStart||0)%7,this.weekEnd=(this.weekStart+6)%7,this.startDate=-1/0,this.endDate=1/0,this.daysOfWeekDisabled=[],this.setStartDate(i.startDate||this.element.data("date-startdate")),this.setEndDate(i.endDate||this.element.data("date-enddate")),this.setDaysOfWeekDisabled(i.daysOfWeekDisabled||this.element.data("date-days-of-week-disabled")),this.fillDow(),this.fillMonths(),this.update(),this.showMode(),this.isInline&&this.show()};i.prototype={constructor:i,_events:[],_attachEvents:function(){this._detachEvents(),this.isInput?this._events=[[this.element,{focus:e.proxy(this.show,this),keyup:e.proxy(this.update,this),keydown:e.proxy(this.keydown,this)}]]:this.component&&this.hasInput?(this._events=[[this.element.find("input"),{focus:e.proxy(this.show,this),keyup:e.proxy(this.update,this),keydown:e.proxy(this.keydown,this)}],[this.component,{click:e.proxy(this.show,this)}]],this.componentReset&&this._events.push([this.componentReset,{click:e.proxy(this.reset,this)}])):this.element.is("div")?this.isInline=!0:this._events=[[this.element,{click:e.proxy(this.show,this)}]];for(var t,i,s=0;s<this._events.length;s++)t=this._events[s][0],i=this._events[s][1],t.on(i)},_detachEvents:function(){for(var e,t,i=0;i<this._events.length;i++)e=this._events[i][0],t=this._events[i][1],e.off(t);this._events=[]},show:function(t){this.picker.show(),this.height=this.component?this.component.outerHeight():this.element.outerHeight(),this.forceParse&&this.update(),this.place(),e(window).on("resize",e.proxy(this.place,this)),t&&(t.stopPropagation(),t.preventDefault()),this.isVisible=!0,this.element.trigger({type:"show",date:this.date})},hide:function(){this.isVisible&&(this.isInline||(this.picker.hide(),e(window).off("resize",this.place),this.viewMode=this.startViewMode,this.showMode(),this.isInput||e(document).off("mousedown",this.hide),this.forceParse&&(this.isInput&&this.element.val()||this.hasInput&&this.element.find("input").val())&&this.setValue(),this.isVisible=!1,this.element.trigger({type:"hide",date:this.date})))},remove:function(){this._detachEvents(),this.picker.remove(),delete this.picker,delete this.element.data().datetimepicker},getDate:function(){var e=this.getUTCDate();return new Date(e.getTime()+6e4*e.getTimezoneOffset())},getUTCDate:function(){return this.date},setDate:function(e){this.setUTCDate(new Date(e.getTime()-6e4*e.getTimezoneOffset()))},setUTCDate:function(e){e>=this.startDate&&e<=this.endDate?(this.date=e,this.setValue(),this.viewDate=this.date,this.fill()):this.element.trigger({type:"outOfRange",date:e,startDate:this.startDate,endDate:this.endDate})},setFormat:function(e){this.format=a.parseFormat(e,this.formatType);var t;this.isInput?t=this.element:this.component&&(t=this.element.find("input")),t&&t.val()&&this.setValue()},setValue:function(){var t=this.getFormattedDate();this.isInput?this.element.val(t):(this.component&&this.element.find("input").val(t),this.element.data("date",t)),this.linkField&&e("#"+this.linkField).val(this.getFormattedDate(this.linkFormat))},getFormattedDate:function(e){return void 0==e&&(e=this.format),a.formatDate(this.date,e,this.language,this.formatType)},setStartDate:function(e){this.startDate=e||-1/0,this.startDate!==-1/0&&(this.startDate=a.parseDate(this.startDate,this.format,this.language,this.formatType)),this.update(),this.updateNavArrows()},setEndDate:function(e){this.endDate=e||1/0,1/0!==this.endDate&&(this.endDate=a.parseDate(this.endDate,this.format,this.language,this.formatType)),this.update(),this.updateNavArrows()},setDaysOfWeekDisabled:function(t){this.daysOfWeekDisabled=t||[],e.isArray(this.daysOfWeekDisabled)||(this.daysOfWeekDisabled=this.daysOfWeekDisabled.split(/,\s*/)),this.daysOfWeekDisabled=e.map(this.daysOfWeekDisabled,function(e){return parseInt(e,10)}),this.update(),this.updateNavArrows()},place:function(){if(!this.isInline){var t=0;e("div").each(function(){var i=parseInt(e(this).css("zIndex"),10);i>t&&(t=i)});var i,s,a,n=t+10;this.component?(i=this.component.offset(),a=i.left,("bottom-left"==this.pickerPosition||"top-left"==this.pickerPosition)&&(a+=this.component.outerWidth()-this.picker.outerWidth())):(i=this.element.offset(),a=i.left),s="top-left"==this.pickerPosition||"top-right"==this.pickerPosition?i.top-this.picker.outerHeight():i.top+this.height,this.picker.css({top:s,left:a,zIndex:n})}},update:function(){var e,t=!1;arguments&&arguments.length&&("string"==typeof arguments[0]||arguments[0]instanceof Date)?(e=arguments[0],t=!0):(e=this.element.data("date")||(this.isInput?this.element.val():this.element.find("input").val())||this.initialDate,("string"==typeof e||e instanceof String)&&(e=e.replace(/^\s+|\s+$/g,""))),e||(e=new Date,t=!1),this.date=a.parseDate(e,this.format,this.language,this.formatType),t&&this.setValue(),this.viewDate=this.date<this.startDate?new Date(this.startDate):this.date>this.endDate?new Date(this.endDate):new Date(this.date),this.fill()},fillDow:function(){for(var e=this.weekStart,t="<tr>";e<this.weekStart+7;)t+="<th class=\"dow\">"+s[this.language].daysMin[e++%7]+"</th>";t+="</tr>",this.picker.find(".datetimepicker-days thead").append(t)},fillMonths:function(){for(var e="",t=0;12>t;)e+="<span class=\"month\">"+s[this.language].monthsShort[t++]+"</span>";this.picker.find(".datetimepicker-months td").html(e)},fill:function(){if(null!=this.date&&null!=this.viewDate){var i=new Date(this.viewDate),n=i.getUTCFullYear(),h=i.getUTCMonth(),o=i.getUTCDate(),r=i.getUTCHours(),d=i.getUTCMinutes(),l=this.startDate!==-1/0?this.startDate.getUTCFullYear():-1/0,u=this.startDate!==-1/0?this.startDate.getUTCMonth():-1/0,c=1/0!==this.endDate?this.endDate.getUTCFullYear():1/0,m=1/0!==this.endDate?this.endDate.getUTCMonth():1/0,p=new t(this.date.getUTCFullYear(),this.date.getUTCMonth(),this.date.getUTCDate()).valueOf(),v=new Date;if(this.picker.find(".datetimepicker-days thead th:eq(1)").text(s[this.language].months[h]+" "+n),"time"==this.formatViewType){var g=r%12?r%12:12,f=(10>g?"0":"")+g,w=(10>d?"0":"")+d,D=s[this.language].meridiem[12>r?0:1];this.picker.find(".datetimepicker-hours thead th:eq(1)").text(f+":"+w+" "+D.toUpperCase()),this.picker.find(".datetimepicker-minutes thead th:eq(1)").text(f+":"+w+" "+D.toUpperCase())}else this.picker.find(".datetimepicker-hours thead th:eq(1)").text(o+" "+s[this.language].months[h]+" "+n),this.picker.find(".datetimepicker-minutes thead th:eq(1)").text(o+" "+s[this.language].months[h]+" "+n);this.picker.find("tfoot th.today").text(s[this.language].today).toggle(this.todayBtn!==!1),this.updateNavArrows(),this.fillMonths();var y=t(n,h-1,28,0,0,0,0),T=a.getDaysInMonth(y.getUTCFullYear(),y.getUTCMonth());y.setUTCDate(T),y.setUTCDate(T-(y.getUTCDay()-this.weekStart+7)%7);var M=new Date(y);M.setUTCDate(M.getUTCDate()+42),M=M.valueOf();for(var C,k=[];y.valueOf()<M;)y.getUTCDay()==this.weekStart&&k.push("<tr>"),C="",y.getUTCFullYear()<n||y.getUTCFullYear()==n&&y.getUTCMonth()<h?C+=" old":(y.getUTCFullYear()>n||y.getUTCFullYear()==n&&y.getUTCMonth()>h)&&(C+=" new"),this.todayHighlight&&y.getUTCFullYear()==v.getFullYear()&&y.getUTCMonth()==v.getMonth()&&y.getUTCDate()==v.getDate()&&(C+=" today"),y.valueOf()==p&&(C+=" active"),(y.valueOf()+864e5<=this.startDate||y.valueOf()>this.endDate||-1!==e.inArray(y.getUTCDay(),this.daysOfWeekDisabled))&&(C+=" disabled"),k.push("<td class=\"day"+C+"\">"+y.getUTCDate()+"</td>"),y.getUTCDay()==this.weekEnd&&k.push("</tr>"),y.setUTCDate(y.getUTCDate()+1);this.picker.find(".datetimepicker-days tbody").empty().append(k.join("")),k=[];for(var U="",b="",V="",S=0;24>S;S++){var F=t(n,h,o,S);C="",F.valueOf()+36e5<=this.startDate||F.valueOf()>this.endDate?C+=" disabled":r==S&&(C+=" active"),this.showMeridian&&2==s[this.language].meridiem.length?(b=12>S?s[this.language].meridiem[0]:s[this.language].meridiem[1],b!=V&&(""!=V&&k.push("</fieldset>"),k.push("<fieldset class=\"hour\"><legend>"+b.toUpperCase()+"</legend>")),V=b,U=S%12?S%12:12,k.push("<span class=\"hour"+C+" hour_"+(12>S?"am":"pm")+"\">"+U+"</span>"),23==S&&k.push("</fieldset>")):(U=S+":00",k.push("<span class=\"hour"+C+"\">"+U+"</span>"))}this.picker.find(".datetimepicker-hours td").html(k.join("")),k=[],U="",b="",V="";for(var S=0;60>S;S+=this.minuteStep){var F=t(n,h,o,r,S,0);C="",F.valueOf()<this.startDate||F.valueOf()>this.endDate?C+=" disabled":Math.floor(d/this.minuteStep)==Math.floor(S/this.minuteStep)&&(C+=" active"),this.showMeridian&&2==s[this.language].meridiem.length?(b=12>r?s[this.language].meridiem[0]:s[this.language].meridiem[1],b!=V&&(""!=V&&k.push("</fieldset>"),k.push("<fieldset class=\"minute\"><legend>"+b.toUpperCase()+"</legend>")),V=b,U=r%12?r%12:12,k.push("<span class=\"minute"+C+"\">"+U+":"+(10>S?"0"+S:S)+"</span>"),59==S&&k.push("</fieldset>")):(U=S+":00",k.push("<span class=\"minute"+C+"\">"+r+":"+(10>S?"0"+S:S)+"</span>"))}this.picker.find(".datetimepicker-minutes td").html(k.join(""));var x=this.date.getUTCFullYear(),H=this.picker.find(".datetimepicker-months").find("th:eq(1)").text(n).end().find("span").removeClass("active");x==n&&H.eq(this.date.getUTCMonth()).addClass("active"),(l>n||n>c)&&H.addClass("disabled"),n==l&&H.slice(0,u).addClass("disabled"),n==c&&H.slice(m+1).addClass("disabled"),k="",n=10*parseInt(n/10,10);var N=this.picker.find(".datetimepicker-years").find("th:eq(1)").text(n+"-"+(n+9)).end().find("td");n-=1;for(var S=-1;11>S;S++)k+="<span class=\"year"+(-1==S||10==S?" old":"")+(x==n?" active":"")+(l>n||n>c?" disabled":"")+"\">"+n+"</span>",n+=1;N.html(k),this.place()}},updateNavArrows:function(){var e=new Date(this.viewDate),t=e.getUTCFullYear(),i=e.getUTCMonth(),s=e.getUTCDate(),a=e.getUTCHours();switch(this.viewMode){case 0:this.startDate!==-1/0&&t<=this.startDate.getUTCFullYear()&&i<=this.startDate.getUTCMonth()&&s<=this.startDate.getUTCDate()&&a<=this.startDate.getUTCHours()?this.picker.find(".prev").css({visibility:"hidden"}):this.picker.find(".prev").css({visibility:"visible"}),1/0!==this.endDate&&t>=this.endDate.getUTCFullYear()&&i>=this.endDate.getUTCMonth()&&s>=this.endDate.getUTCDate()&&a>=this.endDate.getUTCHours()?this.picker.find(".next").css({visibility:"hidden"}):this.picker.find(".next").css({visibility:"visible"});break;case 1:this.startDate!==-1/0&&t<=this.startDate.getUTCFullYear()&&i<=this.startDate.getUTCMonth()&&s<=this.startDate.getUTCDate()?this.picker.find(".prev").css({visibility:"hidden"}):this.picker.find(".prev").css({visibility:"visible"}),1/0!==this.endDate&&t>=this.endDate.getUTCFullYear()&&i>=this.endDate.getUTCMonth()&&s>=this.endDate.getUTCDate()?this.picker.find(".next").css({visibility:"hidden"}):this.picker.find(".next").css({visibility:"visible"});break;case 2:this.startDate!==-1/0&&t<=this.startDate.getUTCFullYear()&&i<=this.startDate.getUTCMonth()?this.picker.find(".prev").css({visibility:"hidden"}):this.picker.find(".prev").css({visibility:"visible"}),1/0!==this.endDate&&t>=this.endDate.getUTCFullYear()&&i>=this.endDate.getUTCMonth()?this.picker.find(".next").css({visibility:"hidden"}):this.picker.find(".next").css({visibility:"visible"});break;case 3:case 4:this.startDate!==-1/0&&t<=this.startDate.getUTCFullYear()?this.picker.find(".prev").css({visibility:"hidden"}):this.picker.find(".prev").css({visibility:"visible"}),1/0!==this.endDate&&t>=this.endDate.getUTCFullYear()?this.picker.find(".next").css({visibility:"hidden"}):this.picker.find(".next").css({visibility:"visible"})}},mousewheel:function(t){if(t.preventDefault(),t.stopPropagation(),!this.wheelPause){this.wheelPause=!0;var i=t.originalEvent,s=i.wheelDelta,a=s>0?1:0===s?0:-1;this.wheelViewModeNavigationInverseDirection&&(a=-a),this.showMode(a),setTimeout(e.proxy(function(){this.wheelPause=!1},this),this.wheelViewModeNavigationDelay)}},click:function(i){i.stopPropagation(),i.preventDefault();var s=e(i.target).closest("span, td, th, legend");if(1==s.length){if(s.is(".disabled"))return this.element.trigger({type:"outOfRange",date:this.viewDate,startDate:this.startDate,endDate:this.endDate}),void 0;switch(s[0].nodeName.toLowerCase()){case"th":switch(s[0].className){case"switch":this.showMode(1);break;case"prev":case"next":var n=a.modes[this.viewMode].navStep*("prev"==s[0].className?-1:1);switch(this.viewMode){case 0:this.viewDate=this.moveHour(this.viewDate,n);break;case 1:this.viewDate=this.moveDate(this.viewDate,n);break;case 2:this.viewDate=this.moveMonth(this.viewDate,n);break;case 3:case 4:this.viewDate=this.moveYear(this.viewDate,n)}this.fill();break;case"today":var h=new Date;h=t(h.getFullYear(),h.getMonth(),h.getDate(),h.getHours(),h.getMinutes(),h.getSeconds(),0),h<this.startDate?h=this.startDate:h>this.endDate&&(h=this.endDate),this.viewMode=this.startViewMode,this.showMode(0),this._setDate(h),this.fill(),this.autoclose&&this.hide()}break;case"span":if(!s.is(".disabled")){var o=this.viewDate.getUTCFullYear(),r=this.viewDate.getUTCMonth(),d=this.viewDate.getUTCDate(),l=this.viewDate.getUTCHours(),u=this.viewDate.getUTCMinutes(),c=this.viewDate.getUTCSeconds();if(s.is(".month")?(this.viewDate.setUTCDate(1),r=s.parent().find("span").index(s),d=this.viewDate.getUTCDate(),this.viewDate.setUTCMonth(r),this.element.trigger({type:"changeMonth",date:this.viewDate}),this.viewSelect>=3&&this._setDate(t(o,r,d,l,u,c,0))):s.is(".year")?(this.viewDate.setUTCDate(1),o=parseInt(s.text(),10)||0,this.viewDate.setUTCFullYear(o),this.element.trigger({type:"changeYear",date:this.viewDate}),this.viewSelect>=4&&this._setDate(t(o,r,d,l,u,c,0))):s.is(".hour")?(l=parseInt(s.text(),10)||0,(s.hasClass("hour_am")||s.hasClass("hour_pm"))&&(12==l&&s.hasClass("hour_am")?l=0:12!=l&&s.hasClass("hour_pm")&&(l+=12)),this.viewDate.setUTCHours(l),this.element.trigger({type:"changeHour",date:this.viewDate}),this.viewSelect>=1&&this._setDate(t(o,r,d,l,u,c,0))):s.is(".minute")&&(u=parseInt(s.text().substr(s.text().indexOf(":")+1),10)||0,this.viewDate.setUTCMinutes(u),this.element.trigger({type:"changeMinute",date:this.viewDate}),this.viewSelect>=0&&this._setDate(t(o,r,d,l,u,c,0))),0!=this.viewMode){var m=this.viewMode;this.showMode(-1),this.fill(),m==this.viewMode&&this.autoclose&&this.hide()}else this.fill(),this.autoclose&&this.hide()}break;case"td":if(s.is(".day")&&!s.is(".disabled")){var d=parseInt(s.text(),10)||1,o=this.viewDate.getUTCFullYear(),r=this.viewDate.getUTCMonth(),l=this.viewDate.getUTCHours(),u=this.viewDate.getUTCMinutes(),c=this.viewDate.getUTCSeconds();s.is(".old")?0===r?(r=11,o-=1):r-=1:s.is(".new")&&(11==r?(r=0,o+=1):r+=1),this.viewDate.setUTCFullYear(o),this.viewDate.setUTCMonth(r,d),this.element.trigger({type:"changeDay",date:this.viewDate}),this.viewSelect>=2&&this._setDate(t(o,r,d,l,u,c,0))}var m=this.viewMode;this.showMode(-1),this.fill(),m==this.viewMode&&this.autoclose&&this.hide()}}},_setDate:function(e,t){t&&"date"!=t||(this.date=e),t&&"view"!=t||(this.viewDate=e),this.fill(),this.setValue();var i;this.isInput?i=this.element:this.component&&(i=this.element.find("input")),i&&(i.change(),this.autoclose&&(!t||"date"==t)),this.element.trigger({type:"changeDate",date:this.date})},moveMinute:function(e,t){if(!t)return e;var i=new Date(e.valueOf());return i.setUTCMinutes(i.getUTCMinutes()+t*this.minuteStep),i},moveHour:function(e,t){if(!t)return e;var i=new Date(e.valueOf());return i.setUTCHours(i.getUTCHours()+t),i},moveDate:function(e,t){if(!t)return e;var i=new Date(e.valueOf());return i.setUTCDate(i.getUTCDate()+t),i},moveMonth:function(e,t){if(!t)return e;var i,s,a=new Date(e.valueOf()),n=a.getUTCDate(),h=a.getUTCMonth(),o=Math.abs(t);if(t=t>0?1:-1,1==o)s=-1==t?function(){return a.getUTCMonth()==h}:function(){return a.getUTCMonth()!=i},i=h+t,a.setUTCMonth(i),(0>i||i>11)&&(i=(i+12)%12);else{for(var r=0;o>r;r++)a=this.moveMonth(a,t);i=a.getUTCMonth(),a.setUTCDate(n),s=function(){return i!=a.getUTCMonth()}}for(;s();)a.setUTCDate(--n),a.setUTCMonth(i);return a},moveYear:function(e,t){return this.moveMonth(e,12*t)},dateWithinRange:function(e){return e>=this.startDate&&e<=this.endDate},keydown:function(e){if(this.picker.is(":not(:visible)"))return 27==e.keyCode&&this.show(),void 0;var t,i,s,a=!1;switch(e.keyCode){case 27:this.hide(),e.preventDefault();break;case 37:case 39:if(!this.keyboardNavigation)break;t=37==e.keyCode?-1:1,viewMode=this.viewMode,e.ctrlKey?viewMode+=2:e.shiftKey&&(viewMode+=1),4==viewMode?(i=this.moveYear(this.date,t),s=this.moveYear(this.viewDate,t)):3==viewMode?(i=this.moveMonth(this.date,t),s=this.moveMonth(this.viewDate,t)):2==viewMode?(i=this.moveDate(this.date,t),s=this.moveDate(this.viewDate,t)):1==viewMode?(i=this.moveHour(this.date,t),s=this.moveHour(this.viewDate,t)):0==viewMode&&(i=this.moveMinute(this.date,t),s=this.moveMinute(this.viewDate,t)),this.dateWithinRange(i)&&(this.date=i,this.viewDate=s,this.setValue(),this.update(),e.preventDefault(),a=!0);break;case 38:case 40:if(!this.keyboardNavigation)break;t=38==e.keyCode?-1:1,viewMode=this.viewMode,e.ctrlKey?viewMode+=2:e.shiftKey&&(viewMode+=1),4==viewMode?(i=this.moveYear(this.date,t),s=this.moveYear(this.viewDate,t)):3==viewMode?(i=this.moveMonth(this.date,t),s=this.moveMonth(this.viewDate,t)):2==viewMode?(i=this.moveDate(this.date,7*t),s=this.moveDate(this.viewDate,7*t)):1==viewMode?this.showMeridian?(i=this.moveHour(this.date,6*t),s=this.moveHour(this.viewDate,6*t)):(i=this.moveHour(this.date,4*t),s=this.moveHour(this.viewDate,4*t)):0==viewMode&&(i=this.moveMinute(this.date,4*t),s=this.moveMinute(this.viewDate,4*t)),this.dateWithinRange(i)&&(this.date=i,this.viewDate=s,this.setValue(),this.update(),e.preventDefault(),a=!0);break;case 13:if(0!=this.viewMode){var n=this.viewMode;this.showMode(-1),this.fill(),n==this.viewMode&&this.autoclose&&this.hide()}else this.fill(),this.autoclose&&this.hide();e.preventDefault();break;case 9:this.hide()}if(a){var h;this.isInput?h=this.element:this.component&&(h=this.element.find("input")),h&&h.change(),this.element.trigger({type:"changeDate",date:this.date})}},showMode:function(e){if(e){var t=Math.max(0,Math.min(a.modes.length-1,this.viewMode+e));t>=this.minView&&t<=this.maxView&&(this.element.trigger({type:"changeMode",date:this.viewDate,oldViewMode:this.viewMode,newViewMode:t}),this.viewMode=t)}this.picker.find(">div").hide().filter(".datetimepicker-"+a.modes[this.viewMode].clsName).css("display","block"),this.updateNavArrows()},reset:function(){this._setDate(null,"date")}},e.fn.datetimepicker=function(t){var s=Array.apply(null,arguments);return s.shift(),this.each(function(){var a=e(this),n=a.data("datetimepicker"),h="object"==typeof t&&t;n||a.data("datetimepicker",n=new i(this,e.extend({},e.fn.datetimepicker.defaults,h))),"string"==typeof t&&"function"==typeof n[t]&&n[t].apply(n,s)})},e.fn.datetimepicker.defaults={},e.fn.datetimepicker.Constructor=i;var s=e.fn.datetimepicker.dates={en:{days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],daysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun"],daysMin:["Su","Mo","Tu","We","Th","Fr","Sa","Su"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],meridiem:["am","pm"],suffix:["st","nd","rd","th"],today:"Today"}};s["zh-cn"]={days:["星期日","星期一","星期二","星期三","星期四","星期五","星期六","星期日"],daysShort:["周日","周一","周二","周三","周四","周五","周六","周日"],daysMin:["日","一","二","三","四","五","六","日"],months:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],monthsShort:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],today:"今日",suffix:[],meridiem:[]},s["zh-tw"]={days:["星期日","星期一","星期二","星期三","星期四","星期五","星期六","星期日"],daysShort:["周日","周一","周二","周三","周四","周五","周六","周日"],daysMin:["日","一","二","三","四","五","六","日"],months:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],monthsShort:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],today:"今天",suffix:[],meridiem:["上午","下午"]};var a={modes:[{clsName:"minutes",navFnc:"Hours",navStep:1},{clsName:"hours",navFnc:"Date",navStep:1},{clsName:"days",navFnc:"Month",navStep:1},{clsName:"months",navFnc:"FullYear",navStep:1},{clsName:"years",navFnc:"FullYear",navStep:10}],isLeapYear:function(e){return 0===e%4&&0!==e%100||0===e%400},getDaysInMonth:function(e,t){return[31,a.isLeapYear(e)?29:28,31,30,31,30,31,31,30,31,30,31][t]},getDefaultFormat:function(e,t){if("standard"==e)return"input"==t?"yyyy-mm-dd hh:ii":"yyyy-mm-dd hh:ii:ss";if("php"==e)return"input"==t?"Y-m-d H:i":"Y-m-d H:i:s";throw new Error("Invalid format type.")},validParts:function(e){if("standard"==e)return/hh?|HH?|p|P|ii?|ss?|dd?|DD?|mm?|MM?|yy(?:yy)?/g;if("php"==e)return/[dDjlNwzFmMnStyYaABgGhHis]/g;throw new Error("Invalid format type.")},nonpunctuation:/[^ -\/:-@\[-`{-~\t\n\rTZ]+/g,parseFormat:function(e,t){var i=e.replace(this.validParts(t),"\0").split("\0"),s=e.match(this.validParts(t));if(!i||!i.length||!s||0==s.length)throw new Error("Invalid date format.");return{separators:i,parts:s}},parseDate:function(a,n,h,o){if(a instanceof Date){var r=new Date(a.valueOf()-6e4*a.getTimezoneOffset());return r.setMilliseconds(0),r}if(/^\d{4}\-\d{1,2}\-\d{1,2}$/.test(a)&&(n=this.parseFormat("yyyy-mm-dd",o)),/^\d{4}\-\d{1,2}\-\d{1,2}[T ]\d{1,2}\:\d{1,2}$/.test(a)&&(n=this.parseFormat("yyyy-mm-dd hh:ii",o)),/^\d{4}\-\d{1,2}\-\d{1,2}[T ]\d{1,2}\:\d{1,2}\:\d{1,2}[Z]{0,1}$/.test(a)&&(n=this.parseFormat("yyyy-mm-dd hh:ii:ss",o)),/^[-+]\d+[dmwy]([\s,]+[-+]\d+[dmwy])*$/.test(a)){var d,l,u=/([-+]\d+)([dmwy])/,c=a.match(/([-+]\d+)([dmwy])/g);a=new Date;for(var m=0;m<c.length;m++)switch(d=u.exec(c[m]),l=parseInt(d[1]),d[2]){case"d":a.setUTCDate(a.getUTCDate()+l);break;case"m":a=i.prototype.moveMonth.call(i.prototype,a,l);break;case"w":a.setUTCDate(a.getUTCDate()+7*l);break;case"y":a=i.prototype.moveYear.call(i.prototype,a,l)}return t(a.getUTCFullYear(),a.getUTCMonth(),a.getUTCDate(),a.getUTCHours(),a.getUTCMinutes(),a.getUTCSeconds(),0)}var p,v,d,c=a&&a.match(this.nonpunctuation)||[],a=new Date(0,0,0,0,0,0,0),g={},f=["hh","h","ii","i","ss","s","yyyy","yy","M","MM","m","mm","D","DD","d","dd","H","HH","p","P"],w={hh:function(e,t){return e.setUTCHours(t)},h:function(e,t){return e.setUTCHours(t)},HH:function(e,t){return e.setUTCHours(12==t?0:t)},H:function(e,t){return e.setUTCHours(12==t?0:t)},ii:function(e,t){return e.setUTCMinutes(t)},i:function(e,t){return e.setUTCMinutes(t)},ss:function(e,t){return e.setUTCSeconds(t)},s:function(e,t){return e.setUTCSeconds(t)},yyyy:function(e,t){return e.setUTCFullYear(t)},yy:function(e,t){return e.setUTCFullYear(2e3+t)},m:function(e,t){for(t-=1;0>t;)t+=12;for(t%=12,e.setUTCMonth(t);e.getUTCMonth()!=t;)e.setUTCDate(e.getUTCDate()-1);return e},d:function(e,t){return e.setUTCDate(t)},p:function(e,t){return e.setUTCHours(1==t?e.getUTCHours()+12:e.getUTCHours())}};if(w.M=w.MM=w.mm=w.m,w.dd=w.d,w.P=w.p,a=t(a.getFullYear(),a.getMonth(),a.getDate(),a.getHours(),a.getMinutes(),a.getSeconds()),c.length==n.parts.length){for(var m=0,D=n.parts.length;D>m;m++){if(p=parseInt(c[m],10),d=n.parts[m],isNaN(p))switch(d){case"MM":v=e(s[h].months).filter(function(){var e=this.slice(0,c[m].length),t=c[m].slice(0,e.length);return e==t}),p=e.inArray(v[0],s[h].months)+1;break;case"M":v=e(s[h].monthsShort).filter(function(){var e=this.slice(0,c[m].length),t=c[m].slice(0,e.length);return e==t}),p=e.inArray(v[0],s[h].monthsShort)+1;break;case"p":case"P":p=e.inArray(c[m].toLowerCase(),s[h].meridiem)}g[d]=p}for(var y,m=0;m<f.length;m++)y=f[m],y in g&&!isNaN(g[y])&&w[y](a,g[y])}return a},formatDate:function(t,i,n,h){if(null==t)return"";var o;if("standard"==h)o={yy:t.getUTCFullYear().toString().substring(2),yyyy:t.getUTCFullYear(),m:t.getUTCMonth()+1,M:s[n].monthsShort[t.getUTCMonth()],MM:s[n].months[t.getUTCMonth()],d:t.getUTCDate(),D:s[n].daysShort[t.getUTCDay()],DD:s[n].days[t.getUTCDay()],p:2==s[n].meridiem.length?s[n].meridiem[t.getUTCHours()<12?0:1]:"",h:t.getUTCHours(),i:t.getUTCMinutes(),s:t.getUTCSeconds()},o.H=2==s[n].meridiem.length?0==o.h%12?12:o.h%12:o.h,o.HH=(o.H<10?"0":"")+o.H,o.P=o.p.toUpperCase(),o.hh=(o.h<10?"0":"")+o.h,o.ii=(o.i<10?"0":"")+o.i,o.ss=(o.s<10?"0":"")+o.s,o.dd=(o.d<10?"0":"")+o.d,o.mm=(o.m<10?"0":"")+o.m;else{if("php"!=h)throw new Error("Invalid format type.");o={y:t.getUTCFullYear().toString().substring(2),Y:t.getUTCFullYear(),F:s[n].months[t.getUTCMonth()],M:s[n].monthsShort[t.getUTCMonth()],n:t.getUTCMonth()+1,t:a.getDaysInMonth(t.getUTCFullYear(),t.getUTCMonth()),j:t.getUTCDate(),l:s[n].days[t.getUTCDay()],D:s[n].daysShort[t.getUTCDay()],w:t.getUTCDay(),N:0==t.getUTCDay()?7:t.getUTCDay(),S:t.getUTCDate()%10<=s[n].suffix.length?s[n].suffix[t.getUTCDate()%10-1]:"",a:2==s[n].meridiem.length?s[n].meridiem[t.getUTCHours()<12?0:1]:"",g:0==t.getUTCHours()%12?12:t.getUTCHours()%12,G:t.getUTCHours(),i:t.getUTCMinutes(),s:t.getUTCSeconds()},o.m=(o.n<10?"0":"")+o.n,o.d=(o.j<10?"0":"")+o.j,o.A=o.a.toString().toUpperCase(),o.h=(o.g<10?"0":"")+o.g,o.H=(o.G<10?"0":"")+o.G,o.i=(o.i<10?"0":"")+o.i,o.s=(o.s<10?"0":"")+o.s}for(var t=[],r=e.extend([],i.separators),d=0,l=i.parts.length;l>d;d++)r.length&&t.push(r.shift()),t.push(o[i.parts[d]]);return r.length&&t.push(r.shift()),t.join("")},convertViewMode:function(e){switch(e){case 4:case"decade":e=4;break;case 3:case"year":e=3;break;case 2:case"month":e=2;break;case 1:case"day":e=1;break;case 0:case"hour":e=0}return e},headTemplate:"<thead><tr><th class=\"prev\"><i class=\"icon-arrow-left\"/></th><th colspan=\"5\" class=\"switch\"></th><th class=\"next\"><i class=\"icon-arrow-right\"/></th></tr></thead>",contTemplate:"<tbody><tr><td colspan=\"7\"></td></tr></tbody>",footTemplate:"<tfoot><tr><th colspan=\"7\" class=\"today\"></th></tr></tfoot>"};a.template="<div class=\"datetimepicker\"><div class=\"datetimepicker-minutes\"><table class=\" table-condensed\">"+a.headTemplate+a.contTemplate+a.footTemplate+"</table>"+"</div>"+"<div class=\"datetimepicker-hours\">"+"<table class=\" table-condensed\">"+a.headTemplate+a.contTemplate+a.footTemplate+"</table>"+"</div>"+"<div class=\"datetimepicker-days\">"+"<table class=\" table-condensed\">"+a.headTemplate+"<tbody></tbody>"+a.footTemplate+"</table>"+"</div>"+"<div class=\"datetimepicker-months\">"+"<table class=\"table-condensed\">"+a.headTemplate+a.contTemplate+a.footTemplate+"</table>"+"</div>"+"<div class=\"datetimepicker-years\">"+"<table class=\"table-condensed\">"+a.headTemplate+a.contTemplate+a.footTemplate+"</table>"+"</div>"+"</div>",e.fn.datetimepicker.DPGlobal=a,e.fn.datetimepicker.noConflict=function(){return e.fn.datetimepicker=old,this},e(document).on("focus.datetimepicker.data-api click.datetimepicker.data-api","[data-provide=\"datetimepicker\"]",function(t){var i=e(this);i.data("datetimepicker")||(t.preventDefault(),i.datetimepicker("show"))}),e(function(){e("[data-provide=\"datetimepicker-inline\"]").datetimepicker()})}(window.jQuery)
