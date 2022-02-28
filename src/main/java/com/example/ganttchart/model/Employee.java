package com.example.ganttchart.model;

import javax.persistence.*;

@Entity
public class Employee {
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    @Enumerated(value = EnumType.STRING)
    private EmployeeType employeeType;

    public Employee(String name, EmployeeType employeeType) {
        this.name = name;
        this.employeeType = employeeType;
    }

    public Employee() {
    }
}
