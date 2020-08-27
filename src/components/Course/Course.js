import React, { useState } from 'react';
import './Course.css';
import SelectCourse from '../SelectCourses/SelectCourse';
import Enroll from '../Enroll/Enroll';

const Course = () => {
    const [Courses, setCourses]= useState([{
        "name":"Microsoft Power BI Training",
        "certification":"Programming Hero",
        "price": 399
    },
    {
        "name":"DevOps Certification Training ",
        "certification":"Programming Hero",
        "price": 399
    
    },
    {
        "name":"Cloud Architect Masters Program",
        "certification":"Programming Hero",
        "price": 399
    },
    {
        "name":"PMP® Certification Exam Training",
        "certification":"Programming Hero",
        "price": 399
    },
    {
        "name":"Python Certification Training for Data Science",
        "certification":"Programming Hero",
        "price": 399
    },
    {
        "name":"Data Scientist Masters Program",
        "certification":"Programming Hero",
        "price": 399
    },
    {
        "name":"Java, J2EE & SOA Certification Training",
        "certification":"Programming Hero",
        "price": 399
    },
    {
        "name":"Robotic Process Automation Training using UiPath",
        "certification":"Programming Hero",
        "price": 399
    },
    {
        "name":"Microsoft Certified Expert: Azure Solutions Architect (AZ-300)",
        "certification":"Programming Hero",
        "price": 399
    },
    {
        "name":"Certified Kubernetes Administrator Exam Training",
        "certification":"Programming Hero",
        "price": 399
    },
    {
        "name":"Salesforce Certification Training: Admin 201 and Ap",
        "certification":"Programming Hero",
        "price": 399
    },
    {
        "name":"Microservices Architecture Training",
        "certification":"Programming Hero",
        "price": 399
    }]);

    const [enroll, setEnroll] = useState([]);

    const handleAddcourse =(props) =>{
    const newEnroll = [...enroll, props];
    setEnroll(newEnroll);

    }
    
    return (
        <div className="product-container">
           <div className="course-container">
            {
             Courses.map(course =><SelectCourse 
             handleAddcourse ={handleAddcourse}
             selectCourse = {course}> 
             </SelectCourse>)
            }
            
           </div>
            <div className="enroll-container">
                <Enroll enroll={enroll}></Enroll>
            </div>
        </div>
    );
};

export default Course;