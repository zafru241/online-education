import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartArrowDown} from '@fortawesome/free-solid-svg-icons'
import './SelectCourse.css';

const SelectCourse = (props) => {
    const {name, certification, price}=props.selectCourse
    return (
        <div className="selectCourse">
            <h3 className="course-name">{name}</h3>
            <br/>
            <p>Certification: {certification}</p>
            <p>Price: ${price}</p>
            <br/>
            <button className="mainBtn" onClick={() =>props.handleAddcourse(props.selectCourse)}
            ><FontAwesomeIcon icon={faCartArrowDown} />Enroll Now</button>
        </div>
    );
};

export default SelectCourse;