import { Trash } from 'phosphor-react';
import styles from './Task.module.css';

interface TaskProps {
  task: ITask;
}

export function Task({ task }: TaskProps) {
  return (
    <div key={task.id} className={styles.task}>
      <input type="radio" name="task" checked={task.isCompleted}/>
      <p className={task.isCompleted ? styles.isActive : ""}>{task.content}</p>
      <button>
        <Trash size={16}/>
      </button>
    </div>
  )
}
