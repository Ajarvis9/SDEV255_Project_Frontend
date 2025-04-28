// src/components/ViewCourse.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function ViewCourse({ courses }) {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const foundCourse = courses.find(course => course.id === parseInt(id));
    if (foundCourse) {
      setCourse(foundCourse);
    } else {
      navigate('/');  // Redirect if course is not found
    }
  }, [id, courses, navigate]);

  if (!course) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{course.title}</h2>
      <p><strong>Description:</strong> {course.description}</p>
      <p><strong>Subject:</strong> {course.subject}</p>
      <p><strong>Credits:</strong> {course.credits}</p>
      <p><strong>Teacher:</strong> {course.teacher}</p>
      <button onClick={() => navigate('/')}>Back to Courses</button>
    </div>
  );
}

export default ViewCourse;

