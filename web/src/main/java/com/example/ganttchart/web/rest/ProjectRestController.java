package com.example.ganttchart.web.rest;

import com.example.ganttchart.model.Project;
import com.example.ganttchart.model.dto.ProjectDto;
import com.example.ganttchart.service.ProjectService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/project")
public class ProjectRestController {
    private final ProjectService projectService;

    public ProjectRestController(ProjectService projectService) {
        this.projectService = projectService;
    }

    @GetMapping("/")
    public List<Project> findAll() {
        return this.projectService.findAllProjects();
    }

//    @GetMapping
//    public List<Discount> findAllWithPagination(Pageable pageable) {
//        return this.discountService.findAllWithPagination(pageable).getContent();
//    }

    @GetMapping("/{id}")
    public ResponseEntity<Project> findById(@PathVariable Long id) {
        return this.projectService.findById(id)
                .map(project-> ResponseEntity.ok().body(project))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("/add")
    public ResponseEntity<Project> save(@RequestBody ProjectDto projectDto) {
        return this.projectService.save(projectDto)
                .map(project-> ResponseEntity.ok().body(project))
                .orElseGet(()->ResponseEntity.notFound().build());
    }

    @PutMapping("/edit/{id}")
    public ResponseEntity<Project> edit(@PathVariable Long id, @RequestBody ProjectDto projectDto) {
        return this.projectService.edit(id,projectDto)
                .map(project -> ResponseEntity.ok().body(project))
                .orElseGet(() -> ResponseEntity.badRequest().build());
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity deleteById(@PathVariable Long id) {
        this.projectService.deleteById(id);
        if(this.projectService.findById(id).isEmpty())
            return ResponseEntity.ok().build();
        return ResponseEntity.badRequest().build();
    }
}
