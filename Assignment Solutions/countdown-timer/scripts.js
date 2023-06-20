// scripts.js
window.addEventListener("DOMContentLoaded", function () {
  const userInput = document.getElementById("userInput");
  const startButton = document.querySelector(".timer button");
  const countDown = document.getElementById("countDown");
  const endTime = document.getElementById("endTime");

  let timerId;

  function startTimer(duration) {
    const startTime = new Date().getTime();
    const endTimeValue = new Date().getTime() + duration * 60 * 1000;

    updateTimer();

    timerId = setInterval(updateTimer, 1000);

    function updateTimer() {
      const currentTime = new Date().getTime();
      const remainingTime = endTimeValue - currentTime;

      if (remainingTime <= 0) {
        clearInterval(timerId);
        countDown.textContent = "Countdown Finished";
        endTime.textContent =
          "End Time: " +
          new Date(endTimeValue).getHours() +
          ":" +
          new Date(endTimeValue).getMinutes();
        return;
      }

      countDown.textContent = "Remaining Time: " + formatTime(remainingTime);
      endTime.textContent =
        "End Time: " +
        new Date(endTimeValue).getHours() +
        ":" +
        new Date(endTimeValue).getMinutes();
    }
  }

  function formatTime(time) {
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);

    return (
      (minutes < 10 ? "0" : "") +
      minutes +
      ":" +
      (seconds < 10 ? "0" : "") +
      seconds
    );
  }

  startButton.addEventListener("click", function () {
    const duration = parseInt(userInput.value);
    if (!isNaN(duration)) {
      startTimer(duration);
    }
  });

  userInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      const duration = parseInt(userInput.value);
      if (!isNaN(duration)) {
        startTimer(duration);
      }
    }
  });

  // Timer for default options
  startTimer(10);
});
