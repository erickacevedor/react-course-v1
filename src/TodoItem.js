import './TodoItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function TodoItem(props) {
    return (
        <li data-id={props.completed} className="todo-item">
            < button className='add' > <FontAwesomeIcon icon="fa-solid fa-check-square" /></button >
            <p>{props.text}</p>
            <button className='remove'><FontAwesomeIcon icon="fa-solid fa-xmark" /></button>
        </li >
    );
}
export { TodoItem }