// setInterval --> 몇 초마다 반복
// setTimeout --> 몇 초 뒤에 실행
// .padStart(2, "0") --> string의 길이가 2가 되지 않는다면 앞에 0을 추가
// .padEnd(2, "0") --> 문자 뒤에 0을 추가
// date()는 숫자이므로 String(new Date())로 문자화시켜줘야 함
/**date를 new Date()로 선언하는 이유
 * new를 선두에 두고 생성자 함수를 호출하면 instance object를 반환
*/

const clock = document.querySelector("h2#clock");

function getClock(){
  const date = new Date();
  const hours = String(date.getHours()).padStart(2,"0");
  const minutes = String(date.getMinutes()).padStart(2,"0");
  const seconds = String(date.getSeconds()).padStart(2,"0");

  clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock();
setInterval(getClock, 1000);