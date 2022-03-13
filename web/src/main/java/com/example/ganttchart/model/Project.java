package com.example.ganttchart.model;

import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Data
@Entity
public class Project {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    @OneToMany(mappedBy = "project")
    private List<TaskGroup> taskGroupList;

    public Project(String name, List<TaskGroup> taskGroupList) {
        this.name = name;
        this.taskGroupList = taskGroupList;
    }
    public Project(String name) {
        this.taskGroupList=new ArrayList<>();
        this.name = name;
    }

    public Project(){
    }

}
