/**
 * Created by mumu on 2017/4/5.
 */
let mytest={
    data(){
        return '111';
    },
    name:'object!'
};

export {mytest};

export default function* getStatus(){
    yield 'one';
    yield 'two';
    yield 'three';
    return 'true';
};

