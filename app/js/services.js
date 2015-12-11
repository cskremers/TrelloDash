'use strict';

/* Services */

// define app
var app = angular.module('trelloDash', []);

// =============================================================================
// Create API vars
// =============================================================================

var key =  "b9b668433355c35cca0cc4cafd2efaff";
var secret = "278c4c73b872c618cd6f04a8297df825d04e1c3803605b83d773cc0c90c648f3";
var token = "68202c20ab1055f38b4e1cf5509f226901e9f9bca2b41673160cb7640824dd3a";
var apiBase = "https://api.trello.com/1/";

// TODO - Specific vars for example lists - these will be replaced after testing
var listId1 = "5661eeef4ea8cf3b244fe04f";
var boardID1 = "5661eee788d372c4b73ccbac";

// =============================================================================
// URL Builder Strings
// =============================================================================

var cardsOnListUrlBuilder = apiBase.concat("lists/", listId1, "/cards?key=", key, "&token=", token);
var boardsURLBuilder = apiBase.concat("boards/", boardID1, "/lists?cards=open&card_fields=name&fields=name&key=", key, "&token=", token);


// =============================================================================
// API Controllers
// =============================================================================

app.controller('getListsCtrl', function($scope, $http) {
    $http.get(boardsURLBuilder)
        .then(function(response)
        {
            $scope.lists = response.data;
        });
});


app.controller('getCardsCtrl', function($scope, $http)
{
    $http.get(cardsOnListUrlBuilder)
        .then(function(response)
        {
            $scope.cardsOnList = response.data;
        });
});


