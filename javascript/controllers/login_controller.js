angular.module('tokenAuthPoc').controller('LoginController', ['$scope', '$auth', 'StudentsService',
  function ($scope, $auth, StudentsService) {
    'use strict';

    $scope.title = "User Login Data:";
    $scope.enable_requests = false;

    $scope.login = function () {
      $auth.authenticate('github')
        .then(function onSuccess(resp) {
          $scope.user = resp;
          $scope.enable_requests = true;
          // $scope.getStudents();
        },
        function onFail(resp) {
          $scope.enable_requests = false;
          alert("Auth error bitch!");
        });
    };

    $scope.getStudents = function() {
      StudentsService.getStudents().then(
        function onSuccess(response) {
          $scope.student_count = response.data.length;
          $scope.student = _.sample(response.data);
        },
        function onFail(response) {
          console.log(`Error fetching data ${response}`)
       }
      );
    };
  }
]);