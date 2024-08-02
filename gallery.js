// 현재 슬라이드 위치를 저장하는 변수
var pos = 0;
// 슬라이드의 총 개수를 저장하는 변수
var totalSlides = $("#slider-wrap ul li").length;
// 슬라이더의 너비를 저장하는 변수
var sliderWidth = $("#slider-wrap").width();

$(document).ready(function () {
  /*****************
  슬라이더 설정
  *****************/
  // 슬라이더의 전체 너비를 슬라이드 개수만큼 설정
  $("#slider-wrap ul#slider").width(sliderWidth * totalSlides);

  // 다음 슬라이드로 이동
  $("#next").click(function () {
    slideRight();
  });

  // 이전 슬라이드로 이동
  $("#previous").click(function () {
    slideLeft();
  });

  /*************************
  //*> 선택적 설정
  ************************/
  // 자동 슬라이더 설정 (3초 간격으로 슬라이드 이동)
  var autoSlider = setInterval(slideRight, 3000);

  // 각 슬라이드에 대해
  $.each($("#slider-wrap ul li"), function () {
    // 페이지네이션 생성
    var li = document.createElement("li");
    $("#pagination-wrap ul").append(li);
  });

  // 슬라이드 카운터 설정
  countSlides();

  // 페이지네이션 설정
  pagination();

  // 슬라이더에 마우스를 올렸을 때/벗어났을 때 이벤트 설정
  // 자동 슬라이드를 일시 중지 및 재개
  $("#slider-wrap").hover(
    function () {
      $(this).addClass("active");
      clearInterval(autoSlider);
    },
    function () {
      $(this).removeClass("active");
      autoSlider = setInterval(slideRight, 3000);
    }
  );
}); //DOCUMENT READY

/***********
슬라이드 왼쪽으로 이동
************/
function slideLeft() {
  pos--;
  // 첫 슬라이드에서 왼쪽으로 이동할 경우, 마지막 슬라이드로 이동
  if (pos == -1) {
    pos = totalSlides - 1;
  }
  // 슬라이드 이동 애니메이션
  $("#slider-wrap ul#slider").css("left", -(sliderWidth * pos));

  //*> 선택적 설정
  countSlides();
  pagination();
}

/************
슬라이드 오른쪽으로 이동
*************/
function slideRight() {
  pos++;
  // 마지막 슬라이드에서 오른쪽으로 이동할 경우, 첫 슬라이드로 이동
  if (pos == totalSlides) {
    pos = 0;
  }
  // 슬라이드 이동 애니메이션
  $("#slider-wrap ul#slider").css("left", -(sliderWidth * pos));

  //*> 선택적 설정
  countSlides();
  pagination();
}

/************************
//*> 선택적 설정 함수
************************/
function countSlides() {
  // 현재 슬라이드 위치를 카운터에 표시
  $("#counter").html(pos + 1 + " / " + totalSlides);
}

function pagination() {
  // 현재 슬라이드에 해당하는 페이지네이션 활성화
  $("#pagination-wrap ul li").removeClass("active");
  $("#pagination-wrap ul li:eq(" + pos + ")").addClass("active");
}