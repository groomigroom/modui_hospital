const gnb = document.querySelector('.gnb');

gnb.addEventListener('mouseenter', () => {
    gnb.classList.add('on');
});

gnb.addEventListener('mouseleave', () => {
    gnb.classList.remove('on');
});

/*이미지 슬라이드 */

const slide_train = document.querySelector('.slide_train');
const slideItems = document.querySelectorAll('.slide');
const slideCount = slideItems.length;

// 1) 첫 번째 이미지를 복제해서 뒤에 붙이기
const clone = slideItems[0].cloneNode(true);
slide_train.appendChild(clone);

let index = 0;
const width = 1200;

setInterval(() => {
    index++;
    slide_train.style.transition = "0.6s";
    slide_train.style.transform = `translateX(${-width * index}px)`;

    // 마지막 복제 이미지에 도달했을 때
    if (index === slideCount) {
        // 약간 딜레이 후 transition 제거 + 위치 초기화
        setTimeout(() => {
            slide_train.style.transition = "none";
            slide_train.style.transform = `translateX(0px)`;
            index = 0;
        }, 600); // transition 시간과 동일하게
    }
}, 2500);

/* 아이콘 호버시 효과 */

const infor_iljongs = document.querySelectorAll(".infor_iljong");

infor_iljongs.forEach(function (el) {
    const obj = el.querySelector("object");

    el.addEventListener("mouseenter", function () {
        obj.style.height = "90px";
    });

    el.addEventListener("mouseleave", function () {
        obj.style.height = "80px";
    });
});

const infor_sogaes = document.querySelectorAll(".infor_sogae")

infor_sogaes.forEach(function (el) {
    const obj_two = el.querySelector("object")

    el.addEventListener("mouseenter", function () {
        obj_two.style.height = "90px"
    })

    el.addEventListener("mouseleave", function () {
        obj_two.style.height = "80px"
    })

})

//쇼페이지 함수용

function showPage(page_for_show) {
    document.querySelectorAll('.page_select').forEach(function (pa) {
        pa.style.display = 'none';
        document.getElementById(page_for_show).style.display = 'block';
    });
}
//의료진 소개
const modui_sogae_doctor_intro_three_box_one = document.querySelector(".modui_sogae_doctor_intro_three_box_one")
const modui_sogae_doctor_intro_three_box_two = document.querySelector(".modui_sogae_doctor_intro_three_box_two")
const modui_sogae_doctor_intro_three_box_three = document.querySelector(".modui_sogae_doctor_intro_three_box_three")

modui_sogae_doctor_intro_three_box_one.addEventListener("mouseenter", function(){
    modui_sogae_doctor_intro_three_box_one.style.width = "600px"
    modui_sogae_doctor_intro_three_box_one.style.left = "0px"
    modui_sogae_doctor_intro_three_box_two.style.left = "600px"
    modui_sogae_doctor_intro_three_box_three.style.left = "900px"
})

modui_sogae_doctor_intro_three_box_one.addEventListener("mouseleave", function(){
    modui_sogae_doctor_intro_three_box_one.style.width = "300px"
    modui_sogae_doctor_intro_three_box_one.style.left = "150px"
    modui_sogae_doctor_intro_three_box_two.style.left = "450px"
    modui_sogae_doctor_intro_three_box_three.style.left = "750px"
})

modui_sogae_doctor_intro_three_box_two.addEventListener("mouseenter", function(){
    modui_sogae_doctor_intro_three_box_one.style.left = "0px"
    modui_sogae_doctor_intro_three_box_two.style.left = "300px"
    modui_sogae_doctor_intro_three_box_two.style.width = "600px"
    modui_sogae_doctor_intro_three_box_three.style.left = "900px"
})

modui_sogae_doctor_intro_three_box_two.addEventListener("mouseleave", function(){
    modui_sogae_doctor_intro_three_box_one.style.left = "150px"
    modui_sogae_doctor_intro_three_box_two.style.left = "450px"
    modui_sogae_doctor_intro_three_box_two.style.width = "300px"
    modui_sogae_doctor_intro_three_box_three.style.left = "750px"
})

modui_sogae_doctor_intro_three_box_three.addEventListener("mouseenter", function(){
    modui_sogae_doctor_intro_three_box_one.style.left = "0px"
    modui_sogae_doctor_intro_three_box_two.style.left = "300px"
    modui_sogae_doctor_intro_three_box_three.style.width = "600px"
    modui_sogae_doctor_intro_three_box_three.style.left = "600px"
})

modui_sogae_doctor_intro_three_box_three.addEventListener("mouseleave", function(){
    modui_sogae_doctor_intro_three_box_one.style.left = "150px"
    modui_sogae_doctor_intro_three_box_two.style.left = "450px"
    modui_sogae_doctor_intro_three_box_three.style.width = "300px"
    modui_sogae_doctor_intro_three_box_three.style.left = "750px"
})

const modui_sogae_doctor_intro_three_box_four = document.querySelector(".modui_sogae_doctor_intro_three_box_four")
const modui_sogae_doctor_intro_three_box_five = document.querySelector(".modui_sogae_doctor_intro_three_box_five")
const modui_sogae_doctor_intro_three_box_six = document.querySelector(".modui_sogae_doctor_intro_three_box_six")

modui_sogae_doctor_intro_three_box_four.addEventListener("mouseenter", function(){
    modui_sogae_doctor_intro_three_box_four.style.width = "600px"
    modui_sogae_doctor_intro_three_box_four.style.left = "0px"
    modui_sogae_doctor_intro_three_box_five.style.left = "600px"
    modui_sogae_doctor_intro_three_box_six.style.left = "900px"
})

modui_sogae_doctor_intro_three_box_four.addEventListener("mouseleave", function(){
    modui_sogae_doctor_intro_three_box_four.style.width = "300px"
    modui_sogae_doctor_intro_three_box_four.style.left = "150px"
    modui_sogae_doctor_intro_three_box_five.style.left = "450px"
    modui_sogae_doctor_intro_three_box_six.style.left = "750px"
})

modui_sogae_doctor_intro_three_box_five.addEventListener("mouseenter", function(){
    modui_sogae_doctor_intro_three_box_four.style.left = "0px"
    modui_sogae_doctor_intro_three_box_five.style.left = "300px"
    modui_sogae_doctor_intro_three_box_five.style.width = "600px"
    modui_sogae_doctor_intro_three_box_six.style.left = "900px"
})

modui_sogae_doctor_intro_three_box_five.addEventListener("mouseleave", function(){
    modui_sogae_doctor_intro_three_box_four.style.left = "150px"
    modui_sogae_doctor_intro_three_box_five.style.left = "450px"
    modui_sogae_doctor_intro_three_box_five.style.width = "300px"
    modui_sogae_doctor_intro_three_box_six.style.left = "750px"
})

modui_sogae_doctor_intro_three_box_six.addEventListener("mouseenter", function(){
    modui_sogae_doctor_intro_three_box_four.style.left = "0px"
    modui_sogae_doctor_intro_three_box_five.style.left = "300px"
    modui_sogae_doctor_intro_three_box_six.style.width = "600px"
    modui_sogae_doctor_intro_three_box_six.style.left = "600px"
})

modui_sogae_doctor_intro_three_box_six.addEventListener("mouseleave", function(){
    modui_sogae_doctor_intro_three_box_four.style.left = "150px"
    modui_sogae_doctor_intro_three_box_five.style.left = "450px"
    modui_sogae_doctor_intro_three_box_six.style.width = "300px"
    modui_sogae_doctor_intro_three_box_six.style.left = "750px"
})







