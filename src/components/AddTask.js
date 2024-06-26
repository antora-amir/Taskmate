/**import '../App.css';
import '../index.css';

const AddTask = ({ tasklist, setTaskList, }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const date = new Date();
    const newTask = {
      id: date.getTime(),
      name: e.target.task.value,
      time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
    }
    setTaskList([...tasklist, newTask]);
    e.target.task.value = "";
  }
  return (
    <section className='addTask'>
      <form onSubmit={handleSubmit}>
        <input type="text" name="task" autoComplete="off" placeholder="add task" maxLength="25" />
        <button type="submit">Add</button>
      </form>
    </section>
  );
}

export default AddTask;**/


const AddTask = ({ handleSubmit, editid, task, setTask }) => {
  return (
    <section className='addTask'>
      <form onSubmit={handleSubmit}>
        <input type="text" name="task" value={task} autoComplete="off" placeholder="add task" maxLength="25" onChange={(e) => setTask(e.target.value)} />
        <button type="submit">{editid ? "Update" : "Add"}</button>
      </form>
    </section>
  );
}

export default AddTask;