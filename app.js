'use strict';

// Declare app level module which depends on views, and components
let myApp = angular.module('tokenAuthPoc', ['ng-token-auth']);

myApp.config(function ($authProvider) {
    $authProvider.configure({
      apiUrl: 'http://localhost:3000',
      signOutUrl: '/api/v1/users/sign_out',
      omniauthWindowType: 'newWindow',
      authProviderPaths: { github: '/api/v1/users/github'   }
    });
});

myApp.controller('PocController', ['$scope', '$auth',
  function ($scope, $auth) {

    $scope.name = "User Data:";

    $scope.login = function () {
      $auth.authenticate('github')
        .then(function (resp) {
          $scope.user = resp;
        })
        .catch(function (resp) {
          alert("Auth error bitch!");
        });
    };
  }
]);