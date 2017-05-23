/**
 * Created by lin.qiu on 2017/5/22.
 */
module.exports={
    baseUrl: ".",
    appDir: './lib/core',
    shim: {
        template: {
            exports: "template"
        },
        zepto: {
            exports: "Zepto"
        }
    },
    paths: {
        Inherit: "lib/core/inherit",
        AbstractView: "lib/core/abstractview"
    },
    include: [
        "Inherit",
        "AbstractView",
        // "zepto",
        // "template"
    ],
    out: "common.js"
};

