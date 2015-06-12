'use strict';

angular.module('discogsApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.collection = [];

    $http.get('/api/things').success(function(data) {
      $scope.collection = data;
    });

    $scope.getRelease = function(url){
        $http.get('/api/release').success(function(data2) {
          $scope.releasedata = data2;
        });
    }

  });
