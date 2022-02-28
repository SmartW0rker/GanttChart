package com.example.ganttchart.repository;

import com.example.ganttchart.model.TaskGroup;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface TaskGroupRepository extends JpaRepository<TaskGroup,Long> {
    @Override
    List<TaskGroup> findAll();

    @Override
    Optional<TaskGroup> findById(Long aLong);
}
