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
        item.setStatus(Status.UNFINISHED);
        return toDoItemRepository.save(item);
    }

    // Updating a todo item
    public ToDoItem updateToDoItem(Long toDoItemId, ToDoItem updatedToDoItem) {
        if (toDoItemId != null && updatedToDoItem != null) {
            try {
                ToDoItem item = toDoItemRepository.findById(toDoItemId).get();
                updatedToDoItem.setId(item.getId());
                updatedToDoItem.setStatus(item.getStatus());
            } catch (Exception e) {
                System.out.println("ToDo Item not found");
            }

            return toDoItemRepository.save(updatedToDoItem);
        } else {
            return new ToDoItem();
        }

    }

    // Deleting a todo item
    public void deleteToDoItem(Long toDoItemId) {
        if (toDoItemId != null) {
            toDoItemRepository.deleteById(toDoItemId);
        }
    }

    // Getting all todo items
    public List<ToDoItem> getAllToDoItems() {
        return toDoItemRepository.findAll();
    }

    // Getting one todo item
    public ToDoItem getToDoItemById(Long toDoItemId) {
        if (toDoItemId != null) {
            return toDoItemRepository.findById(toDoItemId).get();
        } else {
            return new ToDoItem();
        }
    }

    // Getting all finished todo items
    public List<ToDoItem> getAllFinishedToDoItems() {
        return toDoItemRepository.findByStatus(Status.FINISHED);
    }

    // Getting all unfinished todo items
    public List<ToDoItem> getAllUnfinishedToDoItems() {
        return toDoItemRepository.findByStatus(Status.UNFINISHED);
    }

    // Toggle between finished and unfinished
    public ToDoItem toggleFinishedAndUnfinished(ToDoItem item, Status status) {
        item.setStatus(status);
        return toDoItemRepository.save(item);
    }
}
