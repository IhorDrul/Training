function timeFormat(time){
    let days, hours, minutes;
   
    if(time>=0){
        days = parseInt(time/1440);
        time=time-1440*days;
        hours=parseInt(time/60);
        minutes=time%60;
        console.log("Day:", days, "hour(s):",hours, "minute(s):", minutes);
    }else{
        console.log("Wrong time");
    }
}

timeFormat(3000);