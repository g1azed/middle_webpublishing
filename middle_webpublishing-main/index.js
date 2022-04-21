$(function(){
    var $header = $('header'); //헤더를 변수에 넣기
    var $page = $('#main_sect'); //색상이 변할 부분
    var $window = $(window);
    var pageOffsetTop = $page.offset().top;//색상 변할 부분의 top값 구하기
    
    // $window.resize(function(){ //반응형을 대비하여 리사이즈시 top값을 다시 계산
    //   pageOffsetTop = $page.offset().top;
    // });
    
    $window.on('scroll', function(){ //스크롤시
      var scrolled = $window.scrollTop() >= pageOffsetTop; //스크롤된 상태; true or false
      $header.toggleClass('down', scrolled); //클래스 토글
    });
  });


  const mouseCursor = document.querySelector(".cursor");
  const follower = document.querySelector(".cursor_follower");
  var navLinks = document.querySelectorAll(".gnbMenu li");
  navLinks.forEach(function (menu) {
      console.log(menu);
      menu.addEventListener("mouseover", function () {
          console.log("over");
          mouseCursor.classList.add("link_hover"); // 마우스오버가 됬을때 link_hover 클래스를 추가해라
      });
      menu.addEventListener("mouseleave", function () {
          console.log("over");
          mouseCursor.classList.remove("link_hover"); // 마우스오버가 빠졌을때 link_hover 클래스를 제거해라
      });
  });
  function myCursor(e) { // 함수의 ()안은 매개인자  뭘 넣어도 나옴
      mouseCursor.style.top = e.pageY + "px"; // 0이 아니면 단위값 무조건 사용해줘야한다
      mouseCursor.style.left = e.pageX + "px";

  }
  window.addEventListener("mousemove", myCursor); //이벤트에서 호출

  function Trailer(e) {
      // console.log(e);

      gsap.to(mouseCursor, { duration: 0.1, left: e.pageX - 5, top: e.pageY - 5 });
      gsap.to(follower, { duration: 0.8, left: e.pageX - 15, top: e.pageY - 15 });

      document.querySelectorAll("li, h1").forEach(e => {
          // console.log(e);
          e.addEventListener("mouseover", () => {
              mouseCursor.classList.add("show");
              follower.classList.add("show");
          });
          e.addEventListener("mouseout", () => {
              mouseCursor.classList.remove("show");
              follower.classList.remove("show");
          });
      });

  }
  document.addEventListener("mousemove", Trailer);
