import './global.css';
import styles from './App.module.css';
import { Header } from './components/Header';
import { PlusCircle } from 'phosphor-react';

function App() {
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
      </div>
    </div>
  )
}

export default App
