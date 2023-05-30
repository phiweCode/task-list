function Task(props)
{
    return(
        <div>
        <input type="checkbox" checked = {props.completed} onChange = {props.toggleTaskCompleted} />
        <label> {props.name} </label>
        <button onClick={props.deleteTask}> Delete</button>
        </div>
    );
}

export default Task;