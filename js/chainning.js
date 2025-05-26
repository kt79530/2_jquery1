$(document).ready(function(){ //비동기
    $("button#re").click(function(){
       $("#p1")
          .css("color","red")
          .slideUp(2000)
          .slideDown(1000)
          .css("font-size","10rem");
    });
})