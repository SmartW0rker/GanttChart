package com.example.ganttchart.model.dto;

import com.example.ganttchart.model.Project;
import com.example.ganttchart.model.Task;
import lombok.Data;

import java.time.LocalDate;
import java.util.List;

@Data
public class TaskGroupDto {
    private String name;
    private LocalDate start; //start of the taskGroup
    private LocalDate deadLine; // time that taskGroup need to be finished by
    private List<Long> taskIds; // task that are in this group
    private Long projectId;

    public TaskGroupDto(String name, LocalDate start, LocalDate deadLine, List<Long> taskIds, Long projectId) {
        this.name = name;
        this.start = start;
        this.deadLine = deadLine;
        this.taskIds = taskIds;
        this.projectId = projectId;
    }

    public TaskGroupDto() {
    }
}
