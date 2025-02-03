import React, { useState } from "react";
import Login from "./Login";

export default function Index() {
    const [click,setClick] = useState(false);

    const user = {
        username : "Kiran",
        balance : 25000
    }
    
    const handleClick = () => {
        setClick(true);
    }

    if(click) {
        return(
            <Login user = {user} />
        )
    }

    return(
        <>
        <h1>Index Compoenent</h1>
        <button onClick={handleClick}>Login</button>
        </>
    )
}