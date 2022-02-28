package com.example.ganttchart.repository;

import com.example.ganttchart.model.Project;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ProjectRepository extends JpaRepository<Project,Long>{
    @Override
    List<Project> findAll();

    @Override
    Optional<Project> findById(Long id);
}
