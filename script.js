let count = 0;
let timer;
function start() {
    if (!timer) {
        timer = setInterval(function() {
            count++;
            document.getElementById("timer").innerHTML = formatTime(count)
        } , 1000);
        
    }
    
}
function stop() {
    clearInterval(timer);
    timer = null;
    
}
function restart() {
    clearInterval(timer);
    timer = null;
    count = 0;
    document.getElementById("timer").innerText = formatTime(count);

    
}
function formatTime(seconds) {
    let minutes = Math.floor (seconds / 60);
    let secs = seconds % 60;
    return (minutes < 10 ? "0" : "") + minutes + ":" + (secs < 10 ? "0" : "") + secs;
    
};