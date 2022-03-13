package com.example.ganttchart.service;

import com.example.ganttchart.model.TaskGroup;
import com.example.ganttchart.model.dto.TaskGroupDto;

import java.util.List;
import java.util.Optional;

public interface TaskGroupService {
    List<TaskGroup> findAllTaskGroups();
    Optional<TaskGroup> findById(Long id);
    Optional<TaskGroup> save(TaskGroupDto taskGroupDto);
    Optional<TaskGroup> edit(Long id,TaskGroupDto taskGroupDto);
    TaskGroup deleteById(Long id);
}
