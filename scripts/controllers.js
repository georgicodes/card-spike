var snapGameApp = angular.module('snapGameApp', []);

snapGameApp.controller('SnapGameCtrl', function SnapGameCtrl($scope, $http, $timeout) {
    $scope.appTitle = "Snapy App";
    $scope.timeInMs = 1000; // inital computer move timeout value
    $scope.played = []; // keep track of what cards have already been played
    $scope.computerIsCurrentPlayer = false;

    $scope.init = function () {
        $scope.initFirstPlayer();
    };

    // load data source
    $http.get('cards.json').success(function(data) {
        $scope.deck = data;
        $scope.shuffle();
    });

    $scope.shuffle = function() {
        $scope.deckComputer = $scope.deck.splice(0, 26);
        $scope.deckPlayer = $scope.deck.splice(0, 26);
    };

    $scope.initFirstPlayer = function() {
        var num = Math.floor((Math.random()*1)+0);

    };

    $scope.playCard = function() {
        $scope.played.push($scope.deckPlayer.pop());
        $timeout(playCardComputer, $scope.timeInMs);
    };

    var playCardComputer = function() {
        $scope.played.push($scope.deckComputer.pop());
    };

    $scope.reset= function(){
        $scope.timeInMs = 1000;
        $scope.shuffle();
    };
});