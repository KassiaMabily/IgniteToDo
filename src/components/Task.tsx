import { Trash } from 'phosphor-react';
import styles from './Task.module.css';

interface TaskProps {
  task: ITask;
}

export function Task({ task }: TaskProps) {
  return (
    <div className={styles.task}>
      <div>
        <input type="radio" name="task" checked={task.isCompleted}/>
        <p className={task.isCompleted ? styles.isActive : ""}>{task.content}</p>
      </div>
      <button>
        <Trash size={16}/>
      </button>
    </div>
  )
}
