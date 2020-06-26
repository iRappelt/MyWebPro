$(document).ready(function () {
    // 获取用户名，显示在导航栏上
    $.get("get_session_user", function (res) {
        if(res.data==null){
            return;
        }
        $('#username').append(res.data.username);
    });

    //表单必填项前面加标识
    $('input[required]').parent().prev().append('<span style="color:red">*</span>');
    $('select[required]').parent().prev().append('<span style="color:red">*</span>');

    //layui部分
    layui.use(['element', 'layer', 'table', 'form'], function(){
        var element = layui.element;
        var layer = layui.layer;
        var table = layui.table;
        var form = layui.form;

        //导航栏点击事件
        //nav代表导航栏的监听，filter过滤定位到固定的元素，下面为示例
        // element.on('nav(filter)', function(elem){
        //     console.log(elem); //得到当前点击的DOM对象
        // });

    });

    // 点击标题回到主页
    $('#logo_title').on("click", function () {
        window.location.href = "main.html";
    });
    // 左侧导航栏点击切换事件
    $('#get_user').on("click", function () {
        $('#content').load("user.html");
    });
    $('#get_word').on("click", function () {
        $('#content').load("word.html");
    });
    $('#get_exercise').on("click", function () {
        $('#content').load("exercise.html");
    });
    $('#get_error_bank').on("click", function () {
        $('#content').load("error_bank.html");
    });

});
