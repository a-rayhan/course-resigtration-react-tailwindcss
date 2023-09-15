import { useState } from "react";
import Card from "./Card";
import { useEffect } from "react";

const Cards = ({handleSelectBtn}) => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('course-data.json')
            .then(response => response.json())
            .then(data => setCourses(data))
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center">
            {
                courses.map((course) => (
                    <Card key={course.id} course={course} handleSelectBtn={handleSelectBtn} />
                ))
            }
        </div>
    );
};

export default Cards;