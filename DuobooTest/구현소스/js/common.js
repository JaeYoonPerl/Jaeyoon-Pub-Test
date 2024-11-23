// common.js

import myFn from "./my_function.js";


// 공통 처리 데이터 불러오기
import comData from "../data/common_data.js";

export default function setElement(){
    // 1. 대상 선정
    const topArea = myFn.qs("#top-area");
    // const banArea = myFn.qs("#ban-area");
    const footerArea = myFn.qs("#footer-area");

   

    // 2. 코드 넣기

    topArea.innerHTML = comData.topArea;
    // banArea.innerHTML = comData.banArea;
    footerArea.innerHTML = comData.footerArea;
    

    
}

