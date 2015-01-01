using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;
using Microsoft.AspNet.SignalR.Messaging;

namespace Pluralsight.SignalRChat.Web
{
    [HubName("chat")]
    public class ChatHub : Hub
    {
        public void SaySomething(string message)
        {
            Clients.All.speak(message + " from the server.");
        }
    }
}