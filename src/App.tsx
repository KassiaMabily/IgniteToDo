import './global.css';
import styles from './App.module.css';
import { Header } from './components/Header';
import { PlusCircle } from 'phosphor-react';
import { EmptyToDo } from './components/EmptyToDo';
import { Task } from './components/Task';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { makeId } from './helpers';

function App() {
  const [ tasks, setTasks ] = useState<ITask[]>([]);
  const [ newTaskContent, setNewTaskContent ] = useState("");



  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    const newTask: ITask = {
      id: makeId(5),
      content: newTaskContent,
      isCompleted: false,
      createdAt: new Date
    }

    setTasks(state => [...state, newTask]);
    setNewTaskContent("");
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setNewTaskContent(event.target.value);
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório!!");
  }

  const isNewTaskEmpty = newTaskContent.length === 0;
  const totalTasks = tasks.length;
  const totalCompletedTasks = tasks.filter(task => task.isCompleted).length;

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <form onSubmit={handleCreateNewTask}>
          <input
            name="newTask"
            placeholder="Adicione uma nova tarefa"
            required
            onChange={handleNewTaskChange}
            value={newTaskContent}
            onInvalid={handleNewTaskInvalid}
          />
          <button type='submit' disabled={isNewTaskEmpty}>
            Criar
            <PlusCircle size={32} />
          </button>
        </form>

        <div className={styles.container}>
          <div className={styles.header}>
            <div>
              <span className={styles.newTask}>Tarefas criadas</span>
              <span>{totalTasks}</span>
            </div>

            <div>
              <span className={styles.completedTask}>Concluídas</span>
              <span> { totalTasks === 0 ? 0 : `${totalCompletedTasks} de ${totalTasks}`}</span>
            </div>
          </div>

          <div className={styles.content}>
            {
              tasks.map((task) => (
                <Task key={task.id} task={task} />
              ))
            }

          </div>
        </div>
      </div>
    </div>
  )
}

export default App
