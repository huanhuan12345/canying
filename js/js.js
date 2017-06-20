$(function(){
    var timer=null;
    var index=0;
    liWidth=$('nav div ul li').width();
     $('nav div ul').width(liWidth*$('nav div ul li').length)
     timer=setInterval(fun, 1000)
     function fun(){
        index++;
        if (index==$('nav div ul li').last().index()) {
            $('.dot li').eq(0).attr({id:'color'}).siblings().removeAttr('id')
        }
        $('.dot li').eq(index).attr('id','color').siblings().removeAttr('id')
        $('nav div ul').animate({'left':-index*liWidth+'px'},500,function(){
                if(index==$('nav div ul li').length-1){
                    index=0;
                    $('nav div ul').css('left',0)
                } 
        });
         }
        $('.dot li').hover(function() {
             clearInterval(timer)
                $('nav div ul:animated').stop()
                index=$(this).index();
                $('nav div ul').css({'left':-index*liWidth+'px'})
                $('.dot li').eq(index).attr({id:'color'}).siblings().removeAttr('id')
        }, function() {
                clearInterval();
                timer=setInterval(fun, 1000)
        });

        $.ajax({
            'url':'data/json.json',
            'type':'get',
            'success':function(res){
                $.each(res.a,function(key,val){
                $.each(val.banner,function(index,value){
                    $('.pic1').eq(index).attr('src',value.img1)
                    $('.pic2').eq(index).attr('src',value.img1)
                    $('.banner div h6').eq(index).html(value.h6)
                    $('.banner div span').eq(index).html(value.span)
                })
                 $.each(val.main,function(index1,value1){
                    $('.main div a img').eq(index1).attr('src',value1.img)
                 })

                 $.each(val.delfood,function(index1,value1){
                    $('.delfood ul li a img').eq(index1).attr('src',value1.img)
                    $('.delfood ul h3').eq(index1).html(value1.h3)
                    $('.delfood ul div span').eq(index1).html(value1.span)
                    $('.delfood ul p').eq(index1).html(value1.p)
                    $('.delfood ul li >span').eq(index1).html(value1.span1)
                 })
                 })
            }
        })
})