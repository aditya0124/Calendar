import React, { useState, useEffect } from 'react';

export default function EventForm({ username, onSave, existingEvent, onCancel }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');

  useEffect(() => {
    if (existingEvent) {
      setTitle(existingEvent.title);
      setDescription(existingEvent.description);
      setStart(existingEvent.start.slice(0,16)); // input datetime-local format
      setEnd(existingEvent.end.slice(0,16));
    }
  }, [existingEvent]);

  const handleSubmit = e => {
    e.preventDefault();
    if (!title || !start || !end) return alert('Title, start and end are required');
    onSave({ username, title, description, start, end });
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: 20 }}>
      <div>
        <label>Title: </label>
        <input value={title} onChange={e => setTitle(e.target.value)} required />
      </div>
      <div>
        <label>Description: </label>
        <input value={description} onChange={e => setDescription(e.target.value)} />
      </div>
      <div>
        <label>Start: </label>
        <input type="datetime-local" value={start} onChange={e => setStart(e.target.value)} required />
      </div>
      <div>
        <label>End: </label>
        <input type="datetime-local" value={end} onChange={e => setEnd(e.target.value)} required />
      </div>
      <button type="submit">Save</button>
      {onCancel && <button type="button" onClick={onCancel}>Cancel</button>}
    </form>
  );
}
