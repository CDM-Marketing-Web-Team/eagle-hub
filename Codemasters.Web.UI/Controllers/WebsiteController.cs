using System.Linq;
using System.Threading.Tasks;
using Codemasters.Web.UI.Infrastructure.Extensions;
using Codemasters.Web.UI.Infrastructure.Http;
using Codemasters.Web.UI.Infrastructure.Options;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Newtonsoft.Json.Linq;

namespace Codemasters.Web.UI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class WebsiteController : ControllerBase
    {
        private readonly KenticoOptions _options;
        private readonly KenticoClient _kenticoClient;
        
        public WebsiteController(IOptions<KenticoOptions> optionsAccessor, KenticoClient kenticoClient)
        {
            _options = optionsAccessor.Value ?? new KenticoOptions();
            _kenticoClient = kenticoClient;
        }
        
        [HttpGet]
        [Route("{codename}/{culture?}")]
        public async Task<IActionResult> GetContent(string codename, string culture = "uk")
        {
            var content = await _kenticoClient.GetContent(codename, culture);
          
            if(content != null)
            {
                var jContent = JObject.FromObject(content).ToCamelCase();
                return Ok(JObject.FromObject(jContent));
            }
            
            return NotFound();
        }
    }
}