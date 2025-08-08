namespace API.Data;

using API.Entity;
using Microsoft.EntityFrameworkCore;

public class DataContext(DbContextOptions options) : DbContext(options)
{
    public DbSet<Product> Products => Set<Product>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        modelBuilder.Entity<Product>().HasData(
            new Product { Id = 1, Name = "IPHONE 1", Price = 10.99m, Description = "Description for Product 1", IsActive = true, ImageUrl = "1.jpg", Stock = 100 },
            new Product { Id = 2, Name = "IPHONE 2", Price = 20.99m, Description = "Description for Product 2", IsActive = true, ImageUrl = "2.jpg", Stock = 50 },
            new Product { Id = 3, Name = "IPHONE 3", Price = 30.99m, Description = "Description for Product 3", IsActive = false, ImageUrl = "3.jpg", Stock = 0 },
            new Product { Id = 4, Name = "IPHONE 4", Price = 40.99m, Description = "Description for Product 4", IsActive = true, ImageUrl = "4.jpg", Stock = 200 }
        );
    }


}

