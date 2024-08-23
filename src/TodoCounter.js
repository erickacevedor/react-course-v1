import './TodoCounter.css';


function TodoCounter({ completed, total }) {
    return (
        <h3 className='count-title'>Completed <span>{completed}</span> of <span>{total}</span> tasks</h3>
    );
}
export { TodoCounter }