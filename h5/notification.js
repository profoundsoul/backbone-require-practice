/**
 * Created by mumu on 2017/2/24.
 */
(function(){
    Notification.requestPermission(function(permission) {
        // Whatever the user answers, we make sure we store the
        // information
        if (!('permission' in Notification)) {
            Notification.permission = permission;
        }
        //如果接受请求
        if (permission === "granted") {
            var notification = new Notification('aaaa', {
                "icon": 'http://amazeui.org/i/app-icon72x72@2x.png',
                "body": 'aaaaaaaa',
            });
        }
    });
})();