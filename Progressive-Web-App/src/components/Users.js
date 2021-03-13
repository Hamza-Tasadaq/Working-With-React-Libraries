import React,{useEffect} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
const Users = () => {
    useEffect(() => {
        console.log("object")
    }, [])
    return (
        <div>
            <div>
                <ul>
                    <li> <Link to='/'>Home.</Link></li>
                    <li> <Link to='/About'>About.</Link></li>
                    <li> <Link to='/Users'>Users.</Link></li>
                </ul>
                <h1>This Is Users Page</h1>
            </div>
        </div>
    )
}

export default Users