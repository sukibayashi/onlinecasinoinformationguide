
jQuery("a[href ^='#']").click(function () {
    var speed = 600;
    var href = jQuery(this).attr("href");
    var target = jQuery(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - 100;
    jQuery('body,html').animate({ scrollTop: position }, speed, 'swing');
    return false;
});
// var headerTopHeight = jQuery(".headerTop").height();
// jQuery(".breadcrumb").css('padding-top',headerTopHeight);
$(window).on('load', function () {
    var url = $(location).attr('href');
    if (url.indexOf("#") != -1) {
        var anchor = url.split("#");
        var target = $('#' + anchor[anchor.length - 1]);
        if (target.length) {
            var pos = Math.floor(target.offset().top) - 115;
            $("html, body").animate({ scrollTop: pos }, 500);
        }
    }
});


/*

jQuery(function(){

if(window.matchMedia('(min-width:485px)').matches){
} else {

  jQuery("a[href ^='#']").click(function() {
    var speed = 600;
    var href= jQuery(this).attr("href");
    var target = jQuery(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - 115;
    jQuery('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
  // var headerTopHeight = jQuery(".headerTop").height();
  // jQuery(".breadcrumb").css('padding-top',headerTopHeight);
$(window).on('load', function() {
  var url = $(location).attr('href');
  if(url.indexOf("#") != -1){
  var anchor = url.split("#");
  var target = $('#' + anchor[anchor.length - 1]);
  if(target.length){
  var pos = Math.floor(target.offset().top) - 75;
  $("html, body").animate({scrollTop:pos}, 500);
  }
  }
  });
}
});

*/




//それぞれのスライダー設定


jQuery(function ($) {
    $('.slidemenu').flickity({
        freeScroll: true,
        wrapAround: true,
        pageDots: false,
        //cellAlign: 'left',
        autoPlay: true,
        freeScrollFriction: 0.03,
    });
});


jQuery(function ($) {
    $('.slidemenu2').flickity({
        freeScroll: true,
        wrapAround: true,
        pageDots: false,
        cellAlign: 'left',
        autoPlay: true,
        freeScrollFriction: 0.03,
    });
});



jQuery(function ($) {
    $('.sab-slidemenubar').flickity({
        freeScroll: false,
        asNavFor: '.slidemenu',
        pageDots: false,
        prevNextButtons: false,
        contain: true,
        cellAlign: 'left',
        wrapAround: true,
        accessibillity: false,
        draggable: false,
    });
});


jQuery(function ($) {
    $('.sab-slidemenubar2').flickity({
        freeScroll: false,
        asNavFor: '.slidemenu2',
        pageDots: false,
        prevNextButtons: false,
        contain: true,
        cellAlign: 'left',
        wrapAround: true,
        accessibillity: false,
        draggable: false,
    });
});



jQuery(function ($) {
    $('ul.curriculum').flickity({
        freeScroll: true,
        pageDots: false,
        cellAlign: 'left',
        contain: true,
        freeScrollFriction: 0.03,
    });
});

jQuery(function ($) {
    $('.step-slidebox').flickity({
        freeScroll: true,
        wrapAround: true,
        pageDots: false,
        autoPlay: true,
        freeScrollFriction: 0.03,
    });
});


jQuery(function ($) {
    $('#c-topslide').flickity({
        freeScroll: true,
        wrapAround: true,
        pageDots: true,
        cellAlign: 'center',
        autoPlay: true,
        imagesLoaded: true,
    });
});




//ある程度までスクロールしたらナビゲーションを上で固定&スクロール中は設定





jQuery(function ($) {
    var adclass = 'scrolled'; // add css class
    var scrollY = 15; // scroll
    //PC環境の場合
    if (window.matchMedia('(min-width: 896px)').matches) { //切り替える画面サイズ 
        var header = $('nav#pcfixed'); // fixed DOM
        //  $(window).scroll(function() {
        //    if ($(window).scrollTop() > scrollY) {
        //      	header.addClass(adclass);
        //    } else {
        //      header.removeClass(adclass);
        //    }
        //  });

    } else {
        var header = $('header#spfixed'); // fixed DOM
        $(window).scroll(function () {
            if ($(window).scrollTop() > scrollY) {
                header.addClass(adclass);
            } else {
                header.removeClass(adclass);
            }
        });
    }
});




// footerのナビの折り畳み


jQuery(function ($) {
    if (window.matchMedia('(min-width: 896px)').matches) { //切り替える画面サイズ 

    } else {
        $("ul.f-stepIn").hide();
        $("footer nav ul.f-step li").click(function () {
            $(this).children("ul.f-stepIn").slideToggle();
            $(this).not($(this)).children("ul.f-stepIn").slideUp();
        });
    }
});






//ナビメニューのモーダルウィンドウオープン


$(function () {
    var scrollPosition;
    $("ul.top-navi li a.open").on("click", function () {
        $("ul.top-navi li a.open").colorbox({
            inline: true, width: "80%", height: "80%", fixed: true,
        });
        scrollPosition = $(window).scrollTop();
        $('body').addClass('fixed').css({ 'top': -scrollPosition });
    });
    $(document).on('cbox_cleanup', function () {
        $('body').removeClass('fixed').css({ 'top': 0 });
        window.scrollTo(0, scrollPosition);
    });
});



//ナビメニュー用の設定


$(function () {
    $('ul.pcmenu > li').hover(function () {
        if ($(this).children('div.naviBox').hasClass('active')) {
            $(this).children('div.naviBox').removeClass('active');
        } else {
            $(this).children('div.naviBox').addClass('active').stop().animate(100, 'swing');
        }
    });
});




function toggleNav() {
    var scrollPosition;
    var body = document.body;
    var hamburger = document.getElementById('js-hamburger');
    var blackBg = document.getElementById('js-black-bg');

    hamburger.addEventListener('click', function () {
        if ($('body').hasClass('nav-open')) {
            body.classList.remove('nav-open');
            $('body').removeClass('fixed').css({ 'top': 0 });
            window.scrollTo(0, scrollPosition);
        } else {
            body.classList.toggle('nav-open');
            $('body').addClass('fixed').css({ 'top': -scrollPosition });
        }
    });
    blackBg.addEventListener('click', function () {
        body.classList.remove('nav-open');
        $('body').removeClass('fixed').css({ 'top': 0 });
        window.scrollTo(0, scrollPosition);
    });
}
toggleNav();




$(function () {
    $('.more').each(function () {
        var $ele = $(this);
        $ele.prepend('<div class="open center"><a href="#"><span class="pc"><img src="../beginner/img/more.jpg" alt="もっと見る" /></span><span class="sp"><img src="../beginner/img/more_sp.jpg" alt="もっと見る" /></span></a></div>');
        $ele.append('<div class="close"><a href="#"><span class="pc"><img src="../beginner/img/close.jpg" alt="閉じる" /></span><span class="sp"><img src="../beginner/img/close_sp.jpg" alt="閉じる" /></span></a></div>');
        $ele.find('.open').nextAll().hide();
        $ele.find('.open').click(function () {
            $ele.find('.open').hide();
            $ele.find('.open').nextAll().slideDown();
            return false;
        });
        $ele.find('.close').click(function () {
            $ele.find('.open').nextAll().slideUp('slow', function () {
                $ele.find('.open').show();
            });
            return false;
        });
    });
});




/*



$("footer nav ul.f-step li").hover(function(){
      if ($(this).children("ul.f-stepIn").hasClass('active')) {

          $(this).children("ul.f-stepIn").slideUp();
          $(this).children("ul.f-stepIn").removeClass('active');

      } else {
          $(this).children("ul.f-stepIn").slideToggle();
          $(this).children("ul.f-stepIn").addClass('active');
      }
  });


jQuery( function( $ ) {
  //PC環境の場合
if ( window.matchMedia( '(min-width: 896px)' ).matches ) { //切り替える画面サイズ

  } else {
var header = $('header#spfixed'); // fixed DOM
var adclass = 'scrolled'; // add css class
var scrollY = 15; // scroll

$(window).scroll(function() {
  if ($(window).scrollTop() > scrollY) {
        header.addClass(adclass);
        $(window).on("scroll", function(){
      $("a.headerlog").stop(); //アニメーションしている場合、アニメーションを強制停止
      $("a.headerlog").css('display', 'none').delay(200).slideDown('fast');
    });
  } else {
    header.removeClass(adclass);
  }
});
  }
} );




var header = $('header#spfixed'); // fixed DOM
var adclass = 'scrolled'; // add css class
var scrollY = 15; // scroll

$(window).scroll(function() {
  if ($(window).scrollTop() > scrollY) {
        header.addClass(adclass);

      var startPos = 0,winScrollTop = 0;

      winScrollTop = $(this).scrollTop();
      if (winScrollTop >= startPos) {
          $('a.headerlog').addClass('hide');
      } else {
          $('a.headerlog').removeClass('hide');
      }
      startPos = winScrollTop;
  } else {
    header.removeClass(adclass);
  }
});





jQuery( function( $ ) {
  //PC環境の場合
if ( window.matchMedia( '(min-width: 896px)' ).matches ) { //切り替える画面サイズ

  } else {
var header = $('header#spfixed'); // fixed DOM
var adclass = 'scrolled'; // add css class
var scrollY = 15; // scroll
var startPos = 0,winScrollTop = 0;

$(window).on('scroll',function(){
  winScrollTop = $(this).scrollTop();
  if (winScrollTop >= startPos) {
      header.removeClass(adclass);
      $('.site-header').addClass('hide');
  } else {
      $('.site-header').removeClass('hide');
        header.addClass(adclass);
  }
  startPos = winScrollTop;
    });
}
});



jQuery( function( $ ) {
  //PC環境の場合
if ( window.matchMedia( '(min-width: 896px)' ).matches ) { //切り替える画面サイズ

  } else {
var header = $('header#spfixed'); // fixed DOM
var adclass = 'scrolled'; // add css class
var scrollY = 15; // scroll

$(window).scroll(function() {
  if ($(window).scrollTop() > scrollY) {
        header.addClass(adclass);
        $(window).on("scroll", function(){
      $("a.headerlog").stop(); //アニメーションしている場合、アニメーションを強制停止
      $("a.headerlog").css('display', 'none').delay(200).slideDown('fast');
    });
  } else {
    header.removeClass(adclass);
  }
});
  }
} );






function toggleNav() {
var scrollPosition;
var body = document.body;
var hamburger = document.getElementById('js-hamburger');
var blackBg = document.getElementById('js-black-bg');

hamburger.addEventListener('click', function() {
  body.classList.toggle('nav-open');
  $('body').addClass('fixed').css({'top': -scrollPosition});
});
blackBg.addEventListener('click', function() {
  body.classList.remove('nav-open');
  $('body').removeClass('fixed').css({'top': 0});
      window.scrollTo( 0 , scrollPosition );
});
}
toggleNav();





$(function(){
  $("li.global-nav__item").click(function(){
      $(this).children("li.global-nav__item ul").slideToggle();
  });
});



$(function(){
  $("ul.pcmenu li ul").hide;
  $("ul.pcmenu li").hover(function(){
      $("ul:not(:animeted)",this).slideDown("fast");
  },function(){
      $("ul", this).slideUp("fast");
  });
});

$(function(){
  $("ul.f-step.pcmenu li ul.tnav-stepIn").hide;
  $("ul.f-step.pcmenu li a.open").hover(function(){
  $(this).next("ul.tnav-stepIn").fadeIn();
  },function(){
  $(this).next("ul.tnav-stepIn").fadeOut();
  });
});


$(function(){
  $("ul.f-step.pcmenu li ul.tnav-stepIn").hide;
  $("ul.top-navi li a.open").hover(function(){
      $("ul:not(:animeted)",this).slideDown("fast");
  },function(){
      $("ul", this).slideUp("fast");
  });
});



(function($) {
// masthead scroll
var header = $('header#spfixed'); // fixed DOM
var adclass = 'scrolled'; // add css class
var scrollY = 15; // scroll

$(window).scroll(function() {
  if ($(window).scrollTop() > scrollY) {
        header.addClass(adclass);
        $(window).on("scroll", function(){
      $("a.headerlog").stop(); //アニメーションしている場合、アニメーションを強制停止
      $("a.headerlog").css('display', 'none').delay(200).slideDown('fast');
    });
  } else {
    header.removeClass(adclass);
  }
});
})(jQuery);



$("ul.top-navi li a.open").on('click', function() {
  $.colorbox({
...
fixed: true,
onOpen: function() {
  var ycoord = $(window).scrollTop();
  $('#colorbox').data('ycoord',ycoord);
  ycoord = ycoord * -1;
  $('body').css('position','fixed').css('left','0px').css('right','0px').css('top',ycoord + 'px');
},
onClosed: function() {
  $('body').css('position','').css('left','auto').css('right','auto').css('top','auto');
  $(window).scrollTop($('#colorbox').data('ycoord'));
}
});
});








$(function(){

  $("ul.top-navi li a.open").colorbox({
      inline: true, width:"80%", height:"80%"
      });
});


$(function(){

  $("ul.top-navi li a.open").colorbox({
      inline: true, width:"80%", height:"80%"
      });
});



$(function(){
  $("ul.top-navi li a.open").click(function(){
      $("ul.top-navi li a.open").colorbox({
          inline: true, width:"80%", height:"80%"
      });
      $('html, body').css('overflow', 'hidden');
  });
});



$(function(){
  $("ul.top-navi li a.open").click(function(){
      $("ul.top-navi li a.open").colorbox({
          inline: true, width:"80%", height:"80%"
      });
      $('html, body').css('overflow', 'hidden');
      $(this).children(".accordion_icon").addClass('active');		});
});



$("ul.top-navi li a.open").colorbox({
  onOpen:function(){
    $window.on('touchmove.noScroll', e => {e.preventDefault();
      });
  },
  onClosed:function(){
    $window.off('.noScroll');
  },
  inline: true, width:"80%", height:"80%",
});

$('li.closeBtn a').click(function () {
 parent.$.colorbox.close();
 $window.off('.noScroll');

});



const $window  = $(window);
const $menu    = $('.menu');
const $menuBtn = $('ul.top-navi li a.open');
let openFlag   = false;

$menuBtn.on('click', () => {

  if (!openFlag) {
      // スクロール禁止
      $window.on('touchmove.noScroll', e => {
          e.preventDefault();
      });

      // メニューを表示
      $menu.fadeIn(() => {
          openFlag = true;
      });
  } else {
      // スクロール禁止 解除
      $window.off('.noScroll');

      // メニューを非表示
      $menu.fadeOut(() => {
          openFlag = false;
      });
  }

});




$(function(){
  $("ul.tnav-stepIn").hide;
  $("ul.top-navi li a.open").hover(function(){
  $(this).next("ul.tnav-stepIn").fadeIn();
  },function(){
  $(this).next("ul.tnav-stepIn").fadeOut();
  });
});



$(function(){
  $("ul.tnav-stepIn").hide;
  $("ul.top-navi li a.open").hover(function(){
  $(this).next("ul.tnav-stepIn").css('position', 'sticky').slideDown();
  },function(){
  $(this).next("ul.tnav-stepIn").slideUp();
  });
});


$(function () {
$('#openModal').click(function(){
    $('#modalArea').fadeIn();
});
$('#closeModal , #modalBg').click(function(){
  $('#modalArea').fadeOut();
});
});







$(function(){
  $("ul.tnav-stepIn").hide;
  $("ul.top-navi li a.open").hover(function(){
      $("ul:not(:animeted)",this).slideDown("fast");
  },function(){
      $("ul", this).slideUp("fast");
  });
});






$(function(){
  var adclass = 'scrolled'; // add css class

      $("header#spfixed").addClass(adclass);
  $(window).on("scroll touchmove", function(){ //スクロール中に判断する
      $("a.headerlog").stop(); //アニメーションしている場合、アニメーションを強制停止
      $("a.headerlog").css('display', 'none').delay(500).fadeIn('fast');
          //スクロール中は非表示にして、500ミリ秒遅らせて再び表示
  });
});





(function($) {

// masthead scroll
var header = $('header#spfixed'); // fixed DOM
var adclass = 'scrolled'; // add css class
var scrollY = 15; // scroll

$(window).scroll(function() {
  if ($(window).scrollTop() > scrollY) {
    header.addClass(adclass);
    $(window).on("scroll touchmove", function(){ //スクロール中に判断する
          $("#top-navSlide").removeClass(adclass);
          $("#top-navSlide").stop(); //アニメーションしている場合、アニメーションを強制停止
          $("#top-navSlide").css('display', 'none').delay(500).fadeIn('fast');
          //スクロール中は非表示にして、500ミリ秒遅らせて再び表示
  });
  } else {
    header.removeClass(adclass);
  }
});
})(jQuery);







(function($) {
// masthead scroll
var header = $('header#spfixed'); // fixed DOM
var adclass = 'scrolled'; // add css class
var scrollY = 15; // scroll

$(window).scroll(function() {
  if ($(window).scrollTop() > scrollY) {
    header.addClass(adclass);
  } else {
    header.removeClass(adclass);
  }
});
})(jQuery);



$(function(){
  $("ul.top-navi li ul").hide;
  $("ul.top-navi li a").hover(function(){
      $("ul:not(:animeted)",this).slideDown("fast");
  },function(){
      $("ul", this).slideUp("fast");
  });
});



$('#top-navSlide ul.top-navi li a').on('click',function(){
$(this).next('ul').slideToggle();
      if ($(this).hasClass('open')) {
          $(this).removeClass('open');
      }
      else {
          $(this).addClass('open');
      }
  });
});




$('.menu-trigger').on('click',function(){
if($(this).hasClass('active')){
  $(this).removeClass('active');
  $('nav').slideUp();
} else {
  $(this).addClass('active');
  $('nav').slideDown();
}
});



*/





/*

//ａｎｄｒｏｉｄハック用……

$(function () {
  if(navigator.userAgent.indexOf('Android') > 0){
      $("html").addClass("android");
  }
});





$(window).on('load resize', function(){
      var w = $(window).width();
      var x = 896;
      if (w < x) {
$('.top-navSlide').flickity({
  freeScroll: true,
  pageDots: false,
  cellAlign: 'left',
});
      } else {
//それ以外のときの処理
      }
    });






jQuery(function($) {

var nav    = $('header#spfixed'),
  offset = nav.offset();

$(window).scroll(function () {
if($(window).scrollTop() > offset.top) {
  nav.addClass('fixed-navi');
} else {
  nav.removeClass('fixed-navi');
}
});
});










//「上に戻る ▲」のスクロールと下部固定

  $(function() {
      var pageTop = $('a#goTop');
      pageTop.hide();
      $(window).scroll(function () {
          if ($(this).scrollTop() > 600) {
              pageTop.fadeIn();
          } else {
              pageTop.fadeOut();
          }
      });
      pageTop.click(function () {
          $('body, html').animate({scrollTop:0}, 500, 'swing');
          return false;
      });
  });
*/
