using System;
using System.Collections.Generic;

namespace AngularGroupProject.Models
{
    public partial class Study
    {
        public int Id { get; set; }
        public string? Category { get; set; }
        public string? Question { get; set; }
        public string? Answer { get; set; }
    }
}
