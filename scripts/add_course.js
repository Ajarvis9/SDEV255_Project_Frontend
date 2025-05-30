addEventListener("DOMContentLoaded", function(){
    document.querySelector("#addbtn").addEventListener("click", addCourse)
})

async function addCourse(){
    const course = {
        courseName: document.querySelector("#courseName").value,
        subject: document.querySelector("#subject").value,
        credits: document.querySelector("#credits").value,
        description: document.querySelector("#description").value
    }

    const response = await fetch("http://localhost:3000/api/courses", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(course)
    })

    if(response.ok){
        const results = await response.json()
        alert("Added course with ID of" + results._id)

        document.querySelector("form").reset()
    }

    else{
       document.querySelector("error").innerHTML = "Cannot add course" 
    }
}