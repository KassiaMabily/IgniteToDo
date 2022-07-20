import { Trash } from 'phosphor-react';
import styles from './Task.module.css';

interface TaskProps {
  task: ITask;
  onDelete: (taskId: string) => void;
  onComplete: (taskId: string) => void;
}

export function Task({ task, onDelete,onComplete }: TaskProps) {
  function handleDeleteTask() {
    onDelete(task.id);
  }

  function handleCompleteTask(task: ITask) {
    onComplete(task.id);
  }

  return (
    <div className={styles.task}>
      <form>
        <input
          type="checkbox"
          name="task"
          checked={task.isCompleted.toString() === "true"}
          onChange={() => handleCompleteTask(task)}
          value={task.isCompleted.toString()}
        />
      </form>
      <p className={task.isCompleted ? styles.isActive : ""}>{task.content}</p>
      <button onClick={handleDeleteTask}>
        <Trash size={16}/>
      </button>
    </div>
  )
}
