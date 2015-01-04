using Newtonsoft.Json;

namespace Pluralsight.SignalRChat.Web
{
    [JsonObject]
    public class SendData
    {        
        [JsonProperty]
        public string Message { get; set; }
        [JsonProperty]
        public string RoomName { get; set; }
        [JsonProperty]
        public string Name { get; set; }
    }
}
