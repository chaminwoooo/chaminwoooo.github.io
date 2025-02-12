'use strict';

const navItems = document.querySelectorAll('.nav-list .nav-item');
const cateWraps = document.querySelectorAll('.category-list-wrap');
const cateList = document.querySelectorAll('.category-list-wrap .category-item');
const prdList = document.querySelectorAll('.product-list-wrap .product-list');

// 특정 인덱스의 요소에만 active 클래스를 추가하고 나머지는 제거하는 함수
function toggleActive(elements, index, className = 'active') {
    elements.forEach(el => el.classList.remove(className));
    if (index >= 0 && elements[index]) {
        elements[index].classList.add(className);
    }
}

// hover 이벤트 등록 함수
function setHoverEffect(triggers, targets, clearOnLeave = true) {
    triggers.forEach((trigger, index) => {
        trigger.addEventListener('mouseenter', () => toggleActive(targets, index));
        if (clearOnLeave) {
            trigger.addEventListener('mouseleave', () => toggleActive(targets, -1));
        }
    });
}

// nav-item에 hover 시 cateWrap에 active 추가 (mouseleave 시 제거 안 함)
setHoverEffect(navItems, cateWraps, false);

// cateList에 hover 시 prdList에 active 추가
cateList.forEach((cateItem, index) => {
    cateItem.addEventListener('mouseenter', () => {
        toggleActive(prdList, index); // 해당 prdList에 active 추가
        cateList.forEach(item => item.classList.remove('active')); // 모든 cateItem에서 active 제거
        cateItem.classList.add('active'); // 현재 cateItem에만 active 추가
    });
});

// cateWrap에서 마우스가 나가면 내부 cateList와 prdList 초기화
cateWraps.forEach(cateWrap => {
    cateWrap.addEventListener('mouseleave', () => {
        cateWrap.classList.remove('active'); // cateWrap의 active 제거
        cateList.forEach(item => item.classList.remove('active')); // cateList 초기화
        prdList.forEach(product => product.classList.remove('active')); // prdList 초기화
    });
});











