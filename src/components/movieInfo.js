// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Button } from "react-bootstrap";

// /// RENDER RESULTS DA DUOC CHON
// const MovieInfo = (props) => {
//   return (
//     <div className="container">
//       <div className="row" onClick={props.closeMovieInfo} onChange={props.handleChange}>
//         <Button className="col-auto m-3">GO BACK</Button>
//       </div>
//       <div className="row">
//         {props.currentMovie.poster_path == null  ? (
//           <img
//             src={`https://aina.vn/wp-content/uploads/2021/08/default-image-620x600-1.jpg`}
//             alt="card image"
//             style={{ width: "250px", height: "360px" }}
//           />
          
//         ) : (
//           <img
//             src={`https://image.tmdb.org/t/p/w500${props.currentMovie.poster_path}`}
//             alt="card image"
//             style={{ width: '500px', height: "100%" }}
//           />
//         )}
//       </div>
//       <div className="col">
//         <div className="container mb-2">
//           <div className="d-flex p-2" style={{ fontWeight: "bold" }}>
//             {props.currentMovie.title}
//           </div>
//           <div className="d-flex p-2">
//             <p style={{ fontWeight: "bold", paddingRight: "0.5rem" }}>
//               Popularity:
//             </p>
//             {props.currentMovie.popularity}
//           </div>
//           <div className="d-flex p-2">
//             <p style={{ fontWeight: "bold", paddingRight: "0.5rem" }}>
//               Average Point:{" "}
//             </p>
//             {props.currentMovie.vote_average}
//           </div>

//           <div className="d-flex p-2">
//             <p style={{ fontWeight: "bold", paddingRight: "0.5rem" }}>
//               Release Date:{" "}
//             </p>
//             {props.currentMovie.release_date}
//           </div>
//           <div className="d-flex p-2">
//             <p style={{ fontWeight: "bold", paddingRight: "0.5rem" }}>
//               Overview:{" "}
//             </p>
//             {props.currentMovie.overview}
//           </div>
//         </div>
//         <div className='p-2  h1'>Recommend movie</div>
//       </div>
//       {/* <div className="container">
//         {
//         fetch(
//           `https://api.themoviedb.org/3/movie/${props.currentMovie.title}/recommendations?api_key=23bab7b92b53fc1a9085f082ab067e31&language=en-US&page=1`
//         )
//           .then((data) => data.json())
//           .then((data) => {
//             console.log(data)
//           })
//       }
//             </div>        
              
//              */}
//     </div>
//   );
// };

// export default MovieInfo;
