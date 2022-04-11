export const UI_ELEMENTS ={
    INPUT:document.querySelector("#input_date"),
    OUTPUT: document.querySelector(".output_field"),
    SUBMIT:document.querySelector(".search"),
    YEARS:document.querySelector(".value_years"),
    MONTHS:document.querySelector(".value_month"),
    DAYS:document.querySelector(".value_days"),
    HOURS:document.querySelector(".value_hours"),
    MINUTES:document.querySelector(".value_minutes"),
    SECONDS:document.querySelector(".value_seconds")

}

export function getInputDate(){
    return UI_ELEMENTS.INPUT.value;  
}

export function showOutput(date){
    UI_ELEMENTS.YEARS.textContent = date.years;
    UI_ELEMENTS.MONTHS.textContent = date.months;
    UI_ELEMENTS.DAYS.textContent = date.days;
    UI_ELEMENTS.HOURS.textContent = date.hours;
    UI_ELEMENTS.MINUTES.textContent = date.minutes;
    UI_ELEMENTS.SECONDS.textContent = date.seconds;
}

