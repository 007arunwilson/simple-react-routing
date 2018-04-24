import React, { Component } from 'react';

class Course extends Component {
    render () {
        return (
            <div style={{flex:1}} >
                <h1>{this.props.course_data.title}</h1>
                <p>You selected the Course with ID: {this.props.course_data.id}</p>
            </div>
        );
    }
}

export default Course;