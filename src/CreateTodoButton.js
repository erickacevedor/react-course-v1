import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function CreateTodoButton() {
    return (
        <button value="+">Add new task <FontAwesomeIcon icon="fa-solid fa-plus" /></button>
    );
}
export { CreateTodoButton }