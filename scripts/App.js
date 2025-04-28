import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import AddCourse from './components/AddCourse';
import CourseList from './components/CourseList';
import ViewCourse from './components/ViewCourse';
import EditCourse from './components/EditCourse';  // New component for editing a course
import './App.css';

function App() {
  const [courses, setCourses] = useState([]);

  // Fetch courses from localStorage on component mount
  useEffect(() => {
    const storedCourses = JSON.parse(localStorage.getItem('courses')) || [];
    setCourses(storedCourses);
  }, []);

  // Add new course to localStorage and update the state
  const handleCourseCreated = (newCourse) => {
    const updatedCourses = [...courses, newCourse];
    setCourses(updatedCourses);
    localStorage.setItem('courses', JSON.stringify(updatedCourses));
  };

  // Update course in localStorage and update the state
  const handleCourseUpdated = (updatedCourse) => {
    const updatedCourses = courses.map(course =>
      course.id === updatedCourse.id ? updatedCourse : course
    );
    setCourses(updatedCourses);
    localStorage.setItem('courses', JSON.stringify(updatedCourses));
  };

  // Delete course from localStorage and update the state
  const handleCourseDeleted = (id) => {
    const updatedCourses = courses.filter(course => course.id !== id);
    setCourses(updatedCourses);
    localStorage.setItem('courses', JSON.stringify(updatedCourses));
  };

  return (
    <div className="App">
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/add-course">Add Course</a></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<CourseList courses={courses} onDelete={handleCourseDeleted} />} />
        <Route path="/add-course" element={<AddCourse onCourseCreated={handleCourseCreated} />} />
        <Route path="/view-course/:id" element={<ViewCourse courses={courses} />} />
        <Route path="/edit-course/:id" element={<EditCourse courses={courses} onCourseUpdated={handleCourseUpdated} />} />
      </Routes>
    </div>
  );
}

export default App;
