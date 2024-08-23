import './TodoCounter.css';


function TodoCounter({ completed, total }) {
    return (
        <h3 className='count-title'>Completed {completed} of {total} tasks</h3>
    );
}
export { TodoCounter }