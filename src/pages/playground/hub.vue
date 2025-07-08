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
import { onMounted, onUnmounted } from 'vue'

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
