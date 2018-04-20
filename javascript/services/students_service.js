angular.module('tokenAuthPoc').factory('StudentsService', function ($http) {
  return {
    getStudents: function () {
      return $http({
        method: 'GET',
        url: 'http://localhost:3000/api/v1/students',
      });
    }
  }
});