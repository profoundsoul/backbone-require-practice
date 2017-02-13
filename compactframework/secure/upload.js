/******************************************
 * @description: 文件上传组件
 * @author:      dyq
 * @createdate:  20150520
 ******************************************/
(function($){
    // image preview
    var imgReader = function(aImgs, previewCallback) {
            if (!window.FileReader) {
                $.custom.Dialog.Toast('该浏览器暂不支持图片预览，推荐使用chrome浏览器', 2);
                return;
            }

            var timer,
                aData = [];

            for (var i = 0; i < aImgs.length; i++) {
                var oImg = aImgs[i],
                    reader = new FileReader();

                reader.onload = function(e) {
                    aData.push({
                        name: oImg.name,
                        uri: e.target.result
                    });
                }

                reader.onerror = function() {
                    aData.push({
                        name: oImg.name,
                        uri: ''
                    });
                }

                reader.readAsDataURL(oImg);
            };

            // check if all file readed
            timer = setInterval(function() {
                if (aData.length == aImgs.length) {
                    clearInterval(timer);
                    previewCallback && previewCallback(aData);
                }
            }, 30);
        };

    var Upload = $.custom.Class({
        __propertys__:function(){
            this.formData = null;
        },
        initialize:function(config){
            $.extend(this, config);
        },
        /**
         * 清空file组件value值；兼容IE8-IE10中file组件readonly特性
         * @param e 事件event object or target
         */
        resetFileElement: function (e) {
            var $inputFile = $(e.currentTarget || e);
            if($inputFile && $inputFile.length) {
                $inputFile.wrap('<form></form>');
                $inputFile.parent()[0].reset();
                $inputFile.unwrap();
            }
        },
        onSubmit: function(oFunc, oPost) {
            /**
             *    oFunc : {
            *        success : function () {},
            *        error : function () {},
            *        progress : function (nPercent) {}
            *    } // 事件回调
             *
             *    oPost : {
            *        xx : xxx
            *    }  // 额外数据
             **/
            if (this.formData) {
                var xhr = new XMLHttpRequest();

                // event listners
                if (oFunc.success) {
                    xhr.addEventListener('load', function() {
                        if (xhr.status === 200) {
                            var oData = JSON.parse(xhr.responseText);

                            oFunc.success(oData);
                        } else {
                            oFunc.error();
                        }
                    }, false);
                }

                if (oFunc.error) {
                    xhr.addEventListener('error', oFunc.error, false);
                    xhr.addEventListener('abort', oFunc.error, false);
                }

                if (oFunc.progress) {
                    xhr.upload.addEventListener('progress', function(e) {
                        if (e.lengthComputable) {
                            var nPercent = Math.round(e.loaded * 100 / e.total);
                            oFunc.progress(nPercent);
                        }
                    }, false);
                }

                xhr.open(this.method, this.url);

                // update form data
                if (oPost) {
                    for (var i in oPost) {
                        this.formData.append(i, oPost[i])
                    }
                }

                // send data
                xhr.send(this.formData);
            } else {
                $.custom.Dialog.Toast('请选择要上传文件', 2);
                oFunc.Prompt();

            }
        },
        onSelected: function(e, previewCallback) {
            if (!window.FormData || !window.FileReader) {
                this.resetFileElement(e);
                $.custom.Dialog.Toast('该浏览器暂不支持文件上传，推荐使用chrome浏览器', 2);
                return;
            }

            var aImgs = [],
                oFiles = e.target.files,
                sType = $(e.target).attr('accept'),
                oFormData = new window.FormData();

            // update type
            sType = sType ? sType.match(/\w+/g).join('|') : '';

            // update this.files
            if (oFiles && oFiles.length) {
                for (var i = 0; i < oFiles.length; i++) {
                    var oFile = oFiles[i],
                        sFileName = oFile.name.toLowerCase();

                    // collect images
                    if (oFile.type.match('image.*')) {
                        aImgs.push(oFile);
                    }

                    // file type double check
                    if (sType) {
                        var isCorrect = new RegExp('(.*)\\.(' + sType + ')$').test(sFileName);

                        if (isCorrect) {
                            oFormData.append(sFileName, oFile);
                        } else {
                            $.custom.Dialog.Toast('所选文件类型不支持', 2);
                            break;
                        }
                    }

                    if (i == oFiles.length - 1) {
                        this.formData = oFormData;
                        if (aImgs && aImgs.length) {
                            imgReader(aImgs, previewCallback);
                        } else {
                            previewCallback && previewCallback(sFileName);
                        }
                    }
                }
            } else {
                this.formData = null;
                if (!aImgs || !aImgs.length) {
                    previewCallback && previewCallback();
                }
            }
        }
    });

    var defaults = {
        method:'post',
        url:''
    };

    $.custom.Register('Upload', function(oConfig) {
        return new Upload($.extend({}, defaults, oConfig));
    });
})(jQuery);

