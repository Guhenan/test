$('#nav_title').html(now_exam_name)
$('#info_time').html(now_time_limit)
$('#info_title').html(info_title)
$('#info_cs').html(now_exam_cs)
var DispClose = false;

function listen() {
    window.onbeforeunload = function () {
        if (DispClose) {
            return "请确认已交卷，否则下次将重新开始！";
        }
    };
}
listen()
var nowTime = null;
var timer = null;
var last_mytimes = 0;;
(function () {
    $('.bd_nav').find('span').click(function () {
        $('.bd_nav').find('span').removeClass('active').eq($(this).index()).addClass('active');
        $('.container').find('.agileits').hide().eq($(this).index()).show();
    })
})();
(function () {
    var aTop = $('.page_nav').offset().top;
    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop >= aTop) {
            $('.page_nav').addClass('active');
        } else if (scrollTop < aTop) {
            $('.page_nav').removeClass('active');
        }
    });
})()
//选择答案
;
(function () {
    $('.question_con').find('.question_list').each(function (qs_index, el) {
        if (!$(el).hasClass('more_list')) {
            //单选答案  点击选项选择答案
            $(el).find('.question_item').find('.answer_list').find('li').click(function () {
                $(el).find('.question_item').find('.answer_list').find('li').removeClass('active').eq($(this).index()).addClass('active');
                $(el).find('.question_item').find('.answer_list1').find('li').removeClass('active').eq($(this).index()).addClass('active');
                $('.question_nav').find('li').eq(qs_index).addClass('active');
                $('.question_nav').find('li').eq(qs_index).attr('qus', $(this).index() + 1);
                aTop = $('.question_con').find('.question_list').eq(qs_index + 1).offset().top - $('.page_nav').outerHeight()
                $('html,body').animate({
                    scrollTop: aTop
                }, 500);
            })
            //单选答案  点击按钮选择答案
            $(el).find('.question_item').find('.answer_list1').find('li').click(function () {
                $(el).find('.question_item').find('.answer_list').find('li').removeClass('active').eq($(this).index()).addClass('active');
                $(el).find('.question_item').find('.answer_list1').find('li').removeClass('active').eq($(this).index()).addClass('active');
                $('.question_nav').find('li').eq(qs_index).addClass('active');
                $('.question_nav').find('li').eq(qs_index).attr('qus', $(this).index() + 1);
                aTop = $('.question_con').find('.question_list').eq(qs_index + 1).offset().top - $('.page_nav').outerHeight()
                $('html,body').animate({
                    scrollTop: aTop
                }, 500);
            })
        } else {
            //多选答案 点击选项选择答案
            $(el).find('.question_item').find('.answer_list').find('li').click(function (event) {
                var nowAnswer = []
                $(this).toggleClass('active');
                $(el).find('.question_item').find('.answer_list1').find('li').eq($(this).index()).toggleClass('active');

                for (var i = 0; i < $(el).find('.answer_list').find('li').length; i++) {
                    if ($(el).find('.answer_list').find('li').eq(i).hasClass('active')) {
                        nowAnswer.push(i + 1)
                    }
                }
                if (nowAnswer.length > 0) {
                    $('.question_nav').find('li').eq(qs_index).addClass('active');
                } else {
                    $('.question_nav').find('li').eq(qs_index).removeClass('active');
                }
                $('.question_nav').find('li').eq(qs_index).attr('qus', nowAnswer.join(''));
            });

            //多选答案 点击按钮选择答案
            $(el).find('.question_item').find('.answer_list1').find('li').click(function (event) {
                var nowAnswer = []
                $(this).toggleClass('active');
                $(el).find('.question_item').find('.answer_list').find('li').eq($(this).index()).toggleClass('active');
                $('.question_nav').find('li').eq(qs_index).addClass('active');
                for (var i = 0; i < $(el).find('.answer_list').find('li').length; i++) {
                    if ($(el).find('.answer_list').find('li').eq(i).hasClass('active')) {
                        nowAnswer.push(i + 1)
                    }
                }
                if (nowAnswer.length > 0) {
                    $('.question_nav').find('li').eq(qs_index).addClass('active');
                } else {
                    $('.question_nav').find('li').eq(qs_index).removeClass('active');
                }
                $('.question_nav').find('li').eq(qs_index).attr('qus', nowAnswer.join(''));
            });
        }

    });
    //答题卡点击返回相应位置
    $('.question_nav').find('li').click(function () {
        aTop = $('.question_con').find('.question_list').eq($(this).index()).offset().top - $('.page_nav').outerHeight()
        $('html,body').animate({
            scrollTop: aTop
        }, 500);
    })
})()
//开始、暂停、提交按钮功能
//时间转化为分秒    
function oTime() {
    var iNow = new Date();
    var myTime = Math.floor((iNow - nowTime)) + last_mytimes;
    var hourStr = double(Math.floor(myTime / 1000 / 3600 % 24));
    var fenStr = double(Math.floor(myTime / 1000 % 3600 / 60));
    var miaoStr = double(Math.floor(myTime / 1000 % 3600 % 60));
    $('.nowtime').find('span').html(hourStr + ':' + fenStr + ':' + miaoStr);
}
//将00:00:18转化为毫秒
function getMiao(last_mytime) {
    var timeArr = last_mytime.split(':');
    return last_mytimes = parseInt(timeArr[0]) * 60 * 60 * 1000 + parseInt(timeArr[1]) * 60 * 1000 + parseInt(timeArr[2]) * 1000;
}
//对转化为的分秒 双位数转化
function double(obj) {
    return obj < 10 ? '0' + obj : obj;
}
//暂停按钮
$('.stop').click(function (event) {
    $('.page_cover').show();
    $('.page_stop').show();
    66666666
    clearInterval(timer);
});
//暂停 窗口 继续答题按钮
$('.stop_button').click(function (event) {
    $('.page_cover').hide();
    $('.page_stop').hide();
    nowTime = new Date();
    last_mytimes = getMiao($('.nowtime').find('span').html());
    timer = setInterval(oTime, 40);
});
//重新开始按钮
$('.next').click(function (event) {
    $('.page_cover').show();
    $('.page_leave').show();
    clearInterval(timer)
});
// 重新开始窗口  确定按钮
$('.page_leave').find('.leave_ok').click(function (event) {
    $('.page_leave').hide();
    $('.page_start').show();
});
// 重新开始窗口  取消按钮
$('.page_leave').find('.leave_cancle').click(function (event) {
    $('.page_leave').hide();
    $('.page_cover').hide();
    nowTime = new Date();
    last_mytimes = getMiao($('.nowtime').find('span').html());
    timer = setInterval(oTime, 1);
});
var lastAnswer = [];
var correct_sum = 0;
var priceToall = 0
//提交按钮
$('.submit').click(function (event) {
    lastAnswer = []
    noanser_sum = 0;
    //获取答案 获取当前未答题的数目
    for (var i = 0; i < $('.question_nav').find('li').length; i++) {
        if (!$('.question_nav').find('li').eq(i).attr('qus')) {
            $('.question_nav').find('li').eq(i).attr('qus', 0)
        }
        lastAnswer.push($('.question_nav').find('li').eq(i).attr('qus'))
    }
    for (var i = 0; i < $('.question_nav').find('li').length; i++) {
        if ($('.question_nav').find('li').eq(i).attr('qus') == 0) {
            noanser_sum++
        }
    }
    $('.page_cover').show();
    $('.page_submit').show();
    if (noanser_sum == 0) {
        $('.page_submit').find('p').html("您确定交卷么？")
    } else {
        $('.page_submit').find('p').html("您还有" + noanser_sum + "道题没有答完<br/>确定交卷么？")
    }
    clearInterval(timer);
});
//提交按钮取消
$('.page_submit').find('.submit_cancle').click(function (event) {
    $('.page_submit').hide();
    $('.page_cover').hide();
    nowTime = new Date();
    last_mytimes = getMiao($('.nowtime').find('span').html());
    timer = setInterval(oTime, 1);
});
$('.form_box_close').click(function (event) {
    $('.form_box').hide();
    $('.page_cover').hide();
    nowTime = new Date();
    last_mytimes = getMiao($('.nowtime').find('span').html());
    timer = setInterval(oTime, 1);
});

//提交按钮 确定
$('.page_submit').find('.submit_ok').click(function (event) {
    //对答案 算分数
    priceToall = 0
    for (var i = 0; i < correct.length; i++) {
        if (correct[i] == lastAnswer[i]) {
            correct_sum++;
            priceToall += parseFloat($('.question_nav').find('li').eq(i).attr('price'));
        }
    }
    $('.page_cover').show();
    var lastnum = new Number(priceToall);
    $('#fieldScore').val(lastnum.toFixed(1));
    $('#field1').val(lastAnswer);
    if ($('#field3').val() == '' || $('#field4').val() == '') {
        alert('登录状态已注销，请重新登录提交！')
        $('.container').show()
    } else {
        $('.page_submit').hide();
        submitPc()
    }
})
$('.goBtn').click(function () {
    window.location.reload();
})
$('.go_do').click(function () {
    $('.choice_info').hide();
    $('.container').show()
})
$('.go_check').click(function () {
    window.location.href = './index_detail.html';
})
$('.rank_info_close').click(function () {
    $('.choice_info').show();
    $('.rank_info').hide();
})
$('.container_close').click(function () {
    $('.choice_info').show();
    $('.container').hide();
})
$('.go_check_btn').click(function () {
    $('.page_result').hide();
    $('.rank_info').show();
    $('.choice_info').hide();
})
