package com.pessom.todo.toDoItem;

import lombok.AllArgsConstructor;

@AllArgsConstructor
public enum Status {

    FINISHED("Finished"),
    UNFINISHED("Unfinished");

    String status;
}
