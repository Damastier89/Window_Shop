const timer = (id, deadline) => {
  const addZero = (number) => {
    if (number <= 9) {
      return '0' + number;
    } else {
      return number;
    }
  };

  const getTimeRemaining = (endtime) => {
    const time = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const days = Math.floor((time / (1000 * 60 * 60 * 24)));

    return {
      'total': time,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds,
    };
  };

  const setClock = (selector, endtime) => {
    const timer = document.querySelector(selector),
          days = timer.querySelector("#days"),
          hours = timer.querySelector("#hours"),
          minutes = timer.querySelector("#minutes"),
          seconds = timer.querySelector("#seconds"),
          timeInterval = setInterval(updateClock, 1000);
    
    updateClock();

    function updateClock() {
      const timer = getTimeRemaining(endtime);

      days.textContent = addZero(timer.days);
      hours.textContent = addZero(timer.hours);
      minutes.textContent = addZero(timer.minutes);
      seconds.textContent = addZero(timer.seconds);

      if (timer.total <= 0) {
        days.textContent = "00";
        hours.textContent = "00";
        minutes.textContent = "00";
        seconds.textContent = "00";

        clearInterval(timeInterval);
      } 

    };
  }

  setClock(id, deadline);

};

export default timer;