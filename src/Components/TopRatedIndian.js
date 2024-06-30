import React from "react"
import '../App.css';
import dataMain from './data.json'
import Movie from "./Movie";

export default function TopRatedIndian({filterString, setFavouritesKeys, setShowMovieDetail, showMovieDetail}){
    const data = dataMain['top-rated-india']
    if(filterString === ''){
        return (
            <>
                <div className="gridContainer">
                    {data.map(item => {
                        return (
                            <Movie
                            showMovieDetail={showMovieDetail}
                            setShowMovieDetail={setShowMovieDetail}
                            key={item.id}
                            id={item.id}
                            src={process.env.PUBLIC_URL + `./img/${item.poster}`}
                            title={item.title}
                            setFavouritesKeys={setFavouritesKeys}
                        />
                        )
                    })}
                </div>
            </>
        )
    }
    else{
        return (
            <>
                <div className="gridContainer">
                    {data.filter(item => {if(item.title.toLowerCase().includes(filterString.toLowerCase())){return true}}).map(item => {
                        return (
                            <Movie
                                showMovieDetail={showMovieDetail}
                                setShowMovieDetail={setShowMovieDetail}
                                key={item.id} 
                                id={item.id}
                                src={process.env.PUBLIC_URL + `./img/${item.poster}`}
                                title={item.title}
                                setFavouritesKeys={setFavouritesKeys}
                            />
                        )
                    })}
                </div>
            </>
        )
    }
    
}