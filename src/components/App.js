import React from "react";
import { Component, Suspense } from "react";

import SearchArea from "./search";
import MovieList from "./movieList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Pagination from "./paginations";
import MovieInfo from "./movieInfo";

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

const Homemain = React.lazy(() => import("../pages/searchBar"));
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
    };
    this.apiKey = process.env.REACT_APP_API;
    this.urlKey = [process.env.REACT_APP_URLIMG,process.env.REACT_APP_URLIMG1,
      process.env.REACT_APP_URLIMG2,process.env.REACT_APP_URLIMG3,process.env.REACT_APP_URLIMG4,process.env.REACT_APP_URLIMG5,process.env.REACT_APP_URLIMG6];
  }

  handleSubmit = (e) => {

    e.preventDefault();
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
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.Search}&page=${pageNumber}`
    )
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        const oldList = [...data.results];
        localStorage.setItem("oldList", JSON.stringify(oldList));

        const totalPages = data.total_pages;
        localStorage.setItem("totalPages", totalPages);
        this.setState({ movies: [...data.results], currentPage: pageNumber });
      })
      .catch((error) => {
        console.log("There was an error!", error);
      });
  };

  // // getTopRated = (e) => {
  // //   console.log(e.target.value);

  // //   fetch(
  // //     `https://api.themoviedb.org/3/movie/top_rated?api_key=${this.apiKey}&language=en-US&page=1`
  // //   )
  // //     .then((data) => data.json())
  // //     .then((data) => {
  // //       const oldList = [...data.results];
  // //       localStorage.setItem("oldList", JSON.stringify(oldList));

  // //       console.log(data);
  // //       this.setState({
  // //         movies: [...data.results],
  // //         currentMovie: null,
  // //         totalPages: 1,
  // //       });
  // //     });
  // // };

  // // getPopular = (e) => {
  // //   fetch(
  // //     `https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&language=en-US`
  // //   )
  // //     .then((data) => data.json())

  // //     .then((data) => {
  // //       const oldList = [...data.results];
  // //       localStorage.setItem("oldList", JSON.stringify(oldList));

  // //       this.setState({
  // //         movies: [...data.results],
  // //         currentMovie: null,
  // //         totalPages: 1,
  // //       });
  // //       console.log(data);
  // //     });
  // // };

  // // getUpComing = (e) => {
  // //   fetch(
  // //     `https://api.themoviedb.org/3/movie/upcoming?api_key=${this.apiKey}&language=en-US&page=1`
  // //   )
  // //     .then((data) => data.json())
  // //     .then((data) => {
  // //       const oldList = [...data.results];
  // //       localStorage.setItem("oldList", JSON.stringify(oldList));

  // //       this.setState({
  // //         movies: [...data.results],
  // //         currentMovie: null,
  // //         totalPages: 1,
  // //       });
  // //     });
  // // };

  // // getNowPlaying = (e) => {
  // //   fetch(
  // //     `https://api.themoviedb.org/3/movie/now_playing?api_key=${this.apiKey}&language=en-US&page=1`
  // //   )
  // //     .then((data) => data.json())
  // //     .then((data) => {
  // //       const oldList = [...data.results];
  // //       localStorage.setItem("oldList", JSON.stringify(oldList));

  // //       // localStorage.setItem('totalPages', 1)

  // //       this.setState({
  // //         movies: [...data.results],
  // //         currentMovie: null,
  // //         totalPages: 1,
  // //       });
  // //       console.log(data);
  // //     });
  // // };

  // // handleNextList = (e) => {
  // //   this.setState({
  // //     firstPav: this.state.firstPav + 20,
  // //     currentPage: this.state.firstPav < 20 ? 21 : this.state.firstPav
  // //   })
  // // }
  // // handlePrevList = (e) => {
  // //   this.setState({
  // //     firstPav: this.state.firstPav - 20,
  // //     currentPage: this.state.firstPav -1
  // //   })
  // // }
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
    const numberPages = this.state.totalPages;
    const thisValue = this.state.Search;
  
    return (
      <Suspense fallback={<div>Loading ... </div>}>
        <Router>
          <div className="App">
          <Navbar />
            <Switch>
              
              <Route path="/" exact>
                  <ImageUrl urlKey={this.urlKey[1]}/>

                  <Homepage />
                  <MainPage 
                  urlKey={this.urlKey[0]}
                  isHide={true}
                  />
                {/* <img src={this.urlKey} /> */}
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



              <Route path="/search/:id">
                <ImageUrl except='searchid'/>

                <MovieDetails />
              </Route>



              {/* <Route path="/toprated">
                <Nav
                  getTopRated={this.getTopRated}
                  getPopular={this.getPopular}
                  getUpComing={this.getUpComing}
                  getNowPlaying={this.getNowPlaying}
                />
                {this.state.currentMovie == null ? (
                  <div>
                    <Nav_welcome />
                    <MovieList
                      viewMovieInfo={this.viewMovieInfo}
                      movies={this.state.movies}
                    />
                    
                  </div>
                ) : (
                  <div>
                    <MovieInfo
                      currentMovie={this.state.currentMovie}
                      closeMovieInfo={this.closeMovieInfo}
                    />
                    <MovieList
                      viewMovieInfo={this.viewMovieInfo}
                      movies={this.state.movies}
                      closeMovieInfo={this.closeMovieInfo}
                    />
                  </div>
                )}
              </Route> */}

              {/* <Route path="/nowplaying">
                <Nav
                  getPopular={this.getPopular}
                  getTopRated={this.getTopRated}
                  getUpComing={this.getUpComing}
                  getNowPlaying={this.getNowPlaying}
                />

                {this.state.currentMovie == null ? (
                  <div>
                    <Nav_welcome />
                    <MovieList
                      viewMovieInfo={this.viewMovieInfo}
                      movies={this.state.movies}
                    />
                  </div>
                ) : (
                  <div>
                    <MovieInfo
                      currentMovie={this.state.currentMovie}
                      closeMovieInfo={this.closeMovieInfo}
                    />
                    <MovieList
                      viewMovieInfo={this.viewMovieInfo}
                      movies={this.state.movies}
                      closeMovieInfo={this.closeMovieInfo}
                    />
                  </div>
                )}
              </Route> */}
              {/* <Route path="/popular">
                <Nav
                  getPopular={this.getPopular}
                  getTopRated={this.getTopRated}
                  getUpComing={this.getUpComing}
                  getNowPlaying={this.getNowPlaying}
                />
                {this.state.currentMovie == null ? (
                  <div>
                    <Nav_welcome />
                    <MovieList
                      viewMovieInfo={this.viewMovieInfo}
                      movies={this.state.movies}
                    />
                  </div>
                ) : (
                  <div>
                    <MovieInfo
                      currentMovie={this.state.currentMovie}
                      closeMovieInfo={this.closeMovieInfo}
                    />
                    <MovieList
                      viewMovieInfo={this.viewMovieInfo}
                      movies={this.state.movies}
                      closeMovieInfo={this.closeMovieInfo}
                    />
                  </div>
                )}
              </Route> */}

              {/* <Route path="/upcoming">
                <Nav
                  getPopular={this.getPopular}
                  getTopRated={this.getTopRated}
                  getUpComing={this.getUpComing}
                  getNowPlaying={this.getNowPlaying}
                />
                {this.state.currentMovie == null ? (
                  <div>
                    <Nav_welcome />
                    <MovieList
                      viewMovieInfo={this.viewMovieInfo}
                      movies={this.state.movies}
                    />
                  </div>
                ) : (
                  <div>
                    <MovieInfo
                      currentMovie={this.state.currentMovie}
                      closeMovieInfo={this.closeMovieInfo}
                    />
                    <MovieList
                      viewMovieInfo={this.viewMovieInfo}
                      movies={this.state.movies}
                      closeMovieInfo={this.closeMovieInfo}
                    />
                  </div>
                )}
              </Route> */}

              <Route path="/search" exact>
                <ImageUrl urlKey={this.urlKey[0]}/>
                <Homepage urlKey={this.urlKey}/>

                <SearchArea
                  handleSubmit={this.handleSubmit}
                  handleChange={this.handleChange}
                />

                {this.state.currentMovie == null ? (
                  <div>
                    <MovieList
                      viewMovieInfo={this.viewMovieInfo}
                      movies={this.state.movies}
                    />
                    {numberPages > 1 ? (
                      <Pagination
                        limit={this.state.limit}
                        firstPav={this.state.firstPav}
                        pages={numberPages}
                        nextPage={this.nextPage}
                        currentPage={this.state.currentPage}
                      />
                    ) : (
                      ''
                    )}
                  </div>
                ) : (
                  <div>
                    <MovieInfo
                      currentMovie={this.state.currentMovie}
                      closeMovieInfo={this.closeMovieInfo}
                      viewMovieInfo={this.viewMovieInfo}
                    />
                    <MovieList
                      viewMovieInfo={this.viewMovieInfo}
                      movies={this.state.movies}
                      closeMovieInfo={this.closeMovieInfo}
                    />
                  </div>
                )}
              </Route>
              

              {/* <Route path='/movie' exact>
              <SearchArea handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
              <MovieList movies={this.state.movies}/>
        
            </Route> */}
              {/* <MovieList movies={this.state.movies}/> */}
            </Switch>

            <MainPage urlKey={this.urlKey[0]}/>

          <Footer/>

          </div>
        </Router>
      </Suspense>
    );
  }
}

export default App;
