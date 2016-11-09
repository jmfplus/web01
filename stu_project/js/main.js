/**
 * Created by fanjiamin on 2016/9/21.
 */
//核心模块  依赖路由模块，学生模块
var app=angular.module("app",["ngRoute","app.stuModule","app.teaModule"]);
//核心控制器
app.controller("mainCtrl",function($scope){
    $scope.msg="hello";
});
//路由配置
app.config(function($routeProvider){
    $routeProvider.when("/Student",{
        templateUrl:"tpl/stu.html",
        controller:"StudentController"
    }).when("/Teacher",{
        templateUrl:"tpl/tea.html",
        controller:"TeacherController"
    });
});
