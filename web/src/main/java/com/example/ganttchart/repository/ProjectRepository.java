package com.example.ganttchart.repository;

import com.example.ganttchart.model.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ProjectRepository extends JpaRepository<Project,Long>{
    @Override
    List<Project> findAll();

    @Override
    Optional<Project> findById(Long id);
}
