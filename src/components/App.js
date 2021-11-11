import React from "react";
import { Component, Suspense } from "react";

// import SearchArea from "./search";
import MovieList from "./movieList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Pagination from "./paginations";

import Navbar from "../pages/navbar";
import "../App.css";
import TopTrendingList from "../pages/tredingList";
import TopRated from "../pages/topRated";
import PopularList from "../pages/popularList";
import UpComingList from "../pages/upComingList";
import MovieDetails from "../pages/movieDetails";
import Homepage from "../pages/searchBar";
import ImageUrl from "./imageUrl";
import NowPlayingList from "../pages/nowplaying";
import Footer from "../pages/footer";
import MainPage from "../pages/mainPage";
class App extends Component {
  componentDidMount() {
    const M = window.M;
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".parallax");
      M.Parallax.init(elems, {});
    });
  }

  constructor() {
    super();
    this.state = {
      movies: [],
      Search: "",
      currentPage: 1,
      totalResults: 0,
      currentMovie: null,
      totalPages: 1,
      firstPav: 1,
      limit: 20,
      isShow: false
    };
    this.apiKey = process.env.REACT_APP_API;
    this.urlKey = [process.env.REACT_APP_URLIMG,process.env.REACT_APP_URLIMG1,
      process.env.REACT_APP_URLIMG2,process.env.REACT_APP_URLIMG3,process.env.REACT_APP_URLIMG4,process.env.REACT_APP_URLIMG5,process.env.REACT_APP_URLIMG6,process.env.REACT_APP_URLIMG7];
  }

  handleSubmit = (e) => {

    e.preventDefault();
    // document.body.scrollTop = 140;
     document.documentElement.scrollTop = 900;
    
    console.log(this.state.Search)
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.Search}`
    )
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        const oldList = [...data.results];
        localStorage.setItem("oldList", JSON.stringify(oldList));

        const totalPages = data.total_pages;
        localStorage.setItem("totalPages", totalPages);

        this.setState({
          movies: [...data.results],
          totalResults: data.total_results,
          totalPages: data.total_pages,
          currentPage: 1,
        });
      })
      .catch((error) => {
        console.log("There was an error!", JSON.stringify(error));
      });
  };

  handleChange = (e) => {
    this.setState({ Search: e.target.value });
  };

  viewMovieInfo = (id) => {
    const oldList = this.state.movies;
    localStorage.setItem("oldList", JSON.stringify(oldList));

    const filterMovie = this.state.movies.filter((movie) => movie.id == id);
    const newCurrentMovie = filterMovie.length > 0 ? filterMovie[0] : null;
    this.setState({ currentMovie: newCurrentMovie });

    // get recommend list
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${this.apiKey}&language=en-US&page=1`
    )
      .then((data) => data.json())
      .then((data) => {
        this.setState({
          movies: [...data.results].slice(0, 20),
          totalResults: 0,
        });
        console.log(data.total_pages);
      })
      .catch((error) => {
        console.log("There was an error!", JSON.stringify(error));
      });
  };
  closeMovieInfo = () => {
    this.setState({
      movies: JSON.parse(localStorage.getItem("oldList")),
      currentMovie: null,
      // totalPages: localStorage.getItem('totalPages'),
    });
  };

  nextPage = (pageNumber) => {
    document.documentElement.scrollTop = 900;

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.Search}&page=${pageNumber}`
    )
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        const totalPages = data.total_pages;
        this.setState({ movies: [...data.results], currentPage: pageNumber });
      })
      .catch((error) => {
        console.log("There was an error!", error);
      });
  };

  toggleShow = () => {
    this.setState({isShow: !this.state.isShow})
  }
 
  imageURL() {
    console.log("ok");
    return (
      <div className="parallax-container" style={{ height: "70vh" }}>
        <div className="parallax">
          <img
            src={this.urlKey}
            style={{ width: "1650px", height: "500" }}
            alt=""
          />
        </div>
      </div>
    );
  }
  

  render() {
    
  
    return (
      <Suspense fallback={<div>Loading ... </div>}>
        <Router>
          <div className="App">
          <Navbar />
            <Switch>
              
              <Route path="/" exact>
                  <ImageUrl urlKey={this.urlKey[1]}/>

                  {/* <Homepage /> */}
                  <Homepage
                handleSubmit={this.handleSubmit} handleChange={this.handleChange} toggleShow={this.toggleShow} isShow={this.state.isShow} />
                {/* <SearchArea  handleSubmit={this.handleSubmit} handleChange={this.handleChange} /> */}
                {this.state.currentMovie == null ? (
                  <div>
                    <MovieList
                      viewMovieInfo={this.viewMovieInfo}
                      movies={this.state.movies}
                    />
                    {this.state.totalPages > 1 ? (
                      <Pagination
                        limit={this.state.limit}
                        firstPav={this.state.firstPav}
                        pages={this.state.totalPages}
                        nextPage={this.nextPage}
                        currentPage={this.state.currentPage}
                      />
                    ) : (
                      ''
                    )}
                  </div>
                ) : (
                  <div>
                    <MovieList
                      viewMovieInfo={this.viewMovieInfo}
                      movies={this.state.movies}
                    />
                  </div>
                )}
                 
              </Route>

              <Route path="/trending" exact>
              <ImageUrl urlKey={this.urlKey[2]} title={'#trending'} color={'orange-text text-accent-4'} />

                <TopTrendingList />
              </Route>
              <Route path="/trending/:id">
                <MovieDetails />
              </Route>

              <Route path="/toprated" exact>
              
              <ImageUrl urlKey={this.urlKey[5]} title={'#toprated'} color={'yellow-text text-darken-1'} />
                <TopRated />
              </Route>
              <Route path="/toprated/:id">
                <MovieDetails />
              </Route>
              <Route path="/popular" exact>

              <ImageUrl urlKey={this.urlKey[3]} title={'#popular'} color={'red-text text-accent-3'} />

                <PopularList />
              </Route>
              <Route path="/popular/:id">
                <MovieDetails />
              </Route>
              <Route path="/upcoming" exact>
              <ImageUrl urlKey={this.urlKey[4]} title={'#upcoming'} color={'white-text text-accent-3'} />

                <UpComingList />
              </Route>
              <Route path="/upcoming/:id">
                <MovieDetails />
              </Route>

              <Route path="/nowplaying" exact>
              <ImageUrl urlKey={this.urlKey[6]} title={'#nowplaying'} color={'green-text text-accent-3'} />

                <NowPlayingList />
              </Route>
              <Route path="/nowplaying/:id">
                <MovieDetails />
              </Route>



              <Route path="/:id">
                <ImageUrl except='searchid'/>

                <MovieDetails />
              </Route>




            </Switch>

            <MainPage urlKey={this.urlKey}/>

          <Footer/>

          </div>
        </Router>
      </Suspense>
    );
  }
}

export default App;
