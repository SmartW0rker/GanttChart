package com.example.ganttchart.model;

import lombok.Data;

import java.util.List;

@Data
public class Project {
    private Long id;
    private String name;
    private List<TaskGroup> taskGroupList;

    public Project(String name, List<TaskGroup> taskGroupList) {
        this.name = name;
        this.taskGroupList = taskGroupList;
    }

    public Project(){

    }

}
