package com.example.ganttchart.service.impl;

import com.example.ganttchart.exceptions.ProjectNotFound;
import com.example.ganttchart.exceptions.TaskGroupNotFound;
import com.example.ganttchart.model.Project;
import com.example.ganttchart.model.Task;
import com.example.ganttchart.model.TaskGroup;
import com.example.ganttchart.model.dto.TaskGroupDto;
import com.example.ganttchart.repository.ProjectRepository;
import com.example.ganttchart.repository.TaskGroupRepository;
import com.example.ganttchart.repository.TaskRepository;
import com.example.ganttchart.service.TaskGroupService;
import org.springframework.stereotype.Service;

import java.util.LinkedList;
import java.util.List;
import java.util.Optional;

@Service
public class TaskGroupServiceImpl implements TaskGroupService {

    private final TaskGroupRepository taskGroupRepository;
    private final ProjectRepository projectRepository;
    private final TaskRepository taskRepository;

    public TaskGroupServiceImpl(TaskGroupRepository taskGroupRepository, ProjectRepository projectRepository, TaskRepository taskRepository) {
        this.taskGroupRepository = taskGroupRepository;
        this.projectRepository = projectRepository;
        this.taskRepository = taskRepository;
    }

    @Override
    public List<TaskGroup> findAllTaskGroups() {
        return taskGroupRepository.findAll();
    }

    @Override
    public Optional<TaskGroup> findById(Long id) {
        return taskGroupRepository.findById(id);
    }

    @Override
    public Optional<TaskGroup> save(TaskGroupDto taskGroupDto) {
        TaskGroup taskGroup=new TaskGroup(taskGroupDto.getName()
                ,taskGroupDto.getStart(),taskGroupDto.getDeadLine());
        return Optional.of(taskGroupRepository.save(taskGroup));
    }

    @Override
    public Optional<TaskGroup> edit(Long id, TaskGroupDto taskGroupDto) {
        TaskGroup taskGroup=taskGroupRepository.findById(id)
                .orElseThrow(()->new TaskGroupNotFound(id));
        //find tasks
        List<Task> tasks= new LinkedList<>();
        if (taskGroupDto.getTaskIds()!=null) {
            tasks = taskRepository.findAllById(taskGroupDto.getTaskIds());
        }
        taskGroup.setName(taskGroupDto.getName());
        taskGroup.setStart(taskGroupDto.getStart());
        taskGroup.setDeadLine(taskGroupDto.getDeadLine());
        TaskGroup taskGroupNew=taskGroupRepository.save(taskGroup);
        tasks.forEach(task -> {
            task.setTaskGroup(taskGroupNew);
            taskRepository.save(task);
        });
        return Optional.of(taskGroupNew);
    }

    @Override
    public TaskGroup deleteById(Long id) {
        TaskGroup taskGroup=taskGroupRepository.findById(id)
                .orElseThrow(()->new TaskGroupNotFound(id));
        taskGroupRepository.delete(taskGroup);
        return taskGroup;
    }
}
