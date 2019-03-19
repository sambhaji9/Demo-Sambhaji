(function() {
  var logService = angular.module('logService', []);

  function LogController($scope, LogService) {
    var factory = {};

    factory.verbose = function(user) {
      console.log(user);
    };

    return factory;
  }

  logService.factory('LogService', [LogController]);

  logService.controller('LogController', ["$scope", LogController]);
})();
