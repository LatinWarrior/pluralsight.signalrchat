using Microsoft.Owin;
using Owin;

// Register this class so that when Owin starts up, it will call the configuration method
[assembly: OwinStartup(typeof(Pluralsight.SignalRChat.Web.Startup))]

namespace Pluralsight.SignalRChat.Web
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            // For more information on how to configure your application, visit http://go.microsoft.com/fwlink/?LinkID=316888
            ConfigureAuth(app);
        }
    }
}
