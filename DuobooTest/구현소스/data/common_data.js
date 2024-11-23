const comData ={
    //1. 상단 영역 코드
    topArea:`
            <header class="top-area">
                <!-- 1-1. 최상위 -->
                <div class="top-box">
                    <div class="wid">
                        <!-- 1-1-1. 쇼핑몰 카테 -->
                        <div class="shopcate-box">
                            <a href="#"> FIRST KIDS Mall </a>

                            <a href="#"> French Cat </a>

                            <a href="#"> GUESS Kids </a>
                        </div>
                        <!-- 1-1-2. 로드인 회원가입 -->
                        <div class="login-box">
                            <a href="#">로그인</a>

                            <a href="#">회원가입</a>

                            <a href="#">마이페이지</a>
                        </div>
                    </div>
                </div>

                <!-- 2. mid-box -->
                <nav class="mid-box">
                    <div class="wid">
                        <!-- GNB 메뉴 -->
                        <nav class="gnb">
                            <li><a href="#"> 카테고리 </a></li>
                            <li><a href="#"> 기획전 </a></li>
                            <li><a href="#"> 아울렛 </a></li>
                            <li><a href="#"> 이벤트 </a></li>
                        </nav>

                        <!-- 로고 -->
                        <div class="main-logo">
                            <a href="#">Tiffany</a>
                        </div>

                        <!-- 아이콘 -->
                        <div class="icon-box">
                            <a href="#">
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </a>
                            <a href="#">
                                <i class="fa-regular fa-heart"></i>
                            </a>
                            <a href="#">
                                <i class="fa-solid fa-cart-shopping"></i>
                            </a>
                        </div>
                    </div>
                </nav>
            </header>
        
    `,
    banArea:`
    
            <div class="swiper mainBan">
                <div class="swiper-wrapper">
                    <div class="swiper-slide"><a href="#"><img class="mainImg"src="./images/main_img/mImg01.png" alt="메인배너"></a></div>
                    <div class="swiper-slide"><a href="#"><img class="mainImg"src="./images/main_img/mImg01.png" alt="메인배너"></a></div>
                    <div class="swiper-slide"><a href="#"><img class="mainImg"src="./images/main_img/mImg01.png" alt="메인배너"></a></div>
                    
                </div>
                <div class="swiper-button-next mBanBtn"></div>
                <div class="swiper-button-prev mBanBtn"></div>
                
            </div>
        `,
    footerArea:`
        
            <div class="wid">
                <div class="top-foot-box">
                    <div class="left-box">
                        <a href="#">고객센터</a>
                        <a href="#">온라인멤버십</a>
                    </div>
                    <div class="right-box">
                        <a href="#">회사소개</a>
                        <a href="#">이용약관</a>
                        <a href="#">개인정보처리방침</a>
                    </div>
                </div>
            </div>
            <div class="info-box">
                <div class="info-txt">
                    <div class="pNum">
                        <span>CS Center</span>
                        <strong>02-2049-8888~9</strong>
                        <p>
                            운영시간
                            <span>09:00 ~ 17:00</span>
                            점심시간
                            <span>12:30 ~ 13:30</span>
                        </p>
                        <!-- <br/> -->
                        <small>토/일/공휴일 휴무</small>
                    </div>
                    <div class="info">
                        <p class="co">(주)퍼스트어패럴</p>
                        <span>대표 : 김연숙</span>
                        <span>개인정보관리자 : 최준범</span>
                        <span>webmaster@firstkid.co.kr</span>
                        <br />
                        <span>사업자등록번호 : 2078151415</span>
                        <span>통신판매업신고번호 : 2006-광진-03056</span>
                        <p class="add">서울특별시 광진구 구의강변로 91(구의동)</p>
                        <p>Copyright ⓒ First Apparel. all rights reserved.</p>
                    </div>
                    <div class="icon">
                        <a href="#">
                            <img src="https://www.firstkid.co.kr/images/common/ico_ch.png" alt="" />
                            FIRST KIDS
                        </a>
                        <a href="#">
                            <img src="https://www.firstkid.co.kr/images/common/ico_insta.png" alt="" />
                            French Cat
                        </a>
                        <a href="#">
                            <img src="https://www.firstkid.co.kr/images/common/ico_insta.png" alt="" />
                            Tiffany
                        </a>
                        <a href="#">
                            <img src="https://www.firstkid.co.kr/images/common/ico_insta.png" alt="" />
                            GUESS Kids
                        </a>
                        <a href="#">
                            <img src="https://www.firstkid.co.kr/images/common/ico_insta.png" alt="" />
                            Pink Dragon
                        </a>
                    </div>
                </div>
            </div>
        
    `
};

export default comData;