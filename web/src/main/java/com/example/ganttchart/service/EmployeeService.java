package com.example.ganttchart.service;

import com.example.ganttchart.model.Employee;
import com.example.ganttchart.model.dto.EmployeeDto;

import java.util.List;
import java.util.Optional;

public interface EmployeeService {
    List<Employee> findAllEmployees();
    Optional<Employee> findById(Long id);
    Optional<Employee> save(EmployeeDto employeeDto);

    Optional<Employee> edit(Long id,EmployeeDto employeeDto);
    Employee deleteById(Long id);
}
