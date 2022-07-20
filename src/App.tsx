import './global.css';
import styles from './App.module.css';
import { Header } from './components/Header';
import { PlusCircle } from 'phosphor-react';
import { EmptyToDo } from './components/EmptyToDo';
import { Task } from './components/Task';

function App() {

  const data: ITask = {
    id: 'fsdf',
    content: 'Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor.',
    isCompleted: false,
    createdAt: new Date(),
    updatedAt: new Date()
  }

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <form>
          <input
            name="newTask"
            placeholder="Adicione uma nova tarefa"
          />
          <button type='submit'>
            Criar
            <PlusCircle size={32} />
          </button>
        </form>

        <div className={styles.container}>
          <div className={styles.header}>
            <div>
              <span className={styles.newTask}>Tarefas criadas</span>
              <span>0</span>
            </div>

            <div>
              <span className={styles.completedTask}>Concluídas</span>
              <span>0</span>
            </div>
          </div>

          <div className={styles.content}>
            <Task task={data} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
