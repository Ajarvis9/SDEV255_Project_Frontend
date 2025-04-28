// src/components/CourseList.js
import React from 'react';
import { Link } from 'react-router-dom';

function CourseList({ courses, onDelete }) {
  if (courses.length === 0) {
    return <p>No courses available. Please add some courses.</p>;
  }

  return (
    <div>
      <h2>All Courses</h2>
      <ul>
        {courses.map(course => (
          <li key={course.id}>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <p><strong>Subject:</strong> {course.subject}</p>
            <p><strong>Credits:</strong> {course.credits}</p>
            <p><strong>Teacher:</strong> {course.teacher}</p>
            <Link to={`/view-course/${course.id}`}>View Details</Link> | 
            <Link to={`/edit-course/${course.id}`}> Edit</Link> | 
            <button onClick={() => onDelete(course.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseList;
