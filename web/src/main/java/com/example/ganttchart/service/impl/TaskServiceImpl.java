package com.example.ganttchart.service.impl;

import com.example.ganttchart.exceptions.TaskGroupNotFound;
import com.example.ganttchart.exceptions.TaskNotFound;
import com.example.ganttchart.model.Employee;
import com.example.ganttchart.model.Task;
import com.example.ganttchart.model.TaskGroup;
import com.example.ganttchart.model.dto.TaskDto;
import com.example.ganttchart.repository.EmployeeRepository;
import com.example.ganttchart.repository.ProjectRepository;
import com.example.ganttchart.repository.TaskGroupRepository;
import com.example.ganttchart.repository.TaskRepository;
import com.example.ganttchart.service.TaskService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TaskServiceImpl implements TaskService {
    private final TaskRepository taskRepository;
    private final TaskGroupRepository taskGroupRepository;
    private final ProjectRepository projectRepository;
    private final EmployeeRepository employeeRepository;

    public TaskServiceImpl(TaskRepository taskRepository, TaskGroupRepository taskGroupRepository, ProjectRepository projectRepository, EmployeeRepository employeeRepository) {
        this.taskRepository = taskRepository;
        this.taskGroupRepository = taskGroupRepository;
        this.projectRepository = projectRepository;
        this.employeeRepository = employeeRepository;
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
        //find task
        Task task=taskRepository.findById(id).orElseThrow(()->new TaskNotFound(id));

        //find Task Group
        TaskGroup taskGroup=taskGroupRepository.findById(taskDto.getTaskGroupId())
                .orElseThrow(()->new TaskGroupNotFound(taskDto.getTaskGroupId()));

        //find Tasks
        List<Task> taskList=taskRepository.findAllById(taskDto.getTaskIds());

        //find Employees
        List<Employee> employeeList=employeeRepository.findAllById(taskDto.getEmployeeIds());

        task.setName(taskDto.getName());
        task.setDescription(taskDto.getDescription());
        task.setImportanceTask(taskDto.getImportanceTask());
        task.setTasks(taskList);
        task.setWorkingHours(taskDto.getWorkingHours());
        task.setPercentComplete(taskDto.getPercentComplete());
        task.setEmployees(employeeList);
        task.setStartDate(taskDto.getStartDate());
        task.setEndDate(taskDto.getEndDate());
        task.setTaskGroup(taskGroup);

        return Optional.of(taskRepository.save(task));
    }

    @Override
    public Task deleteById(Long id) {
        Task task=taskRepository.findById(id).orElseThrow(()->new TaskNotFound(id));
        taskRepository.delete(task);
        return task;
    }
}
