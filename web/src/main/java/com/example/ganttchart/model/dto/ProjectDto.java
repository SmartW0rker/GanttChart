package com.example.ganttchart.model.dto;

import com.example.ganttchart.model.TaskGroup;
import lombok.Data;

import javax.persistence.OneToMany;
import java.util.ArrayList;
import java.util.List;

@Data
public class ProjectDto {
    private String name;
    private List<Long> taskGroupIds;

    public ProjectDto(String name, List<Long> taskGroupIds) {
        this.name = name;
        this.taskGroupIds = taskGroupIds;
    }

    public ProjectDto(String name) {
        this.taskGroupIds=new ArrayList<>();
        this.name = name;
    }

    public ProjectDto(){

    }
}
