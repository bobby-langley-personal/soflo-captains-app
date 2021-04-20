import React,  {useState, useEffect, useContext} from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../App';

function Home() {
    //api url: https://captains-api.web.app
    const { user } = useContext(UserContext);
    console.log(user)
    return(
        <>
    
        <h1>Welcome, {user.displayName} </h1>
         
        
       <header> This is the home page</header>
            <Link to="/login" > Login </Link>
            <Link to="/signup" > sign up </Link>
            
        </>
    )
}

export default Home 