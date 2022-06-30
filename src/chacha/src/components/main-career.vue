<template>
    <section class="main-section">
        <h2 class="main-title">CAREER</h2>
        <article class="main-section__career">
            <ul class="list-up">
                <li v-for="careerListMain in careerList" :key="careerListMain" class="list-up__item">
                    <span>{{careerListMain.date}}</span>
                    <em>{{careerListMain.title}}</em>
                </li>
            </ul>
        </article>
    </section>
</template>

<script>
export default {
  name: "MyCareer",
  data() {
    return {
        careerList :[
            {date: '1995.05.30', title:'태어나버림'},
            {date: '2013.03', title:'인헌고등학교 졸업띠'},
            {date: '2000~', title:'나중에 만나엽.'},
        ]
    }
  },
};
</script>

<style lang="scss">
</style>