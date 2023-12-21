package com.pessom.todo.toDoItem;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ToDoItemRepository extends JpaRepository<ToDoItem, Long>{

    List<ToDoItem> findByStatus(Status finished);
    
}
