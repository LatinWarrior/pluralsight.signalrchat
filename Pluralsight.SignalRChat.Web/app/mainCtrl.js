angular.module('app').controller('mainCtrl', function($scope, chat) {

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

    // Internal code to Angular. Should call displayMessage but not onNewMessage. 
    // This is so that we don't cause Angular's Digest Cycle to start again.
    $scope.sendMessage = function() {
        chat.server.sendMessage({ name: $scope.name, message: $scope.newMessage, roomName: $scope.roomName });
        // send scope.newMessage
        // Moved the code from the server to here to notify the sending user that (s)he sent the message.        
        displayMessage('You: ' + $scope.newMessage);
        $scope.newMessage = "";
    };
    
    // External code to Angular should call onNewMessage so that Angular's Digest 
    // Cycle can be manually started with "$scope.$apply();" . 
    chat.client.newMessage = onNewMessage;
    
    function onNewMessage(message) {         
        displayMessage(message);
        // Kick off Angular's Digest Cycle manually so that Angular can update its bindings.
        $scope.$apply();
        console.log(message);
    };

    function displayMessage(message) {
        // Push an object onto the array of messages, not a string. 
        // Otherwise, if there are duplicate messages, Angular won't be able to bind them to the ng-repeat.
        $scope.messages.push({ message: message });
    }

});