<template>
    <nav id="MainNav">
        <h2 class="hidden">네비게이션</h2>
        <ul class="nav">
            <li>
                <a href="javascript:void(0)">About
                    <svg width="85" height="30" viewBox="0 0 84 27" fill="none" xmlns="http://www.w3.org/2000/svg"
                        class="highlighted">
                        <path d="M80.178 1.06C61.652.554 20.475 3.042 3.975 17.03-16.65 34.516 76.487 23.757 83 7.617"
                            stroke="#141414">
                        </path>
                    </svg>
                </a>
            </li>
            <li>
                <a href="javascript:void(0)">Works
                    <svg width="85" height="30" viewBox="0 0 77 34" fill="none" xmlns="http://www.w3.org/2000/svg"
                        class="highlighted">
                        <path
                            d="M74.247 25.85C66.547 5.114 22.631-1.59 5.704 9.798-15.455 24.035 61.518 37.843 69.29 23.41"
                            stroke="#141414">
                        </path>
                    </svg>
                </a>
            </li>
            <li>
                <a href="javascript:void(0)">Career
                    <svg width="85" height="30" viewBox="0 0 84 27" fill="none" xmlns="http://www.w3.org/2000/svg"
                        class="highlighted">
                        <path d="M80.178 1.06C61.652.554 20.475 3.042 3.975 17.03-16.65 34.516 76.487 23.757 83 7.617"
                            stroke="#141414">
                        </path>
                    </svg>
                </a>
            </li>
            <li>
                <a href="javascript:void(0)">Playground
                    <svg width="85" height="30" viewBox="0 0 77 34" fill="none" xmlns="http://www.w3.org/2000/svg"
                        class="highlighted">
                        <path
                            d="M74.247 25.85C66.547 5.114 22.631-1.59 5.704 9.798-15.455 24.035 61.518 37.843 69.29 23.41"
                            stroke="#141414">
                        </path>
                    </svg>
                </a>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
  name: "MainNav",
  data() {
    return {
        navList : ['About','Works','Career','Playgound'],
    }
  },
};
</script>

<style lang="scss">
@import '../styles/Nav';
</style>