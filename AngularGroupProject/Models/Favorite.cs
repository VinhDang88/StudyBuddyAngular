using System;
using System.Collections.Generic;

namespace AngularGroupProject.Models
{
    public partial class Favorite
    {
        public int Id { get; set; }
        public int? StudyId { get; set; }
        public int? UserId { get; set; }
    }
}
