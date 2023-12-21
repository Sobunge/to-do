package com.pessom.todo.toDoItem;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ToDoItemService {
    
    @Autowired ToDoItemRepository toDoItemRepository;

    
}
