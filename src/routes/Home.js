import React, { Component } from "react";
import axios from "axios";
import Movie from "../components/Movie";
import './Home.css'

export default class Home extends Component {

  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts.mx/api/v2/list_movies.json?sort_by=rating"
    );
    console.log(movies);
    //console.log(res.data.data.movies[0].title);
    this.setState({ movies, isLoading: false });
    //console.log(this.state.movies);
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (     
        <div>
            {isLoading ? (
              <div className="loading">
                <p className="loader_text">Loading...</p>
              </div>
            ) : (
              <div className="movies">
                { movies.map((ele) => {
                  return <Movie key={ele.id} 
                          title={ele.title} 
                          id={ele.id} 
                          summary={ele.summary} 
                          poster={ele.medium_cover_image} 
                          year={ele.year} 
                          genres={ele.genres}
                />})}
              </div>
            )}
        </div>            
    );
  }
}
