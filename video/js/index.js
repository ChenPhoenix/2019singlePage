$(function(){

   //视频播放
    $(".video_bg1").click(function(){
        $(".video_bg1").hide();
        $('#video_id1')[0].play(); // 播放
    });
    $(".video_bg2").click(function(){
        $(".video_bg2").hide();
        $('#video_id2')[0].play(); // 播放
    });

})