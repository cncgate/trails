using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using trails.Models;

namespace trails.Controllers
{
    //[Produces("application/json")]
    [Route("api/[controller]")]
    public class RunnerController : Controller
    {
        // GET: api/Runner
        [HttpGet]
        public Runner[] Get()
        {
            var runners = new List<Runner>();
            runners.Add(new Runner() { Id = 1, First = "Dmitry", Last = "Smirnov", Age = 34, FavoriteItem = "Motorsport" });
            runners.Add(new Runner() { Id = 2, First = "Alex", Last = "Popov", Age = 38, FavoriteItem = "Gym" });
            runners.Add(new Runner() { Id = 3, First = "Arthur", Last = "Smulko", Age = 24, FavoriteItem = "Ice Hockey" });

            return runners.ToArray();
        }

        // GET: api/Runner/5
        [HttpGet("{id}", Name = "Get")]
        public Runner Get(int id)
        {
            return Get()
                    .Where(r => r.Id == id)
                    .FirstOrDefault();
        }

        // POST: api/Runner
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Runner/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
