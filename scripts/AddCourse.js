import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddCourse({ onCourseCreated }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [subject, setSubject] = useState('');
  const [credits, setCredits] = useState('');
  const [teacher, setTeacher] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new course object
    const newCourse = {
      id: Date.now(), // Use timestamp as a unique ID
      title,
      description,
      subject,
      credits,
      teacher,
    };

    // Get existing courses from localStorage
    const courses = JSON.parse(localStorage.getItem('courses')) || [];

    // Add the new course to the array
    courses.push(newCourse);

    // Save updated courses list to localStorage
    localStorage.setItem('courses', JSON.stringify(courses));

    // Notify parent component to update the course list
    onCourseCreated(newCourse);

    // Clear the form
    setTitle('');
    setDescription('');
    setSubject('');
    setCredits('');
    setTeacher('');

    // Navigate to the course list page after adding the course
    navigate('/');
  };

  return (
    <div>
      <h2>Add a New Course</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Course Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Subject</label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Credits</label>
          <input
            type="number"
            value={credits}
            onChange={(e) => setCredits(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Teacher</label>
          <input
            type="text"
            value={teacher}
            onChange={(e) => setTeacher(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Course</button>
      </form>
    </div>
  );
}

export default AddCourse;
