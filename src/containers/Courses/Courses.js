import React, { Component } from 'react';
import Course from '../Course/Course';
import './Courses.css';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ],
    }

    courseSelectHandler(course_id) {

        console.log('A Course is selected : ', course_id);
        this.props.history.push(this.props.match.url+'/'+course_id);
    }

    render() {

        let choosedCourseId = this.state.choosedCourseId;

        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {
                        this.state.courses.map(course => {
                            return <article onClick={() => this.courseSelectHandler(course.id)} className="Course" key={course.id}>{course.title}</article>;
                        })
                    }
                </section>
            </div>
        );
    }
}

export default Courses;