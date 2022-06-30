import React, { useContext } from 'react'
import { myContext } from './MovieContext'

const Nav = () => {

    const [movies, setMovies] = useContext(myContext);

  return (
    <nav>
        <h3>Pankaj Yadav</h3>
        <p>Number of Movies: {movies.length}</p>
    </nav>
  )
}

export default Nav