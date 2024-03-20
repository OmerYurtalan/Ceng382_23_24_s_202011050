using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace MyApp.Namespace
{
    public class Lab5_PagesModel : PageModel
    {
        private readonly ILogger<Lab5_PagesModel> _logger;

         public Lab5_PagesModel(ILogger<Lab5_PagesModel> logger)
    {
        _logger = logger;
    }

    public void OnGet()
    {

    }
    }
}
