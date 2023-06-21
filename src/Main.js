
function Main(props){

    return (
            <div className="col-md-9 main--box">

                {!props.movieInformation.movieTitle && 
                <div className="main--infotext">
                    <div className="main--title">
                        <h4>How do I use FilmCo?</h4>
                    </div>

                    <div className="main--exp">
                        <p>Look for a movie name</p>
                        <p>Click "Add the movie"</p>
                        <p>Once you've added 3 movies, click "Generate"</p>
                        <p>FilmCo's algorithm will generate 3 recomendations based on the 3 movies you inputted</p>
                    </div>
                </div>
                }

                {props.movieInformation.movieTitle && 
                <div className="main--movieInfo">
                    <div className="main--moviePoster">
                        <img src={props.movieInformation.moviePoster} />
                    </div>

                    <div className="main--side">
                        <div className="main--infoText">
                            <p><b>Movie Title:</b> <em>{props.movieInformation.movieTitle}</em></p>
                            <p><b>Year of release:</b> <em>{props.movieInformation.movieYear}</em></p>
                            <p><b>Runtime:</b> <em>{props.movieInformation.movieRuntime}</em></p>
                            <p><b>Directed by:</b> <em>{props.movieInformation.movieDirector}</em></p>
                        </div>
                        <button className="main--button" onClick={props.handleAdd}>Add</button>
                    </div>
                </div>
                }

                <form className="main--form">
                    <input onChange={props.getMovie} className="main--input" type="search" placeholder="Search for a movie..." />
                    <button onClick={props.handleGoClick} className="main--submit">GO!</button>
                </form>


            </div>
    )
}



export default Main