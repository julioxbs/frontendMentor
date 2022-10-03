import { TaskTypes } from "./TaskApp";
import * as Checkbox from '@radix-ui/react-checkbox';
import IconCheck from "../../assets/icon-check.svg"
import IconCross from "../../assets/icon-cross.svg"

type TaskType = {
    task: TaskTypes;
    onChangeTask: (task: TaskTypes) => void;
    onDelete: (id: number) => void;
    filter: string;
}

export function Task({ task, onChangeTask, filter, onDelete }: TaskType) {
    console.log(task)

    return (
        <li className={`${task.class === filter ? "block" : "hidden"} flex items-center justify-between dark:bg-dark bg-white dark:text-white px-4 py-4 rounded-t border-b dark:border-slate-300/25 ${task.done ? "text-[#d2d3db] dark:text-[#9394a5]" : "text-[#484b6a]"} font-semibold tracking-[1px]`}>
            <div className="flex items-center gap-4">
                <Checkbox.Root
                    checked={task.done}
                    onCheckedChange={value => onChangeTask({ ...task, done: value as boolean })}
                    className={`${task.done ? "bg-gradient" : ""} w-5 h-5 border rounded-full flex items-center justify-center`}>
                    <Checkbox.CheckboxIndicator>
                        <img src={IconCheck} alt="" />
                    </Checkbox.CheckboxIndicator>
                </Checkbox.Root>
                <span className={task.done ? "line-through" : ""}>{task.text}</span>
            </div>
            <button onClick={() => onDelete(task.id)}><img src={IconCross} alt="remove item" /></button>
        </li>
    );
}