import { useRef } from "react";
import { Task } from "./Task";
import { TaskTypes } from "./TaskApp";

type TaskListTypes = {
  tasks: TaskTypes[];
  onChangeTask: (task: TaskTypes) => void;
  onClearTasks: () => void;
  onActiveTasks: () => void;
  onCompletedTask: () => void;
  onAllTasks: () => void;
  onDelete: (id: number) => void;
  filter: string;
};

export function TaskList({
  tasks,
  onChangeTask,
  onClearTasks,
  onActiveTasks,
  onCompletedTask,
  onAllTasks,
  filter,
  onDelete,
}: TaskListTypes) {
  const allBtn = useRef<HTMLButtonElement>(null);
  const activeBtn = useRef<HTMLButtonElement>(null);
  const completedBtn = useRef<HTMLButtonElement>(null);

  return (
    <div className="shadow-lg">
      <ul>
        {tasks.map((task) => (
          <Task
            onDelete={onDelete}
            filter={filter}
            key={task.id}
            onChangeTask={onChangeTask}
            task={task}
          />
        ))}
      </ul>

      <div className="flex flex-col items-start gap-4 md:flex-row py-3 px-4 md:justify-between dark:bg-dark bg-white rounded-b text-sm">
        <p className="font-semibold text-[#9394a5]">
          {tasks.filter((t) => t.done != true).length} items left
        </p>

        <div className="flex gap-4 font-bold">
          <button
            id="all"
            ref={allBtn}
            className={`${
              allBtn.current?.id === filter
                ? "text-[#86A2F7]"
                : "text-[#9394a5]"
            }`}
            onClick={onAllTasks}
          >
            All
          </button>

          <button
            id="active"
            ref={activeBtn}
            className={`${
              activeBtn.current?.id === filter
                ? "text-[#86A2F7]"
                : "text-[#9394a5]"
            }`}
            onClick={onActiveTasks}
          >
            Active
          </button>

          <button
            id="completed"
            ref={completedBtn}
            className={`${
              completedBtn.current?.id === filter
                ? "text-[#86A2F7]"
                : "text-[#9394a5]"
            }`}
            onClick={onCompletedTask}
          >
            Completed
          </button>
        </div>

        <button
          className="font-semibold 
                text-[#9394a5] 
                hover:text-[#484b6a]"
          onClick={onClearTasks}
        >
          Clear completed
        </button>
      </div>
    </div>
  );
}
