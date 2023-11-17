'use strict'

let stickyTab = document.querySelectorAll('.sticky-tab');

stickyTab[0].style.top = '0px'
stickyTab.forEach((el, index) => {
    if (index == 1) el.style.top = stickyTab[index - 1].offsetHeight + 'px'
    if (index == 2) el.style.top = stickyTab[index - 1].offsetHeight + stickyTab[index - 2].offsetHeight + 'px'
})
// reduce 로 누적높이갑 더해서 붙이고 싶은데 방법 찾는중..
