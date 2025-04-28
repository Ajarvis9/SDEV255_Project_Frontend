// src/components/EditCourse.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function EditCourse({ courses, onCourseUpdated }) {
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

  const handleSubmit = (e) => {
    e.preventDefault();

    // Update course details
    onCourseUpdated(course);
    navigate('/');
  };

  if (!course) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Edit Course</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Course Title</label>
          <input
            type="text"
            value={course.title}
            onChange={(e) => setCourse({ ...course, title: e.target.value })}
            required
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            value={course.description}
            onChange={(e) => setCourse({ ...course, description: e.target.value })}
            required
          />
        </div>
        <div>
          <label>Subject</label>
          <input
            type="text"
            value={course.subject}
            onChange={(e) => setCourse({ ...course, subject: e.target.value })}
            required
          />
        </div>
        <div>
          <label>Credits</label>
          <input
            type="number"
            value={course.credits}
            onChange={(e) => setCourse({ ...course, credits: e.target.value })}
            required
          />
        </div>
        <div>
          <label>Teacher</label>
          <input
            type="text"
            value={course.teacher}
            onChange={(e) => setCourse({ ...course, teacher: e.target.value })}
            required
          />
        </div>
        <button type="submit">Update Course</button>
      </form>
    </div>
  );
}

export default EditCourse;
