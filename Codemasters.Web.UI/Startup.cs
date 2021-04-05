using System.Net.Http;
using System.Text.Json;
using Codemasters.Web.UI.Infrastructure.Http;
using Codemasters.Web.UI.Infrastructure.Options;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace Codemasters.Web.UI
{
    public class Startup
    {
        private const string KenticoSectionName = "Kentico";

        private readonly KenticoOptions _kenticoOptions;
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
            _kenticoOptions = Configuration.GetSection(KenticoSectionName).Get<KenticoOptions>() ?? new KenticoOptions();
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            services
                .AddControllers()
                .AddNewtonsoftJson()
                .AddJsonOptions(options => {
                    options.JsonSerializerOptions.DictionaryKeyPolicy = JsonNamingPolicy.CamelCase;
                    options.JsonSerializerOptions.PropertyNamingPolicy = JsonNamingPolicy.CamelCase;
            });

            // In production, the React files will be served from this directory
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "ClientApp/build";
            });

            services.Configure<KenticoOptions>(Configuration.GetSection(KenticoSectionName));

            if(_kenticoOptions.IgnoreSSL)
            {
                services.AddHttpClient<KenticoClient>().ConfigurePrimaryHttpMessageHandler(c => new HttpClientHandler() {
                    ServerCertificateCustomValidationCallback = (message, cert, chain, errors) => { return true; }
                });
            } else {
                services.AddHttpClient<KenticoClient>();
            }
            
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseSpaStaticFiles();

            app.UseRouting();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller}/{action=Index}/{id?}");
            });

            app.UseSpa(spa =>
            {
                spa.Options.SourcePath = "ClientApp";

                if (env.IsDevelopment())
                {
                    spa.UseReactDevelopmentServer(npmScript: "start");
                }
            });
        }
    }
}
