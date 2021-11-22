import React from "react";
import { Wrapper, CheckBox } from "./Todo.styles";

const Todo = ({ data, index }) => {
    const markTodo = index => {
        var items = JSON.parse(localStorage.getItem("todos"));

        var item = items.find(item => item.id === index);
    
        if(item){
            item.isDone = true;
        }

        localStorage.setItem('todos', JSON.stringify(items));
    };

    return(
        <Wrapper>
            {data.isDone ? <CheckBox type="checkbox" checked/> : <CheckBox type="checkbox" onClick={() => {markTodo(index); window.location.reload();}} />}
            <span style={{ textDecoration: data.isDone ? "line-through" : "" }}>{data.text}</span>
        </Wrapper>
    );    
}

export default Todo;