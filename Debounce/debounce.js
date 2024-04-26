const input = document.querySelector("input")
const defaultText = document.getElementById("default")
const debounceText = document.getElementById("debounce")
const throttleText = document.getElementById("throttle")


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