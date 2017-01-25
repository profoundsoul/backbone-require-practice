
/**
 * Created by mumu on 2017/1/23.
 */
require.config({
    paths:{
        'user':'views/user',
        'goods':'views/goods',
        'test':'views/multi'
    },
    bundles:{
        'test':['test1', 'test2']
    }
});
debugger;
require(['user', 'test1'], function(user,test1){

    console.log(user);
    var name = document.createElement('div');
    var addr = document.createElement('div');
    name.innerText =user.userName;
    addr.innerText =user.addrs;
    var df = document.createDocumentFragment();
    df.appendChild(name);
    df.appendChild(addr);

    document.body.appendChild(df);
});
