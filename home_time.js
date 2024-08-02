function updateClock(){
    var now = new Date();

    var year = now.getFullYear();
    var month = now.getMonth()+1;//0부터 시작하므로 +1 해줌
    var day = now.getDate();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    //시간 문자열을 "YYYY-MM-DD HH:MM:SS" 형식으로 생성
    var timeString = year + "-" + month + "-" +day + " " +hours + ":" +minutes + ":" +seconds;
    //HTML 페이지에서 시계 정보를 표시하는 요소에 시간 문자열을 업데이트
    document.getElementById("clock").innerHTML = timeString;
}

    //1chakek updateClock 함수를 호출하여 시계를 업데이트
    setInterval(updateClock, 1000); //1000은 1초를 의미함

    //페이지가 로딩될 때 즉시 시계를 한 번 업데이트
    updateClock();