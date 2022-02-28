package com.example.ganttchart.repository;

import com.example.ganttchart.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface EmployeeRepository extends JpaRepository<Employee,Long> {
    @Override
    List<Employee> findAll();

    @Override
    Optional<Employee> findById(Long id);
}
