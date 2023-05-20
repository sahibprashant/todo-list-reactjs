export function TodoReducer(state, action) {
    switch (action.type) {
        case 'TODO_ADD':
            return [...state, {
                id: Date.now(),
                title: action.payload,
                isDone: false,
            }];
        case 'TODO_COMPLETE':
            return [...state].filter((i) => {
                if (i.id === action.payload.item.id) {
                    i.isDone = action.payload.checked;
                }
                return true;
            })
        case 'TODO_REMOVE':
            return [...state].filter((i) => i.id !== action.payload.id);
        default:
            return state;
    }
}