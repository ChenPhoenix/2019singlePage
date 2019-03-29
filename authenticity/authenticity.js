$(function () {
    //
    // document.getElementById('serBtn').onclick = function() {
    //     // 以下getNVCVal()的值，跟随业务请求一起上传，由后端请求AnalyzeNvc接口，返回200，400，600或者800
    //     var params = 'a=' + getNVCVal()
    //     yourRegisterRequest('http://cf.aliyun.com/nvc/nvcAnalyze.jsonp', params)
    // }

    //点击下箭头展开选择列表
    $('#sel-down').click(function () {
        $("#sel-up").toggle();
        $('.danger-notice').hide();//红色提示消失
    })
    //点击上箭头关闭选择列表
    $("#sel-up").on('click','.list-detail-li',function (e) {
        e.preventDefault();
        $('.list-detail-li').css('color','#333');
        $(this).css('color','#1981d8');
        let cheId=$(this).attr('id');
        console.log(cheId);
        let cheValue=$(this).html();
        $('.cheVal').html(cheValue);
        $('.cheVal').attr('data-val',cheId);
        $("#sel-up").toggle();
        $('.danger-notice').hide();//红色提示消失

    //    产品图片变换

        switch(cheId){
            case 'mini':
                $('.res-img').show();
                $('.res-img img').attr('src','./images/autd-9hao.jpg');
                break;
            case 'mk2':
                $('.res-img').show();
                $('.res-img img').attr('src','./images/autd-a1.jpg');
                break;
            case 'plus':
                $('.res-img').show();
                $('.res-img img').attr('src','./images/autd-plus.jpg');
                break;
            case 'xfx':
                $('.res-img').show();
                $('.res-img img').attr('src','./images/autd-w1.jpg');
                break;
            case 'gokart':
                $('.res-img').show();
                $('.res-img img').attr('src','./images/autd-kading.jpg');
                break;
            default:
                $('.res-img').hide();
                break;

        }

    })
    $("#sel-up").on('click','.list-select',function (e) {
        e.preventDefault();
        $("#sel-up").toggle()
    })
    //输入序列号获取焦点是提示消失
    $('#serNum').focus(function () {
        $('.danger-notice').hide();//红色提示消失
    })
    //点击查询按钮
    $('#serBtn').click(function(e){
        e.preventDefault();
        // 以下getNVCVal()的值，跟随业务请求一起上传，由后端请求AnalyzeNvc接口，返回200，400，600或者800
        var params = 'a=' + getNVCVal()
        function yourRegisterRequest(url, params){
            var callbackName = ('jsonp_' + Math.random()).replace('.', '')
            params += '&callback=' + callbackName
            var o_scripts = document.getElementsByTagName("script")[0]
            var o_s = document.createElement('script')
            o_scripts.parentNode.insertBefore(o_s, o_scripts);
            //您注册请求的业务回调
            window[callbackName] = function(json) {
                if(json.result.code == 400||json.result.code == 600||json.result.code == 100||json.result.code == 200){
                    // document.getElementById('whyz').value='success';
                    // let suc=$("#whyz").val();
                    let serNumVal=$('#serNum').val();//输入的序列号
                    let dataValue=$('.cheVal').attr('data-val'); //车型类型
                    let  patt1=/^[A-Za-z0-9]+$/; //正则表达式，字母或数字
                    if(dataValue==='0'){
                        $('.danger-notice').html('请选择车型');
                        $('.danger-notice').show();//红色提示出现
                        return;
                    }
                    if(patt1.test(serNumVal) === false||serNumVal.length!==10)
                    {
                        $('.danger-notice').html('请输入正确的10位序列号（由英文字母或数字组成）');
                        $('.danger-notice').show();//红色提示出现
                        return false;
                    }else{
                        // console.log(suc)
                        // if(suc==='success'){
                            $('.danger-notice').hide();//红色提示消失
                            $.ajax({
                                type:'post',
                                // url:'http://wx.ninebot.cn/weixin/?s=/Code/check',
                                url:'http://adminsystem.ninebot.cn/index/security_code/',
                                dataType:'json',
                                data:{
                                    "num": serNumVal,
                                    "type": dataValue,
                                },
                                success:function (res) {
                                    console.log(res);
                                    if(res.code==200){
                                        $('#start').html(res.start_time);
                                        $('#end').html(res.start_end);
                                        $('#countall').html(res.count);
                                    }else if(res.code==301){
                                        // $('#start').html(res.start_time);
                                        // $('#end').html(res.start_end);
                                        // $('#countall').html(res.count);
                                    }
                                },
                                error:function () {
                                    
                                }
                            })
                        // }

                    }

                }else{
                    document.getElementById('whyz').value='fail'
                }
                // if(json.result.code == 400) {
                //     //唤醒滑动验证
                //     getNC().then(function(){
                //         NoCaptcha.upLang('cn', {
                //             'LOADING':"加载中...",//加载
                //             'SLIDER_LABEL': "请向右滑动验证",//等待滑动
                //             'CHECK_Y':"验证通过",//通过
                //             'ERROR_TITLE':"非常抱歉，这出错了...",//拦截
                //             'CHECK_N':"验证未通过", //准备唤醒二次验证
                //             'OVERLAY_INFORM':"经检测你当前操作环境存在风险，请输入验证码",//二次验证
                //             'TIPS_TITLE':"验证码错误，请重新输入"//验证码输错时的提示
                //         });
                //         _nvc_nc.reset();
                //     })
                // } else if (json.result.code == 600) {
                //     //唤醒刮刮卡
                //     getSC().then(function(){})
                // } else if (json.result.code == 100 || json.result.code == 200) {
                //     //注册成功
                //     nvcReset()
                //     document.getElementById('whyz').value='success'
                //     // alert("register success!")
                // } else if (json.result.code == 800 || json.result.code == 900) {
                //     //直接拦截
                //     nvcReset()
                //     // alert("register failed!")
                //     document.getElementById('whyz').value='fail'
                // }
            }
            o_s.src = url + '?' + params
        }
        yourRegisterRequest('http://cf.aliyun.com/nvc/nvcAnalyze.jsonp', params);

    })




})