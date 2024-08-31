const todokey = "reactTodo";

export const getLocalStorageTodoData = () => {
    const rawTodos = localStorage.getItem(todokey);
    if(!rawTodos) return [];
    return JSON.parse(rawTodos);
}

export const setLocalStorageTodoData = (task) => {
    return localStorage.setItem(todokey, JSON.stringify(task))
}