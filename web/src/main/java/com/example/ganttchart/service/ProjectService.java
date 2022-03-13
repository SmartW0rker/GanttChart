package com.example.ganttchart.service;

import com.example.ganttchart.model.Project;
import com.example.ganttchart.model.dto.ProjectDto;

import java.util.List;
import java.util.Optional;

public interface ProjectService {
    List<Project> findAllProjects();
    Optional<Project> findById(Long id);
    Optional<Project> save(ProjectDto projectDto);
    Optional<Project> edit(Long id,ProjectDto projectDto);
    Project deleteById(Long id);
}
