// string : "", '' 형태 -- text
// variable 만드는 두가지 방법 = const(상수), let

// boolean(논리형 객체) ==> true/false/null/undefined 값으로 나옴
// null은 값이 없다는 것을 확실하게 보여주기 위해 사용
// undefined 변수는 존재하는데 값이 아직 주어지지 않은 것
// const로 object를 지정했을 때, object 안의 객체를 업데이트하는 것은 문제가 없다. 통으로 바꾸려할 때 문제가 됨

// function 안에서 계산을 했으면 return 처리해야 함수 밖에서도 값을 볼 수 있다.
// return을 하면 function은 return까지만 작동한다.
// console.dir() --> 요소를 object 형식으로 좀 더 자세하게 보여줌
// function에 ()를 달아주면 선언되면 자동으로 실행하게 됨.
// event 기능 사용시 function에 ()이 없어야 이벤트가 실행될 때 js가 대신 함수를 실행하도록 함

/**document
 * js와 html의 상호작용 가능하게 해줌. 브라우저에서도 그냥 사용 가능한 object
 * document.getElementById --> html 문서에서 해당 id를 가진 element 찾아줌 (array 반환)
 * getElementsByTagName --> name을 할당할 수 있음 (array 반환)
 * querySelector --> 조건에 맞는 맨 첫 번째 한 개의 값만 가져와줌 / css 선택자 형식 사용 가능
 * querySelectorAll --> 조건에 맞는 모든 element를 가져옴 (array 반환)
*/

/** addEventListener
 * event = 어떤 행위를 하는 것
 * eventListener = js가 무슨 event를 listen해야하는지 선언
 * title.addEventListener("event", function)
 */

// raw value를 두번 이상 사용할 시, const로 선언해서 사용하면 에러 발생할 수 있는 부분 축소 가능

const h1 = document.querySelector(".hello h1");

function handleTitleClick(){
  // const clickedClass = "clicked";
  // if(h1.classList.contains(clickedClass)){
  //   h1.classList.remove(clickedClass)
  // } else {
  //   h1.classList.add(clickedClass);
  // }
  h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleTitleClick);