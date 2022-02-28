package com.example.ganttchart.repository;

import com.example.ganttchart.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface TaskRepository extends JpaRepository<Task,Long> {
    @Override
    List<Task> findAll();

    @Override
    Optional<Task> findById(Long aLong);
}
