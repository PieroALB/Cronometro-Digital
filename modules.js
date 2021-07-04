export function seconds(seconds){
  if(seconds <10){
    return "0"+seconds;
  }else if(seconds >= 10){
    return seconds;
  }
}

export function minutes(minutes){
  if(minutes < 10){
    return "0"+minutes+":";
  }else if(minutes >= 10){
    return minutes+":";
  }
}

export function hours(hours){
  if(hours < 10){
    return "0"+hours+":";
  }else if(hours > 10){
    return hours+":";
  }
}

