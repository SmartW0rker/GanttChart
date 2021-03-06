package com.example.ganttchart.model.dto;

import com.example.ganttchart.model.Employee;
import com.example.ganttchart.model.ImportanceTask;
import com.example.ganttchart.model.Task;
import com.example.ganttchart.model.TaskGroup;
import lombok.Data;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import java.time.LocalDate;
import java.util.List;

@Data
public class TaskDto {
    private Long id;
    private String name;
    private String description;
    @Enumerated(value = EnumType.STRING)
    private ImportanceTask importanceTask;
    private LocalDate startDate; //start of the task
    private LocalDate endDate;   //date when task was finished
    private int percentComplete; //how much of the work is done in percents
    private int workingHours; //time spend for the task in hours
    private Long taskGroupId;
    private List<Long> taskIds;
    private List<Long> employeeIds;

    public TaskDto(String name, String description, ImportanceTask importanceTask, LocalDate startDate, LocalDate endDate, int percentComplete, int workingHours, Long taskGroupId, List<Long> taskIds, List<Long> employeeIds) {
        this.name = name;
        this.description = description;
        this.importanceTask = importanceTask;
        this.startDate = startDate;
        this.endDate = endDate;
        this.percentComplete = percentComplete;
        this.workingHours = workingHours;
        this.taskGroupId = taskGroupId;
        this.taskIds = taskIds;
        this.employeeIds = employeeIds;
    }

    public TaskDto() {
    }
}
