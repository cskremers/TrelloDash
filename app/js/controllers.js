'use strict'

/* Controllers */

var app = angular.module('trelloDash', []);

    app.controller('openTrello', ['$scope', '$window',
        function($scope, $window) {
            $scope.openTrello = function(url){
                $window.open(url);
            };
        }
    ]);