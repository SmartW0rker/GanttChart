package com.example.ganttchart.service.impl;

import com.example.ganttchart.exceptions.EmployeeNotFound;
import com.example.ganttchart.model.Employee;
import com.example.ganttchart.model.dto.EmployeeDto;
import com.example.ganttchart.repository.EmployeeRepository;
import com.example.ganttchart.service.EmployeeService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeServiceImpl implements EmployeeService {
    private final EmployeeRepository employeeRepository;

    public EmployeeServiceImpl(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    @Override
    public List<Employee> findAllEmployees() {
        return employeeRepository.findAll();
    }

    @Override
    public Optional<Employee> findById(Long id) {
        return employeeRepository.findById(id);
    }

    @Override
    public Optional<Employee> save(EmployeeDto employeeDto) {
        Employee employee=new Employee();
        employee.setName(employeeDto.getName());
        employee.setEmployeeType(employeeDto.getEmployeeType());
        employeeRepository.save(employee);
        return Optional.of(employee);
    }

    @Override
    public Optional<Employee> edit(Long id,EmployeeDto employeeDto) {
        Employee employee=employeeRepository.findById(id).orElseThrow(()->new EmployeeNotFound(id));
        employee.setName(employeeDto.getName());
        employee.setEmployeeType(employeeDto.getEmployeeType());
        employeeRepository.save(employee);
        return Optional.of(employee);
    }

    @Override
    public Employee deleteById(Long id) {
        Employee employee=employeeRepository.findById(id).orElseThrow(()->new EmployeeNotFound(id));
        employeeRepository.delete(employee);
        return employee;
    }
}
