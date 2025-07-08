<template>
    <div class="playground-wrapper">
        TODO <br />
        타이머 (ms, D-day) 2개 타입 <br />
        json fetching 연습 <br />
        GSAP 애니메이션 실습 <br />
        모달 케이스 만들기 <br /><br />
        스크립트 활용 <br />
        토스트 케이스 만들기 <br />
        탭 케이스 만들기 <br />
        툴팁 케이스 만들기 <br />
        <!-- https://soyoung-lee.com/ -->
        <!-- ✅ 보완 아이디어
        구성 요소	설명	기대 효과
        🔹 인트로 문구	예: “퍼블리셔 차민우의 작업 기록”
        “효율성과 감각을 담은 마크업”	사용자의 시선을 사로잡고 콘셉트를 명확히 전달
        🔹 GSAP / Scroll 애니메이션	Bento 박스 등장 시 페이드인, 슬라이드인 효과	정적인 레이아웃에 동적 감성 부여
        🔹 프로젝트 필터링 기능	“전체 / 랜딩 / 운영 / 클론” 등 필터 버튼	프로젝트 양이 많을 때 UI 개선 및 UX 강화
        🔹 Hover 인터랙션	이미지 위에 프로젝트명, 설명 뜨기	퍼블리싱 세부 기술 강조 가능
        🔹 스킬 강조 영역	상단에 “주요 기술 스택” (HTML / SCSS / JS 등) 아이콘 나열	역량을 한눈에 전달 가능
        🔹 짧은 영상 스니펫	프로젝트 캡처 GIF 또는 동영상 일부 삽입	클릭 없이도 실제 동작 확인 가능 -->
    </div>
</template>


<script setup>
import { onMounted, onUnmounted } from 'vue';
const cards = [
    { title: '👤 About Me', desc: '안녕하세요 차민우 입니다', bg: '#d0e8ff', url: "/about", img: '/home/img/html.png' },
    { title: '🧺 MUJI', desc: '반응형 메인페이지 with Vue', bg: '#f2e8dc', url: "/project/muji", img: '/home/img/js.png' },
    { title: '🏢 FastFive', desc: '투어신청 페이지 with GSAP', bg: '#e3f5e6', url: "/landing/fastfive", img: '/about.png' },
    { title: '🔠 민트영어 ', desc: '이벤트 페이지 with GSAP', bg: '#c9f2d2', url: "/landing/mint", img: '/about.png' },
    { title: '🚀 PLAYGROND', desc: '실험용 프로젝트', bg: '#fef6c9', url: "/playground/hub", img: '/about.png' },

    //     파스텔 민트	#c9f2d2	생기 있는 부드러운 민트
    //     소프트 핑크	#ffdce0	부드럽고 따뜻한 느낌
    //     베이비 블루	#d0e8ff	청량하고 안정감 있는 색
    //     라이트 옐로우#fff4cc	가볍고 밝은 느낌
    //     라벤더 퍼플	#e3dfff	몽환적이고 포근한 색감
    //     민트 블루	#d7f0f6	아이스 블루톤의 청결한 색
    //     코튼 살몬	#ffe9d6	부드러운 복숭아톤
    //     버터 옐로우	#fef6c9	파스텔 노랑, 안정적임
    //     라이트 코랄	#ffdad5	따뜻하고 친근한 색
    //     세이지 민트	#e3f5e6	자연계열, 편안한 톤
    //     애쉬 블루	#dfeefb	고급스러운 쿨톤
    //     모카 베이지	#f2e8dc	은은한 뉴트럴 베이지
    // 
];

onMounted(() => {
    document.body.classList.add('playground-page');
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 1024) return;
        if (!document.body.classList.contains('playground-page')) return;

        const flame = document.createElement('div');
        flame.className = 'rocket-emoji';
        flame.textContent = '🔥';
        flame.style.left = `${e.pageX}px`;
        flame.style.top = `${e.pageY}px`;
        document.body.appendChild(flame);
        flame.animate([
            { transform: 'translate(0)', opacity: 1 },
            { transform: 'translate(40px,20px)', opacity: 0 }
        ], {
            duration: 500,
            easing: 'ease-in-out'
        });

        setTimeout(() => flame.remove(), 400);
    })
    gsap.set('.bento-card', { opacity: 1 }); // 초기값 강제 설정
    gsap.set('.bento-card', { y: 0 }); // 초기값 강제 설정
    gsap.from('.bento-card', {
        scrollTrigger: {
            trigger: '.project-section',
            start: 'top 70%',
            // markers: true
        },
        opacity: 0,
        y: 40,
        delay: 0.2,
        stagger: 0.2,
        duration: 0.2,
        ease: 'power3.out'
    });
})
onUnmounted(() => {
    document.body.classList.remove('playground-page');
})


</script>

<style lang="scss">
@media screen and (min-width: 1024px) {
    body.playground-page {
        cursor: url("data:image/svg+xml;utf8,\<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32'>\<text x='16' y='20' font-size='20' text-anchor='middle' transform='scale(-1,1) translate(-32,0)'>🚀</text>\</svg>") 16 16, auto;
        width: 100vw;
        height: 100vh;
        .rocket-emoji {
            position: absolute;
            font-size: 20px;
            pointer-events: none;
            z-index: 9999;
        }
    }
}
</style>
