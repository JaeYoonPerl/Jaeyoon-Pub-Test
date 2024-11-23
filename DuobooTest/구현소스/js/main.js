// main.js

// 공통함수
import setElement from "./common.js";

setElement(); // 함수호출

// 내 함수 불러오기
import myFn from "./my_function.js";

// import dragSlide from "./drag_slide.js";

// 데이터 불러오기

import * as imgData from "../data/img_data.js";

import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

// [1] 모듈함수 불러오기 파트
// 드래그 슬라이드 기능 함수 불러오기
import setSlide from "./drag_slide.js";



// [2] 기능구현파트
// 드래그 슬라이드 기능 함수 호출하기
setSlide('banbx');



const renderItemsToSwiper = (selector, data, imgPath) => {
    const target = document.querySelector(selector);
    target.innerHTML = data
        .map(
            (v) => `
        <li class="swiper-slide" data-idx="${v.idx}">
        <div class="box-img">
            <img src="${v.img}" alt="${v.title}" />
        </div>
            <div class="box-txt">
                <p class="code">
                    ${v.title}
                    <span>${v.code}</span>
                </p>

                <p class="name">
                    ${v.name}
                </p>
                <div class="price">
                <p>
                    ${v.sprice}원
                    <span>
                    ${v.price}원
                    </span>
                    </p>
                    <small>${v.sale}</small>
                </div>
            </div>
        </li>
        `
        )
        .join("");
};

// 데이터 삽입
renderItemsToSwiper(".bBox", imgData.bItemData, "./images/best_img");
renderItemsToSwiper(".nBox", imgData.nItemData, "./images/newarr_img");

// Swiper 초기화
const bSwiper = new Swiper(".bSwiper", {
    loop: false,
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
    },
    slidesPerView: 5,
    spaceBetween: 30,
});

const nSwiper = new Swiper(".nSwiper", {
    loop: false,
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
    },
    slidesPerView: 5,
    spaceBetween: 30,
});


