package com.example.ganttchart.model;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDate;
@Data
@Entity
public class Task {
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String description;
    @Enumerated(value = EnumType.STRING)
    private ImportanceTask importanceTask;
    private LocalDate startDate; //start of the task
    private LocalDate endDate;   //date when task was finished
    private int percentComplete; //how much of the work is done in percents
    private int workingHours; //time spend for the task in hours
    @ManyToOne
    private TaskGroup taskGroup;

    public Task(String name, String description, ImportanceTask importanceTask, LocalDate startDate, LocalDate endDate, int percentComplete, int workingHours, TaskGroup taskGroup) {
        this.name = name;
        this.description = description;
        this.importanceTask = importanceTask;
        this.startDate = startDate;
        this.endDate = endDate;
        this.percentComplete = percentComplete;
        this.workingHours = workingHours;
        this.taskGroup = taskGroup;
    }

    public Task() {
    }
}
