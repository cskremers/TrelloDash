'use strict'

/* Controllers */


var app = angular.module('trelloDash', []);


app.controller('getListsCtrl', function($scope, $http) {
    $http.get("https://api.trello.com/1/boards/5661eee788d372c4b73ccbac/lists?cards=open&card_fields=name&fields=name&key=b9b668433355c35cca0cc4cafd2efaff&token=68202c20ab1055f38b4e1cf5509f226901e9f9bca2b41673160cb7640824dd3a")
        .then(function(response)
        {
            $scope.lists = response.data;
        });
});



app.controller('getCardsCtrl', function($scope, $http)
{
    $http.get("https://api.trello.com/1/lists/5661eeef4ea8cf3b244fe04f/cards?key=b9b668433355c35cca0cc4cafd2efaff&token=68202c20ab1055f38b4e1cf5509f226901e9f9bca2b41673160cb7640824dd3a")
        .then(function(response)
        {
            $scope.cardsOnList = response.data;
        });
});