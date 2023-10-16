import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const NewTaskForm = ({ todos, setTodos }) => {
  const [task, setTask] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleTempTask = (e) => {
    setTask(e.target.value);
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      const newData = {
        id: uuidv4(),
        task: task,
      };
      setTodos([...todos, newData]);
      togglePopup();
      setTask('');
    }
  };

  return (
    <div>
      <button className="add" onClick={togglePopup}>Добавить задачу</button>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
              <form onSubmit={handleSubmit}>
                  <input type="text" placeholder="Введите задачу..." value={task} onChange={handleTempTask} />
                <button className="add" type="submit">Добавить</button>
              </form>
              <button className="delete" onClick={togglePopup}>Закрыть</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewTaskForm;