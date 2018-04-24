import React, { Component } from 'react';
import { Route,Switch } from 'react-router-dom';
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
        this.props.history.push(this.props.match.url + '/' + course_id);
    }

    componentDidMount() {

        console.log('[Courses]-componentDidMount  props : ', this.props);

    }

    render() {

        let choosedCourseId = this.state.choosedCourseId;
        let courses_content_jsx = (
            this.state.courses.map(course => {
                return <article onClick={() => this.courseSelectHandler(course.id)} className="Course" key={course.id}>{course.title}</article>;
            })
        );


        return (


            <div>
                <h1>Amazing Udemy Courses</h1>

                <section className="Courses">

                    <Switch>
                    <Route path={this.props.match.url + '/:courseid'} render={(props_) => {

                        let choosedCourseId = props_.match.params.courseid;
                        let course_data = {};
                        let courses = { ...this.state.courses }

                        const course_keys = Object.keys(courses);

                        course_keys.map(_i_key => {
                            if (courses[course_keys[_i_key]]['id'] == choosedCourseId) course_data = { ...courses[course_keys[_i_key]] }
                        });

                        let course_jsx = <Course course_data={course_data} />;

                        console.log(Object.keys(course_data).length);

                        if(!Object.keys(course_data).length)
                        {
                            course_jsx = (<div style={{color:'rgb(183, 117, 117)',fontSize:'14px',flex:1}} >Oops! The Course your are looking for is not found! ...</div>);
                        }

                        return (course_jsx);

                    }} />
                    <Route render={() => courses_content_jsx} />
                    </Switch>
                </section>
            </div>
        );
    }
}

export default Courses;