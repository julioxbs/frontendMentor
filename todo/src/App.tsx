import { TaskApp } from "./components/Todo/TaskApp";
import { ThemeContext } from "./context";

export function App() {
  return (
    <ThemeContext>
      <TaskApp />
    </ThemeContext>
  )
}