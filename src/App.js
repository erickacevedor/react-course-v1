import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

import React from 'react';

import './App.css';
import './SectionTodo.css';

library.add(fas);

const defaultTodos = [
  { id: '1', text: 'Learn react', completed: false },
  { id: '2', text: 'Have interview', completed: false },
  { id: '3', text: 'Complete UI design', completed: false },
  { id: '4', text: 'Water the plants', completed: false },
  { id: '5', text: 'Read about components', completed: false },
];

function App() {

  // Default todo list state 
  const [tasks, setTasks] = React.useState(defaultTodos);

  // Input search state
  let [searchValue, setSearchValue] = React.useState("");
  console.log(`react state: ${searchValue}`);

  // Counting todos 
  const completedTasks = tasks.filter(key => !!key.completed).length;
  const totalTodos = tasks.length;

  // Filtered tasks 
  const filteredTasks = tasks.filter(
    (key) => {
      return key.text.toLowerCase().includes(searchValue.toLowerCase())
    }
  )

  // Completing tasks 
  const completeTask = (text) => {

    console.log("Clicked");

    /*
    const newTasks = [...tasks];
    const taskIndex = newTasks.findIndex(
      (task) => task.text === text
    );
    newTasks[taskIndex].completed = true;
    */
    //setTasks(newTasks);

  }

  return (
    <>

      <main>
        <div className="container">
          <div className="content">
            <aside>
              <h3>Create a new task</h3>
              <CreateTodoButton />

            </aside>
            <section>
              <TodoCounter completed={completedTasks} total={totalTodos} />
              <TodoSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue}
              />

              <TodoList>

                {filteredTasks.map(todo => (
                  <TodoItem
                    key={todo.text}
                    text={todo.text}
                    completed={todo.completed}
                    id={todo.id}

                    onComplete={
                      () => completeTask
                    }

                  /*
                  onComplete={
                    () => completeTodo(todo.text)
                  }
                    */


                  />
                ))}

              </TodoList>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}




export default App;
