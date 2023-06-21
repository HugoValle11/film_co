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
    movieTitle: '',
    movieRuntime: '',
    movieDirector: ''
  });

  const [movieList, setMovieList] = React.useState([])


  const handleAddClick = () => {
    console.log("done");

  }








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
      if (data["Response"] === "False") {
        // Movie not found, display error message
        alert("Movie not found: " + data["Error"]);
      } else {
        // Movie found, update the movie info
        setMovieInfo({
          movieYear: data["Year"],
          moviePoster: data["Poster"],
          movieTitle: data["Title"],
          movieRuntime: data["Runtime"],
          movieDirector: data["Director"],
        });
      }
  
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
          handleGoClick = {getData}
          value = {movie}
          movieInformation ={movieInfo}
          handleAdd = {handleAddClick}
          />
          
      </div>
  );
}

export default App;

