import React, { Component } from 'react';

class Course extends Component {
    render () {
        return (
            <div>
                <h1>{this.props.course_data.title}</h1>
                <p>You selected the Course with ID: {this.props.course_data.id}</p>
                <a onClick={this.props.back_handler} href="javascript:;">&lt; &lt; Back to courses</a>
            </div>
        );
    }
}

export default Course;