import { createContext, useContext, useReducer, useState } from "react";
import { TodoReducer } from "./Reducer";


const TodoContext = createContext();
export function todoContext() {
    return useContext(TodoContext);
}

function Context({ children }) {

    const [state, dispatch] = useReducer(TodoReducer, []);
    
    return (
        <TodoContext.Provider value={{ state, dispatch }}>{children}</TodoContext.Provider>
    )
}

export default Context;