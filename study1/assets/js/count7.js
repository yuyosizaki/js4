/*js file*/
$(function(){

 $(".container__btn").mouseover(function(){
     $(this).css("opacity","0.5");
 })

 var count    = 0;
 var maxCount = 10;

 function countUp(){
   if( count < maxCount){
     count = count + 1;
     $(".container__count-text").text(count);
   }
 }

 $(".increment").click(function(){
     countUp();
     if (count == maxCount){
        $(".break").text("これ以上は増えません");
     }
 })

 function countDown(){
   if(count > 0){
     count = count - 1;
     $(".container__count-text").text(count);
   }
 }

 $(".decrement").click(function(){
     countDown();
     if (count == 0){
        $(".break").text("これ以上は減りません");
     }
 })

})//end function
