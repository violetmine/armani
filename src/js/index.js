require(['./config'],()=>{
    require(['headerjs','footerjs'],()=>{
        let $li=$(".logo ul li");


        let index=0;
        $(".logo ul").append($(".logo ul li").eq(0).clone());
        console.log($(".logo ul"));
        $(".logo .right").on("click",function(){
            index++;
            if(index===$li.length){
                $(".logo ul").animate({left:-index * $li.width()},1000,function(){
                    
                    $(".logo ul").css({left:0});
                    index=0;
                })
            }else{
                $(".logo ul").animate({left:-index * $li.width()},1000);
            }  
        })
        $(".logo .left").on("click",function(){
            index--;
            console.log(index);
            if(index < 0){
                    $(".logo ul").css({left : -$li.length * $li.width()});
                    index=$li.length-1;
            }
            $(".logo ul").animate({left: -index * $li.width()},1000)
            
        })
        let timer=null;
        $(".logo").hover(function(){
         clearInterval(timer);
        },(function auto(){
          timer=  setInterval(function(){
                $(".logo .right").trigger("click");
            },8000)
            return auto;
        })())
        $(".hot-colorcard span").hover(function(){
            $(this).css({"height":"18px"})
        },function(){
            $(this).css({"height":"9px"})
        })
    })
})
