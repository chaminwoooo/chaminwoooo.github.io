<template>
    <main>
        <section class="main-txt" id="about">
            <h2 class="hidden">자기소개</h2>
            <div class="profile-wrap">
                <div class="profile-picture">
                    <img src="@/images/man-with-dog.png" alt="man with dog profile">
                </div>
                <div class="profile-txt">
                    <div class="profile-desc">
                        <p>활동적이고 책임감 있는 웹 퍼블리셔 </p>
                        <p><span class="my-name">차민우</span> 입니다.</p>
                        <p>강아지와 함께 프론트엔드 개발자가 되는 것이 목표입니다.</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="main-txt" id="works">
            <h2 class="main-title">WORKS</h2>
            <div class="work-wrap">
                see you later !
            </div>
        </section>
        <section class="main-txt" id="career">
            <h2 class="main-title">CAREER</h2>
            <div class="career-wrap">
                <ul>
                    <li>
                        <p>1995.05.30</p>
                    </li>
                    <li>
                        <p>인헌고등학교</p>
                        <p>(2013.03)</p>
                    </li>
                    <li>
                        <p>*see you later too!*</p>
                        <p>(0000. 00 ~ 0000.00)</p>
                    </li>
                    <li>
                        <p>IEA 퍼블리셔</p>
                        <p>( ~ ING)</p>
                    </li>
                </ul>
            </div>
        </section>
        <section class="main-txt" id="playGround">
            <h2 class="main-title">PLAYGROUND</h2>
            <div class="playground-wrap">
                <div class="man-wrap">
                    <img src="@/images/man.png" alt="man">
                </div>
                <p class="playground-link"><a href="#none">Move To Playground</a></p>
                <div class="play-wrap">
                    <img src="@/images/playground.png" alt="playground">
                </div>
            </div>
        </section>
    </main>
</template>

<script>
export default {
  name: "MainContent",
};
</script>

<style lang="scss">
@import '../styles/MainContent';
</style>