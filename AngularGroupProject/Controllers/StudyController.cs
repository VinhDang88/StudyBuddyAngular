using AngularGroupProject.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AngularGroupProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudyController : ControllerBase
    {
        StudyDBContext context = new StudyDBContext();

        [HttpGet("getAll")]
        public List<Study> getAll()
        {
            return context.Studies.ToList();
        }

        [HttpPost("addQuestion")]
        public Study addQuestion(string category, string question, string answer)
        {
            Study study = new Study()
            {
                Category = category,
                Question = question,
                Answer = answer
            };
            context.Studies.Add(study);
            context.SaveChanges();
            return study;
        }

        [HttpGet("getCategories")]
        public List<Study> getCategories()
        {
            return context.Studies.GroupBy(p => p.Category).Select(p => p.First()).ToList();
        }

        [HttpGet("getCategory")]
        public List<Study> getCategory(string category)
        {
            return context.Studies.Where(p => p.Category == category).ToList();
        }

    }
}
