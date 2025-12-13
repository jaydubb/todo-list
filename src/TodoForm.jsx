const TodoForm = () =>{
    return (
        <form name="add_todo">
            <label for="todoTitle">Todo</label>
            <input type="text" name="todoTitle"></input>
            <button type="submit">Add Todo</button>
        </form>
    );
}

export default TodoForm