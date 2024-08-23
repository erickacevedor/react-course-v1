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
  { text: 'Task 1', completed: true },
  { text: 'Task 2', completed: false },
  { text: 'Task 3', completed: false },
  { text: 'Task 4', completed: true }
];

function App() {
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
              <TodoCounter completed={5} total={10} />
              <TodoSearch />

              <TodoList>

                {defaultTodos.map(todo => (
                  <TodoItem
                    key={todo.text}
                    text={todo.text}
                    completed={todo.completed}
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
