import React, { useEffect, useState } from "react";
import Todo from "../Todo";
import { Wrapper } from "./ActiveToDo.styles";
import AddBar from "../AddBar";

const ActiveTodo = () => {
    const [items, setItems] = useState([]);

    const addItem = (item) => {
        if(items.length === 0){
            setItems([
                ...items, 
                {
                  id: 0,
                  text: item.trim(),
                  isDone: false
                }
              ]);
        } else{setItems([
            ...items, 
            {
              id: items[items.length - 1].id + 1,
              text: item.trim(),
              isDone: false
            }
          ]);}
    };

    
    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('todos'));
        if (items) {
          setItems(items);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(items));
    }, [items]);

    return(
        <Wrapper>
            <AddBar addItem={addItem} />
            {items.filter((item) => item.isDone === false).map((data) => (
                <Todo 
                    key={data}
                    index={data.id}
                    data={data}
                />
            ))}
        </Wrapper>
    );
}

export default ActiveTodo;