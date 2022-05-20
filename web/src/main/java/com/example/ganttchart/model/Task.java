package com.example.ganttchart.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Data;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Data
@Entity
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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
    @JsonBackReference
    private TaskGroup taskGroup;
    @ManyToMany
    private List<Task> tasks;
    @ManyToMany
    private List<Employee> employees;

    public Task(String name, String description, ImportanceTask importanceTask, LocalDate startDate, LocalDate endDate, int percentComplete, int workingHours, TaskGroup taskGroup, List<Task> tasks, List<Employee> employees) {
        this.name = name;
        this.description = description;
        this.importanceTask = importanceTask;
        this.startDate = startDate;
        this.endDate = endDate;
        this.percentComplete = percentComplete;
        this.workingHours = workingHours;
        this.taskGroup = taskGroup;
        this.tasks = tasks;
        this.employees = employees;
    }

    public Task(String name, String description, ImportanceTask importanceTask, LocalDate startDate, LocalDate endDate, int percentComplete, int workingHours) {
        this.name = name;
        this.description = description;
        this.importanceTask = importanceTask;
        this.startDate = startDate;
        this.endDate = endDate;
        this.percentComplete = percentComplete;
        this.workingHours = workingHours;
        this.tasks=new ArrayList<>();
        this.employees=new ArrayList<>();
    }

    public Task() {
    }
}
