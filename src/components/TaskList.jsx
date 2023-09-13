import './TaskList.css';
import Task from './Task';
import PropTypes from 'prop-types';

const TaskList = ({ tasks, checkHandler, deleteHandler }) => {
  return (
 <ul>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          checkHandler={checkHandler}
          deleteHandler={deleteHandler}
        />
      ))}
    </ul>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,         // Array of tasks
  checkHandler: PropTypes.func.isRequired,   
  deleteHandler: PropTypes.func.isRequired  
};
export default TaskList;

