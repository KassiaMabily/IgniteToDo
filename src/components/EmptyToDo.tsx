import styles from './EmptyToDo.module.css';
import clipboardImage from '../assets/Clipboard.png';

export function EmptyToDo() {
  return (
    <div className={styles.container}>
      <img src={clipboardImage} alt={"Icone de clipboard"} />
      <div>
        <h1>Você ainda não tem tarefas cadastradas</h1>
        <h2>Crie tarefas e organize seus itens a fazer</h2>
      </div>
    </div>
  )
}
