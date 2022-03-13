package com.example.ganttchart.web.rest;

import com.example.ganttchart.model.TaskGroup;
import com.example.ganttchart.model.dto.TaskGroupDto;
import com.example.ganttchart.service.TaskGroupService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/task_group")
public class TaskGroupRestController {
    private final TaskGroupService taskGroupService;

    public TaskGroupRestController(TaskGroupService taskGroupService) {
        this.taskGroupService = taskGroupService;
    }

    @GetMapping("/")
    public List<TaskGroup> findAll() {
        return this.taskGroupService.findAllTaskGroups();
    }

//    @GetMapping
//    public List<Discount> findAllWithPagination(Pageable pageable) {
//        return this.discountService.findAllWithPagination(pageable).getContent();
//    }

    @GetMapping("/{id}")
    public ResponseEntity<TaskGroup> findById(@PathVariable Long id) {
        return this.taskGroupService.findById(id)
                .map(taskGroup-> ResponseEntity.ok().body(taskGroup))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("/add")
    public ResponseEntity<TaskGroup> save(@RequestBody TaskGroupDto taskGroupDto) {
        return this.taskGroupService.save(taskGroupDto)
                .map(taskGroup-> ResponseEntity.ok().body(taskGroup))
                .orElseGet(()->ResponseEntity.notFound().build());
    }

    @PutMapping("/edit/{id}")
    public ResponseEntity<TaskGroup> edit(@PathVariable Long id, @RequestBody TaskGroupDto taskGroupDto) {
        return this.taskGroupService.edit(id,taskGroupDto)
                .map(taskGroup -> ResponseEntity.ok().body(taskGroup))
                .orElseGet(() -> ResponseEntity.badRequest().build());
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity deleteById(@PathVariable Long id) {
        this.taskGroupService.deleteById(id);
        if(this.taskGroupService.findById(id).isEmpty())
            return ResponseEntity.ok().build();
        return ResponseEntity.badRequest().build();
    }
}
