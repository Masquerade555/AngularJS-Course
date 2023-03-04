var app = angular.module("myApp", []);
app.controller("firstC", function($scope){
    $scope.firstName = "John";
});

app.controller("secondC", function($scope){
    $scope.lastName = "Wick";
    $scope.getFullName = function(){
        return $scope.firstName + " " + $scope.lastName;
    };
});

app.controller("thirdC", function($scope){
    $scope.middleName = "Kennedy";
    $scope.lastName = "Wick";
    $scope.getFullName = function(){
        return $scope.firstName + " " + $scope.middleName + " " + $scope.lastName;
    };
});

app.controller("firstobj", function($scope){
    $scope.firstModelObj = {firstName:"John"};
});

app.controller("secondobj", function($scope){
    $scope.secondModelObj = {lastName:"Wick"};
    $scope.getFullName = function(){
        return $scope.firstModelObj.firstName + " " + $scope.secondModelObj.lastName;
    };
});

app.controller("thirdobj", function($scope){
    $scope.thirdModelObj = {middleName: "Kennedy",lastName: "Wick"};
    $scope.getFullName = function(){
        return $scope.firstModelObj.firstName + " " + $scope.thirdModelObj.middleName + " " + $scope.thirdModelObj.lastName;
    };
});