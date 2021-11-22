import React from "react";
import { useState } from "react";
import { Wrapper } from "./AddBar.styles";

const AddBar = ({ addItem }) => {
    const [todo, setTodo] = useState("");
    
    function handleInputChange(e) {
        setTodo(e.target.value);
    }
    
    function handleFormSubmit(e) {
        e.preventDefault();
        addItem(todo);
        setTodo("");
      }
    
    return(
        <Wrapper>
            <form onSubmit={handleFormSubmit}>
                <input
                    name="todo"
                    type="text"
                    placeholder="add details"
                    value={todo}
                    onChange={handleInputChange}
                /><button>Add</button>
            </form>
        </Wrapper>
        
    )
}

export default AddBar;

