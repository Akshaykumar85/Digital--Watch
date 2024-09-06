let  timeDisplay=document.getElementById('time-display');
let dateDisplay=document.getElementById('date-display');
function timer(){
    let d1=new Date();
    let currentDate=d1.toLocaleDateString();
    let currentTime=d1.toLocaleTimeString();
    dateDisplay.textContent=currentDate;
    timeDisplay.textContent=currentTime;

}
setInterval(timer,1000);