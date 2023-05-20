import { createContext, useContext, useState } from "react";


const TodoContext = createContext();
export function todoContext() {
    return useContext(TodoContext);
}

function Context({ children }) {
    const [state, setState] = useState([]);

    return (
        <TodoContext.Provider value={{ state, setState }}>{children}</TodoContext.Provider>
    )
}

export default Context;