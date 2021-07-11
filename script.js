window.addEventListener("load", () => {

  //Time, in seconds, we want.
  let sec = 180;

  const countDiv = document.getElementById("timer");

  const secpass = () => {

    let min = Math.floor(sec/60);
    let secondsLeft = sec % 60;

    if (secondsLeft < 10) {
      secondsLeft = "0" + secondsLeft;
    }

    if (min < 10) {
      min = "0" + min;
    }

    //It will generate the format of 02:45
    countDiv.innerHTML = min + ":" + secondsLeft;

    if (sec > 0) {
      sec = sec -1;
    }
    
    else {
      countDiv.innerHTML= "He finished!!";
    }
  };

  const countDown = setInterval(() => secpass(), 1000);
});