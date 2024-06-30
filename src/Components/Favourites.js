import React from "react"
import '../App.css';
import dataMain from './data.json'

export default function Favourites({filterString, favouritesKeys, setFavouritesKeys}){
    const data1 = dataMain['movies-coming']
    const data2 = dataMain['top-rated-movies']
    const data3 = dataMain['top-rated-india']
    const data4 = dataMain['movies-in-theaters']
    const dataForFiltering = [...data1, ...data2, ...data3, ...data4]

    function handleButtonClick(id){
        setFavouritesKeys(favouritesKeys => {
            return favouritesKeys.filter(favouritesKey => {return favouritesKey !== id})
        })
    }
    if(filterString === ''){
        return (
            <>
                <div className="gridContainer">
                    {dataForFiltering.filter(item => {if(favouritesKeys.includes(item.id)){return true}}).map(item => {
                        return (
                            <div className="gridCell" key={item.id}>
                                <img className="gridCell-image" src={process.env.PUBLIC_URL + `./img/${item.poster}`}/>
                                <h3 className="gridCell-movieName">{item.title}</h3>
                                <button className="gridCell-button" onClick={() => {handleButtonClick(item.id)}}>Remove From Favourites</button>
                            </div>
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
                    {dataForFiltering.filter(item => {if(favouritesKeys.includes(item.id)){return true}}).filter(item => {if(item.title.toLowerCase().includes(filterString.toLowerCase())){return true}}).map(item => {
                        return (
                            <div className="gridCell" key={item.id}>
                                <img className="gridCell-image" src={process.env.PUBLIC_URL + `./img/${item.poster}`}/>
                                <h3 className="gridCell-movieName">{item.title}</h3>
                                <button className="gridCell-button" onClick={() => {handleButtonClick(item.id)}}>Remove From Favourites</button>
                            </div>
                        )
                    })}
                </div>
            </>
        )
    }
}