package com.pessom.todo.toDoItem;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class ToDoItemController {

    @Autowired
    ToDoItemService toDoItemService;

    // Adding todo item
    @PostMapping("/add")
    public ToDoItem addToDoItem(@ModelAttribute("ToDoItem") ToDoItem toDoItem) {
        return toDoItemService.addToDoItem(toDoItem);
    }

    // Updating todo item
    @PutMapping("/update")
    public ToDoItem updaToDoItem(@ModelAttribute("ToDoItem") ToDoItem updatedToDoItem) {
        return toDoItemService.updateToDoItem(updatedToDoItem);
    }

    // Deleting a todo item
    @DeleteMapping("/delete/{toDoItemId}")
    public void deleteToDoItem(@PathVariable Long toDoItemId) {
        toDoItemService.deleteToDoItem(toDoItemId);
    }

    // Getting all todo items
    @GetMapping("/items")
    public List<ToDoItem> allToDoItems() {
        return toDoItemService.getAllToDoItems();
    }

    // Getting a todo item
    @GetMapping("/items/{toDoItemId}")
    public ToDoItem getToDoItem(@PathVariable Long toDoItemId) {
        return toDoItemService.getToDoItemById(toDoItemId);
    }

    // Getting all finished todo items
    @GetMapping("/items/finished")
    public List<ToDoItem> getAllFinishedDoItems() {
        return toDoItemService.getAllFinishedToDoItems();
    }

    // Getting all unfinished todo items
    @GetMapping("/items/unfinished")
    public List<ToDoItem> getAllUnfinishedItems() {
        return toDoItemService.getAllUnfinishedToDoItems();
    }

}
