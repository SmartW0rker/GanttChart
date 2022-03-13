package com.example.ganttchart.service;

import com.example.ganttchart.model.Task;
import com.example.ganttchart.model.dto.TaskDto;

import java.util.List;
import java.util.Optional;

public interface TaskService {
    List<Task> findAllTasks();
    Optional<Task> findById(Long id);
    Optional<Task> save(TaskDto taskDto);
    Optional<Task> edit(Long id,TaskDto taskDto);
    Task deleteById(Long id);
}
