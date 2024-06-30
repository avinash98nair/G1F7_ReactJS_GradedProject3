import './App.css';
import {useState} from 'react'
import Home from './Components/Home'
import MovieDetails from './Components/MovieDetails'

function App() {
  const [showMovieDetail, setShowMovieDetail] = useState(false)
  console.log(showMovieDetail)
  return (
    <>
      {showMovieDetail ? <MovieDetails showMovieDetail={showMovieDetail} setShowMovieDetail={setShowMovieDetail}/> :<Home showMovieDetail={showMovieDetail} setShowMovieDetail={setShowMovieDetail}/> }
    </>
  )
}

export default App;



