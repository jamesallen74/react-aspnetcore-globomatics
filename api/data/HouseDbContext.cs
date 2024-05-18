using Microsoft.EntityFrameworkCore;

public class HouseDbContext : DbContext
{
    public HouseDbContext(DbContextOptions<HouseDbContext> o):
        base (o) {}        
    
    public DbSet<HouseEntity> Houses => Set<HouseEntity>();

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        var folder = Environment.SpecialFolder.LocalApplicationData;
        var path = Environment.GetFolderPath(folder);
        
        var cs = $"Data Source={Path.Join(path, "houes.db")}";
        optionsBuilder.UseSqlite(cs);
    }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        SeedData.Seed(builder);
    }
}