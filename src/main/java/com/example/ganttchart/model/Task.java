package com.example.ganttchart.model;

import lombok.Data;

import java.time.LocalDate;
@Data
public class Task {
    private Long id;
    private String name;
    private String description;
    private ImportanceTask importanceTask;
    private LocalDate startDate; //start of the task
    private LocalDate endDate;   //date when task was finished
    private int percentComplete; //how much of the work is done in percents
    private int workingHours; //time spend for the task in hours

    public Task(String name, String description, ImportanceTask importanceTask, LocalDate startDate, LocalDate endDate, int percentComplete, int workingHours) {
        this.name = name;
        this.description = description;
        this.importanceTask = importanceTask;
        this.startDate = startDate;
        this.endDate = endDate;
        this.percentComplete = percentComplete;
        this.workingHours = workingHours;
    }

    public Task() {
    }
}
