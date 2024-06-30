import React from "react"


export default function MovieDetails({setShowMovieDetail, showMovieDetail}){
    
    function handleClick() {
        setShowMovieDetail(!showMovieDetail);
    }
    return (
        <>
            <button onClick={handleClick}>Back</button>
        </>
    )
}