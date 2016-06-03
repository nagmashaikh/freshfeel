app.controller("homeController", ['$scope',function ($scope) {

    $scope.user = {};
    $scope.login=function(frm){
        if(frm.$valid){
            console.log("save details");
            console.log($scope.user);
        }
        else{
            console.log("something wrong");
        }
    };
    
}]);