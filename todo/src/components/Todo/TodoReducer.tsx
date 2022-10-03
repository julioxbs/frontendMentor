import { TaskTypes } from "./TaskApp";

export const containsItems = JSON.parse(localStorage.getItem("list") ?? "[]");

export function reducer(state: TaskTypes[], action: any): any {
  switch (action.type) {
    case "add": {
      return [
        ...state,
        { text: action.text, id: action.id, done: false, class: action.class },
      ];
    }
    case "change": {
      return state.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case "clear": {
      return state.filter((t) => t.done != true);
    }
    case "active": {
      return state.map((t) => {
        if (!t.done) {
          return { ...t, class: "active" };
        } else {
          return t;
        }
      });
    }
    case "completed": {
      return state.map((t) => {
        if (t.done) {
          return { ...t, class: "completed" };
        } else {
          return t;
        }
      });
    }
    case "all": {
      return state.map((t) => {
        return { ...t, class: "all" };
      });
    }
    case "remove": {
      return state.filter((t) => t.id != action.id);
    }
  }
}
