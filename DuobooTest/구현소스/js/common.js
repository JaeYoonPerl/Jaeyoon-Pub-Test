// common.js

import myFn from "./my_function.js";

export default function setElement(){
    // 1. 대상 선정
    const topArea = myFn.qs("top-area");
    const banArea = myFn.qs("#ban-area");
    const footerArea = myFn.qs("#footer-area");

    // 문자형 태그를 실제 태그로 변환하는 함수
    const stringToHtml = x => {
    // 1. 브라우저 메모리에 div태그 생성
    let ele = document.createElement("div");
    // 2. 생성된 태그 내부에 html로 문자형태그 삽입
    ele.innerHTML=x;
    // 3. 생성된 html태그 리턴
    // -> 내부의 생성코드만 보내준다.
    return ele.firstElementChild;
    };

    // 2. 코드 넣기

    topArea.innerHTML = comData.topArea;

    // 전체 네비 코드 넣기
    // 선택요소 앞에 삽입 before()
    // 뒤에 삽입 after()를 사용
    // 단, html로 문자형 태그를 변환해야함
    topArea.after(stringToHtml(comData.navArea));

    banArea.innerHTML = comData.banArea;
    spartMenu.innerHTML = comData.spartMenu;
    footerArea.innerHTML = comData.footerArea;
}

