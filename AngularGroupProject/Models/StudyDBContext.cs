using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace AngularGroupProject.Models
{
    public partial class StudyDBContext : DbContext
    {
        public StudyDBContext()
        {
        }

        public StudyDBContext(DbContextOptions<StudyDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Favorite> Favorites { get; set; } = null!;
        public virtual DbSet<Study> Studies { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Data Source=.\\sqlexpress;Initial Catalog=StudyDB; Integrated Security=SSPI;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Favorite>(entity =>
            {
                entity.ToTable("Favorite");

                entity.Property(e => e.StudyId).HasColumnName("Study_Id");

                entity.HasOne(d => d.Study)
                    .WithMany(p => p.Favorites)
                    .HasForeignKey(d => d.StudyId)
                    .HasConstraintName("FK__Favorite__Study___267ABA7A");
            });

            modelBuilder.Entity<Study>(entity =>
            {
                entity.ToTable("Study");

                entity.Property(e => e.Answer).HasMaxLength(255);

                entity.Property(e => e.Category).HasMaxLength(255);

                entity.Property(e => e.Question).HasMaxLength(255);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
