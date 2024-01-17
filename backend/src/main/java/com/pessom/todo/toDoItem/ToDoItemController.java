package com.pessom.todo.toDoItem;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class ToDoItemController {

    @Autowired
    ToDoItemService toDoItemService;

    // Adding todo item
    @PostMapping("/items")
    public ToDoItem addToDoItem(@RequestParam String name) {
        return toDoItemService.addToDoItem(name);
    }

    // Updating todo item
    @PutMapping("/item/{toDoItemId}")
    public ToDoItem updaToDoItem(@PathVariable Long toDoItemId, 
    @RequestBody ToDoItem updatedToDoItem) {
        return toDoItemService.updateToDoItem(toDoItemId, updatedToDoItem);
    }

    // Deleting a todo item
    @DeleteMapping("/items/{toDoItemId}")
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

    @PutMapping("/items/{toDoItemId}/finished")
    public ToDoItem changeToFinished(@PathVariable Long toDoItemId){
        ToDoItem item = toDoItemService.getToDoItemById(toDoItemId);
        return toDoItemService.toggleFinishedAndUnfinished(item, Status.FINISHED);
    }

    @PutMapping("/items/{toDoItemId}/unfinished")
    public ToDoItem changeToUnfinished(@PathVariable Long toDoItemId){
        ToDoItem item = toDoItemService.getToDoItemById(toDoItemId);
        return toDoItemService.toggleFinishedAndUnfinished(item, Status.UNFINISHED);
    }

}
