package com.example.ganttchart.model;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Data
@Entity
public class TaskGroup {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private LocalDate start; //start of the taskGroup
    private LocalDate deadLine; // time that taskGroup need to be finished by
    @OneToMany(mappedBy = "taskGroup")
    private List<Task> tasks; // task that are in this group
    @ManyToOne
    private Project project;

    public TaskGroup(String name, LocalDate start, LocalDate deadLine, List<Task> tasks, Project project) {
        this.name = name;
        this.start = start;
        this.deadLine = deadLine;
        this.tasks = tasks;
        this.project = project;
    }

    public TaskGroup(String name, LocalDate start, LocalDate deadLine) {
        this.name = name;
        this.start = start;
        this.deadLine = deadLine;
        this.tasks=new ArrayList<>();
    }

    public TaskGroup() {
    }
}
