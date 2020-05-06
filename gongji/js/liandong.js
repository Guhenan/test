$(function () {
    $.ajax({
        url: 'http://zg99.offcn.com/index/chaxun/getlevel?actid=14263&callback=?',
        type: 'GET',
        dataType: 'jsonp',
        data: {
            level: '1',
            dishi: '',
            dishi: ''
        },
        success: function (data) {
            if (data.status == "1") {

                var cdishi = '<option value="" selected disabled>选择地市</option>';
                $.each(data.lists, function (i, item) {
                    cdishi += '<option value="' + item.dishi + '">' + item.dishi + '</option>';
                });
                $('#dishi').html(cdishi);
            } else if (data.status == "2") {
                alert(data.msg);
            } else if (data.status == "3") {
                alert(data.msg);
            } else {
                alert('未知错误');
            }
        }
    });
    $(document).on("change", "select[name='dishi']", function () {
        var seltext = $(this).val();
        $.ajax({
            url: 'http://zg99.offcn.com/index/chaxun/getlevel?actid=14263&callback=?',
            type: 'GET',
            dataType: 'jsonp',
            data: {
                level: '2',
                grfiled: 'dishi',
                grtext: seltext
            },
            success: function (data) {
                if (data.status == "1") {

                    var czhaolujiguan = '<option value="" selected disabled>请选择招录机关</option>';
                    $.each(data.lists, function (i, item) {
                        czhaolujiguan += '<option value="' + item.zhaolujiguan + '">' + item.zhaolujiguan + '</option>';
                    });
                    $('#zhaolujiguan').html(czhaolujiguan);
                } else if (data.status == "2") {
                    alert(data.msg);
                } else if (data.status == "3") {
                    alert(data.msg);
                } else {
                    alert('未知错误');
                }
            }
        });
    });
    $(document).on("change", "select[name='zhaolujiguan']", function () {
        var seltext = $(this).val();
        var sdishi = $('#dishi').val();
        $.ajax({
            url: 'http://zg99.offcn.com/index/chaxun/getlevel?actid=14263&callback=?',
            type: 'GET',
            dataType: 'jsonp',
            data: {
                level: '3',
                grfiled: 'zhaolujiguan',
                grtext: seltext,
                onefiled: 'dishi',
                onetext: sdishi
            },
            success: function (data) {
                if (data.status == "1") {
                    var cyongrendanwei = '<option value="" selected disabled>请选择用人单位</option>';
                    $.each(data.lists, function (i, item) {
                        cyongrendanwei += '<option value="' + item.yongrendanwei + '">' + item.yongrendanwei + '</option>';
                    });
                    $('#yongrendanwei').html(cyongrendanwei);
                } else if (data.status == "2") {
                    alert(data.msg);
                } else if (data.status == "3") {
                    alert(data.msg);
                } else {
                    alert('未知错误');
                }
            }
        });
    });
    $(document).on("change", "select[name='yongrendanwei']", function () {
        var seltext = $(this).val();
        var sdishi = $('#dishi').val();
        var szhaolujiguan = $('#zhaolujiguan').val();
        $.ajax({
            url: 'http://zg99.offcn.com/index/chaxun/getlevel?actid=14263&callback=?',
            type: 'GET',
            dataType: 'jsonp',
            data: {
                level: '4',
                grfiled: 'yongrendanwei',
                grtext: seltext,
                onefiled: 'dishi',
                onetext: sdishi,
                twofiled: 'zhaolujiguan',
                twotext: szhaolujiguan
            },
            success: function (data) {
                if (data.status == "1") {
                    var czhiweimingcheng = '<option value="" selected disabled>请选择职位名称</option>';
                    $.each(data.lists, function (i, item) {
                        czhiweimingcheng += '<option value="' + item.zhiweimingcheng + '">' + item.zhiweimingcheng + '</option>';
                    });
                    $('#zhiweimingcheng').html(czhiweimingcheng);
                } else if (data.status == "2") {
                    alert(data.msg);
                } else if (data.status == "3") {
                    alert(data.msg);
                } else {
                    alert('未知错误');
                }
            }
        });
    });


})
