import React, { createContext, useState } from 'react';

export const myContext = createContext();

export const MovieContext = (props) => {

    const [movies, setMovies] = useState([
        {
          name: "Harry Potter",
          price: "$10",
          id: 23124,
        },
        {
          name: "Game of Thrones",
          price: "$10",
          id: 2566124,
        },
        {
          name: "Inception",
          price: "$10",
          id: 23524,
        },
      ]);

  return (
    <div>
        <myContext.Provider value={[movies, setMovies]}>
            {props.children}
        </myContext.Provider>
    </div>
  )
}