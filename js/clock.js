// setInterval --> 몇 초마다 반복
// setTimeout --> 몇 초 뒤에 실행

const clock = document.querySelector("h2#clock");

function getClock(){
  const date = new Date();
  clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}
getClock();
setInterval(getClock, 1000);