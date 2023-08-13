const valueDisplays = document.querySelectorAll(".num");
const interval = 4000;

valueDisplays.forEach((valueDisplay) => {
  const endValue = parseInt(valueDisplay.getAttribute("data-val"));
  const duration = interval / endValue;
  let startValue = 0;

  const counter = setInterval(() => {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue === endValue) {
      clearInterval(counter);
    }
  }, duration);
});
