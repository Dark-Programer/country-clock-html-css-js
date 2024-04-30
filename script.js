const india_clock = document.querySelector("#india");
const dubai_clock = document.querySelector("#dubai");
const london_clock = document.querySelector("#london");

setInterval(() => {
  let date = new Date();
  india_clock.textContent = date.toLocaleTimeString();
  dubai_clock.textContent = date.toLocaleTimeString("en-US", {
    timeZone: "Asia/Dubai",
  });
  london_clock.textContent = date.toLocaleTimeString("en-US", {
    timeZone: "Europe/London",
  });
}, 1000);

