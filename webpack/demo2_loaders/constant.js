/**
 * Created by mumu on 2017/4/5.
 */
export default function* getStatus(){
    yield 'one';
    yield 'two';
    yield 'three';
    return 'true';
}