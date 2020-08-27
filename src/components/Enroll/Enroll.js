import React from 'react';
import './Enroll.css';

const Enroll = (props) => {
const enroll = props.enroll
const total = enroll.reduce((total, course) => total+course.price , 0 );

    return (
        <div className="enroll-container">
            <h3>Enrollment</h3>
            <h4>Course Ordered: {enroll.length} </h4>
            <h4>Order Total: ${total} </h4>
        </div>
    );
};

export default Enroll;