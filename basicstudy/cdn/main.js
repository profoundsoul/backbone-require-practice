/**
 * Created by lin.qiu on 2017/8/1.
 */
(function(){
    window.onload = function(){
        console.log('onload!');
    }

    var allli = document.querySelectorAll('#list li');
    for(var i=0;i<allli.length;i++) {
        allli[i].addEventListener('click', function(e){
            var target = e.currentTarget;
            alert(target.innerHTML);
        }, false);
    }
})();