package com.example.ganttchart.model.dto;

import com.example.ganttchart.model.TaskGroup;
import lombok.Data;

import javax.persistence.OneToMany;
import java.util.ArrayList;
import java.util.List;

@Data
public class ProjectDto {
    private String name;
    private List<TaskGroup> taskGroupList;

    public ProjectDto(String name, List<TaskGroup> taskGroupList) {
        this.name = name;
        this.taskGroupList = taskGroupList;
    }

    public ProjectDto(String name) {
        this.taskGroupList=new ArrayList<>();
        this.name = name;
    }

    public ProjectDto(){

    }
}
