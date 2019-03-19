(function() {
  var studentModule = angular.module('studentModule', [
    'cacheService',
    'logService'
  ]);

  function studentController($scope, CacheService, LogService) {
    var self = this;

    self.save = function(user) {
      CacheService.setData(user);
    };

    self.fetchData = function(rollNo) {
      CacheService.getData(rollNo);
    };
  }

  studentModule.controller('studentController', [
    '$scope',
    'CacheService',
    'LogService',
    studentController
  ]);
  
})();
