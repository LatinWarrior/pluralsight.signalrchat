angular.module('app').controller('mainCtrl', function($scope, chat) {
    $scope.messages = [];

    $scope.sendMessage = function() {
        chat.server.sendMessage($scope.newMessage);
        // send scope.newMessage
        $scope.newMessage = "";
    };

    chat.client.newMessage = function onNewMessage(message) {
        // Push an object onto the array of messages, not a string. 
        // Otherwise, if there are duplicate messages, Angular won't be able to bind them to the ng-repeat.
        $scope.messages.push({ message: message });
        // Kick off Angular's digest cycle manually so that Angular can update its bindings.
        $scope.$apply();
        console.log(message);
    };
});