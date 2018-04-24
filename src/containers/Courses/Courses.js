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
        choosedCourseId: null,
    }

    courseSelectHandler(course_id) {

        console.log('A Course is selected : ', course_id);
        this.setState({ choosedCourseId: course_id });

    }

    render() {

        let choosedCourseId = this.state.choosedCourseId;

        let courses_section_jsx = (<section className="Courses">
            {
                this.state.courses.map(course => {
                    return <article onClick={() => this.courseSelectHandler(course.id)} className="Course" key={course.id}>{course.title}</article>;
                })
            }
        </section>)

        if (choosedCourseId) {

            let course_data = {};
            let courses = {...this.state.courses}

            const course_keys = Object.keys(courses);

            course_keys.map(_i_key=>{
                if(courses[course_keys[_i_key]]['id'] == choosedCourseId) course_data = {...courses[course_keys[_i_key]]}
            })

            courses_section_jsx = <Course back_handler={()=>this.setState({choosedCourseId:null})} course_data={course_data} />

        }

        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                {courses_section_jsx}
            </div>
        );
    }
}

export default Courses;