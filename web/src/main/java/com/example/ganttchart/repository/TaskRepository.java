package com.example.ganttchart.repository;

import com.example.ganttchart.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface TaskRepository extends JpaRepository<Task,Long> {
    @Override
    List<Task> findAll();

    @Override
    Optional<Task> findById(Long aLong);

    @Override
    List<Task> findAllById(Iterable<Long> longs);
}
