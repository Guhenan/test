/*
 * @Author: YuLei
 * @Date:   2019-04-22 10:57:28
 * @Last Modified by:   JinC
 * @Last Modified time: 2020-02-27 16:04:28
 */
var correct = [4, 3, 3, 2, 2, 3, 4, 1, 2, 3, 1, 1, 4, 3, 2, 4, 3, 1, 3, 2, 2, 3, 2, 1, 3, 1234, 124, 123, 23, 134, 1234, 34, 124, 234, 234, 1, 3, 4, 4, 3, 1, 4, 2, 3, 2, 2, 1, 1, 3, 4, 3, 3, 2, 3, 1, 2, 1, 2, 2, 3, 4, 3, 4, 4, 3, 2, 4, 2, 3, 3, 2, 2, 3, 3, 4, 2, 4, 3, 1, 3, 4, 2, 1, 1, 2, 3, 3, 3, 2, 3, 4, 2, 2, 1, 4, 2, 2, 1, 4, 3, 3, 3, 4, 3, 3, 1234, 124, 1234, 13, 23, 234, 134, 34, 134, 24, 123, 14, 1234, 14, 12, 1234, 234, 1234, 1234, 123, 4, 2, 234, 1, 2]
//给各类型题目赋值
window.onload = function () {
    for (var i = 0; i < $('.question_nav').find('li').length; i++) {
        if (i >= 0 && i <= 24) {
            $('.question_nav').find('li').eq(i).attr('price', 0.8)
        } else if (i >= 25 && i <= 34) {
            $('.question_nav').find('li').eq(i).attr('price', 1)
        } else if (i >= 35 && i <= 104) {
            $('.question_nav').find('li').eq(i).attr('price', 0.6)
        } else if (i >= 105 && i <= 124) {
            $('.question_nav').find('li').eq(i).attr('price', 0.9)
        } else if (i >= 125 && i <= 130) {
            $('.question_nav').find('li').eq(i).attr('price', 2)
        } else if (i >= 131 && i <= 131) {
            $('.question_nav').find('li').eq(i).attr('price', 1.2)
        } else if (i >= 131 && i <= 131) {
            $('.question_nav').find('li').eq(i).attr('price', 1.8)
        } else if (i >= 131 && i <= 131) {
            $('.question_nav').find('li').eq(i).attr('price', 2)
        }
    }
}
var now_actid = 14525;
var now_type = "公基教基";
var now_time_limit = "2020.2.27-4.1";
var now_exam_cs = "第一轮";
var info_title = "教师招聘<span>公基教基</span>"
var now_exam_name = "2020年山东省教师招聘考试公基教基全真模拟卷"
// document.oncontextmenu = function () {  
//     return false;  
// }  
// document.onkeydown=function (e){
//   var currKey=0,evt=e||window.event;
//   currKey=evt.keyCode||evt.which||evt.charCode;
//   if (currKey == 123) {
//       window.event.cancelBubble = true;
//       window.event.returnValue = false;
//   }
// }
 