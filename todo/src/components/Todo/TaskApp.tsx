import { useEffect, useReducer, useState } from "react";
import { AddTask } from "./AddTask";
import { TaskList } from "./TaskList";
import { containsItems, reducer } from "./TodoReducer";
import bgLight from "../../assets/bg-desktop-light.jpg";
import bgMLight from "../../assets/bg-mobile-light.jpg";
import bgDark from "../../assets/bg-desktop-dark.jpg";
import bgMDark from "../../assets/bg-mobile-dark.jpg";
import iconMoon from "../../assets/icon-moon.svg";
import iconSun from "../../assets/icon-sun.svg";
import { useContextTheme } from "../../context";
import { saveToLocal } from "../../utils/saveToLocal";

export type TaskTypes = {
    text: string;
    done: boolean;
    id: number;
    class: string;
};

export function TaskApp() {
    const [state, dispatch] = useReducer(reducer, containsItems);
    const [filter, setFilter] = useState<string>('all');
    const {setTheme, theme} = useContextTheme();

    useEffect(() => {
        if (state.length >= 0) {
            localStorage.setItem('list', JSON.stringify(state));
        }
    }, [state])

    function handleAddTask(text: string) {
        if (text) {
            dispatch({
                type: "add",
                text: text,
                id: state.length + 1,
                class: "all"
            });
        }
    };

    const handleChangeTask = (task: TaskTypes) => dispatch({ type: "change", task: task });

    const handleClearTasks = () => dispatch({ type: "clear" })

    function handleActiveTasks() {
        dispatch({
            type: "active"
        })
        setFilter('active');
    }

    function handleCompletedTasks() {
        dispatch({
            type: "completed"
        });
        setFilter('completed');
    }

    function handleAllTasks() {
        dispatch({
            type: "all"
        });
        setFilter('all');
    }

    function handleRemoveTask(id: number) {
        dispatch({
            type: "remove",
            id: id
        });
    }

    function toggleTheme(theme: boolean) {
        saveToLocal(!theme);
        setTheme(!theme);
    }

    return (
        <>
            <header className="min-h-[300px]">
                <picture className="w-full">
                    <source className="w-full object-cover" media="(min-width: 768px)" srcSet={theme ? bgDark : bgLight} />
                    <img className="w-full object-cover" src={theme ? bgMDark : bgMLight} alt="background that contains mountains" />
                </picture>
            </header>

            <main className="lg:-translate-y-60 -translate-y-64 max-w-lg mx-auto flex flex-col z-10 px-5">
                <div className="flex justify-between items-center mb-5">
                    <h1 className="lg:text-5xl text-4xl font-semibold tracking-[15px] text-white">TODO</h1>
                    <button onClick={() => toggleTheme(theme)}>
                        <img className="block" src={theme ? iconSun : iconMoon} alt="toggle theme" />
                    </button>
                </div>

                <AddTask onAddTask={handleAddTask} />
                <TaskList filter={filter} tasks={state} onCompletedTask={handleCompletedTasks} onActiveTasks={handleActiveTasks} onChangeTask={handleChangeTask} onClearTasks={handleClearTasks} onAllTasks={handleAllTasks} onDelete={handleRemoveTask} />
            </main>
        </>
    );
};