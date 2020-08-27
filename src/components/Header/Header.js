import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <h1>Online IT Education</h1>
            <nav>
                <a href="course">Courses</a>
                <a href="select">Select Courses</a> 
                <a href="enroll">Enroll</a>
            </nav>
        </div>
    );
};

export default Header;