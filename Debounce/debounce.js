const input = document.querySelector("input")
const defaultText = document.getElementById("default")
const debounceText = document.getElementById("debounce")
const throttleText = document.getElementById("throttle")

/**
 * 
 *  search box: []
 *  default:
 * 
 * 
 *  Here, default will show the result of api search from the searchbox
 * 
 * so if you type
 * searchbox: [m]
 * default: show result of movies starting with "m"
 * 
 * then if you type a
 * searchbox: [ma]
 * default: show result of movies starting with "ma"
 * 
 * 
 * then if you type t
 * searchbox: [mat]
 * default: show result of movies starting with "mat"
 * 
 * .....
 * 
 * 
 * till you type x
 * searchbox: [matrix]
 * default: show result of movies starting with "matrix"
 * 
 * 
 * we would have six differennt calls to the server for different search results
 * it could overload the system
 * 
 * here, debouncing and throlling comes into picture which is to slow
 * down the calls to the server (after a set delay)
 * 
 * How it works?
 * Debounce
 * 
 * searchbox: [m]
 * 
 * // debounce
 * before calling the server, it will wait for 1 sec and if nothing is
 * changed in the input, then the call will be made to server
 * 
 * otherwise, if the user added "a"
 * searchbox: [ma]
 * 
 * then it will again wait for 1 sec and see if anything changes otherwise made 
 * the call to the server
 * 
 * //throttle
 * immediately call the function, then wait for 1 sec, then again call the function
 * with the latest info
 * 
 *
 * 
 * 
 * 
 */


const updateDebounceText = debounce2((text)=>{
   // debounceText.textContent=text;
   incrementCount(debounceText);
})

const updateThrottleText = throttle((text)=>{
    //throttleText.textContent=text;
    incrementCount(throttleText);
})

// input.addEventListener("input", e=>{
//     defaultText.textContent = e.target.value
//     updateDebounceText(e.target.value);
//     updateThrottleText(e.target.value);
// });


//debounce to call the functione once after the delay
function debounce2(cb, delay=1000) {
    let timer
    return (...args) => {
        clearTimeout(timer)
        timer = setTimeout(()=>{
            cb(...args)
        }, delay);
    }
}


//throttle sends back the latest value -> mouse moving, window resizing

function throttle(cb, delay=1000) {
    let shouldWait = false;
    let waitingArgs;

    const timeOutFunction = () => {
            if(waitingArgs == null)
            {
                shouldWait = false
            } else {
                cb(...waitingArgs);
                waitingArgs = null;
                setTimeout(timeOutFunction, delay);
                
            }
    }

    return(...args) => {
        if(shouldWait) {
            waitingArgs = args;
            return
        }

        cb(...args);
        shouldWait = true;

        setTimeout(timeOutFunction, delay);
    }

}

function incrementCount (elementText) {
    elementText.textContent = (parseInt(elementText.innerText) || 0)+1;
}


document.addEventListener("mousemove", e=>{
    incrementCount(defaultText);
    updateDebounceText(debounceText);
    updateThrottleText(throttleText);
})