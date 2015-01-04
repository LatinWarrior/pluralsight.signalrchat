angular.module('app').controller('mainCtrl', function ($scope, chat) {

    $scope.messages = [];

    $scope.inRoom = false;
    $scope.nameSet = false;

    $scope.setName = function() {
        $scope.nameSet = true;
    };

    $scope.joinRoom = function() {
        $scope.inRoom = true;
        // Tell the server to add person to the room.
        chat.server.joinRoom($scope.roomName);
    };

    $scope.leaveRoom = function() {
        $scope.inRoom = false;
        // Tell the server to remove the person from the room.
        chat.server.leaveRoom($scope.roomName);
    };

    $scope.sendMessage = function() {
        chat.server.sendMessage({ name: $scope.name, message: $scope.newMessage, roomName: $scope.roomName });
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