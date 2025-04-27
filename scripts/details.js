addEventListener("DOMContentLoaded", async function(){
    const urlparam = new URLSearchParams(window.location.search)
    const courseID = urlparam.get('id')
    console.log(courseID)

    const response = await fetch("http://localhost:3000/api/courses/" + courseID)
    const course = await response.json()
    console.log(course)

    let heading = ""
    heading += `Welcome to the ${course.courseName} Course Page`
    document.querySelector("h1").innerHTML = heading

    let html = ""
    html+= `
        <h2>Course Name - ${course.courseName} </h2>
        <h3>Subject Area - ${course.subject} </h3>
        <p>Number of Credits - ${course.credits} </p>
        <p>Description - ${course.description} </p> 
        `
    
    document.querySelector("div").innerHTML = html
})