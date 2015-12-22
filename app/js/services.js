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

// LIVE BOARDS
var bugQuestionsBoardID = "563a91b8c85812ec32318be9";
var underReviewList = "563a928d70756b864838263c";
var bugsInQuestionList = "563a9280ad191357483fd760";
var lowROIList = "5661aee687f85527a0fa0849";
var blockedList = "563a93b548e33efc014c815c";

var devPriotities = "563b656f2df96b8d91b881a6";
var rawThoughtsList = "563b6585b9f4e838fef2a995";
var detailPrioritiesList = "563b73572770b040d0949555";
var highPrioritiesList = "563b6593a3cc1552fe65f7bb";
var doneList = "563b659789366c7c8c5cb2b4";

//each of the list id's
var listIDs = ["563a928d70756b864838263c", "563a9280ad191357483fd760", "5661aee687f85527a0fa0849", "563a93b548e33efc014c815c"];
//

// =============================================================================
// URL Builder Strings
// =============================================================================



var boardsURLBuilder = apiBase.concat("boards/", bugQuestionsBoardID, "/lists?cards=open&card_fields=name&fields=name&key=", key, "&token=", token);


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


app.controller('getCardsOnList', function($scope, $http)
{
    $scope.init = function(listID)
    {
        var urlStringBuilder = apiBase.concat("lists/", listID, "/cards?key=", key, "&token=", token);

        $http.get(urlStringBuilder)
            .then(function(response)
            {
                $scope.cards = response.data;
            })
    };

});


