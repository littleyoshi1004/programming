//사용자가 텍스트 파일을 선택 할 수 있도록 파일 입력 요소를 생성하는 함수
function getTextFile(){
    var input = document.createElement("input"); //input 요소 생성
    input. type = "file"; // input 요소의 타입을 file로 설정
    input.accept = "text/plain"; //수락할 파일 형식을 text/pain으로 제한
    //파일이 선택되었을 때 호출될 이벤트 핸들러설정
    input.onchange = function (event){
        processFile(event.AT_TARGET.files[0]); //선택된 파일을 processFile 함수로 전달
    };
    input.click(); //파일 선택 창을 열기 위해 input 요소를 클릭
}

// 선택된 파일을 읽고 내용을 처리하는 함수
function processFile(file){
    var reader = new FileReader(); //FileReader 객체 생성
    reader.readAsText(file, "utf-8"); //한글로 표시하기 위해 utf-8 사용

    reader. onload = function(){
        document.getElementById("secret-note").innerText = reader.result;
    }
}