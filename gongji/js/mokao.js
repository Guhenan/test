
//注册
$("#zhuce").click(function () {

    var phone = $("#phone").val();
    var dishi = $("#dishi").val();
    var zhaolujiguan = $("#zhaolujiguan").val();
    var yongrendanwei = $("#yongrendanwei").val();
    var zhiweimingcheng = $("#zhiweimingcheng").val();
    var yzm = $("#yzm").val();
    var fenxiao = $("#fenxiao").val();
    var geneal = $("#geneal").val();
    if (phone == '') { //验证手机号是否为空
        alert('请填写手机号');
        return false;
    }
    var reg = /^0?1[3456789]\d{9}$/; //手机号正则
    if (!reg.test(phone)) { //验证手机号是否正确
        alert('请填写正确的手机号！');
        return false;
    }
    if (yzm == '') { //验证码是否为空
        alert('验证码不能为空');
        return false;
    }
    console.log(dishi)
    console.log(zhaolujiguan)
    console.log(yongrendanwei)
    console.log(zhiweimingcheng)
    $.ajax({
        url: 'http://zg99.offcn.com/index/mokao/register?actid=14525&callback=?',
        type: 'GET',
        dataType: 'jsonp',
        data: {
            phone: phone,
            zhaolujiguan: zhaolujiguan,
            zhiweimingcheng: zhiweimingcheng,
            yongrendanwei: yongrendanwei,
            fenxiao: fenxiao,
            geneal: geneal,
            yzm: yzm
        },
        success: function (data) {
            if (data.status == "1") {
                alert(data.msg);
                $('.page_cover').hide();
                $('.container').hide();
                $('#field4').val(phone);
            } else {
                alert(data.msg);
            }
        }
    });
});


//获取验证码
$('#getyzm').click(function () {

    var formid = $(this).attr("data");
    var phone = $('#phone').val();
    if (phone == '') { //验证手机号是否为空
        alert('请填写手机号');
        return false;
    }
    var reg = /^0?1[3456789]\d{9}$/; //手机号正则
    if (!reg.test(phone)) { //验证手机号是否正确
        alert('请填写正确的手机号！');
        return false;
    }
    $.ajax({
        url: 'http://zg99.offcn.com/index/mokao/sendmsg?actid=14525&callback=?',
        type: 'GET',
        dataType: 'jsonp',
        data: {
            phone: phone
        },
        success: function (data) {
            if (data.status == "1") {
                alert('正在发送请稍后...');
                var sec = 120;
                $("#getyzm").text(sec + 's后重试');
                var timer = setInterval(function () {
                    sec--;
                    $("#getyzm").text(sec + 's后重试');
                    if (sec < 1) {
                        $("#getyzm").text('获取验证码');
                        clearInterval(timer);
                    }
                }, 1000);
            } else {
                if (data.status == "4" || data.msg == "请勿重复注册") {
                    alert('您已注册,去登陆吧');
                    $('#getyzm').show(0);
                    $('#daojishi').hide(0);
                    $('.container').find('.agileits').hide().eq(0).show();
                    $('.bd_nav').find('span').removeClass('active').eq(0).addClass('active');
                } else {
                    alert(data.msg);
                }

            }
        }
    });

});

//登录
$("#denglu").click(function () {

    var phone = $("#loginPhone").val();
    if (phone == '') { //验证手机号是否为空
        alert('请填写手机号');
        return false;
    }
    var reg = /^0?1[3456789]\d{9}$/; //手机号正则
    if (!reg.test(phone)) { //验证手机号是否正确
        alert('请填写正确的手机号！');
        return false;
    }
    $.ajax({
        url: 'http://zg99.offcn.com/index/mokao/longin?actid=14525&callback=?',
        type: 'GET',
        dataType: 'jsonp',
        data: {
            phone: phone
        },
        success: function (data) {
            if (data.status == "1") {

                $('.page_cover').hide();
                $('.container').hide();
                $('#field4').val(phone);
                /*alert('已估分,查看排名吧！')
                window.location.href="index_detail.html";
				*/
            }
            if (data.status == "2") {

                alert("请未注册，再登录");
                $('.container').find('.agileits').hide().eq(1).show();
                $('.bd_nav').find('span').removeClass('active').eq(1).addClass('active');
            }
        }
    });
});


//提交试卷
function submitPc(event) {
    var phone = $("#field4").val();
    var area = $("#zhiweimingcheng").val();
    var fenshu = $("#fieldScore").val();
    var userrecord = $("#field1").val();
    var name_re = /^[\u4e00-\u9fa5]{0,}$/;
    if (!name_re.test(name)) {
        alert('请输入正确的姓名');
        return false;
    }
    if (!phone) {
        alert('请输入手机号');
        return false;
    }
    var phone_re = /^0?1[3456789]\d{9}$/;
    if (!phone_re.test(phone)) {
        alert('请输入正确的手机号');
        return false;
    }

    //写入答题记录
    $.getJSON("http://zg99.offcn.com/index/mokao/writelogs?actid=14525&callback=?", {
        phone: phone,
        sj_type: area,
        fenshu: fenshu,
        userrecord: userrecord
    }, function (data) {});

    $.ajax({
        url: 'http://zg99.offcn.com/index/mokao/answer?actid=14525&callback=?',
        type: 'GET',
        dataType: 'jsonp',
        data: {
            phone: phone,
            sj_type: area,
            fenshu: fenshu,
            userrecord: userrecord
        },
        success: function (data) {
            if (data.status == "1") {

                DispClose = false;
                window.location.href = "index_detail.html";
            } else {
                alert(data.msg);
            }
        }
    });


}
