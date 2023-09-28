import { useEffect } from "react";
import { useState } from "react";
import SingleCourse from "../SingleCourse/SingleCourse";



const Courses = ({ handleSelect }) => {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])


    return (
        <div className="md:w-[1200px]">
            {/* <h1>Courses: {courses.length}</h1>*/}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
                {
                    courses.map(singleCourse => <SingleCourse
                        key={singleCourse.id}
                        singleCourse={singleCourse}
                        handleSelect={handleSelect}>


                    </SingleCourse>

                    )
                }

            </div>


        </div>
    );
};

export default Courses;