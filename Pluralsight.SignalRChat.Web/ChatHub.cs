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
            Clients.Group(data.RoomName).newMessage(data.Name + ": " + data.Message);
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