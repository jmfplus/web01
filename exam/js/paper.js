/**
 * Created by fanjiamin on 2016/9/28.
 * 试卷模块
 * 
 */
angular.module("app.paper",["ng","app.subject"])
    //试卷列表控制器
    .controller("paperListController",["$scope",function ($scope) {
        
    }])
    //试卷添加控制器
    .controller("paperAddController",["$scope","commonService","$routeParams",function ($scope,commonService,$routeParams) {
        commonService.getAllDepartmentes(function (data) {
            //将全部方向绑定到作用域的departmentes中
            $scope.departmentes=data;
        });
        var subjectId=$routeParams.id;
        if(subjectId!=0){
            //将要添加的题目的id添加到数组中
            paperModel.addSubjectId(subjectId);
            paperModel.addSubjectId(angular.copy($routeParams));
        }
        //双向绑定的模板
        $scope.pmodel=paperModel.model;
        $scope.savePaper=function () {

        }
    }])
    //试卷删除控制器
    .controller("paperDelController",["$scope",function ($scope) {

    }])
    /*.factory("paperService",function () {
        return{
            savePaper:
        }
    })*/
    .factory("paperModel",function () {
        return{
            model:{
                departmentId:1,//方向
                title:"",//试卷标题
                desc:"",//试卷描述
                at:0,//answerType//答题时间
                total:0,//总分
                scores:[],//每个题目的分值
                subjectIds:[],//每个题目的id
                subjects:[]
            },
            addSubjectId:""
        };


})
