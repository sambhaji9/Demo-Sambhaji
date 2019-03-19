(function() {
  var cacheService = angular.module('cacheService', []);

  function CacheController($scope, CacheService) {
    var factory = {};
    var self = this;

    function getData() {
      return localStorage.getItem('studentData');
    }

    factory.setData = function(user) {
      self.data = JSON.parse(getData());

      if (self.data === null) {
        self.data = [];
      }

      self.data.push(user);

      localStorage.setItem('studentData', JSON.stringify(self.data));
    };

    factory.getData = function(user) {
      var tempStudentData = JSON.parse(getData());

      var obj = {};

      if (tempStudentData.length > 0) {
        angular.forEach(tempStudentData, function(value) {
          if (value.rollNo === user.rollNo) {
            obj = value;
          }
        });
      }
      user.name = obj.name;
    };

    return factory;
  }

  cacheService.factory('CacheService', [CacheController]);

  cacheService.controller('CacheController', ['$scope', CacheController]);
})();
