package com.example.ganttchart.exceptions;

public class TaskGroupNotFound extends RuntimeException{
    public TaskGroupNotFound(long id) {
        super(String.format("Task group with id: %d not found",id));
    }
}
