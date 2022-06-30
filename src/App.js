import React from "react";
import AddMovie from "./AddMovie";
import "./App.css";
import { MovieContext } from "./MovieContext";
import MovieList from "./MovieList";
import Nav from "./Nav";

const App = () => {
  return (
    <MovieContext>
      <div className="App">
        <Nav />
        <AddMovie />
        <MovieList />
      </div>
    </MovieContext>
  );
};

export default App;
