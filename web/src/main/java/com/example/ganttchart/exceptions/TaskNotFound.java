package com.example.ganttchart.exceptions;

public class TaskNotFound extends RuntimeException {
    public TaskNotFound(Long id) {
        super(String.format("Task with id: %d not found",id));
    }
}
