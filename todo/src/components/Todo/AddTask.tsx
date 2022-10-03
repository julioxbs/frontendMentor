import { FormEvent, useState } from "react";

export function AddTask({ onAddTask }: { onAddTask: (text: string) => void }) {
  const [text, setText] = useState<string>("");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onAddTask(text);
  }

  return (
    <form
      onSubmit={onSubmit}
      className="flex items-center dark:bg-dark bg-white px-4 rounded-md mb-4"
    >
      <span className="w-5 h-5 rounded-full border"></span>
      <input
        className="w-full py-4 px-4 border-none outline-none bg-transparent dark:text-white"
        value={text}
        onInput={(e) => setText((e.target as HTMLInputElement).value)}
        type="text"
        placeholder="Create a new todo..."
      />
    </form>
  );
}
