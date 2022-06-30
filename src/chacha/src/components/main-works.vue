<template>
  <section class="main-section md">
    <h2 class="main-title">WORKS</h2>
    <article class="main-section__works">
      <ul class="list-up">
        <li v-for="workListMain in worksList" :key="workListMain" class="list-up__item">
          <span>{{workListMain.date}}</span>
          <em>{{workListMain.title}} </em>
        </li>
      </ul>
    </article>
  </section>
</template>

<script>
export default {
  name: "MyWorks",
  data() {
    return {
      worksList:[
        {date : '2022-00-00', title :'오 포폴 url 걸어버리기.?.'},
        {date : '2022-00-00', title :'연혁처럼 되부렀네;'},
        {date : '2022-00-00', title :'포폴 작업물 1 완료'},
        {date : '2022-00-00', title :'포폴 작업물 1 시작'},
        {date : '2022-00-00', title :'아무거나 하고 있는거?'},
        {date : '2022-00-00', title :'갈겨잇?'},
        {date : '2022-07-00', title :'메인페이지 완성해버리기'},
        {date : '2022-06-30', title :'BEM 스터디 겸 도입'},
      ]
    }
  },
};
</script>

<style lang="scss">
</style>