import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
const About = () => {
    return (
        <div>
            <ul>
                <li> <Link to='/'>Home.</Link></li>
                <li> <Link to='/About'>About.</Link></li>
                <li> <Link to='/Users'>Users.</Link></li>
            </ul>
            <h1>This is About Page</h1>
        </div>
    )
}

export default About
