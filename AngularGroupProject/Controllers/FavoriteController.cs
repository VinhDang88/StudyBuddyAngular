using AngularGroupProject.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AngularGroupProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FavoriteController : ControllerBase
    {
        StudyDBContext context = new StudyDBContext();

        [HttpPost("addFavorite")]
        public Favorite addFavorite(int study_id)
        {
            Favorite favorite = new Favorite()
            {
                StudyId = study_id
            };
            context.Favorites.Add(favorite);
            context.SaveChanges();
            return favorite;
        }

        [HttpDelete("deleteFavorite")]
        public Favorite deleteFavorite(int id)
        {
            Favorite favorite = context.Favorites.FirstOrDefault(f => f.Id == id);
            context.Favorites.Remove(favorite);
            context.SaveChanges();
            return favorite;
        }
        [HttpGet("getFavorite")]
        public List<Favorite> getFavorite()
        {
            return context.Favorites.ToList();
        }
    }
}
