import './App.css';
import './B.scss';
import "bootstrap/dist/css/bootstrap.min.css"
import Main from './Main'
import SideBar from './SideBar'
import React from 'react'


function App() {

  const [movie, setMovie] = React.useState("")
  const [movieInfo, setMovieInfo] = React.useState({
    movieYear: '',
    moviePoster: '',
    movieTitle: ''
  });

  const [movieList, setMovieList] = React.useState([])

  const handleChange = (event) =>{
    setMovie(event.target.value)
  }
  

  const getData = (e) => {
    e.preventDefault()
    const apikey = "571cd602";
    const url = "https://www.omdbapi.com/?t=";
    const movieRequested = movie.replace(/ /g, "+");

    const req = url + movieRequested + "&apikey=" + apikey;
    
    fetch(req)
      .then((res) => res.json())
      .then((data) => {

        setMovieInfo({
          movieYear: data["Year"],
          moviePoster: data["Poster"],
          movieTitle: data["Title"]
        })

      setMovie("");
    })
      .catch((error) => {
      console.error("Error fetching movie data:", error);
  });


  }

  return (
      <div className="row">
          <SideBar />
          <Main 
          getMovie={handleChange}
          handleClick = {getData}
          value = {movie}
          movieInformation ={movieInfo}
          />
          
      </div>
  );
}

export default App;





