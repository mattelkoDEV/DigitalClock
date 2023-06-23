function startTimer(){
    const today = new Date()
    let hour = today.getHours()
    let minute = today.getMinutes()
    let second = today.getSeconds()
    let date = today.getDate()
    let month = today.getMonth()
    let year = today.getFullYear()
    
    minute = addZero(minute)
    second = addZero(second)
    
    document.getElementById('timeText').innerHTML = hour + ":" + minute + ":" + second;
    
    document.getElementById('dateText').innerHTML =  date + "." + month + "." + year;
    
    setTimeout(startTimer, 1000);
}

function addZero(i){
    if (i < 10) {i = "0" + i}
    return i
}