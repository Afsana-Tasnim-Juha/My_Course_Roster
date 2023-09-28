import { useEffect } from "react";
import { useState } from "react";
import SingleCourse from "../SingleCourse/SingleCourse";


const Courses = () => {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])


    return (
        <div className="md:w-3/4">
            <h1>Courses: {courses.length}</h1>
            {
                courses.map(singleCourse => <SingleCourse
                    key={singleCourse.id}
                    singleCourse={singleCourse}>

                </SingleCourse>)
            }

        </div>
    );
};

export default Courses;