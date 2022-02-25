package com.example.ganttchart.model;

import lombok.Data;

import java.time.LocalDate;
import java.util.List;

@Data
public class TaskGroup {
    private Long id;
    private String name;
    private LocalDate start; //start of the taskGroup
    private LocalDate deadLine; // time that taskGroup need to be finished by
    private List<Task> tasks; // task that are in this group

    public TaskGroup(String name, LocalDate start, LocalDate deadLine, List<Task> tasks) {
        this.name = name;
        this.start = start;
        this.deadLine = deadLine;
        this.tasks = tasks;
    }

    public TaskGroup() {
    }
}
