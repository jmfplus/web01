/**
 * Created by fanjiamin on 16/9/21.
 * 教师信息模块
 */
angular.module("app.teaModule",["ngRoute"])
    .controller("TeacherController",function(
        $scope,TeacherService,$location){
        $scope.name="学生信息管理";
        $scope.model={
            gender:"male"
        }
        TeacherService.getAllTeachers(function(data){
            $scope.teachers=data;
        });
        $scope.add=function(){
            $location.path("/addTeacher");
        }
    })
    .controller("TeacherAddController",function($scope,TeacherService){
        $scope.name="学生信息添加";
        $scope.stu={};
        $scope.saveTeacher=function(){
            console.log($scope.stu);
            TeacherService.addTeacher($scope.stu);
        }
    })
    .config(function(TeacherServiceProvider,$routeProvider){
        TeacherServiceProvider.setUrl("data/teachers.json");
        $routeProvider.when("/addTeacher",{
            templateUrl:"tpl/tea_add.html",
            controller:"TeacherAddController"
        });
    })
    .provider("TeacherService",function () {
        this.url="";
        this.setUrl=function(url){
            this.url=url;
        };
        this.$get=function($http){
            var self=this;
            return{
                //获取所有学生信息
                getAllTeachers:function(handler){
                    $http.get(self.url).success(function(data){
                        handler(data);
                    });
                },
                addTeacher:function(user){
                    $http.post("a.action",user).success(function(){
                        alert("成功了");
                    });
                }
            };
        }
    });

