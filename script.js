const gnb = document.querySelector('.gnb');

gnb.addEventListener('mouseenter', () => {
    gnb.classList.add('on');
});

gnb.addEventListener('mouseleave', () => {
    gnb.classList.remove('on');
});

/*이미지 슬라이드 */

const slide_train = document.querySelector('.slide_train');
let count = 0;

setInterval(function () {
    count++
    if (count > 2) { count = 0 }
    slide_train.style.transform = `translateX(${-1200 * count}px)`
}, 2500)

/* 아이콘 호버시 효과 */

const infor_iljongs = document.querySelectorAll(".infor_iljong");

infor_iljongs.forEach(function (el) {
    const pp = el.querySelector(".infor_iljongpp");
    const obj = el.querySelector("object");

    el.addEventListener("mouseenter", function () {
        pp.style.backgroundColor = "#75a072";
        pp.style.color = "#f3f3f3";
        obj.style.height = "90px";
    });

    el.addEventListener("mouseleave", function () {
        pp.style.backgroundColor = "#a5d8a0";
        pp.style.color = "#6d6d6d";
        obj.style.height = "80px";
    });
});

const infor_sogaes = document.querySelectorAll(".infor_sogae")

infor_sogaes.forEach(function (el) {
    const pp_two = el.querySelector(".infor_iljongpp_two")
    const obj_two = el.querySelector("object")

    el.addEventListener("mouseenter", function () {
        pp_two.style.backgroundColor = "#ccffcc"
        pp_two.style.color = "#333333"
        obj_two.style.height = "90px"
    })

    el.addEventListener("mouseleave", function () {
        pp_two.style.backgroundColor = "#a5d8a0"
        pp_two.style.color = "#6d6d6d"
        obj_two.style.height = "80px"
    })

})




