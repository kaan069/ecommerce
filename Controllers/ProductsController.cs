using API.Data;
using API.Entity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

[ApiController]
[Route("api/products")]
public class ProductsController : ControllerBase
{
    
    private readonly DataContext _context;
    public ProductsController(DataContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<IActionResult> GetProducts()
    {
        var products = await _context.Products.ToListAsync();
        return Ok(products); // başarılı bir şekilde dönen liste  
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetProduct(int? id)
    {
        var product = await _context.Products.FindAsync(id);
        if (product == null)
        {
            return NotFound(); // ürün bulunamadığında 404 döner
        }
        return Ok(product); // başarılı bir şekilde dönen ürün  

    }
}