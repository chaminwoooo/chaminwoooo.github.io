// header menu
const menuHeight = document.querySelector('header').offsetHeight;
const sectionHeight = document.querySelector("#content-1").offsetTop;
const sectionHeight2 = document.querySelector("#content-2").offsetTop;

const nav1 = document.querySelector('.nav1');
const nav2 = document.querySelector(".nav2");

nav1.addEventListener('click',function () {
   console.log('testst') ;
   window.scrollTo({top:sectionHeight - menuHeight,behavior:'smooth'});
})

nav2.addEventListener('click',function () {
    window.scrollTo({top:sectionHeight2 - menuHeight,behavior:'smooth'});
})
console.log(menuHeight);
console.log(sectionHeight);

// 마우스 호버시 이벤트인데 쿼리셀렉터올 을 쓰는 경우에는 꼭 for 나 forEach 문을 활용해야함
// 처음에 변수에 왜 's' 붙이는지 몰랐는데 파라미터 값에 단수로 작성해야되서 그런 것 같음
// 's' 안붙이고 변수 선언 안해도 파라미터로 알아서 붙으니깐 잘 기억하고
// 화살표 함수 익숙해지게 자주 사용
let productLists = document.querySelectorAll(".product-wrap li");
productLists.forEach((productList) => {
  productList.addEventListener("mouseover", function () {
    console.log("hello");
    productList.classList.add("hover");
  });
  productList.addEventListener("mouseleave", function () {
    console.log("bye");
    productList.classList.remove("hover");
  });
});



// 브랜드 무한루프스크롤
const scrollContainer = document.querySelector('.brand-list');
scrollContainer.addEventListener('mouseover',()=>{
  scrollContainer.style.transform = 'translate(-50%)'
});
scrollContainer.addEventListener('mouseout',()=>{
  scrollContainer.style.transform = 'translate(0)'
});