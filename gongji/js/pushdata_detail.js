/*
 * @Author: YuLei
 * @Date:   2019-04-22 10:55:49
 * @Last Modified by:   YuLei
 * @Last Modified time: 2019-04-23 14:34:20
 */
var now_page = 1;
var cjstr = '';
var redcss = '';
var myPhone = '';

function queryRankPc() {

    var phone = $('#inquiry_telbox').val();
    if (!phone) {
        alert('请输入手机号');
        return false;
    }
    var phone_re = /^0?1[3456789]\d{9}$/;
    if (!phone_re.test(phone)) {
        alert('请输入正确的手机号');
        return false;
    }
    myPhone = phone;
    var page = now_page;
    $.ajax({
        url: "http://zg99.offcn.com/index/mokao/getphoneinfo?actid=14525&callback=?",
        type: 'GET',
        dataType: 'jsonp',
        data: {
            phone: phone,
            page: page,
            limits: '50'
        },
        success: function (data) {
            if (data.status == "1") {
                $(".page_cover").show();
                toggleBody(1)
                $('.data_info').show();
                $('.rank_info').hide();
                $('.left_score').html(data.users.fenshu);
                $('.left_num').html(data.users.dqpaiming);
                $(".total_num").html(data.zcounts);
                $('#recor_list').val(data.users.userrecord)
                cjstr = '';
                redcss = '';
                $.each(data.lists, function (i, item) {
                    if (data.users.dqpaiming == item.paihang) {
                        redcss = 'class="redcss"';
                    }
                    var nowPhone = item.phone.substring(0, 4) + "****" + item.phone.substring(8, 11)
                    cjstr += '<tr ' + redcss + '>\
                              <td width="25%">' + item.sj_type + '</td>\
                              <td width="15%">' + item.paihang + '</td>\
                              <td width="25%">' + nowPhone + '</td>\
                              <td width="15%">' + item.fenshu + '</td>\
                              <td width="20%">' + item.cha_fenshu + '</td>\
                              </tr>';
                    redcss = '';
                });
                $(".rank_table1").html(cjstr);
                $("#pages").html(data.pagination);
                for (var i = 0; i < $('.offcn_pageall').find('a').length; i++) {
                    var pageNum = $('.offcn_pageall').find('a').eq(i).attr('href').split('page=')[1].split('#jump')[0]
                    $('.offcn_pageall').find('a').eq(i).attr('href', 'javascript:void(0)')
                    $('.offcn_pageall').find('a').eq(i).attr('for', pageNum)
                }
                $('.offcn_pageall').find('a').click(function () {
                    var nowpage = $(this).attr('for')
                    queryRankPcc(nowpage)
                })
            } else {
                alert(data.msg);
                location.href = "index.html";
            }
        }
    });
}

function queryRankPcc(nowpage) {
    var phone = myPhone;
    $.ajax({
        url: "http://zg99.offcn.com/index/mokao/getphoneinfo?actid=" + now_actid + "&callback=?",
        type: 'GET',
        dataType: 'jsonp',
        data: {
            phone: phone,
            page: nowpage,
            limits: '50'
        },
        success: function (data) {
            if (data.status == "1") {
                cjstr = '';
                redcss = '';
                $.each(data.lists, function (i, item) {
                    if (data.users.dqpaiming == item.paihang) {
                        redcss = 'class="redcss"';
                    }
                    var nowPhone = item.phone.substring(0, 4) + "****" + item.phone.substring(8, 11)
                    cjstr += '<tr ' + redcss + '>\
                              <td width="25%">' + item.sj_type + '</td>\
                              <td width="15%">' + item.paihang + '</td>\
                              <td width="25%">' + nowPhone + '</td>\
                              <td width="15%">' + item.fenshu + '</td>\
                              <td width="20%">' + item.cha_fenshu + '</td>\
                              </tr>';
                    redcss = '';
                });
                $(".rank_table1").html(cjstr);
                $("#pages").html(data.pagination);
                for (var i = 0; i < $('.offcn_pageall').find('a').length; i++) {
                    var pageNum = $('.offcn_pageall').find('a').eq(i).attr('href').split('page=')[1].split('#jump')[0]
                    $('.offcn_pageall').find('a').eq(i).attr('href', 'javascript:void(0)')
                    $('.offcn_pageall').find('a').eq(i).attr('for', pageNum)
                }
                $('.offcn_pageall').find('a').click(function () {
                    var nowpage = $(this).attr('for')
                    queryRankPcc(nowpage)
                })
            } else {
                alert(data.msg);
                location.href = "index.html";
            }

        }
    });
}
