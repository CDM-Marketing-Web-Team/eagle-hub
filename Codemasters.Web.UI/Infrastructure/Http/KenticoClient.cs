using System.Net.Http;
using System.Threading.Tasks;
using Codemasters.Web.UI.Infrastructure.Options;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;

namespace Codemasters.Web.UI.Infrastructure.Http
{
    public class KenticoClient
    {
        private readonly HttpClient _httpClient;
        private readonly KenticoOptions _options;

        public KenticoClient(HttpClient httpClient, IOptions<KenticoOptions> optionsAccessor)
        {
            _httpClient = httpClient;
            _options = optionsAccessor.Value ?? new KenticoOptions();
        }

        public async Task<object> GetContent(string codename, string culture)
        {
            var uri = $"{_options.Endpoint}{codename}/{culture}";

            var responseString = await _httpClient.GetStringAsync(uri);

            var content = JsonConvert.DeserializeObject<object>(responseString);
            
            return content;
        }
    }
}