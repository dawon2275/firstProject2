//------------------------------------------------------- mainBg page------------------------------------
let swiper = new Swiper(".mainBg", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  loop : true, 
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".nextBox",
    prevEl: ".prevBox"
  }
});

//----------------------------------------------------- modal --------------------------------------
let modalClose = $('.modalClose')
let modalCont = $('.modal') 
//console.log(modalCont)
//console.log(modalClose)

modalClose.on('click' ,function(){
    modalCont.css(
        'display','none'
    )
})


//----------------------------------------------------- gnb ------------------------------------------------

$('.slider1').on('mouseover', function() {
  $('.top1').css('top','-45px')
  $('.before1').css('opacity','0')
  $('.sub1').css('top','0')
  $('.sub1').css('opacity','1')
})

$('.slider1').on('mouseout', function() {
  $('.top1').css('top','10px')
  $('.before1').css('opacity','1')
  $('.sub1').css('top','-50px')
  $('.sub1').css('opacity','0')
})


$('.slider2').on('mouseover', function() {
  $('.top2').css('top','-45px')
  $('.before2').css('opacity','0')
  $('.sub2').css('top','0')
  $('.sub2').css('opacity','1')
})

$('.slider2').on('mouseout', function() {
  $('.top2').css('top','10px')
  $('.before2').css('opacity','1')
  $('.sub2').css('top','-50px')
  $('.sub2').css('opacity','0')
})


$('.slider3').on('mouseover', function() {
  $('.top3').css('top','-45px')
  $('.before3').css('opacity','0')
  $('.sub3').css('top','0')
  $('.sub3').css('opacity','1')
})

$('.slider3').on('mouseout', function() {
  $('.top3').css('top','10px')
  $('.before3').css('opacity','1')
  $('.sub3').css('top','-50px')
  $('.sub3').css('opacity','0')
})


$('.slider4').on('mouseover', function() {
  $('.top4').css('top','-45px')
  $('.before4').css('opacity','0')
  $('.sub4').css('top','0')
  $('.sub4').css('opacity','1')
})

$('.slider4').on('mouseout', function() {
  $('.top4').css('top','10px')
  $('.before4').css('opacity','1')
  $('.sub4').css('top','-50px')
  $('.sub4').css('opacity','0')
})


/* $('.top').on('mouseout', function() {
  $(this).css('top','0')
}) */

/* $('.bot').on('mouseover',function() {
  $(this).animate({
    top:'0'
  },20)
}) */


$('.sub ul li').on('mouseout',function() {
  $('.bot').css('top','30px')
})


//----------------------------------------------- product Swiper --------------------------------------------

let swiper2 = new Swiper('.mySwiper3', {
  slidesPerView: 4.5,
  direction: getDirection(),
  navigation: {
    nextEl: '.slideNext',
    prevEl: '.slidePrev',
  },
  /* on: {
    resize: function () {
      swiper2.changeDirection(getDirection());
    }
  }, */
  breakpoints : {
    414: {
      slidesPerView:2,
      spaceBetween : 10
    },
    641: {
      slidesPerView:4.5,
      spaceBetween:20
    }
  },


});

function getDirection() {
  let windowWidth = window.innerWidth;
  let direction = window.innerWidth <= 100 ? 'vertical' : 'horizontal';

  return direction;
}


//---------------------------------------------- product tab -----------------------------------------------
$(function(){
  let tab = $('.tab li');
  
      tab.on('click',function() {
      let idx = $(this).index();//현재 li : this 의 인덱스 : 목록값
      let tab_cont = $(this).parents('.tab').siblings('.tab_cont').eq(idx);//현재 li : this의 부모인('클릭요소 tab') 의 형제 요소들인 ('.tab_cont':보여지는 콘텐츠) li의 목록 값
  
      //console.log(idx);
      //console.log(tab_cont)
  
      $(this).addClass('on')
      $(this).siblings().removeClass('on')
  
      $(tab_cont).addClass('on')
      $(tab_cont).siblings().removeClass('on')
      })
  })
  
  //-------------------------------------- product tab -------------------------------------------------
    $(function() {
      $('.eventBg .text').delay(1100).animate({
        opacity : 1,
        top : 270
      },2000,)
    })

/* ====================================================mobile menu============================= */

let btnMobileOpen = $('.icon .bar')
let btnMoClose = $('.btnclose, .mobileMenuBg')

let btnMore = $('.btnDown, .show >a')
let MobgView = $('.mobileMenuBg')
let MoView = $('.mobileMenu')
let show = $('show')


btnMobileOpen.on('click' ,function (){
  MobgView.css(
    'display','block'
  )
  MoView.animate({
    right : '0'
  })
})

btnMoClose.on('click' ,function (){
  MobgView.css(
    'display','none'
  )
  MoView.animate({
    right : '-350px'
  })
})



$('.accordion').on('click','.show > a',function () {
    $(this).addClass('on').next('.subM').slideToggle();
});

$('.btnDown').on('click',function () {
  $(this).toggleClass('active');
});



$('.wish img').on('click',function () {
  $(this).attr("src","img/wish.black.png")
})

/* ====================================================fixed============================= */
$('.chat').on('click',function() {
  $('.talkBg').css('display','block')
  $('.talkBox').css('display','block')
})
$('.btnclose2').on('click',function() {
  $('.talkBg').css('display','none')
  $('.talkBox').css('display','none')
})



$('.infoText').on('click','.arrow',function () {
  $(this).addClass('on').next('.infoSub').slideToggle();
});












 
  
  



    
    