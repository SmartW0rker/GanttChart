package com.example.ganttchart.service.impl;

import com.example.ganttchart.exceptions.TaskNotFound;
import com.example.ganttchart.model.Task;
import com.example.ganttchart.model.dto.TaskDto;
import com.example.ganttchart.repository.TaskRepository;
import com.example.ganttchart.service.TaskService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TaskServiceImpl implements TaskService {
    private final TaskRepository taskRepository;

    public TaskServiceImpl(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    @Override
    public List<Task> findAllTasks() {
        return taskRepository.findAll();
    }

    @Override
    public Optional<Task> findById(Long id) {
        return Optional.of(taskRepository.findById(id).orElseThrow(()->new TaskNotFound(id)));
    }

    @Override
    public Optional<Task> save(TaskDto taskDto) {
        Task task=new Task(taskDto.getName(),taskDto.getDescription(),taskDto.getImportanceTask(),
                taskDto.getStartDate(),taskDto.getEndDate(),
                taskDto.getPercentComplete(),taskDto.getWorkingHours());
        return Optional.of(taskRepository.save(task));
    }

    @Override
    public Optional<Task> edit(Long id, TaskDto taskDto) {
        Task task=taskRepository.findById(id).orElseThrow(()->new TaskNotFound(id));
        task.setName(taskDto.getName());
        task.setDescription(taskDto.getDescription());
        task.setImportanceTask(taskDto.getImportanceTask());
        task.setTasks(taskDto.getTasks());
        task.setWorkingHours(taskDto.getWorkingHours());
        task.setPercentComplete(taskDto.getPercentComplete());
        task.setEmployees(taskDto.getEmployees());
        task.setStartDate(taskDto.getStartDate());
        task.setEndDate(taskDto.getEndDate());
        task.setTaskGroup(taskDto.getTaskGroup());

        return Optional.of(taskRepository.save(task));
    }

    @Override
    public Task deleteById(Long id) {
        Task task=taskRepository.findById(id).orElseThrow(()->new TaskNotFound(id));
        taskRepository.delete(task);
        return task;
    }
}
