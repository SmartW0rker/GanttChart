package com.example.ganttchart.service.impl;

import com.example.ganttchart.exceptions.ProjectNotFound;
import com.example.ganttchart.model.Project;
import com.example.ganttchart.model.TaskGroup;
import com.example.ganttchart.model.dto.ProjectDto;
import com.example.ganttchart.repository.ProjectRepository;
import com.example.ganttchart.repository.TaskGroupRepository;
import com.example.ganttchart.service.ProjectService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProjectServiceImpl implements ProjectService {
    private final ProjectRepository projectRepository;
    private final TaskGroupRepository taskGroupRepository;

    public ProjectServiceImpl(ProjectRepository projectRepository, TaskGroupRepository taskGroupRepository) {
        this.projectRepository = projectRepository;
        this.taskGroupRepository = taskGroupRepository;
    }

    @Override
    public List<Project> findAllProjects() {
        return projectRepository.findAll();
    }

    @Override
    public Optional<Project> findById(Long id) {
        return projectRepository.findById(id);
    }

    @Override
    public Optional<Project> save(ProjectDto projectDto) {
        Project project=new Project(projectDto.getName());
        return Optional.of(projectRepository.save(project));
    }

    @Override
    public Optional<Project> edit(Long id, ProjectDto projectDto) {
        Project project=projectRepository.findById(id)
                .orElseThrow(()->new ProjectNotFound(id));
        project.setName(projectDto.getName());
        List<TaskGroup> taskGroupList=taskGroupRepository.findAllById(projectDto.getTaskGroupIds());

        taskGroupList.forEach(t->{
            t.setProject(project);
        });
        taskGroupRepository.saveAll(taskGroupList);

        return Optional.of(projectRepository.save(project));
    }

    @Override
    public Project deleteById(Long id) {
        Project project=projectRepository.findById(id)
                .orElseThrow(()->new ProjectNotFound(id));
        projectRepository.delete(project);
        return project;
    }
}
