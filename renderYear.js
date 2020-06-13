export function makeYear() {

    let yearInput = document.getElementById('year');
    let monthInput = document.getElementById('month');
    let dayInput = document.getElementById('day');
    let fullYear;

    if (yearInput.value.length != 4 || yearInput.value > 2020 ){
       return alert('Year input format is not correct, follow the instructions');
    }
    if (monthInput.value.length < 2){
       return monthInput.value = 0 + monthInput.value
    } else if (monthInput.value.length > 2 || monthInput.value > 12){
        return alert('Month input format is not correct, follow the instructions');
    }
    if (dayInput.value.length < 2){
        return dayInput.value = 0 + dayInput.value
     } else if (dayInput.value.length > 2 || dayInput.value > 31){
         return alert('Day input format is not correct, follow the instructions');
     }
    
    fullYear = `${yearInput.value}-${monthInput.value}-${dayInput.value}`
  

    return fullYear;
}