import React, { useContext } from "react";
import Movie from "./Movie";
import { myContext } from "./MovieContext";
import "./movieList.css";

const MovieList = () => {
  const [movies, setMovies] = useContext(myContext);

  return (
    <div className="table-data-list">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((data, id) => {
            return <Movie name={data.name} price={data.price} key={id} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MovieList;
