package com.pessom.todo.toDoItem;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ToDoItemController {
    
    @Autowired ToDoItemService toDoItemService;
    
}
