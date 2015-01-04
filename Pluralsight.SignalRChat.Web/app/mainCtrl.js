angular.module('app').controller('mainCtrl', function($scope, chat) {
    $scope.messages = [];

    $scope.sendMessage = function() {
        chat.server.sendMessage($scope.newMessage);
        // send scope.newMessage
        $scope.newMessage = "";
    };

    chat.client.newMessage = function onNewMessage(message) {
        $scope.messages.push({ message: message });
        // Kick off Angular's digest cycle manually so that Angular can update its bindings.
        $scope.$apply();
        console.log(message);
    };
});