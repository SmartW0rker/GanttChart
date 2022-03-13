package com.example.ganttchart.exceptions;

public class EmployeeNotFound extends RuntimeException{
    public EmployeeNotFound(Long id) {
        super(String.format("Employee with id: %d not found",id));
    }
}
