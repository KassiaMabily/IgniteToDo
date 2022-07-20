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

  function deleteTask(taskIdToDelete: string) {
    const tasksWithoutDeletedOne = tasks.filter(task => {
      return task.id !== taskIdToDelete
    })

    setTasks(tasksWithoutDeletedOne);
  }

  function toggleTask(taskId: string) {

    const indexTaskToUpdate = tasks.findIndex(task => {
      return task.id === taskId;
    });



    let newTasks = [...tasks];
    const isCompleted = !newTasks[indexTaskToUpdate].isCompleted
    console.log(isCompleted)

    newTasks[indexTaskToUpdate] = {
      ...newTasks[indexTaskToUpdate],
      isCompleted: isCompleted,
      updatedAt: new Date()
    }

    setTasks(newTasks);
  }

  const isNewTaskEmpty = newTaskContent.length === 0;
  const totalTasks = tasks.length;
  const totalCompletedTasks = tasks.filter(task => task.isCompleted).length;

  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.wrapper}>
        <form onSubmit={handleCreateNewTask}>
          <input
            type="text"
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

        <div className={styles.content}>
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

          <div className={styles.tasks}>
            {
              tasks.length > 0 ? (
                tasks.map((task) => (
                  <Task
                    key={task.id}
                    task={task}
                    onDelete={deleteTask}
                    onComplete={toggleTask}
                  />
                ))
              ) : (
                <EmptyToDo />
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
