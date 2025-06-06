

import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import axios from 'axios';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const CalendarApp = () => {
  const [username, setUsername] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [events, setEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);
  const [eventTitle, setEventTitle] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [eventStart, setEventStart] = useState('');
  const [eventEnd, setEventEnd] = useState('');

  const handleLogin = async () => {
    if (!username.trim()) return alert('Please enter a username');
    try {
      const res = await axios.post('http://localhost:4000/user/login', { username });
      // const res = await axios.post('https://calendar-backend-8r51g73sq-adityas-projects-34d60099.vercel.app/user/login', { username });

      const fetchedEvents = res.data.events.map(ev => ({
        ...ev,
        start: new Date(ev.start),
        end: new Date(ev.end),
      }));

      setEvents(fetchedEvents);
      setLoggedIn(true);
    } catch (err) {
      alert('Login failed');
    }
  };

  const openAddModal = ({ start, end }) => {
    if (moment(start).isBefore(moment(), 'minute')) {
      alert('Cannot create an event in the past!');
      return;
    }

    setEditingEvent(null);
    setEventTitle('');
    setEventDescription('');
    setEventStart(moment(start).format('YYYY-MM-DDTHH:mm'));
    setEventEnd(moment(end).format('YYYY-MM-DDTHH:mm'));
    setShowModal(true);
  };

  const openEditModal = (event) => {
    setEditingEvent(event);
    setEventTitle(event.title);
    setEventDescription(event.description);
    setEventStart(moment(event.start).format('YYYY-MM-DDTHH:mm'));
    setEventEnd(moment(event.end).format('YYYY-MM-DDTHH:mm'));
    setShowModal(true);
  };

  const handleSaveEvent = async () => {
    if (!eventTitle || !eventStart || !eventEnd) return alert('All fields required');

    const eventData = {
      username,
      title: eventTitle,
      description: eventDescription,
      start: moment(eventStart).toDate(),
      end: moment(eventEnd).toDate(),
    };

    try {
      if (editingEvent) {
        const res = await axios.put(`http://localhost:4000/events/update/${editingEvent._id}`, eventData);
        // const res = await axios.put(`https://calendar-backend-fttwiw0p1-adityas-proj/ects-34d60099.vercel.app//events/update/${editingEvent._id}`, eventData); 
        setEvents(events.map(ev => ev._id === editingEvent._id ? res.data.event : ev));
      } else {
        const res = await axios.post('http://localhost:4000/events/create', eventData);
        // const res = await axios.post('https://calendar-backend-fttwiw0p1-adityas-projects-34d60099.vercel.app//events/create', eventData);
        setEvents([...events, res.data.event]);
      }
      closeModal();
    } catch {
      alert('Error saving event');
    }
  };

  const handleDeleteEvent = async () => {
    if (!editingEvent) return;
    if (!window.confirm('Delete this event?')) return;

    try {
      await axios.delete(`http://localhost:4000/events/delete/${editingEvent._id}`);
      // await axios.delete(`https://calendar-backend-fttwiw0p1-adityas-projects-34d60099.vercel.app//events/delete/${editingEvent._id}`);
      setEvents(events.filter(ev => ev._id !== editingEvent._id));
      closeModal();
    } catch {
      alert('Error deleting event');
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setEditingEvent(null);
    setEventTitle('');
    setEventDescription('');
    setEventStart('');
    setEventEnd('');
  };

  if (!loggedIn) {
    return (
      <div style={{ padding: 20 }}>
        <h2>Login</h2>
        <input
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder="Enter username"
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    );
  }

  return (
    <div style={{ padding: 20 }}>
      <h3>Welcome, {username}</h3>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        selectable
        style={{ height: 600 }}
        onSelectSlot={openAddModal}
        onSelectEvent={openEditModal}
      />

      {showModal && (
        <div style={{
          position: 'fixed',
          top: '20%',
          left: '35%',
          background: 'white',
          border: '1px solid gray',
          padding: 20,
          zIndex: 1000,
          width: '30%'
        }}>
          <h4>{editingEvent ? 'Edit' : 'Add'} Event</h4>
          <input
            type="text"
            value={eventTitle}
            onChange={(e) => setEventTitle(e.target.value)}
            placeholder="Event Title"
          /><br />
          <textarea
            value={eventDescription}
            onChange={(e) => setEventDescription(e.target.value)}
            placeholder="Description"
          /><br />
          <input
            type="datetime-local"
            value={eventStart}
            onChange={(e) => setEventStart(e.target.value)}
          /><br />
          <input
            type="datetime-local"
            value={eventEnd}
            onChange={(e) => setEventEnd(e.target.value)}
          /><br />
          <button onClick={handleSaveEvent}>
            {editingEvent ? 'Update' : 'Save'}
          </button>
          <button onClick={closeModal} style={{ marginLeft: 10 }}>
            Cancel
          </button>
          {editingEvent && (
            <button
              onClick={handleDeleteEvent}
              style={{
                marginLeft: 10,
                backgroundColor: 'red',
                color: 'white',
                border: 'none',
                padding: '6px 12px',
                cursor: 'pointer'
              }}
            >
              Delete
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default CalendarApp;
