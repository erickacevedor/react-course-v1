import './TodoList.css';

function TodoList(props) {
    return (
        <ul className="todo-container">
            {props.children}
        </ul>
    );
}
export { TodoList }