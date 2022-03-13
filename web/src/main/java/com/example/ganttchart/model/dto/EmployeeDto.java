package com.example.ganttchart.model.dto;

import com.example.ganttchart.model.EmployeeType;
import lombok.Data;

@Data
public class EmployeeDto {
    private String name;
    private EmployeeType employeeType;

    public EmployeeDto(String name, EmployeeType employeeType) {
        this.name = name;
        this.employeeType = employeeType;
    }

    public EmployeeDto() {
    }
}
