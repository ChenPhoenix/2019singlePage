$(function(){
   //视频播放
    var video1=document.getElementById("video_id1");
    var video2=document.getElementById("video_id2");
    video1.onclick=function(){
        video2.pause();
        if(video1.paused){
            video1.play();
        }else{
            video1.pause();
        }
    };
    video1.addEventListener('play',function(){
        video2.pause();
    });
    // video1.addEventListener('pause',function(){
    //暂停播放
    //  });
    video2.onclick=function(){
        video1.pause();
        if(video2.paused){
            video2.play();
        }else{
            video2.pause();
        }
    };
    video2.addEventListener('play',function(){
        video1.pause();
    });
    // video2.addEventListener('pause',function(){
    //暂停播放
    //  });


    //$(window).scrollTop()这个方法是当前滚动条滚动的距离
    //$(window).height()获取当前窗体的高度
    //$(document).height()获取当前文档的高度
    // var bot = 50; //bot是底部距离的高度
    // if ((bot + $(window).scrollTop()) >= ($(document).height() - $(window).height())) {
    //     //当底部基本距离+滚动的高度〉=文档的高度-窗体的高度时；
    //     //我们需要去异步加载数据了
    //     $('.content-box').css('animation','');
    // }

    var hei=$('.content-box').height();
    var height2=$(document).scrollTop()+$('header').height();
    console.log(hei);
    console.log($(document).scrollTop());
    if(height2>=(2*hei) && height2<(3*hei)){
        $('.content-box')[0].style.animation='img-animation 3s linear 0s 1 normal';

    }
    if(height2>=(3*hei) && height2<(4*hei)){
        $('.content-box')[1].style.animation='img-animation 3s linear 0s 1 normal';
    }
    if(height2>=(4*hei) && height2<(5*hei)){
        $('.content-box')[2].style.animation='img-animation 3s linear 0s 1 normal';
        // $('.content-box').css('animation','img-animation 1s linear 0s 1 normal');

    }



    // console.log($('header').height());
    // console.log($(window).height());
    // console.log($(document).height());
    // console.log($(document).scrollTop());
});
// $(document).scroll(function(){
//     $("#lb").text($(document).scrollTop());
// })
// <span id="lb" style="top:100px;left:100px;position:fixed;"></span><!--一个固定的span标记 滚动时方便查看-->
})


$(document).ready(function () {
    function getHei(){
        let len=$('.content-box').length;
        var hei=$('.content-box').height();
        var height2=$(document).scrollTop()+$('header').height();
        for(var i=0;i<=len;i++){
            console.log(i)
            if(height2>=((i+2)*hei) && height2<((i+3)*hei)){
                console.log(i)
                $('.content-box')[i].style.animation='img-animation 2s linear 0s 1 normal';
            }

        }
    }
    $(window).scroll(function () {
        // var hei=$('.content-box').height();
        // var height2=$(document).scrollTop()+$('header').height();
        // if(height2>=(2*hei) && height2<(3*hei)){
        //     $('.content-box')[0].style.animation='img-animation 3s linear 0s 1 normal';
        // }
        // if(height2>=(3*hei) && height2<(4*hei)){
        //     $('.content-box')[1].style.animation='img-animation 3s linear 0s 1 normal';
        // }
        // if(height2>=(4*hei) && height2<(5*hei)){
        //     $('.content-box')[2].style.animation='img-animation 3s linear 0s 1 normal';
        // }
        // if(height2>=(5*hei) && height2<(6*hei)){
        //     $('.content-box')[3].style.animation='img-animation 3s linear 0s 1 normal';
        // }
        // if (($(window).scrollTop()) >= ($(document).height() - $(window).height())) {
        //     $('.content-box').css('animation','');
        // }
        // console.log($('.content-box').length);
        getHei();
        if (($(window).scrollTop()) >= ($(document).height() - $(window).height())) {
            $('.content-box').css('animation','');
            getHei=function () {
                return false;
            };
        }
    });
});