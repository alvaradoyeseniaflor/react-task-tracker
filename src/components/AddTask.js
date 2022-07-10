import { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('');
  const [reminder, setReminder] = useState(false);
  const [startDate, setStartDate] = useState(new Date());

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert('Please add a task.');
      return;
    }
    const day = startDate.toLocaleDateString('en-us', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
    onAdd({ text, day, reminder });

    setText('');
    setReminder(false);
    setStartDate(new Date());
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Day & Time</label>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          isClearable
          showTimeSelect
          placeholderText="Add Day & Time"
          dateFormat="MMMM d, yyyy h:mm aa"
        />
      </div>
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>

      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
