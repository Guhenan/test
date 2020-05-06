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
$('.question_nav').find('li').click(function () {
    aTop = $('.question_con').find('.question_list').eq($(this).index()).offset().top - $('.page_nav').outerHeight()
    $('html,body').animate({
        scrollTop: aTop
    }, 500);
})
$('.data_info_close').click(function () {
    $('.data_info').hide()
    $('.rank_info').show()
})
var lastAnswer = [];
var correct_sum = 0;
var priceToall = 0
$('.rank_info_close').click(function () {
    window.location.href = './index.html';
})
$('.go_answer_detail').click(function () {
    toggleBody(0)
    var record_data = $('#recor_list').val().split(',');
    $('.data_info').hide();
    $('.page_cover').hide();
    $('html,body').animate({
        scrollTop: 0
    }, 500);
    for (var i = 0; i < record_data.length; i++) {
        $('.question_nav').find('li').eq(i).addClass('correct')
        if (!$('.question_con').find('.question_list').eq(i).hasClass('more_list')) {
            $('.question_con').find('.question_list').eq(i).find('.answer_list').find('li').eq(parseInt(correct[i]) - 1).addClass('correct')
            $('.question_con').find('.question_list').eq(i).find('.answer_list1').find('li').eq(parseInt(correct[i]) - 1).addClass('correct')
            if (record_data[i] == 0) {
                $('.question_nav').find('li').eq(i).removeClass('correct').removeClass('error')
            } else if (record_data[i] != correct[i]) {
                $('.question_nav').find('li').eq(i).removeClass('correct').addClass('error')
                if ((parseInt(record_data[i]) - 1) >= 0) {
                    $('.question_con').find('.question_list').eq(i).find('.answer_list').find('li').eq(parseInt(record_data[i]) - 1).addClass('error')
                    $('.question_con').find('.question_list').eq(i).find('.answer_list1').find('li').eq(parseInt(record_data[i]) - 1).addClass('error')
                }
            }
        } else {
            nowstr = correct[i].toString();
            errstr = record_data[i].toString()
            for (var j = 0; j < nowstr.length; j++) {
                $('.question_con').find('.question_list').eq(i).find('.answer_list').find('li').eq(parseInt(nowstr[j]) - 1).addClass('correct')
                $('.question_con').find('.question_list').eq(i).find('.answer_list1').find('li').eq(parseInt(nowstr[j]) - 1).addClass('correct')
            }
            if (record_data[i] == 0) {
                $('.question_nav').find('li').eq(i).removeClass('correct').removeClass('error')
            } else if (correct[i] != record_data[i]) {
                $('.question_nav').find('li').eq(i).removeClass('correct').addClass('error')
                for (var k = 0; k < errstr.length; k++) {
                    if ((parseInt(errstr[k]) - 1) >= 0) {
                        $('.question_con').find('.question_list').eq(i).find('.answer_list').find('li').eq(parseInt(errstr[k]) - 1).addClass('error')
                        $('.question_con').find('.question_list').eq(i).find('.answer_list1').find('li').eq(parseInt(errstr[k]) - 1).addClass('error')
                    }
                }
            }
        }
    }
    $('.answer_analysis').show();
})
$('.go_check_btn').click(function () {
    $('.page_result').hide();
    $('.rank_info').show();
    $('.choice_info').hide();
})

function toggleBody(isPin) {
    if (isPin) {
        document.body.style.height = '100vh'
        document.body.style['overflow-y'] = 'hidden'
    } else {
        document.body.style.height = 'unset'
        document.body.style['overflow-y'] = 'auto'
    }
}
