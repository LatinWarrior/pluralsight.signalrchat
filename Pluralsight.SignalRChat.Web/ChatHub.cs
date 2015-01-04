using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;

namespace Pluralsight.SignalRChat.Web
{
    [HubName("chat")]
    public class ChatHub : Hub
    {
        public void SendMessage(SendData data)
        {
            //Clients.All.newMessage(message);
            // Send messages to only those clients who are members of a group.
            Clients.Group(data.RoomName, Context.ConnectionId).newMessage(data.Name + ": " + data.Message);
            // Comment this out and let the client itself in the JavaScript code send the message to himself.
            //Clients.Client(Context.ConnectionId).newMessage("You: " + data.Message);
        }

        public void JoinRoom(string roomName)
        {
            // Context represents the current client. This will also create the group if it does not already exist.
            Groups.Add(Context.ConnectionId, roomName);
        }

        public void LeaveRoom(string roomName)
        {
            Groups.Remove(Context.ConnectionId, roomName);
        }
    }
}