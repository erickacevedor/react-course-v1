import './TodoItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function TodoItem(props) {
    return (
        <li data-id={props.id} className={`todo-item ${props.completed ? "todo-item--completed" : ""} `}>
            < button

                onClick={props.onComplete}
                className='add'

            > <FontAwesomeIcon icon="fa-solid fa-check-square" /></button >
            <p>{props.text}</p>
            <button className='remove'><FontAwesomeIcon icon="fa-solid fa-xmark" /></button>
        </li >
    );
}
export { TodoItem }