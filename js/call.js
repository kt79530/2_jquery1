$(function(){
    $("button#hideBtn").click(function(){
        $("p").hide("slow",function(){
            alert("난 사라짐 뿅")

        })
    });
});

//javascript
function myDisplayer(some){
    document.getElementById("call").innerHTML = some
}

function myFirst(){
    myDisplayer("kkt");
}
function mySecond(){
    myDisplayer("lsm");
}
//함수는 호출할때만 실행되는 코드블록
myFirst();
mySecond();