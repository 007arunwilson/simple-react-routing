import React, { Component } from 'react';
import { Route, Link, NavLink, Switch } from 'react-router-dom';

import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="answer-section" style={{ 'borderTop': '1px solid #ccc' }} >

          <div className="page-links">
            <ul className="plinks-ul" >
              <li>
                <Link to="/" >Home</Link>
              </li>
              <li>
                <NavLink
                  to="/users"
                  activeClassName="link-active"
                > Users </NavLink>
              </li>
              <li>
                <NavLink
                  to="/courses"
                  activeClassName="link-active"
                >Courses</NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  activeStyle={{ borderBottom: '2px solid #d6d6d6', background: '#fff' }}
                >About</NavLink>
              </li>
            </ul>
          </div>

          <div className="page-contents" >
            <Switch>
            <Route path="/users" component={Users} />
            <Route path="/courses" component={Courses} />
            <Route path="/" exact render={() => {

              return (
                <ol style={{ textAlign: 'left' }}>
                  <li>Add Routes to load "Users" and "Courses" on different pages (by entering a URL, without Links)</li>
                  <li>Add a simple navigation with two links => One leading to "Users", one leading to "Courses"</li>
                  <li>Make the courses in "Courses" clickable by adding a link and load the "Course" component in the place of "Courses" (without passing any data for now)</li>
                  <li>Pass the course ID to the "Course" page and output it there</li>
                  <li>Pass the course title to the "Course" page - pass it as a param or score bonus points by passing it as query params (you need to manually parse them though!)</li>
                  <li>Load the "Course" component as a nested component of "Courses"</li>
                  <li>Add a 404 error page and render it for any unknown routes</li>
                  <li>Redirect requests to /all-courses to /courses (=> Your "Courses" page)</li>
                </ol>
              );


            }} />
            <Route path="/about" exact render={() => {

              return (
                <p style={{
                  padding: '4px 20%',
                  fontSize: '12px',
                  color: '#676565'
                }}>
                  <h3>What is Lorem Ipsum?</h3>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
              );


            }} />

            <Route render={() => {

              return (
                <p style={{
                  padding: '4px 20%',
                  fontSize: '18px',
                  color: 'rgb(183, 117, 117)'
                }}>
                  <h3>Opps! We Lost somewhere together .....</h3>
                  <span style={{color:'#828282',fontSize:'14px'}} >No Problem, I'm with you. Just ttry back button. :)</span>
                </p>
              )

            }} />
            </Switch>
          </div>

        </section>
      </div>
    );
  }
}

export default App;
