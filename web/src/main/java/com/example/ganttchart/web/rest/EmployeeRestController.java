package com.example.ganttchart.web.rest;

import com.example.ganttchart.model.Employee;
import com.example.ganttchart.model.dto.EmployeeDto;
import com.example.ganttchart.service.EmployeeService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/employees")
public class EmployeeRestController {



    private final EmployeeService employeeService;

    public EmployeeRestController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }


    @GetMapping("/")
    public List<Employee> findAll() {
        return this.employeeService.findAllEmployees();
    }

//    @GetMapping
//    public List<Discount> findAllWithPagination(Pageable pageable) {
//        return this.discountService.findAllWithPagination(pageable).getContent();
//    }

    @GetMapping("/{id}")
    public ResponseEntity<Employee> findById(@PathVariable Long id) {
        return this.employeeService.findById(id)
                .map(employee-> ResponseEntity.ok().body(employee))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("/add")
    public ResponseEntity<Employee> save(@RequestBody EmployeeDto employeeDto) {
        return this.employeeService.save(employeeDto)
                .map(e-> ResponseEntity.ok().body(e))
                .orElseGet(()->ResponseEntity.notFound().build());
    }

    @PutMapping("/edit/{id}")
    public ResponseEntity<Employee> edit(@PathVariable Long id, @RequestBody EmployeeDto employeeDto) {
        return this.employeeService.edit(id,employeeDto)
                .map(employee -> ResponseEntity.ok().body(employee))
                .orElseGet(() -> ResponseEntity.badRequest().build());
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity deleteById(@PathVariable Long id) {
        this.employeeService.deleteById(id);
        if(this.employeeService.findById(id).isEmpty())
            return ResponseEntity.ok().build();
        return ResponseEntity.badRequest().build();
    }

}
