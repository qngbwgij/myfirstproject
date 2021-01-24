export const debounce=function (func, delay) {//防抖动debounce 节流throttle

    let timer=null;

    return function (...args) {


    if (timer) clearTimeout(timer);

    timer=setTimeout(()=>func.apply(this, args), delay)


        }
}