using System;
using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using Entsoftlab.University.Questioning.AdminUi.Models;
using Entsoftlab.University.Questioning.Data;
using Microsoft.AspNetCore.Mvc;

namespace Entsoftlab.University.Questioning.AdminUi.Controllers {
  [Produces("application/json")]
  [Route("api/Faculty")]
  public class FacultyController : Controller {
    private QuestioningContext _context;

    public FacultyController(QuestioningContext context) {
      _context = context;
    }
    // GET: api/Faculty
    [HttpGet]
    public IEnumerable<Faculty> Get()
    {
      return _context.Faculties.Select(x=>Mapper.Map<Faculty>(x));
    }

    // GET: api/Faculty/5
    [HttpGet("{id}", Name = "Get")]
    public Faculty Get(Guid id)
    {
      return Mapper.Map<Faculty>(_context.Faculties.FirstOrDefault());
    }

    // POST: api/Faculty
    [HttpPost]
    public void Post([FromBody]string value) {
    }

    // PUT: api/Faculty/5
    [HttpPut("{id}")]
    public void Put(int id, [FromBody]string value) {
    }

    // DELETE: api/ApiWithActions/5
    [HttpDelete("{id}")]
    public void Delete(int id) {
    }
  }
}