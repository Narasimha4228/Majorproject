// Retrieve existing courses from localStorage
const getCourses = () => {
    const courses = localStorage.getItem("courses");
    return courses ? JSON.parse(courses) : [];
  };
  
  // Save courses to localStorage
  const saveCourses = (courses) => {
    localStorage.setItem("courses", JSON.stringify(courses));
  };
  
  // Preload some courses if none exist
  const preloadCourses = () => {
    const existingCourses = getCourses();
    if (existingCourses.length === 0) {
      const sampleCourses = [
        {
          title: "JavaScript for Beginners",
          description: "Learn JavaScript from scratch with hands-on projects.",
          price: 0,
        },
        {
          title: "HTML & CSS Mastery",
          description: "Build beautiful and responsive websites.",
          price: 0,
        },
        {
          title: "React Basics",
          description: "Understand the fundamentals of React and build interactive UIs.",
          price: 1,
        },
        {
          title: "Python Programming",
          description: "Master Python with real-world examples and exercises.",
          price: 1,
        },
      ];
      saveCourses(sampleCourses);
    }
  };
  
  // Initialize the application
  document.addEventListener("DOMContentLoaded", () => {
    preloadCourses();
  
    // Add functionality to render courses (used in the homepage and instructor page)
    const courseList = document.getElementById("course-list");
    if (courseList) {
      const courses = getCourses();
      courseList.innerHTML = "";
      courses.forEach((course) => {
        const courseDiv = document.createElement("div");
        courseDiv.className = "course";
        courseDiv.innerHTML = `
          <h3>${course.title}</h3>
          <p>${course.description}</p>
          <p>Price: $${course.price}</p>
          <a href="course.html?title=${course.title}">View Course</a>
        `;
        courseList.appendChild(courseDiv);
      });
    }
  });
  