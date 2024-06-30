import React from "react"
import {useState} from 'react'
import {Link, Route, Routes} from 'react-router-dom'
import '../App.css';
import ComingSoon from './ComingSoon'
import MoviesInTheatres from './MoviesInTheatres'
import TopRatedIndian from './TopRatedIndian'
import TopRatedMovies from './TopRatedMovies'
import Favourites from './Favourites'

export default function Home({setShowMovieDetail, showMovieDetail}){
    const [currentCategory, setCurrentCategory] = useState('moviesintheatres')
    const [filterString, setFilterString] = useState('')
    const [favouritesKeys, setFavouritesKeys] = useState([])
    function handleInputChange(event){
        setFilterString(event.target.value)
    }
    return (
        <>
            <nav className="navbar">
                <ul className="navbar-list">
                    <li className="navbar-list-item">
                        <Link onClick={() => {setCurrentCategory('moviesintheatres')}} className="navbar-list-item-Link" to="/moviesintheatres">Movies In Theatres</Link>
                    </li>
                    <li className="navbar-list-item">
                        <Link onClick={() => {setCurrentCategory('comingsoon')}} className="navbar-list-item-Link" to="/comingsoon">Coming Soon</Link>
                    </li>
                    <li className="navbar-list-item">
                        <Link onClick={() => {setCurrentCategory('topratedindian')}} className="navbar-list-item-Link" to="/topratedindian">Top Rated Indian</Link>
                    </li>
                    <li className="navbar-list-item">
                        <Link onClick={() => {setCurrentCategory('topratedmovies')}} className="navbar-list-item-Link" to="/topratedmovies">Top Rated Movies</Link>
                    </li>
                    <li className="navbar-list-item">
                        <Link onClick={() => {setCurrentCategory('favourites')}} className="navbar-list-item-Link" to="/favourites">Favourites</Link>
                    </li>
                </ul>
                <input className="movie-entry" type="text" placeholder="Search Movie" onChange={handleInputChange}/>
            </nav>
            <Routes>
                <Route path="/moviesintheatres" element={<MoviesInTheatres showMovieDetail={showMovieDetail} setShowMovieDetail={setShowMovieDetail} setFavouritesKeys={setFavouritesKeys} filterString={filterString}/>}/>
                <Route path="/comingsoon" element={<ComingSoon showMovieDetail={showMovieDetail} setShowMovieDetail={setShowMovieDetail} setFavouritesKeys={setFavouritesKeys} filterString={filterString}/>}/>
                <Route path="/topratedindian" element={<TopRatedIndian showMovieDetail={showMovieDetail} setShowMovieDetail={setShowMovieDetail} setFavouritesKeys={setFavouritesKeys} filterString={filterString}/>}/>
                <Route path="/topratedmovies" element={<TopRatedMovies showMovieDetail={showMovieDetail} setShowMovieDetail={setShowMovieDetail} setFavouritesKeys={setFavouritesKeys} filterString={filterString}/>}/>
                <Route path="/favourites" element={<Favourites favouritesKeys={favouritesKeys} setFavouritesKeys={setFavouritesKeys} filterString={filterString}/>}/>
            </Routes>
        </>
    )
}