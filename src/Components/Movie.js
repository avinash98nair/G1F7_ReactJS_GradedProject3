import React from "react"
import {useState} from 'react'
import '../App.css';

export default function Movie({id, src, title, setFavouritesKeys, setShowMovieDetail, showMovieDetail}){
    const [addToFavourites, setAddToFavourites] = useState(false)
    function handleButtonClick(id){
        setAddToFavourites(!addToFavourites)
        setFavouritesKeys(favouritesKeys => {
            if(!favouritesKeys.includes(id)){
                return [...favouritesKeys, id]
            }
            else{
                return favouritesKeys
            }
        })
    }
    function handleClick() {
        setShowMovieDetail(!showMovieDetail);
    }
    return (
        <>
            <div className="gridCell" onClick={handleClick}>
                <img className="gridCell-image" src={src}/>
                <h3 className="gridCell-movieName">{title}</h3>
                <button className="gridCell-button" onClick={() => {handleButtonClick(id)}}>{addToFavourites ? `Added To Favourites` : `Add To Favourites`}</button>
            </div>
        </>
    )
}