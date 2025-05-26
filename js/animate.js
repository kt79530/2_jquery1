$(function(){ //비동기로 실행
  $("button.typoB").click(function(){
    let sec = $("section.typo");
    sec.animate({left:'100px',width:'+=100px'},"fast");
    sec.animate({fontSize:'3rem'},"slow");
  })

  $("button.timeB").click(function(){
   //비동기로 실행될 박스에 대해 변수설정
   var d = $("div.time"); //변수 div는 time이라는 클래스를 가진 div
   //지금부터 Q
   d.animate({ 
    height:'300px',
    opacity:'0.4'}, "slow");
    
    d.animate({ 
    width:'300px',
    opacity:'0.8'}, "slow");

    d.animate({ 
    height:'100px',
    opacity:'0.4'}, "slow");

    d.animate({ 
    width:'100px',
    opacity:'0.8'}, "slow");

    d.animate({
    borderRadius:'50%'
    })
  })

    
    $("button.sh").click(function(){
    $("div.sh").animate({
        height:'toggle'
    })
   })
   
    $("button.rectt").click(function(){
        $("div.rect").animate({
            left:'+=250px',
            opacity:'0.5',
            height:'+=150px', // += : 클릭할때마다 증가, -= : 클릭할때마다 감소
            width:'+=150px',
            backgrouned:'violet'

        }); //rect라는 클래스를 가진 div에 왼쪽으로 250px 이동해라
    })

});