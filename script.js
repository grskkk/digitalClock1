setInterval(updateClock,1000);

function formatTime(number){
    return number < 10 ? "0" + number : number;
}

function updateClock(){
    const now = new Date();
    const hours = formatTime(now.getHours());
    const minutes = formatTime(now.getMinutes());
    const seconds = formatTime(now.getSeconds());
    let timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById("clock").innerHTML = timeString;    
}

