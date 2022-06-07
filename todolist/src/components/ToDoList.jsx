import CompletedToDo from "./CompletedToDo";
import InProgressToDo from "./InProgressToDo";
import NewToDo from "./NewToDo";

export default function ToDoList() {
  return(
    <>
      <NewToDo />
      <InProgressToDo />
      <CompletedToDo />
    </>
  )
}