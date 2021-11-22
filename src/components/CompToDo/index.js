import React, { useEffect, useState } from "react";
import Todo from "../Todo";
import { Wrapper, Delete, DeleteAll } from "./CompToDo.styles";

const CompToDo = () => {
    const [items, setItems] = useState([]);

    const removeItem = (itemToBeDeleted) => {
        setItems(items.filter((item) => itemToBeDeleted !== item));
    };

    const removeAll = () => {
        setItems([])
    }

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
            {items.filter((item) => item.isDone === true).map((data) => (
                <>
                <Todo 
                    key={data.id}
                    index={data.id}
                    data={data}
                ></Todo><Delete onClick={() => removeItem(data)}><div class="icons8-trash"></div></Delete></>
            ))}
            <DeleteAll onClick={() => removeAll()}><div class="icons8-trash"></div><span>delete all</span></DeleteAll>
        </Wrapper>
    );
}

export default CompToDo;