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



app.controller('getCards', function toArray()
    {
        var output = [];
        for (var card in $scope.cardsOnList)
        {
            var tempObj = {};
            tempObj[card] = input[card];
            output.push(tempObj);
        }

        //output.sort(orderBy.Date);

        return output;
    });