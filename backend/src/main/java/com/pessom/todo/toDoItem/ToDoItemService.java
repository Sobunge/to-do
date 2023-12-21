package com.pessom.todo.toDoItem;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ToDoItemService {

    @Autowired
    ToDoItemRepository toDoItemRepository;

    // Adding a todo item
    public ToDoItem addToDoItem(ToDoItem item) {
        return toDoItemRepository.save(item);
    }

    // Updating a todo item
    public ToDoItem updateToDoItem(ToDoItem updaToDoItem) {
        return toDoItemRepository.save(updaToDoItem);
    }

    // Deleting a todo item
    public void deleteToDoItem(Long toDoItemId) {
        toDoItemRepository.deleteById(toDoItemId);
    }

    // Getting all todo items
    public List<ToDoItem> getAllToDoItems() {
        return toDoItemRepository.findAll();
    }

    // Getting one todo item
    public ToDoItem getToDoItemById(Long toDoItemId) {
        return toDoItemRepository.findById(toDoItemId).get();
    }

    // Getting all finished todo items
    public List<ToDoItem> getAllFinishedToDoItems() {
        return toDoItemRepository.findByStatus(Status.FINISHED);
    }

    // Getting all unfinished todo items
    public List<ToDoItem> getAllUnfinishedToDoItems() {
        return toDoItemRepository.findByStatus(Status.UNFINISHED);
    }

}
