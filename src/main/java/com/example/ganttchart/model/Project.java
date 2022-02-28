package com.example.ganttchart.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.List;

@Data
@Entity
public class Project {
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    @OneToMany(mappedBy = "project")
    private List<TaskGroup> taskGroupList;

    public Project(String name, List<TaskGroup> taskGroupList) {
        this.name = name;
        this.taskGroupList = taskGroupList;
    }

    public Project(){

    }

}
