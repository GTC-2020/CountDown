import { UI_ELEMENTS, getInputDate, showOutput, } from "./view.js";
import {intervalToDuration} from "date-fns";

let endOfThePeriod ;

function timer(endThePeriod){
    let now = new Date();
    let date = intervalToDuration({
        start: now,
        end: new Date(endThePeriod),
    })
    
    return date;
}

UI_ELEMENTS.SUBMIT.addEventListener("click", function(){
    endOfThePeriod = getInputDate();
    setInterval(() => {showOutput(timer(endOfThePeriod))}, 1000);
})